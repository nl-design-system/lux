const minorConfig = require('./.ncurc.minor.cjs');

module.exports = {
  ...minorConfig,
  reject: [
    ...minorConfig.reject,
    'eslint',
    'eslint-plugin-json',
    'style-dictionary', // TODO LUX-333 remove when updated
  ],
  target: 'latest',
};
