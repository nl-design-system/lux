import rhcFigmaTokens from "@rijkshuisstijl-community/design-tokens/figma/figma.tokens.json" with { type: "json" };
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

type JsonMap = Record<string, unknown>;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRootPath = path.resolve(__dirname, "..", "..");
const mergedPath = path.resolve(packageRootPath, "merged");
const srcPath = path.resolve(packageRootPath, "src");

const validMergedFileNameRegex = /^([a-z]+)\.tokens\.json$/;

const readJsonFile = (filePath: string): JsonMap =>
  JSON.parse(fs.readFileSync(filePath, "utf-8")) as JsonMap;
const writeJsonFile = (filePath: string, data: JsonMap): void =>
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`);

// Split merged token files into project overrides and assert that no base token sets were changed.
export const extractTokenOverrides = (
  fullTokenSet: JsonMap,
  baseTokenSet: JsonMap,
): JsonMap => {
  const overrides: JsonMap = {};
  const comparisonBaseTokenSet: JsonMap = {};
  const { $themes: _baseThemes, ...comparableBaseTokenSet }: JsonMap =
    baseTokenSet;
  let overrideThemes: unknown;
  let hasOverrideThemes = false;

  for (const [key, value] of Object.entries(fullTokenSet)) {
    if (key === "$themes") {
      hasOverrideThemes = true;
      overrideThemes = value;
      continue;
    }

    if (!(key in comparableBaseTokenSet)) {
      overrides[key] = value;
    } else {
      comparisonBaseTokenSet[key] = value;
    }
  }

  // assert that the base token set has not been changed in the merged token set
  assert.deepStrictEqual(comparisonBaseTokenSet, comparableBaseTokenSet);

  if (hasOverrideThemes) {
    overrides["$themes"] = overrideThemes;
  }

  return overrides;
};

const collectMergedTokenFiles = (dir: string): string[] => {
  const tokenFiles: string[] = [];

  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (validMergedFileNameRegex.test(file)) {
      tokenFiles.push(path.join(dir, file));
    }
  }

  return tokenFiles;
};

export const splitTokenSets = ({
  check = false,
}: { check?: boolean } = {}): void => {
  const baseTokenSet = rhcFigmaTokens as JsonMap;
  const mergedTokenFiles = collectMergedTokenFiles(mergedPath);

  for (const mergedTokenFile of mergedTokenFiles) {
    const mergedFileName = path.basename(mergedTokenFile);
    const appName = validMergedFileNameRegex.exec(mergedFileName)?.[1];
    if (!appName) {
      continue;
    }

    const tokenSet = readJsonFile(mergedTokenFile);
    const overrides = extractTokenOverrides(tokenSet, baseTokenSet);
    const outputFile = path.join(srcPath, `${appName}.figma.tokens.json`);

    if (check) {
      if (!fs.existsSync(outputFile)) {
        throw new Error(`Missing source token file: ${outputFile}`);
      }

      const existingOverrides = readJsonFile(outputFile);
      assert.deepStrictEqual(
        existingOverrides,
        overrides,
        `Merged token file ${mergedFileName} is out of sync with ${appName}.figma.tokens.json`,
      );
      continue;
    }

    writeJsonFile(outputFile, overrides);
  }
};

if (import.meta.url === `file://${process.argv[1]}`) {
  const checkMode = process.argv.includes("--check");
  splitTokenSets({ check: checkMode });
}
