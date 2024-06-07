import { permutateThemes, registerTransforms } from '@tokens-studio/sd-transforms';
import { readFile } from 'node:fs/promises';
import StyleDictionary from 'style-dictionary';

registerTransforms(StyleDictionary);

// StyleDictionary.registerFormat({
//   name: 'yolo',
//   formatter: function({dictionary, platform}) {
//     console.log(dictionary, platform);
//   },
// })

const DELIMITER = '/';

const stripWords = (name) => name.replaceAll(/(_?default_?|\s\(beta\))/g, '');
const fixNLdoc = (name, postfix = '') => name.replace(/(nldoc)(\s-\s)?/, `nldoc${postfix}`);
const normalizeFileName = (name) =>
  fixNLdoc(stripWords(name.toLowerCase().replaceAll(new RegExp(`${DELIMITER}{2,}`, 'g'), '')), '/');

const prepareTokensFile = async () => {
  const $themes = JSON.parse(await readFile('src/$themes.json', 'utf-8'));
  const themes = permutateThemes($themes, { separator: DELIMITER });
  return themes;
};

const extractModeFromName = (name) => ['light', 'dark'].find((mode) => name.indexOf(mode) >= 0);
const extractProductFromName = (name) => {
  return fixNLdoc(name.split(DELIMITER)[2].toLowerCase(), '-');
};

// const addMediaIndexes = () => {

// }

async function run() {
  const $themes = await prepareTokensFile();
  //console.log(Object.entries($themes).map(([name, tokensets]) => ({name: extractProductFromName(name), tokensets: '[tokensets]'})));
  // try {
  //   return;
  // } catch (error) {
  //   console(error);
  // }

  const configs = Object.entries($themes).map(([name, tokensets]) => ({
    source: [
      ...tokensets.map((tokenset) => `./**/${tokenset}.json`),
      'missingTokens.json',
      `missingTokens.${extractModeFromName(name)}.json`,
    ],
    platforms: {
      css: {
        buildPath: 'dist/',
        transformGroup: 'tokens-studio',
        transforms: ['name/cti/kebab'],
        files: [
          {
            destination: `${normalizeFileName(name)}.css`,
            format: 'css/variables',
            options: {
              outputReferences: true,
            },
          },
          {
            destination: `${normalizeFileName(name)}-theme.css`,
            format: 'css/variables',
            options: {
              outputReferences: true,
              selector: `.lux-theme--${extractProductFromName(name)}-${extractModeFromName(name)}`,
            },
          },
          // {
          //   destination: `index.css`,
          //   format: 'yolo',
          // }
        ],
      },
    },
  }));

  configs.forEach((cfg) => {
    const sd = StyleDictionary.extend(cfg);
    sd.cleanAllPlatforms();
    sd.buildAllPlatforms();
  });
}

run();
