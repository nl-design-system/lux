import patchConfig from './.ncurc.patch.mjs';

export default {
  ...patchConfig,
  reject: [
    ...patchConfig.reject,
    '@tokens-studio/sd-transforms', // TODO LUX-333 remove when style-dictionary is updated
  ],
  target: 'minor',
};
