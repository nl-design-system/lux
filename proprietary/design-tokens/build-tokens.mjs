import { permutateThemes, registerTransforms } from '@tokens-studio/sd-transforms';
import { readFile } from 'node:fs/promises';
import StyleDictionary from 'style-dictionary';
import { addMediaDependentFiles } from './add-media-dependent-files.mjs';

registerTransforms(StyleDictionary);

const DELIMITER = '/';
const SRC_FOLDER = './src';
const IMPORTED_SRC_FOLDER = `${SRC_FOLDER}/imported`;
const MANUAL_SRC_FOLDER = `${SRC_FOLDER}/manual`;
const DIST_FOLDER = './dist/';
const COPY_FOLDER = './src/templates/';

const stripWords = (name) => name.replaceAll(/(_?default_?|\s\(beta\))/g, '');
const fixNLdoc = (name, postfix = '') => name.replace(/(nldoc)(\s-\s)?/, `nldoc${postfix}`);
const normalizeFileName = (name) =>
  fixNLdoc(stripWords(name.toLowerCase().replaceAll(new RegExp(`${DELIMITER}{2,}`, 'g'), '')), '/');

const prepareTokensFile = async () => {
  const $themes = JSON.parse(await readFile(`${IMPORTED_SRC_FOLDER}/$themes.json`, 'utf-8'));
  const themes = permutateThemes($themes, { separator: DELIMITER });
  return themes;
};

const isFigmaToken = (name) => name.startsWith('figma');
const isModeIndicatorToken = (name) => name === 'mode-on';
const excludeSystemTokens = ({ name }) => ![isFigmaToken, isModeIndicatorToken].some((fn) => fn(name));

const extractModeFromName = (name) => ['light', 'dark'].find((mode) => name.indexOf(mode) >= 0);
const extractProductFromName = (name) => {
  return fixNLdoc(name.split(DELIMITER)[2].toLowerCase(), '-');
};

async function run() {
  const $themes = await prepareTokensFile();

  const configs = Object.entries($themes).map(([name, tokensets]) => ({
    source: [
      ...tokensets.map((tokenset) => `./**/${tokenset}.json`),
      `${MANUAL_SRC_FOLDER}/missingTokens.json`,
      `${MANUAL_SRC_FOLDER}/missingTokens.${extractModeFromName(name)}.json`,
    ],
    platforms: {
      css: {
        buildPath: DIST_FOLDER,
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
          {
            destination: `${normalizeFileName(name)}-theme.css`,
            format: 'css/variables',
            options: {
              outputReferences: true,
              selector: `.lux-theme--${extractProductFromName(name)}-${extractModeFromName(name)}`,
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

  await addMediaDependentFiles(DIST_FOLDER, COPY_FOLDER);
}

run();
