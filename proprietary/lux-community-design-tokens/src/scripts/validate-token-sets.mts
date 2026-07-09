import rhcFigmaTokens from "@rijkshuisstijl-community/design-tokens/figma/figma.tokens.json" with { type: "json" };
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { isDeepStrictEqual } from "node:util";

type JsonMap = Record<string, unknown>;

interface ThemeDefinition {
  selectedTokenSets?: Record<string, string>;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRootPath = path.resolve(__dirname, "..", "..");
const mergedPath = path.resolve(packageRootPath, "merged");

const validTokenFileNameRegex = /^([a-z]+)\.tokens\.json$/;

const readJsonFile = (filePath: string): JsonMap =>
  JSON.parse(fs.readFileSync(filePath, "utf-8")) as JsonMap;
const writeJsonFile = (filePath: string, data: JsonMap): void =>
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`);

const getTokenSetNames = (tokens: JsonMap): string[] =>
  Object.keys(tokens).filter((key) => key !== "$metadata" && key !== "$themes");

// The base token sets (everything the RHC package publishes, except its metadata and
// themes) may not be changed locally; only the team-managed sets (overrides, metadata
// and themes) may differ from the package.
export const validateBaseTokenSets = (
  tokens: JsonMap,
  baseTokens: JsonMap,
): { changedTokenSets: string[]; missingTokenSets: string[] } => {
  const changedTokenSets: string[] = [];
  const missingTokenSets: string[] = [];

  for (const tokenSet of getTokenSetNames(baseTokens)) {
    if (!(tokenSet in tokens)) {
      missingTokenSets.push(tokenSet);
    } else if (!isDeepStrictEqual(tokens[tokenSet], baseTokens[tokenSet])) {
      changedTokenSets.push(tokenSet);
    }
  }

  return { changedTokenSets, missingTokenSets };
};

// $metadata.tokenSetOrder should list exactly the token sets present in the file:
// entries without a matching token set are stale and can be dropped, but token sets
// missing from the order cannot be added automatically because their position
// determines the Tokens Studio resolution order.
export const reconcileTokenSetOrder = (
  tokens: JsonMap,
): {
  fixedTokenSetOrder: string[];
  missingSets: string[];
  staleEntries: string[];
} => {
  const metadata = (tokens["$metadata"] ?? {}) as JsonMap;
  const tokenSetOrder = Array.isArray(metadata["tokenSetOrder"])
    ? (metadata["tokenSetOrder"] as string[])
    : [];
  const tokenSetNames = new Set(getTokenSetNames(tokens));
  const orderedNames = new Set(tokenSetOrder);

  const staleEntries = tokenSetOrder.filter(
    (entry) => !tokenSetNames.has(entry),
  );
  const missingSets = [...tokenSetNames].filter(
    (name) => !orderedNames.has(name),
  );
  const fixedTokenSetOrder = tokenSetOrder.filter((entry) =>
    tokenSetNames.has(entry),
  );

  return { fixedTokenSetOrder, missingSets, staleEntries };
};

// A team-managed token set that no theme selects (with any status other than
// "disabled") is never used in any Tokens Studio export and is probably left over.
// Base sets from the RHC package are not reported: they ship with the package
// whether a theme uses them or not.
export const findTokenSetsNotInAnyTheme = (
  tokens: JsonMap,
  baseTokens: JsonMap,
): string[] => {
  const themes = Array.isArray(tokens["$themes"])
    ? (tokens["$themes"] as ThemeDefinition[])
    : [];
  const usedTokenSets = new Set<string>();

  for (const theme of themes) {
    for (const [tokenSet, status] of Object.entries(
      theme.selectedTokenSets ?? {},
    )) {
      if (status !== "disabled") {
        usedTokenSets.add(tokenSet);
      }
    }
  }

  return getTokenSetNames(tokens).filter(
    (name) => !(name in baseTokens) && !usedTokenSets.has(name),
  );
};

const collectTokenFiles = (dir: string): string[] =>
  fs
    .readdirSync(dir)
    .filter((file) => validTokenFileNameRegex.test(file))
    .map((file) => path.join(dir, file));

const logList = (
  log: (message: string) => void,
  header: string,
  names: string[],
): void => {
  log(header);
  names.forEach((name) => log(`  - ${name}`));
};

const validateTokenFile = (
  tokenFile: string,
  baseTokens: JsonMap,
  check: boolean,
): boolean => {
  const fileName = path.basename(tokenFile);
  const tokens = readJsonFile(tokenFile);
  let hasErrors = false;

  const { changedTokenSets, missingTokenSets } = validateBaseTokenSets(
    tokens,
    baseTokens,
  );
  if (missingTokenSets.length > 0) {
    hasErrors = true;
    logList(
      console.error,
      `[${fileName}] ERROR: base token sets from @rijkshuisstijl-community/design-tokens are missing:`,
      missingTokenSets,
    );
  }
  if (changedTokenSets.length > 0) {
    hasErrors = true;
    logList(
      console.error,
      `[${fileName}] ERROR: base token sets differ from @rijkshuisstijl-community/design-tokens (base sets must not be changed locally):`,
      changedTokenSets,
    );
  }

  const { fixedTokenSetOrder, missingSets, staleEntries } =
    reconcileTokenSetOrder(tokens);
  if (missingSets.length > 0) {
    hasErrors = true;
    logList(
      console.error,
      `[${fileName}] ERROR: token sets missing from $metadata.tokenSetOrder (add them at the position matching the intended resolution order):`,
      missingSets,
    );
  }
  if (staleEntries.length > 0 && check) {
    hasErrors = true;
    logList(
      console.error,
      `[${fileName}] ERROR: $metadata.tokenSetOrder contains entries without a matching token set (run \`pnpm --filter @lux-design-system/lux-community-design-tokens validate-token-sets\` to remove them):`,
      staleEntries,
    );
  } else if (staleEntries.length > 0) {
    (tokens["$metadata"] as JsonMap)["tokenSetOrder"] = fixedTokenSetOrder;
    writeJsonFile(tokenFile, tokens);
    logList(
      console.log,
      `[${fileName}] removed stale entries from $metadata.tokenSetOrder:`,
      staleEntries,
    );
  }

  const unusedTokenSets = findTokenSetsNotInAnyTheme(tokens, baseTokens);
  if (unusedTokenSets.length > 0) {
    logList(
      console.warn,
      `[${fileName}] WARNING: team token sets not used in any theme:`,
      unusedTokenSets,
    );
  }

  return hasErrors;
};

export const validateTokenSets = ({
  check = false,
}: { check?: boolean } = {}): void => {
  const baseTokens = rhcFigmaTokens as JsonMap;
  let hasErrors = false;

  for (const tokenFile of collectTokenFiles(mergedPath)) {
    hasErrors = validateTokenFile(tokenFile, baseTokens, check) || hasErrors;
  }

  if (hasErrors) {
    process.exitCode = 1;
  }
};

if (import.meta.url === `file://${process.argv[1]}`) {
  const checkMode = process.argv.includes("--check");
  validateTokenSets({ check: checkMode });
}
