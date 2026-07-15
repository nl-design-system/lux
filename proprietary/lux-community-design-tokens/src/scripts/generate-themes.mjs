import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRootPath = path.resolve(__dirname, '..', '..');
const mergedPath = path.resolve(packageRootPath, 'merged');

const writeJsonFile = (filePath, data) => {
  try {
    const jsonString = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, jsonString, 'utf8');
  } catch (error) {
    console.error(`Error writing file ${filePath}:`, error.message);
    throw error;
  }
};

// Process themes to add the enabled components
export const processThemes = (fn, appName) => {
  // Read the raw JSON file directly
  const file = fs.readFileSync(fn, 'utf-8');
  const tokens = JSON.parse(file);

  const processedThemes = {};

  (tokens.$themes || []).forEach((theme) => {
    const themeTokens = {};

    Object.entries(theme.selectedTokenSets).forEach(([tokenSet, status]) => {
      if (status === 'enabled' && !tokenSet.endsWith('[figma-only]')) {
        if (tokens[tokenSet]) {
          themeTokens[tokenSet] = tokens[tokenSet];
        }
      }
    });
    // Add default type scale here, because Figma does not understand `clamp(...)`
    themeTokens['overrides/type-scale/default [code-only]'] = tokens['overrides/type-scale/default [code-only]'];

    processedThemes[theme.name] = {
      id: theme.id,
      tokens: themeTokens,
      group: theme.group,
    };
  });

  writeJsonFile(path.resolve(packageRootPath, `./merged/${appName}.themes.json`), processedThemes);
};

/**
 * Generate the themes file for every app token file in merged/
 */
export const generateThemeFiles = () => {
  const files = fs.readdirSync(mergedPath);

  const validFileNameRegex = /^([a-z]+)\.tokens\.json$/;

  files
    .filter((fn) => validFileNameRegex.test(fn))
    .forEach((fn) => {
      const appName = validFileNameRegex.exec(fn)[1];

      console.log(`Generating themes for: ${fn}`);
      processThemes(path.resolve(mergedPath, fn), appName);
    });
};

// Run the generator if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateThemeFiles();
}
