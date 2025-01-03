/**
 * Pick only certain keys form object.
 *
 * @export
 * @template {object} T
 * @template {keyof T} U
 * @param {T} obj Object to pick from
 * @param {Array<U>} keys Keys to pick
 * @returns {Pick<T, U>} Object containing only picked keys
 */
export function pick<T extends object, U extends keyof T>(obj: T, keys: Array<U>): Pick<T, U> {
  const ret = {} as Pick<T, U>;
  for (const k of keys) {
    ret[k] = obj[k];
  }
  return ret;
}
