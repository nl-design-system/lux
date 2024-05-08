const isObject = (variable) => {
  return typeof variable === 'object' && !Array.isArray(variable) && variable !== null;
};

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
