import { registerTransforms } from '@tokens-studio/sd-transforms';
import { transform } from '@divriots/style-dictionary-to-figma';
import { readFile } from 'node:fs/promises';
import StyleDictionary from 'style-dictionary';
import { IMPORTED_SRC_FOLDER, MANUAL_SRC_FOLDER, DIST_FOLDER } from './constants.mjs';
import jsonListFormat from './json-list-formatter.mjs';

/** 
 * Transforms spacing tokens with math symbols to css calc()-values
 * NOTE: because the way references work in StyleDictionary/TokenStudio it will not transform e.g. `5 * {space.cowboy}`
 */
StyleDictionary.registerTransform({
  name: 'spacing/calc',
  type: 'value',
  transitive: true,
  matcher: function(token) {
    const {type, value, isSource} = token
    return type === 'spacing' && value.match(/[\+\-\*\/]/g);
  },
  transformer: function(token) {
    return `calc(${token.original.value})`;
  }
})

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
  const mappings = groups['nl-mapping'].map(({name}) => name);

  const logiusProducts = groups['product']
    .filter(({name}) => cleanName(name) !== 'nldoc')
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

  const nldocProducts = groups['nldoc']
    .flatMap(({name, selectedTokenSets}) => {
      const productCombinations = getProductCombinations(name, combined);

      const nlDocTokenSets = filterTokenSets(groups['product'].find(({name}) => cleanName(name) === 'nldoc').selectedTokenSets);
      selectedTokenSets = filterTokenSets(selectedTokenSets);

      return productCombinations.map(({name, mode, viewport}) => {
        const modeTokens = getTokensByMode(groups, mode);
        const viewportTokens = getTokensByViewport(groups, viewport);

        return [`nldoc/${name ? name + '/' : ''}${mode}/${viewport}`, [...nlDocTokenSets, ...selectedTokenSets, ...modeTokens, ...viewportTokens]];
      });
    }
  );

  return {
    ...Object.fromEntries(logiusProducts), 
    ...Object.fromEntries(nldocProducts),
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
      `${MANUAL_SRC_FOLDER}/missingTokens.json`,
      `${MANUAL_SRC_FOLDER}/missingTokens.${extractModeFromName(name)}.json`,
      ...tokenSets.map((tokenSet) => `./**/${tokenSet}.json`),
    ],
    include: [
      './**/core/*.json', 
      './**/common/**/*.json', 
      './**/component/*.json', 
      './**/nl/*.json', // For now, later this will be handled different.
    ],
    preprocessors: ['tokens-studio'],
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
            destination: `${DIST_FOLDER}/figma-tokens.json`,
            format: 'figmaTokensPlugin',
          },
        ],
      },
      json: {
        files: [
          {
            filter: excludeSystemTokens,
            destination: `${DIST_FOLDER}/index.json`,
            format: 'json/list',
          },
        ],
      },
      css: {
        buildPath: `${DIST_FOLDER}/`,
        transformGroup: 'tokens-studio',
        transforms: ['spacing/calc', 'name/cti/kebab', 'ts/descriptionToComment', 'ts/typography/css/fontFamily' ],
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
    console.info(`  Files used: \n${[...cfg.include, ...cfg.source].join('\n')}`);
  
    sd.cleanAllPlatforms();
    sd.buildAllPlatforms();
  });
};
