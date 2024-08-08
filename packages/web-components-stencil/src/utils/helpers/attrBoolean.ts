/**
 * Takes a boolean or string value and returns the value, but the string `"false"` is boolean `false`.
 * Usefull when the value comes from a (html) attribute like `aria-pressed="false"`
 *
 * @param {(boolean | string | undefined)} value
 * @returns {(string | boolean | undefined)}
 */
export const attrBoolean = (value: boolean | string | undefined) => (/(false)/i.test(String(value)) ? false : value);

/**
 * Takes a boolean or string value and returns `true` or `false`, but the string `"false"` is boolean `false`.
 * Usefull when the value comes from a (html) attribute like `aria-pressed="false"`
 *
 * @param {(boolean | string | undefined)} value
 * @returns {boolean}
 */
export const fromAttrBoolean = (value: boolean | string | undefined) => !!attrBoolean(value);
