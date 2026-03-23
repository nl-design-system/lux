import rhcFigmaTokens from '@rijkshuisstijl-community/design-tokens/figma/figma.tokens.json' with { type: 'json' };
import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import koopFigmaTokens from './src/koop.figma.tokens.json' with { type: 'json' };

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
 * Generate merged Figma tokens from RHC and Koop sources
 */
export const mergeFigmaTokenFiles = async () => {
  console.log('Generating merged Figma tokens...');
  console.log('# RHC token sets:', Object.keys(rhcFigmaTokens).length);
  console.log('# Koop token sets:', Object.keys(koopFigmaTokens).length);

  const [mergedTokens, collisions] = mergeTokenSets(rhcFigmaTokens, koopFigmaTokens);
  console.log('# Merged token sets:', Object.keys(mergedTokens).length);
  console.log('# Tokens set collisions:', collisions.length);

  // Output path for the merged tokens
  const outputPath = path.resolve(__dirname, './merged/figma.tokens.json');

  // Write the merged tokens to a file
  await writeJsonFile(outputPath, mergedTokens);

  console.log(`Merged Figma tokens generated ${collisions.length === 0 ? 'successfully ' : ''}at ${outputPath}.`);

  processThemes(outputPath);

  if (collisions.length > 0) {
    console.error('Token set collisions found, exiting with error');
    process.exit(collisions.length);
  }
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
const processThemes = async (file) => {
  // Read the raw JSON file directly
  const json = await fs.readFile(file, 'utf-8');
  const tokens = JSON.parse(json);

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
