import minorConfig from './.ncurc.minor.mjs';

export default {
  ...minorConfig,
  reject: [
    ...minorConfig.reject,
    'eslint',
    'eslint-plugin-json',
    'style-dictionary', // TODO LUX-333 remove when updated
  ],
  target: 'latest',
};
