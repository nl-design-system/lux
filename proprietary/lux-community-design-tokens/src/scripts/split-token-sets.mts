import rhcFigmaTokens from '@rijkshuisstijl-community/design-tokens/figma/figma.tokens.json' with { type: 'json' };
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

type JsonMap = Record<string, unknown>;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRootPath = path.resolve(__dirname, '..', '..');
const mergedPath = path.resolve(packageRootPath, 'merged');
const srcPath = path.resolve(packageRootPath, 'src');

const validMergedFileNameRegex = /^([a-z]+)\.tokens\.json$/;

const readJsonFile = <T extends JsonMap>(filePath: string): T =>
  JSON.parse(fs.readFileSync(filePath, 'utf-8')) as T;
const writeJsonFile = (filePath: string, data: JsonMap): void =>
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`);

const getComparableBaseTokenSet = (baseTokenSet: JsonMap): JsonMap => {
  const comparable: JsonMap = {};
  for (const [key, value] of Object.entries(baseTokenSet)) {
    if (key !== '$themes') {
      comparable[key] = value;
    }
  }

  return comparable;
};

// Split merged token files into project overrides and assert that no base token sets were changed.
export const extractTokenOverrides = (fullTokenSet: JsonMap, baseTokenSet: JsonMap): JsonMap => {
  const overrides: JsonMap = {};
  const comparisonBaseTokenSet: JsonMap = {};
  const comparableBaseTokenSet = getComparableBaseTokenSet(baseTokenSet);

  for (const [key, value] of Object.entries(fullTokenSet)) {
    if (key === '$themes' || comparableBaseTokenSet[key] === undefined) {
      overrides[key] = value;
    } else {
      comparisonBaseTokenSet[key] = value;
    }
  }

  assert.deepStrictEqual(comparisonBaseTokenSet, comparableBaseTokenSet);

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

export const splitTokenSets = ({ check = false }: { check?: boolean } = {}): void => {
  const baseTokenSet = rhcFigmaTokens as JsonMap;
  const mergedTokenFiles = collectMergedTokenFiles(mergedPath);

  for (const mergedTokenFile of mergedTokenFiles) {
    const mergedFileName = path.basename(mergedTokenFile);
    const appName = validMergedFileNameRegex.exec(mergedFileName)?.[1];
    if (!appName) {
      continue;
    }

    const tokenSet = readJsonFile<JsonMap>(mergedTokenFile);
    const overrides = extractTokenOverrides(tokenSet, baseTokenSet);
    const outputFile = path.join(srcPath, `${appName}.figma.tokens.json`);

    if (check) {
      if (!fs.existsSync(outputFile)) {
        throw new Error(`Missing source token file: ${outputFile}`);
      }

      const existingOverrides = readJsonFile<JsonMap>(outputFile);
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
  const checkMode = process.argv.includes('--check');
  splitTokenSets({ check: checkMode });
}
