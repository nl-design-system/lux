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

export interface BaseTokenSetDiff {
  addedSets: string[];
  deprecatedTokens: JsonMap;
  removedSets: string[];
}

const isTokenLeaf = (value: unknown): value is JsonMap =>
  typeof value === "object" && value !== null && "$value" in value;

const isJsonMap = (value: unknown): value is JsonMap =>
  typeof value === "object" && value !== null && !Array.isArray(value);

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

    if (isTokenLeaf(oldValue) || !isJsonMap(oldValue)) {
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

// Diff two versions of the RHC base package. The old values of every changed or
// removed token end up in one tree, walked in the old package's tokenSetOrder so a
// path collision between sets resolves the same way Tokens Studio would.
export const diffBaseTokenSets = (
  oldBase: JsonMap,
  newBase: JsonMap,
): BaseTokenSetDiff => {
  const oldSetNames = getTokenSetNames(oldBase);
  const newSetNames = new Set(getTokenSetNames(newBase));

  const removedSets = oldSetNames.filter((name) => !newSetNames.has(name));
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
    const oldSet = oldBase[setName];
    if (!isJsonMap(oldSet)) {
      continue;
    }

    const newSet = newBase[setName];
    const setChanges = isJsonMap(newSet)
      ? diffTokenTree(oldSet, newSet)
      : oldSet;
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

// The new deprecated set goes before any existing deprecated-changes pins: a team
// still pinned to an older version keeps the older (higher-precedence) values.
export const insertDeprecatedSetIntoOrder = (
  appOrder: string[],
  deprecatedSetName: string,
): string[] => {
  const order = appOrder.filter((entry) => entry !== deprecatedSetName);
  const firstPinIndex = order.findIndex((entry) =>
    entry.startsWith(deprecatedSetPrefix),
  );

  if (firstPinIndex === -1) {
    order.push(deprecatedSetName);
  } else {
    order.splice(firstPinIndex, 0, deprecatedSetName);
  }

  return order;
};

// Enable the deprecated set in every theme (so team output keeps rendering the old
// values) and drop references to base sets that no longer exist.
export const updateThemes = (
  themes: JsonMap[],
  deprecatedSetName: string | null,
  removedSets: string[],
): JsonMap[] =>
  themes.map((theme) => {
    const selectedTokenSets: Record<string, unknown> = {
      ...(isJsonMap(theme["selectedTokenSets"])
        ? theme["selectedTokenSets"]
        : {}),
    };

    for (const removedSet of removedSets) {
      delete selectedTokenSets[removedSet];
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

  for (const setName of getTokenSetNames(newBase)) {
    tokens[setName] = newBase[setName];
  }
  for (const setName of diff.removedSets) {
    delete tokens[setName];
  }
  if (hasDeprecatedTokens) {
    tokens[deprecatedSetName] = diff.deprecatedTokens;
  }

  const metadata = isJsonMap(tokens["$metadata"]) ? tokens["$metadata"] : {};
  tokens["$metadata"] = metadata;
  let tokenSetOrder = getTokenSetOrder(tokens).filter(
    (entry) => !diff.removedSets.includes(entry),
  );
  tokenSetOrder = insertIntoTokenSetOrder(
    tokenSetOrder,
    diff.addedSets,
    getTokenSetOrder(newBase),
  );
  if (hasDeprecatedTokens) {
    tokenSetOrder = insertDeprecatedSetIntoOrder(
      tokenSetOrder,
      deprecatedSetName,
    );
  }
  metadata["tokenSetOrder"] = tokenSetOrder;

  if (Array.isArray(tokens["$themes"])) {
    tokens["$themes"] = updateThemes(
      tokens["$themes"] as JsonMap[],
      hasDeprecatedTokens ? deprecatedSetName : null,
      diff.removedSets,
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
  }

  console.log(
    `Base token sets updated: ${diff.addedSets.length} set(s) added, ${diff.removedSets.length} set(s) removed.`,
  );
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
