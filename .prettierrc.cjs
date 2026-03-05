const luxPrettierConfig = require('./.lux.prettierrc.cjs');
const nldsPrettierConfig = require('./.nlds.prettierrc.cjs');
const mergeDeep = require('./utils/helpers/mergeDeep.cjs');

module.exports = mergeDeep(nldsPrettierConfig, luxPrettierConfig);
