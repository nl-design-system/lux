import rhcFigmaTokens from "@rijkshuisstijl-community/design-tokens/figma/figma.tokens.json" with { type: "json" };
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import assert from "node:assert";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const mergedPath = path.resolve(__dirname, "merged");
const srcPath = path.resolve(__dirname, "src");

// allow splitting of token file to separate overrides for applications
// validate that file does not contain overrides directly in rhc tokens
export const extractTokenOverrides = (
  fullTokenSet: Record<string, any>,
  baseTokenSet: Record<string, any>,
) => {
  const overrides: Record<string, any> = {};
  const comparisonBaseTokenSet: Record<string, any> = {};

  for (const key in fullTokenSet) {
    if (baseTokenSet[key] === undefined) {
      overrides[key] = fullTokenSet[key];
    } else {
      comparisonBaseTokenSet[key] = fullTokenSet[key];
    }
  }

  assert.deepEqual(comparisonBaseTokenSet, baseTokenSet);

  return overrides;
};

const collectInputTokenFiles = (dir: string): string[] => {
  const validFileNameRegex = /^([a-z]+)\.tokens\.json$/;
  const tokenFiles: string[] = [];

  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      tokenFiles.push(...collectInputTokenFiles(fullPath));
    } else if (validFileNameRegex.test(file)) {
      tokenFiles.push(fullPath);
    }
  }

  return tokenFiles;
};

export const splitTokenSets = () => {
  const baseTokenSet = rhcFigmaTokens as Record<string, any>;

  const inputTokenFiles = collectInputTokenFiles(srcPath);
  for (const inputFile of inputTokenFiles) {
    const tokenSet = JSON.parse(fs.readFileSync(inputFile, "utf-8"));
    const overrides = extractTokenOverrides(tokenSet, baseTokenSet);

    const relativePath = path.relative(srcPath, inputFile);
    const outputFile = path.join(mergedPath, relativePath);
    fs.mkdirSync(path.dirname(outputFile), { recursive: true });
    fs.writeFileSync(outputFile, JSON.stringify(overrides, null, 2));
  }
};
