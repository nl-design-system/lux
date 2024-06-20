import { permutateThemes, registerTransforms } from '@tokens-studio/sd-transforms';
import { readFile } from 'node:fs/promises';
import StyleDictionary from 'style-dictionary';

registerTransforms(StyleDictionary);

const DELIMITER = '/';
const SRC_FOLDER = 'src';
const IMPORTED_SRC_FOLDER = `${SRC_FOLDER}/imported`;
const MANUAL_SRC_FOLDER = `${SRC_FOLDER}/manual`;
const GROUP_ORDER = ['core', 'common', 'product', 'nldoc', 'mode', 'viewport', 'nl', 'nl mapping'];

const normalizeFileName = (name) =>
  name
    .toLowerCase()
    .replaceAll(/\/?(default|\s\(.+\))/g, '')
    .replaceAll(' ', '-')
    .replaceAll(new RegExp(`${DELIMITER}+`, 'g'), DELIMITER)
    .replace(new RegExp(`${DELIMITER}$`), '')
    // .replace(/(nldoc)(\s-\s)?/, 'nldoc/')

const cleanupNaming = (themes) => {
  return themes.map((theme) => ({
    ...theme,
    name: theme.name.toLowerCase().replaceAll(/\s\(.+\)/g, ''),
    group: theme.group.toLowerCase(),
    selectedTokenSets: Object.fromEntries(Object.entries(theme.selectedTokenSets).map(([key, status]) => ([
      key.toLowerCase(),
      status,
    ]))),
  }));
};

const cleanNldoc = (themes) => {
  const result = {};

  Object.entries(themes).forEach(([key, tokenSets]) => {
    let newKey = key
      .split(DELIMITER)
      .filter(isNotDefault)
    let newTokensSets = tokenSets.map(set => set.replaceAll(/\s+/g, '-'));

    if (!newKey.includes('nldoc')) {
      // Remove the NLdoc theme file
      newKey.pop();

      newTokensSets = newTokensSets.filter(isNotNldocTheme);
    }

    newKey = newKey
      .join(DELIMITER)
      .replaceAll(/\s+/g, '-')

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

async function run() {
  const $themes = await getThemes();
  const configs = Object.entries($themes).map(([name, tokenSets]) => ({
    source: [
      `${MANUAL_SRC_FOLDER}/missingTokens.json`,
      `${MANUAL_SRC_FOLDER}/missingTokens.${extractModeFromName(name)}.json`,
      ...tokenSets.map((tokenSet) => `./**/${tokenSet}.json`),
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
