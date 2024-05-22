import { permutateThemes, registerTransforms } from '@tokens-studio/sd-transforms';
import { readFile } from 'node:fs/promises';
import StyleDictionary from 'style-dictionary';

registerTransforms(StyleDictionary);

const DELIMITER = '/';
const SRC_FOLDER = 'src';
// const COMMUNITY_SRC_FOLDER = `${SRC_FOLDER}/community`;
const IMPORTED_SRC_FOLDER = `${SRC_FOLDER}/imported`;
const MANUAL_SRC_FOLDER = `${SRC_FOLDER}/manual`;

const normalizeFileName = (name) =>
  name
    .toLowerCase()
    .replaceAll(/(_?default_?|\s\(beta\))/g, '')
    .replaceAll(new RegExp(`${DELIMITER}{2,}`, 'g'), '')
    .replace(/(nldoc)(\s-\s)?/, 'nldoc/');

const prepareTokensFile = async () => {
  const $themes = JSON.parse(await readFile(`${IMPORTED_SRC_FOLDER}/$themes.json`, 'utf-8'));
  const themes = permutateThemes($themes, { separator: DELIMITER });
  return themes;
};

const isFigmaToken = (name) => name.startsWith('figma');
const isModeIndicatorToken = (name) => name === 'mode-on';
const excludeSystemTokens = ({ name }) => ![isFigmaToken, isModeIndicatorToken].some((fn) => fn(name));

const extractModeFromName = (name) => ['light', 'dark'].find((mode) => name.indexOf(mode) >= 0);

async function run() {
  const $themes = await prepareTokensFile();
  const configs = Object.entries($themes).map(([name, tokensets]) => ({
    source: [
      ...tokensets.map((tokenset) => `./**/${tokenset}.json`),
      // `${COMMUNITY_SRC_FOLDER}/**/*.json`,
      `${MANUAL_SRC_FOLDER}/missingTokens.json`,
      `${MANUAL_SRC_FOLDER}/missingTokens.${extractModeFromName(name)}.json`,
    ],
    platforms: {
      css: {
        buildPath: 'dist/',
        transformGroup: 'tokens-studio',
        transforms: ['name/cti/kebab'],
        files: [
          {
            destination: `${normalizeFileName(name)}.css`,
            filter: excludeSystemTokens,
            format: 'css/variables',
            options: {
              outputReferences: true,
            },
          },
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
