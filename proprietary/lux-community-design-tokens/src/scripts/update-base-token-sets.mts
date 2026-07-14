import { execFileSync } from "node:child_process";
import path from "node:path";
import process from "node:process";
import { isDeepStrictEqual } from "node:util";
import {
  collectTokenFiles,
  getTokenSetNames,
  mergedPath,
  packageRootPath,
  readJsonFile,
  writeJsonFile,
  type JsonMap,
} from "./token-file-utils.mts";

const basePackageName = "@rijkshuisstijl-community/design-tokens";
const deprecatedSetPrefix = "overrides/deprecated changes/";

// semver or npm dist-tag such as "latest"
const validVersionRegex = /^[a-z0-9][a-z0-9.\-+]*$/i;

export interface RemovedTokenSet {
  name: string;
  tokens: JsonMap;
}

export interface BaseTokenSetDiff {
  addedSets: string[];
  deprecatedTokens: JsonMap;
  removedSets: RemovedTokenSet[];
}

export interface RemovedBaseTokenUsage {
  // the team set that still relies on a removed base token
  setName: string;
  // the token in that set (dot path)
  tokenPath: string;
  // the removed base token it relies on
  removedToken: string;
  // "override": the set defines a token at a path the base removed (the override no
  // longer lands on a base token). "reference": the set's value points at `{removed}`.
  via: "override" | "reference";
}

const isTokenLeaf = (value: unknown): value is JsonMap =>
  typeof value === "object" && value !== null && "$value" in value;

const isJsonMap = (value: unknown): value is JsonMap =>
  typeof value === "object" && value !== null && !Array.isArray(value);

// $description changes don't affect rendering, so they don't count as a change.
const stripDescription = ({ $description, ...rest }: JsonMap): JsonMap => rest;

// Collect the parts of the old token tree that no longer resolve to the same value in
// the new tree: changed leaves keep their old value, removed leaves and groups are
// kept entirely. Returns undefined when nothing changed.
const diffTokenTree = (
  oldNode: JsonMap,
  newNode: JsonMap,
): JsonMap | undefined => {
  const changes: JsonMap = {};

  for (const [key, oldValue] of Object.entries(oldNode)) {
    const newValue = newNode[key];

    if (isTokenLeaf(oldValue)) {
      if (
        !isTokenLeaf(newValue) ||
        !isDeepStrictEqual(
          stripDescription(oldValue),
          stripDescription(newValue),
        )
      ) {
        changes[key] = oldValue;
      }
    } else if (!isJsonMap(oldValue)) {
      if (!isDeepStrictEqual(oldValue, newValue)) {
        changes[key] = oldValue;
      }
    } else if (!isJsonMap(newValue) || isTokenLeaf(newValue)) {
      // the old group was removed or replaced by something else: keep it entirely
      changes[key] = oldValue;
    } else {
      const nestedChanges = diffTokenTree(oldValue, newValue);
      if (nestedChanges) {
        changes[key] = nestedChanges;
      }
    }
  }

  return Object.keys(changes).length > 0 ? changes : undefined;
};

const deepMerge = (target: JsonMap, source: JsonMap): void => {
  for (const [key, value] of Object.entries(source)) {
    const existing = target[key];
    if (
      isJsonMap(value) &&
      !isTokenLeaf(value) &&
      isJsonMap(existing) &&
      !isTokenLeaf(existing)
    ) {
      deepMerge(existing, value);
    } else {
      target[key] = value;
    }
  }
};

const getTokenSetOrder = (tokens: JsonMap): string[] => {
  const metadata = isJsonMap(tokens["$metadata"]) ? tokens["$metadata"] : {};
  return Array.isArray(metadata["tokenSetOrder"])
    ? (metadata["tokenSetOrder"] as string[])
    : [];
};

// Diff two versions of the RHC base package. The old values of changed tokens in
// surviving sets end up in one tree, walked in the old package's tokenSetOrder so a
// path collision between sets resolves the same way Tokens Studio would. Removed sets
// are kept whole (with their content) so they can be preserved as their own set and
// never overwrite the pinned old defaults of surviving sets.
export const diffBaseTokenSets = (
  oldBase: JsonMap,
  newBase: JsonMap,
): BaseTokenSetDiff => {
  const oldSetNames = getTokenSetNames(oldBase);
  const newSetNames = new Set(getTokenSetNames(newBase));

  const removedSets = oldSetNames
    .filter((name) => !newSetNames.has(name) && isJsonMap(oldBase[name]))
    .map((name) => ({
      name,
      tokens: structuredClone(oldBase[name]) as JsonMap,
    }));
  const addedSets = [...newSetNames].filter(
    (name) => !oldSetNames.includes(name),
  );

  const oldOrder = getTokenSetOrder(oldBase);
  const orderedOldSets = [
    ...oldOrder.filter((name) => oldSetNames.includes(name)),
    ...oldSetNames.filter((name) => !oldOrder.includes(name)),
  ];

  const deprecatedTokens: JsonMap = {};
  for (const setName of orderedOldSets) {
    // `overrides/*` sets are opt-in and often mutually exclusive (e.g. the
    // `primaire kleur/*` primary-colour choices all define the same tokens). Merging
    // their diffs would collapse those tokens to whichever set sorts last, pinning a
    // blended value no theme actually renders and overriding a theme's real choice.
    // Their old values are preserved per-set instead (kept whole when removed), so the
    // shared catch-all only carries foundation changes.
    if (setName.startsWith("overrides/")) {
      continue;
    }

    const oldSet = oldBase[setName];
    const newSet = newBase[setName];
    if (!isJsonMap(oldSet) || !isJsonMap(newSet)) {
      continue;
    }

    const setChanges = diffTokenTree(oldSet, newSet);
    if (setChanges) {
      deepMerge(deprecatedTokens, structuredClone(setChanges));
    }
  }

  return { addedSets, deprecatedTokens, removedSets };
};

// Insert added base sets into the app's tokenSetOrder at the position matching the
// package's own tokenSetOrder: directly after the nearest preceding package set that
// the app already lists.
export const insertIntoTokenSetOrder = (
  appOrder: string[],
  addedSets: string[],
  packageOrder: string[],
): string[] => {
  const order = [...appOrder];

  for (const setName of packageOrder.filter((name) =>
    addedSets.includes(name),
  )) {
    if (order.includes(setName)) {
      continue;
    }

    let insertAt = 0;
    for (let i = packageOrder.indexOf(setName) - 1; i >= 0; i--) {
      const neighborIndex = order.indexOf(packageOrder[i]);
      if (neighborIndex !== -1) {
        insertAt = neighborIndex + 1;
        break;
      }
    }
    order.splice(insertAt, 0, setName);
  }

  for (const setName of addedSets) {
    if (!order.includes(setName)) {
      order.push(setName);
    }
  }

  return order;
};

// The new deprecated set goes directly after the last anchor set, not at the end of
// the order. The build resolves set precedence by order (later sets win), so this
// placement matters:
//   * Every override set (base `overrides/*` and a team's own overrides) stays later,
//     so the old pinned base values never win from a team's own overrides.
//   * Older deprecated-changes pins also stay later — each run inserts the newest pin
//     at the same anchor, pushing older ones further back — so a team still pinned to
//     an older version keeps the older (higher-precedence) original values.
// The anchor is the last base *foundation* set (a base set that is not itself an
// `overrides/*` set). Anchoring on the whole base set list is wrong: the base ships
// high-precedence `overrides/*` sets (e.g. the code-only type scale) that sort after
// the override layer, so anchoring there would push the pin above the override sets
// and let stale base values clobber both team overrides and the base's own overrides.
export const insertDeprecatedSetIntoOrder = (
  appOrder: string[],
  deprecatedSetName: string,
  anchorSetNames: string[],
): string[] => {
  const order = appOrder.filter((entry) => entry !== deprecatedSetName);
  const anchorSets = new Set(anchorSetNames);

  let insertAt = 0;
  for (let i = order.length - 1; i >= 0; i--) {
    if (anchorSets.has(order[i])) {
      insertAt = i + 1;
      break;
    }
  }
  order.splice(insertAt, 0, deprecatedSetName);

  return order;
};

// Base foundation sets: the base sets that are not themselves `overrides/*` sets. The
// deprecated pin is anchored directly after these so it beats changed foundation values
// (colors, spacing, type) but loses to every override set.
const getFoundationSetNames = (base: JsonMap): string[] =>
  getTokenSetNames(base).filter((name) => !name.startsWith("overrides/"));

// Collect every leaf token path (dot-joined, set name excluded — the namespace
// references resolve in) across all of a base package's sets.
const collectBaseTokenPaths = (base: JsonMap): Set<string> => {
  const paths = new Set<string>();
  const walk = (node: JsonMap, prefix: string[]): void => {
    for (const [key, value] of Object.entries(node)) {
      if (isTokenLeaf(value)) {
        paths.add([...prefix, key].join("."));
      } else if (isJsonMap(value)) {
        walk(value, [...prefix, key]);
      }
    }
  };
  for (const setName of getTokenSetNames(base)) {
    const set = base[setName];
    if (isJsonMap(set)) {
      walk(set, []);
    }
  }
  return paths;
};

// The token paths a token references, e.g. `{rhc.space.100}` in "{rhc.space.100} * 1.5".
const extractReferences = (value: unknown): string[] =>
  typeof value === "string"
    ? [...value.matchAll(/\{([^}]+)\}/g)].map((match) => match[1].trim())
    : [];

// Find team-owned override sets that still rely on base tokens this update removed —
// either by overriding a token at a path the base dropped (so the override no longer
// lands on anything) or by referencing a removed base token. A deprecated pin may mask
// these for now, but the team must migrate before dropping the pinned set.
export const findRemovedBaseTokenUsage = (
  tokens: JsonMap,
  removedTokenPaths: Set<string>,
  baseSetNames: string[],
): RemovedBaseTokenUsage[] => {
  if (removedTokenPaths.size === 0) {
    return [];
  }
  const baseSets = new Set(baseSetNames);
  const findings: RemovedBaseTokenUsage[] = [];

  const visit = (setName: string, node: JsonMap, prefix: string[]): void => {
    for (const [key, value] of Object.entries(node)) {
      const path = [...prefix, key];
      if (isTokenLeaf(value)) {
        const tokenPath = path.join(".");
        if (removedTokenPaths.has(tokenPath)) {
          findings.push({ setName, tokenPath, removedToken: tokenPath, via: "override" });
        }
        for (const reference of extractReferences(value["$value"])) {
          if (removedTokenPaths.has(reference)) {
            findings.push({
              setName,
              tokenPath,
              removedToken: reference,
              via: "reference",
            });
          }
        }
      } else if (isJsonMap(value)) {
        visit(setName, value, path);
      }
    }
  };

  for (const setName of getTokenSetNames(tokens)) {
    // Only a team's own sets: skip surviving base sets and the deprecated pins we add
    // (the pins are meant to keep referencing the old tokens they preserve).
    if (baseSets.has(setName) || setName.startsWith(deprecatedSetPrefix)) {
      continue;
    }
    const set = tokens[setName];
    if (isJsonMap(set)) {
      visit(setName, set, []);
    }
  }
  return findings;
};

// Enable the deprecated set in every theme (so team output keeps rendering the old
// values) and remap references to removed base sets to their preserved copy, keeping
// the original status so a theme that had the set enabled keeps its old rendering.
export const updateThemes = (
  themes: JsonMap[],
  deprecatedSetName: string | null,
  renamedSets: Record<string, string>,
): JsonMap[] =>
  themes.map((theme) => {
    const selectedTokenSets: Record<string, unknown> = {};
    const existing = isJsonMap(theme["selectedTokenSets"])
      ? theme["selectedTokenSets"]
      : {};

    for (const [setName, status] of Object.entries(existing)) {
      selectedTokenSets[renamedSets[setName] ?? setName] = status;
    }
    if (deprecatedSetName) {
      selectedTokenSets[deprecatedSetName] = "enabled";
    }

    return { ...theme, selectedTokenSets };
  });

export const applyBaseUpdate = (
  tokens: JsonMap,
  {
    deprecatedSetName,
    diff,
    newBase,
  }: { deprecatedSetName: string; diff: BaseTokenSetDiff; newBase: JsonMap },
): JsonMap => {
  const hasDeprecatedTokens = Object.keys(diff.deprecatedTokens).length > 0;
  const renamedSets: Record<string, string> = Object.fromEntries(
    diff.removedSets.map(({ name }) => [name, `${deprecatedSetName}/${name}`]),
  );

  for (const setName of getTokenSetNames(newBase)) {
    tokens[setName] = newBase[setName];
  }
  for (const removedSet of diff.removedSets) {
    delete tokens[removedSet.name];
    tokens[renamedSets[removedSet.name]] = structuredClone(removedSet.tokens);
  }
  if (hasDeprecatedTokens) {
    tokens[deprecatedSetName] = diff.deprecatedTokens;
  }

  const metadata = isJsonMap(tokens["$metadata"]) ? tokens["$metadata"] : {};
  tokens["$metadata"] = metadata;
  // Rename removed sets in place so their preserved copy keeps its original
  // precedence: it stays after the (lower-precedence) pinned defaults and keeps
  // winning path collisions the way the removed set did.
  let tokenSetOrder = getTokenSetOrder(tokens).map(
    (entry) => renamedSets[entry] ?? entry,
  );
  for (const preservedName of Object.values(renamedSets)) {
    if (!tokenSetOrder.includes(preservedName)) {
      tokenSetOrder = insertDeprecatedSetIntoOrder(
        tokenSetOrder,
        preservedName,
        getTokenSetNames(newBase),
      );
    }
  }
  tokenSetOrder = insertIntoTokenSetOrder(
    tokenSetOrder,
    diff.addedSets,
    getTokenSetOrder(newBase),
  );
  if (hasDeprecatedTokens) {
    tokenSetOrder = insertDeprecatedSetIntoOrder(
      tokenSetOrder,
      deprecatedSetName,
      getFoundationSetNames(newBase),
    );
  }
  metadata["tokenSetOrder"] = tokenSetOrder;

  if (Array.isArray(tokens["$themes"])) {
    tokens["$themes"] = updateThemes(
      tokens["$themes"] as JsonMap[],
      hasDeprecatedTokens ? deprecatedSetName : null,
      renamedSets,
    );
  }

  return tokens;
};

const countTokenLeaves = (node: JsonMap): number =>
  Object.values(node).reduce<number>((count, value) => {
    if (isTokenLeaf(value)) {
      return count + 1;
    }
    return isJsonMap(value) ? count + countTokenLeaves(value) : count;
  }, 0);

// Read the installed base package straight from node_modules (not via import, so a
// fresh read after `pnpm add` sees the new version).
const readInstalledBase = (): { tokens: JsonMap; version: string } => {
  const installedPath = path.join(
    packageRootPath,
    "node_modules",
    basePackageName,
  );
  const version = readJsonFile(path.join(installedPath, "package.json"))[
    "version"
  ] as string;
  const tokens = readJsonFile(
    path.join(installedPath, "figma", "figma.tokens.json"),
  );
  return { tokens, version };
};

const reportRemovedBaseTokenUsage = (
  file: string,
  findings: RemovedBaseTokenUsage[],
  newVersion: string,
): void => {
  const maxWarningsPerFile = 25;
  console.warn(
    `\n⚠ ${file}: ${findings.length} team override(s) rely on base tokens removed in ${newVersion}. A deprecated pin may mask this for now, but update these before dropping the pinned set:`,
  );
  for (const { setName, tokenPath, removedToken, via } of findings.slice(
    0,
    maxWarningsPerFile,
  )) {
    const detail =
      via === "override"
        ? `overrides "${tokenPath}", but the base no longer defines it`
        : `references removed base token "{${removedToken}}" in "${tokenPath}"`;
    console.warn(`  - "${setName}" ${detail}.`);
  }
  if (findings.length > maxWarningsPerFile) {
    const affectedSets = new Set(findings.map((finding) => finding.setName)).size;
    console.warn(
      `  ... and ${findings.length - maxWarningsPerFile} more (${affectedSets} team set(s) affected).`,
    );
  }
};

export const updateBaseTokenSets = (targetVersion: string): void => {
  if (!validVersionRegex.test(targetVersion)) {
    throw new Error(`Invalid target version: ${targetVersion}`);
  }

  const oldBase = readInstalledBase();
  console.log(
    `Updating ${basePackageName} from ${oldBase.version} to ${targetVersion}...`,
  );
  execFileSync(
    "pnpm",
    ["add", "--save-exact", `${basePackageName}@${targetVersion}`],
    { cwd: packageRootPath, stdio: "inherit" },
  );

  const newBase = readInstalledBase();
  if (newBase.version === oldBase.version) {
    console.log(
      `${basePackageName} is already at ${oldBase.version}, nothing to do.`,
    );
    return;
  }

  const diff = diffBaseTokenSets(oldBase.tokens, newBase.tokens);
  const deprecatedSetName = `${deprecatedSetPrefix}${oldBase.version}`;
  const deprecatedTokenCount = countTokenLeaves(diff.deprecatedTokens);

  const newBaseTokenPaths = collectBaseTokenPaths(newBase.tokens);
  const removedTokenPaths = new Set(
    [...collectBaseTokenPaths(oldBase.tokens)].filter(
      (tokenPath) => !newBaseTokenPaths.has(tokenPath),
    ),
  );
  const newBaseSetNames = getTokenSetNames(newBase.tokens);
  const removedTokenUsage: Array<{ file: string; findings: RemovedBaseTokenUsage[] }> =
    [];

  for (const tokenFile of collectTokenFiles(mergedPath)) {
    const tokens = readJsonFile(tokenFile);
    applyBaseUpdate(tokens, {
      deprecatedSetName,
      diff,
      newBase: newBase.tokens,
    });
    writeJsonFile(tokenFile, tokens);
    console.log(
      `Updated ${path.basename(tokenFile)} to base version ${newBase.version}.`,
    );

    const findings = findRemovedBaseTokenUsage(
      tokens,
      removedTokenPaths,
      newBaseSetNames,
    );
    if (findings.length > 0) {
      removedTokenUsage.push({ file: path.basename(tokenFile), findings });
    }
  }

  console.log(
    `Base token sets updated: ${diff.addedSets.length} set(s) added, ${diff.removedSets.length} set(s) removed.`,
  );
  for (const removedSet of diff.removedSets) {
    console.log(
      `Removed set "${removedSet.name}" is preserved as "${deprecatedSetName}/${removedSet.name}"; theme references were remapped.`,
    );
  }
  if (deprecatedTokenCount > 0) {
    console.log(
      `${deprecatedTokenCount} changed or removed token(s) kept their old value in "${deprecatedSetName}" (enabled in every theme).`,
    );
    console.log(
      "Teams keep the old rendering until they migrate: shrink or remove that token set when ready.",
    );
  } else {
    console.log("No token values changed between the two versions.");
  }

  for (const { file, findings } of removedTokenUsage) {
    reportRemovedBaseTokenUsage(file, findings, newBase.version);
  }

  console.log(
    "Next: run `pnpm validate-token-sets` and `pnpm build`, and review the diff before committing.",
  );
};

if (import.meta.url === `file://${process.argv[1]}`) {
  const versionFlagIndex = process.argv.indexOf("--version");
  const targetVersion =
    versionFlagIndex !== -1 ? process.argv[versionFlagIndex + 1] : "latest";
  if (!targetVersion) {
    throw new Error("Missing value for --version");
  }
  updateBaseTokenSets(targetVersion);
}
