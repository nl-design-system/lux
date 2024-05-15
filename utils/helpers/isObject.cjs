/**
 * Checks if variable is an object, returns boolean.
 *
 * @param {*} variable Variable to check
 * @returns {boolean} True / false
 */
const isObject = (variable) => {
  return typeof variable === 'object' && !Array.isArray(variable) && variable !== null;
};

module.exports = isObject;
