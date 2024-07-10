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
const EXTRACT_FILENAME_REGEX = /\/([^/]+)\.\w+$/;

const stripWords = (name) => name.replaceAll(/(_?default_?|\s\(beta\))/g, '');
const fixNLdoc = (name, postfix = '') => name.replace(/(nldoc)(\s-\s)?/, `nldoc${postfix}`);
const normalizeFileName = (name) =>
  fixNLdoc(stripWords(name.toLowerCase().replaceAll(new RegExp(`${DELIMITER}{2,}`, 'g'), '')), '/');

const prepareTokensFile = async () => {
  const $themes = JSON.parse(await readFile(`${IMPORTED_SRC_FOLDER}/$themes.json`, 'utf-8'));
  const themes = permutateThemes($themes, { separator: DELIMITER });
  return themes;
};

const withLanguageSpecifier = (preferredLanguage) => (token) => {
  if (isLanguageToken(token.name)) {
    const language = token.filePath.split(EXTRACT_FILENAME_REGEX).at(-2);
    return language === preferredLanguage;
  }
  return false;
}
const withPrefix = (pattern) => (phrase) => new RegExp(`^${pattern}`, 'i').test(phrase);

const isDutchLanguageToken = withLanguageSpecifier('nl');
const isEnglishLanguageToken = withLanguageSpecifier('en');
const isLabelToken = withPrefix('label');
const isLanguageToken = withPrefix('language');
const isFigmaToken = withPrefix('figma');
const isModeIndicatorToken = withPrefix('mode-?on');
const isDesignToken = ({ name }) => ![isLabelToken, isLanguageToken, isFigmaToken, isModeIndicatorToken].some((fn) => fn(name));

const extractModeFromName = (name) => ['light', 'dark'].find((mode) => name.indexOf(mode) >= 0);
const extractProductFromName = (name) => {
  return fixNLdoc(name.split(DELIMITER)[2].toLowerCase(), '-');
};

const runLabels = async () => {
  const labelConfig = {
    source: [
      `${IMPORTED_SRC_FOLDER}/components/**/default.json`,
      `${IMPORTED_SRC_FOLDER}/language/*.json`,
    ],
    platforms: {
      typescript: {
        buildPath: DIST_FOLDER,
        transformGroup: 'js',
        transforms: ['name/cti/camel'],
        files: [
          {
            format: "javascript/es6",
            destination: 'labels/nl.ts',
            filter: (token) => isDutchLanguageToken(token),
          },
          {
            format: "javascript/es6",
            destination: 'labels/en.ts',
            filter: (token) => isEnglishLanguageToken(token),
          },
          {
            format: "typescript/es6-declarations",
            destination: 'labels/labels.d.ts',
            // filter: ({ name }) => isLabelToken(name),
          }
        ]
      },
    }
  }

  const sd = StyleDictionary.extend(labelConfig);
  sd.cleanAllPlatforms();
  sd.buildAllPlatforms();
};

const runDesignTokens = async () => {
  const $themes = await prepareTokensFile();

  const configs = Object.entries($themes).map(([name, tokensets]) => ({
    source: [
      ...tokensets.map((tokenset) => `./**/${tokenset}.json`),
      `${MANUAL_SRC_FOLDER}/missingTokens.json`,
      `${MANUAL_SRC_FOLDER}/missingTokens.${extractModeFromName(name)}.json`,
    ],
    include: [
      `!${IMPORTED_SRC_FOLDER}/language/*.json`
    ],
    platforms: {
      css: {
        buildPath: DIST_FOLDER,
        transformGroup: 'tokens-studio',
        transforms: ['name/cti/kebab'],
        files: [
          {
            destination: `${normalizeFileName(name)}.css`,
            filter: isDesignToken,
            format: 'css/variables',
            options: {
              outputReferences: true,
            },
          },
          {
            destination: `${normalizeFileName(name)}-theme.css`,
            format: 'css/variables',
            filter: isDesignToken,
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
};

const run = async () => {
  // runLabels();
  runDesignTokens();
};

run();
