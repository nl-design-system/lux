const isObject = require('./isObject.cjs');

/**
 * Merge two objects and returns a new combined object.
 * Arrays within the objects will be concatenated.
 *
 * @param {object} baseObj Base object to merge
 * @param {object} incomingObj Other object to merge
 * @returns {object} Merged object
 */
const mergeDeep = (baseObj, incomingObj) =>
  Object.keys(incomingObj).reduce((mergedObj, key) => {
    if (isObject(baseObj[key]) && isObject(incomingObj[key])) {
      return {
        ...mergedObj,
        [key]: mergeDeep(baseObj[key], incomingObj[key]),
      };
    } else if (Array.isArray(baseObj[key]) && Array.isArray(incomingObj[key])) {
      return {
        ...mergedObj,
        [key]: [].concat(baseObj[key], incomingObj[key]),
      };
    }

    return {
      ...mergedObj,
      [key]: incomingObj[key],
    };
  }, baseObj);

module.exports = mergeDeep;
