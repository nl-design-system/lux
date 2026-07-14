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

// The default type scale is code-only (Figma cannot read `clamp(...)`), so it is not
// enabled in the Figma themes; include it in every code build regardless. It is the
// *default* scale: it should override the base foundation's fixed sizes for a theme
// that makes no other choice, but must lose to a theme that enables its own type scale
// (e.g. `overrides/responsive/min`) and to the deprecated pins that hold the old
// rendering until a team migrates. So it is emitted just above the foundation and
// below the override layer, never forced on top of the theme's own choices.
const forcedCodeOnlySet = 'overrides/type-scale/default [code-only]';

// Process themes to add the enabled components
export const processThemes = (fn, appName) => {
  // Read the raw JSON file directly
  const file = fs.readFileSync(fn, 'utf-8');
  const tokens = JSON.parse(file);

  const tokenSetOrder = tokens?.$metadata?.tokenSetOrder ?? [];
  const orderIndex = new Map(tokenSetOrder.map((set, i) => [set, i]));

  const processedThemes = {};

  (tokens.$themes || []).forEach((theme) => {
    const active = new Set(
      Object.entries(theme.selectedTokenSets)
        .filter(([tokenSet, status]) => status === 'enabled' && !tokenSet.endsWith('[figma-only]'))
        .map(([tokenSet]) => tokenSet),
    );

    // Emit sets in tokenSetOrder so precedence in the build (which merges by
    // object-key order, last key wins) matches the tokenSetOrder the update script
    // maintains. Otherwise the deprecated/preserved sets the update script injects
    // land at the wrong precedence and old token values are silently overwritten.
    // Sets absent from tokenSetOrder keep their selectedTokenSets order at the end.
    const ordered = [
      ...tokenSetOrder.filter((tokenSet) => active.has(tokenSet)),
      ...[...active].filter((tokenSet) => !orderIndex.has(tokenSet)),
    ];

    // Slot the forced code-only default type scale in just above the foundation and
    // below the override layer (see forcedCodeOnlySet), i.e. right before the first
    // `overrides/*` set in the emit order.
    if (tokens[forcedCodeOnlySet]) {
      const firstOverride = ordered.findIndex((tokenSet) => tokenSet.startsWith('overrides/'));
      ordered.splice(firstOverride === -1 ? ordered.length : firstOverride, 0, forcedCodeOnlySet);
    }

    const themeTokens = {};
    for (const tokenSet of ordered) {
      if (tokens[tokenSet]) {
        themeTokens[tokenSet] = tokens[tokenSet];
      }
    }

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
