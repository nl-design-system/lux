const patchConfig = require('./.ncurc.patch.cjs');

module.exports = {
  ...patchConfig,
  reject: [
    ...patchConfig.reject,
    '@tokens-studio/sd-transforms', // TODO LUX-333 remove when style-dictionary is updated
  ],
  target: 'minor',
};
