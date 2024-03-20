/**
 * Based on Danny Banks' article "Dark Mode With Style Dictionary" Multi-file
 * method, published 29th April 2021
 *
 * @see https://dbanks.design/blog/dark-mode-with-style-dictionary/#Multi-file-method
 */
// eslint-disable-next-line no-undef
const StyleDictionary = require('style-dictionary');
// const config = require('./style-dictionary.config.json');

const MODES = ['dark'];

const DIR_DIST = './dist/';
const DIR_SRC = './src/';

const PATH_TOKENS_DEFAULT = `${DIR_SRC}/**/!(*.${MODES.join(`|*.`)}).json`;

StyleDictionary.extend({
  source: [PATH_TOKENS_DEFAULT],
  platforms: {
    // ...config.platforms,
    css: {
      transformGroup: 'css',
      buildPath: DIR_DIST,
      files: [
        {
          destination: 'root.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
          },
        },
        {
          destination: 'light.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
            selector: '.lux-theme',
          },
        },
      ],
    },
  },
}).buildAllPlatforms();

MODES.forEach((mode) => {
  StyleDictionary.extend({
    include: [PATH_TOKENS_DEFAULT],
    source: [`${DIR_SRC}/**/*.${mode}.json`],
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: DIR_DIST,
        files: [
          {
            destination: `${mode}.css`,
            format: 'css/variables',
            filter: (token) => token.filePath.indexOf(`.${mode}`) > -1,
            options: {
              outputReferences: true,
              selector: `.lux-theme--${mode}`,
            },
          },
        ],
      },
    },
  }).buildAllPlatforms();
});
