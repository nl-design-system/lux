import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

// Custom header to add generation date
StyleDictionary.registerFileHeader({
  name: 'nlds-rhc-header',
  fileHeader: function (defaultMessage) {
    return [...defaultMessage, `Generated on ${new Date().toUTCString()}`];
  },
});

register(StyleDictionary, { excludeParentKeys: true });

// Get the platforms config
const getPlatformsConfig = (buildPath) => {
  return {
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
          destination: 'root.css',
          format: 'css/variables',
        },
        {
          destination: '_variables.scss',
          format: 'scss/variables',
        },
      ],
    },
  };
};

// This will build the base tokens without the themes and without the overwrites
async function buildBaseTokens() {
  const config = getPlatformsConfig('dist/');
  const StyleDictionaryBase = new StyleDictionary({
    log: { verbosity: 'verbose' },
    source: ['./src/figma.tokens.json'],
    preprocessors: ['tokens-studio'],
    platforms: {
      ...config,
    },
  });
  await StyleDictionaryBase.hasInitialized;

  await StyleDictionaryBase.cleanAllPlatforms();
  await StyleDictionaryBase.buildAllPlatforms();
}

async function build() {
  try {
    await buildBaseTokens();
  } catch (error) {
    console.error(error);
  }
}

build();
