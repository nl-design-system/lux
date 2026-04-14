import { register } from '@tokens-studio/sd-transforms';
import { existsSync, mkdirSync } from 'fs';
import { readFile, writeFile } from 'node:fs/promises';
import { posix } from 'path';
import StyleDictionary from 'style-dictionary';

// Will take the theme name and remove all spaces and make it lowercase
const normalizeThemeName = (name) => {
  return name.toLowerCase().replace(/\s+/g, '');
};

// Custom header to add generation date
StyleDictionary.registerFileHeader({
  name: 'nlds-rhc-header',
  fileHeader: function (defaultMessage) {
    return [...defaultMessage, `Generated on ${new Date().toUTCString()}`];
  },
});

register(StyleDictionary, { excludeParentKeys: true });

// Get the platforms config
const getPlatformsConfig = (buildPath) => ({
  web: {
    transformGroup: 'tokens-studio',
    transforms: ['name/kebab'],
    buildPath,
    options: {
      fileHeader: 'nlds-rhc-header',
      outputReferences: true,
    },
    files: [
      {
        destination: 'variables.css',
        format: 'css/variables',
      },
      {
        destination: 'variables.scss',
        format: 'scss/variables',
      },
    ],
  },
});

// This will build the base tokens
async function buildBaseTokens() {
  const config = getPlatformsConfig('dist/');
  const StyleDictionaryBase = new StyleDictionary({
    log: { verbosity: 'verbose' },
    source: ['./merged/figma.tokens.json'],
    preprocessors: ['tokens-studio'],
    platforms: {
      ...config,
    },
  });
  await StyleDictionaryBase.hasInitialized;

  await StyleDictionaryBase.cleanAllPlatforms();
  await StyleDictionaryBase.buildAllPlatforms();
}

// This will build the themes
async function buildThemes() {
  const themesJson = await readFile('./merged/themes.json', 'utf-8');
  const themes = JSON.parse(themesJson);

  // Process each theme separately
  for (const [theme, themeData] of Object.entries(themes)) {
    const themeName = normalizeThemeName(theme);
    const themesDir = `./merged/${themeName}`;

    // Create the theme directory if it doesn't exist
    if (!existsSync(themesDir)) {
      mkdirSync(themesDir, { recursive: true });
    }

    // Write individual theme tokens
    const fileName = posix.join(themesDir, `tokens.json`);
    await writeFile(fileName, JSON.stringify(themeData.tokens, null, 2));

    const config = getPlatformsConfig(`dist/${themeName}/`);
    // Create a separate Style Dictionary instance for each theme
    const StyleDictionaryTheme = new StyleDictionary({
      log: { verbosity: 'verbose' },
      source: [fileName],
      preprocessors: ['tokens-studio'],
      platforms: {
        ...config,
      },
    });
    await StyleDictionaryTheme.hasInitialized;

    // Build this specific theme
    await StyleDictionaryTheme.cleanAllPlatforms();
    await StyleDictionaryTheme.buildAllPlatforms();
  }
}

async function build() {
  try {
    await buildBaseTokens();
    await buildThemes();
  } catch (error) {
    console.error(error);
  }
}

build();
