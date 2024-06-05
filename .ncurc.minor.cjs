const patchConfig = require('./.ncurc.patch.cjs');

module.exports = {
  ...patchConfig,
  reject: [...patchConfig.reject, '@tokens-studio/sd-transforms'],
  target: 'minor',
};
