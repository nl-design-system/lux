import rhcFigmaTokens from '@rijkshuisstijl-community/design-tokens/figma/figma.tokens.json' with { type: 'json' };
import koopFigmaTokens from '../figma/koop.figma.tokens.json' with { type: 'json' };
import { writeJsonFile } from './json-merger.mjs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Generate merged Figma tokens from RHC and Koop sources
 */
async function generateFigmaTokens() {
  console.log('Generating merged Figma tokens...');
  console.log('RHC tokens keys:', Object.keys(rhcFigmaTokens).length);
  console.log('Koop tokens keys:', Object.keys(koopFigmaTokens).length);

  // Merge the RHC tokens with Koop tokens taking precedence over RHC tokens, all but $themes
  const koopTokensWithoutThemes = Object.fromEntries(Object.entries(koopFigmaTokens).filter(([key]) => key !== '$themes'));
  // console.log('Koop tokens without themes: ', koopTokensWithoutThemes);
  const mergedTokens = mergeObjects(rhcFigmaTokens, koopTokensWithoutThemes);
  console.log('Merged tokens', mergedTokens);

  // // Add $themes to the RHC tokens
  if (Array.isArray(koopFigmaTokens.$themes)) {
    mergedTokens.$themes = [...rhcFigmaTokens.$themes, ...koopFigmaTokens.$themes];
  }

  // const mergedTokens = { ...rhcFigmaTokens, ...koopFigmaTokens };
  console.log('Merged tokens keys:', Object.keys(mergedTokens).length);

  // Output path for the merged tokens
  const outputPath = path.resolve(__dirname, '../figma/out/figma-tokens.json');

  // Write the merged tokens to a file
  await writeJsonFile(outputPath, mergedTokens);

  console.log('Merged Figma tokens generated successfully!');
  return mergedTokens;
}

function mergeObjects(original, addition) {
  const merged = {};

  // Step 1: Copy original keys in order
  for (const key of Object.keys(original)) {
    merged[key] = original[key];
  }

// Step 2: Add new keys from addition (preserve their order too)
  for (const [key, value] of Object.entries(addition)) {
    if (!(key in original)) {
      merged[key] = value;
    }
  }
 return merged;
}

// Run the generator if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateFigmaTokens().catch(console.error);
}

export { generateFigmaTokens };
