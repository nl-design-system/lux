import rhcFigmaTokens from '@rijkshuisstijl-community/design-tokens/figma/figma.tokens.json' with { type: 'json' };
import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const writeJsonFile = async (filePath, data) => {
  try {
    const jsonString = JSON.stringify(data, null, 2);
    await fs.writeFile(filePath, jsonString, 'utf8');
  } catch (error) {
    console.error(`Error writing file ${filePath}:`, error.message);
    throw error;
  }
};

/**
 * Generate merged figma token files from RHC source and local overrides
 */
export const mergeFigmaTokenFiles = async () => {
  fs.readdir('./src', (error, files) => {
    if (error) {
      console.error(error);
      process.exit(700);
    }

    const validFileNameRegex = /^([a-z]+)\.figma\.tokens\.json$/;

    files
      .filter((fn) => validFileNameRegex.test(fn))
      .forEach(async (fn) => {
        const appName = validFileNameRegex.exec(fn)[1];

        console.log(`Generating merged tokens for: ${fn}`);
        console.log(`${Object.keys(rhcFigmaTokens).length} rhc token sets`);

        const file = await fs.readFile(fn, 'utf-8');
        const incomingFigmaTokens = JSON.parse(file);
        console.log(`${Object.keys(incomingFigmaTokens).length} incoming token sets`);

        const [mergedTokens, collisions] = mergeTokenSets(rhcFigmaTokens, incomingFigmaTokens);
        console.log('# Merged token sets:', Object.keys(mergedTokens).length);
        console.log('# Tokens set collisions:', collisions.length);

        const outputPath = path.resolve(__dirname, `./merged/${appName}.themes.json`);
        await writeJsonFile(outputPath, mergedTokens);

        console.log(`Merged Figma tokens generated ${collisions.length === 0 ? 'successfully ' : ''}at ${outputPath}.`);

        processThemes(outputPath);

        if (collisions.length > 0) {
          console.error('Token set collisions found, exiting with error');
          process.exit(collisions.length);
        }
      });
  });
};

export const mergeTokenSets = (original, addition) => {
  let collisions = [];

  // Make copy of original
  const merged = { ...original };

  // Add keys from addition
  for (const [key, value] of Object.entries(addition)) {
    if (!(key in original) && key !== '$themes') merged[key] = value;
    else if (key !== '$themes') collisions.push(key);
  }

  // No need to re-publish the themes available in RHC here
  merged.$themes = addition.$themes;

  return [merged, collisions];
};

// Process themes to add the enabled components
const processThemes = async (fn) => {
  // Read the raw JSON file directly
  const file = await fs.readFile(fn, 'utf-8');
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

  writeJsonFile(path.resolve(__dirname, './merged/themes.json'), processedThemes);
};

// Run the generator if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  mergeFigmaTokenFiles().catch(console.error);
}
