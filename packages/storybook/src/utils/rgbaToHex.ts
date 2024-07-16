const componentToHex = (c: number): string => {
  const hex = c.toString(16);
  return hex.padStart(2, '0');
};
const rgbaStringToRgbArray = (rgba: string): number[] => {
  return rgba.match(/\d+/g)?.map(Number) ?? [];
};

/**
 * Convert a `rgba` CSS color to its corresponding HEX value.
 *
 * Usage:
 * ```js
 * const blackHex = rgbaToHex('rgb(0, 0, 0)'); // #000000
 * const blackHexWithAlpha = rgbaToHex('rgba(0, 0, 0, 255)'); // #00000000
 * ```
 * @param rgba The rgba CSS color to convert
 * @returns Hex value
 */
const rgbaToHex = (rgba: string): string => {
  const [r, g, b, a] = rgbaStringToRgbArray(rgba);
  // eslint-disable-next-line eqeqeq
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}${a != null ? componentToHex(a) : ''}`;
};

export default rgbaToHex;
