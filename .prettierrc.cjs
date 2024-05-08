const nldsPrettierConfig = require('./.nlds.prettierrc.cjs');
const luxPrettierConfig = require('./.lux.prettierrc.cjs');

const mergeDeep = require('./utils/helpers/mergeDeep.cjs');

module.exports = mergeDeep(nldsPrettierConfig, luxPrettierConfig);
