import { transform } from '@divriots/style-dictionary-to-figma';
import { registerTransforms } from '@tokens-studio/sd-transforms';
import { readFile } from 'node:fs/promises';
import StyleDictionary from 'style-dictionary';
import { DIST_FOLDER, IMPORTED_SRC_FOLDER } from './constants.mjs';

// Register the custom transforms for Style-Dictionary, to work with Design Tokens that are exported from Tokens Studio
registerTransforms(StyleDictionary);

const cleanName = (n) => n.toLowerCase().replaceAll(/\/?(default|\s\(.+\))/g, '').replaceAll(' ', '-');
const isFigmaToken = (name) => name.startsWith('figma');
const excludeSystemTokens = ({ name }) => ![isFigmaToken].some((fn) => fn(name));
const extractProductFromName = (name) => name.split('/').slice(0, -2).join('-');
const extractModeFromName = (name) => name.split('/').slice(-2, -1).toString();

/**
 * Gets the different groups from the themes object and groups them.
 * @param {*} themes
 * @returns {Object<string, object[]>} Object with groups
 */
const getThemeGroupObjects = (themes) => {
  // Sort themes by groups
  const groups = {};
  themes.forEach(theme => {
    if (theme.group) {
      groups[cleanName(theme.group)] = [...(groups[cleanName(theme.group)] ?? []), theme];
    } else {
      throw new Error(
        `Theme ${theme.name} does not have a group property, which is required for multi-dimensional theming.`,
      );
    }
  });

  return Object.entries(groups)
    .reduce((_sortedObj, [k,v]) => ({
      ..._sortedObj,
      [k]: v
    }), {});
};

/**
 * Copied from \@tokens-studio/sd-transforms;
 * @see https://github.com/tokens-studio/sd-transforms/blob/main/src/permutateThemes.ts#L55
 * @param {object} tokensets Object containing tokensets
 * @returns {string[]} Array containing filtered tokensets
 */
const filterTokenSets = (tokensets) => {
  return (
    Object.entries(tokensets)
      .filter(([, val]) => val !== 'disabled')
      // ensure source type sets are always ordered before enabled type sets
      .sort((a, b) => {
        if (a[1] === 'source' && b[1] === 'enabled') {
          return -1;
        } else if (a[1] === 'enabled' && b[1] === 'source') {
          return 1;
        }
        return 0;
      })
      .map(entry => entry[0])
  );
}

/**
 * Returns Products combined with Modes and Viewports
 * @param {string} name
 * @param {Array.<[mode: string, viewports: Array.<string>]>} combined Array with mode and viewports
 * @returns {Array.<{name: string, mode: string, viewport: string}>} Array of objects with name, mode and viewport
 */
const getProductCombinations = (name, combined) => combined.flatMap((combo) => {
  const [mode, viewports] = combo;
  return viewports.map((viewport) => ({name: cleanName(name), mode, viewport}));
});

const getTokensByMode = (groups, mode) => filterTokenSets(groups.mode.find(({name}) => name.includes(mode)).selectedTokenSets);
const getTokensByViewport = (groups, viewport) => filterTokenSets(groups['viewport'].find(({name}) => name.includes(viewport)).selectedTokenSets);

/**
 * Creates product combinations from groups of tokens
 * Product tokens combined with Mode tokens and Viewport tokens
 * @param {object} groups
 * @returns {Object.<string, Array.<string>>} Object with path as key and a array of combined tokensets
 */
const createProducts = (groups) => {
  const viewports = groups['viewport'].map(({name}) => cleanName(name));
  const modes = groups['mode'].map(({name}) => cleanName(name));
  const combined = modes.map((mode) => [mode, [...viewports]]);

  const logiusProducts = groups['product']
    .flatMap(({name, selectedTokenSets}) => {
      const productCombinations = getProductCombinations(name, combined);

      selectedTokenSets = filterTokenSets(selectedTokenSets);

      return productCombinations.map(({name, mode, viewport}) => {
        const modeTokens = getTokensByMode(groups, mode);
        const viewportTokens = getTokensByViewport(groups, viewport);

        return [`${name}/${mode}/${viewport}`, [...selectedTokenSets, ...modeTokens, ...viewportTokens]];
      });
    }
  );

  return {
    ...Object.fromEntries(logiusProducts),
  };
}

/**
 * Our version of permutateThemes
 * @param {object} themes parsed JSON object from $themes.json
 * @returns Object with path as key and a array of combined tokensets
 */
const permutateThemes = (themes) => {
  const themeGroups = getThemeGroupObjects(themes);

  return createProducts(themeGroups);
};

/**
 * Builds tokens
 *
 * @async
 * @returns
 */
export const buildTokens = async () => {
  console.info('Building Tokens');

  const $themes = JSON.parse(await readFile(`${IMPORTED_SRC_FOLDER}/$themes.json`, 'utf-8'));
  const themes = permutateThemes($themes);

  const configs = Object.entries(themes).map(([name, tokenSets]) => ({
    source: [
      ...tokenSets.map((tokenSet) => `./**/${tokenSet}.json`),
    ],
    include: [
      './**/core/*.json',
      './**/common/**/*.json',
      './**/component/*.json',
      './**/nl/*.json',
    ],
    preprocessors: ['tokens-studio'],
    format: {
      figmaTokensPlugin: ({ dictionary }) => {
        const transformedTokens = transform(dictionary.tokens);
        return JSON.stringify(transformedTokens, null, 2);
      },
    },
    platforms: {
      css: {
        buildPath: `${DIST_FOLDER}/`,
        transformGroup: 'tokens-studio',
        transforms: ['name/cti/kebab', 'ts/descriptionToComment', 'ts/typography/css/fontFamily' ],
        files: [
          {
            destination: `${name}.css`,
            filter: excludeSystemTokens,
            format: 'css/variables',
            options: {
              outputReferences: true,
              outputReferenceFallbacks: true,
            },
          },
          {
            destination: `${name}-theme.css`,
            format: 'css/variables',
            options: {
              outputReferences: true,
              selector: `.lux-theme--${extractProductFromName(name)}-${extractModeFromName(name)}`,
            },
          }
        ],
      },
    },
  }));

  configs.forEach((cfg) => {
    const sd = StyleDictionary.extend(cfg);
    console.info(`\n🔧 Building files ${cfg.platforms.css.files.map(({destination}) => destination).join(', ')}`);
    console.info(`  Files used: \n${[...cfg.include ?? [], ...cfg.source ?? []].join('\n')}`);

    sd.cleanAllPlatforms();
    sd.buildAllPlatforms();
  });
};
