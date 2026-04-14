import { register } from '@tokens-studio/sd-transforms';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import StyleDictionary from 'style-dictionary';

const mergedPath = './merged';

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
async function buildBaseTokens(appName) {
  console.log(`Building base tokens for ${appName}`);
  const config = getPlatformsConfig(`dist/${appName}/`);
  const StyleDictionaryBase = new StyleDictionary({
    log: { verbosity: 'verbose' },
    source: [`./merged/${appName}.tokens.json`],
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
async function buildThemes(appName) {
  const themesJson = await readFile(`./merged/${appName}.themes.json`, 'utf-8');
  const themes = JSON.parse(themesJson);

  // Process each theme separately
  for (const [theme, themeData] of Object.entries(themes)) {
    const themeName = themeData.id || normalizeThemeName(theme);
    const appDir = `./merged/${appName}`;
    const themeFile = `${appDir}/${themeName}.tokens.json`;

    // Create the theme directory if it doesn't exist
    if (!existsSync(appDir)) {
      mkdirSync(appDir, { recursive: true });
    }

    // Write individual theme tokens
    await writeFile(themeFile, JSON.stringify(themeData.tokens, null, 2));

    console.log(`Building theme tokens for ${appName}: theme ${themeName}`);
    const themeOutputDir = `dist/${appName}/${themeName}/`;
    if (!existsSync(themeOutputDir)) {
      mkdirSync(themeOutputDir, { recursive: true });
    }
    const config = getPlatformsConfig(themeOutputDir);
    // Create a separate Style Dictionary instance for each theme
    const StyleDictionaryTheme = new StyleDictionary({
      log: { verbosity: 'verbose' },
      source: [themeFile],
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

function build() {
  const files = readdirSync(mergedPath);
  const validFileNameRegex = /^([a-z]+)\.tokens\.json/;
  files
    .filter((fn) => validFileNameRegex.test(fn))
    .forEach(async (fn) => {
      const appName = validFileNameRegex.exec(fn)[1];
      try {
        await buildBaseTokens(appName);
        await buildThemes(appName);
      } catch (error) {
        console.error(error);
      }
    });
}

build();
