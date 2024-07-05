import { transform } from '@divriots/style-dictionary-to-figma';
import { permutateThemes, registerTransforms } from '@tokens-studio/sd-transforms';
import { readFile } from 'node:fs/promises';
import StyleDictionary from 'style-dictionary';
import jsonListFormat from './json-list-formatter.mjs';
import { addMediaDependentFiles } from './add-media-dependent-files.mjs';

registerTransforms(StyleDictionary);

const DELIMITER = '/';
const SRC_FOLDER = './src';
const IMPORTED_SRC_FOLDER = `${SRC_FOLDER}/imported`;
const MANUAL_SRC_FOLDER = `${SRC_FOLDER}/manual`;
const GROUP_ORDER = ['core', 'common', 'product', 'nldoc', 'mode', 'viewport', 'nl', 'nl mapping'];
const DIST_FOLDER = './dist/';
const COPY_FOLDER = './src/templates/';

const stripWords = (name) => name.replaceAll(/(_?default_?|\s\(beta\))/g, '');
const fixNLdoc = (name, postfix = '') => name.replace(/(nldoc)(\s-\s)?/, `nldoc${postfix}`);
const normalizeFileName = (name) =>
  fixNLdoc(stripWords(name.toLowerCase().replaceAll(new RegExp(`${DELIMITER}{2,}`, 'g'), '')), '/');

const cleanupNaming = (themes) => {
  return themes.map((theme) => ({
    ...theme,
    name: theme.name.toLowerCase().replaceAll(/\s\(.+\)/g, ''),
    group: theme.group.toLowerCase(),
    selectedTokenSets: Object.fromEntries(
      Object.entries(theme.selectedTokenSets).map(([key, status]) => [key.toLowerCase(), status]),
    ),
  }));
};

const cleanNldoc = (themes) => {
  const result = {};

  Object.entries(themes).forEach(([key, tokenSets]) => {
    let newKey = key.split(DELIMITER).filter(isNotDefault);
    let newTokensSets = tokenSets.map((set) => set.replaceAll(/\s+/g, '-'));

    if (!newKey.includes('nldoc')) {
      // Remove the NLdoc theme file
      newKey.pop();

      newTokensSets = newTokensSets.filter(isNotNldocTheme);
    }

    newKey = newKey.join(DELIMITER).replaceAll(/\s+/g, '-');

    result[newKey] = newTokensSets;
  });

  return result;
};

const getThemeOrder = (t) => GROUP_ORDER.indexOf(t.group);
const orderThemesByGroup = ($themes) => $themes.toSorted((a, b) => getThemeOrder(b) - getThemeOrder(a));

/**
 * Read $themes.json and clean it up
 * @returns An object
 */
const getThemes = async () => {
  let $themes = JSON.parse(await readFile(`${IMPORTED_SRC_FOLDER}/$themes.json`, 'utf-8'));
  // Type[ts]: Object[]
  $themes = orderThemesByGroup($themes);
  // $themes = cleanupNaming($themes);

  // After permutation the structure is different.
  // Type[ts]: Record<string, Array>
  let themes = permutateThemes($themes, { separator: DELIMITER });
  themes = cleanNldoc(themes);
  return themes;
};

const isNotNldocTheme = (name) => !name.startsWith('nldoc/');
const isNotDefault = (str) => str !== 'default';
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
      `${MANUAL_SRC_FOLDER}/missingTokens.json`,
      `${MANUAL_SRC_FOLDER}/missingTokens.${extractModeFromName(name)}.json`,
      ...tokenSets.map((tokenSet) => `./**/${tokenSet}.json`),
    ],
    format: {
      ...jsonListFormat,
      figmaTokensPlugin: ({ dictionary }) => {
        const transformedTokens = transform(dictionary.tokens);
        return JSON.stringify(transformedTokens, null, 2);
      },
    },
    platforms: {
      jsonx: {
        transformGroup: 'js',
        files: [
          {
            filter: excludeSystemTokens,
            destination: `${DIST_FOLDER}figma-tokens.json`,
            format: 'figmaTokensPlugin',
          },
        ],
      },
      json: {
        files: [
          {
            filter: excludeSystemTokens,
            destination: `${DIST_FOLDER}index.json`,
            format: 'json/list',
          },
        ],
      },
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
