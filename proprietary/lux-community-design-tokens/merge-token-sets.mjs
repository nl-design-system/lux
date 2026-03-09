import rhcFigmaTokens from '@rijkshuisstijl-community/design-tokens/figma/figma.tokens.json' with { type: 'json' };
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
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
const mergeFigmaTokenFiles = async () => {
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

  console.log(`Merged Figma tokens generated successfully at ${outputPath}.`);
};

const mergeTokenSets = (original, addition) => {
  let collisions = [];

  // Make copy of original
  const merged = { ...original };

  // Add keys from addition
  for (const [key, value] of Object.entries(addition)) {
    if (!(key in original) && key !== '$themes') merged[key] = value;
    else if (key !== '$themes') collisions.push(key);
  }

  // Concatenate $themes array of both
  merged.$themes = merged.$themes.concat(addition.$themes);

  return [merged, collisions];
};

// Run the generator if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  mergeFigmaTokenFiles().catch(console.error);
}

export { mergeFigmaTokenFiles };
