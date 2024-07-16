/**
 * Convert pixels to the corresponding `rem` value
 *
 * @param px Amount of pixels to convert
 * @param base Amount of pixels equal to 1rem
 * @returns String with `rem` value
 */
export const pxToRem = (px: number | string, base: number = 16) => {
  const tempPx = `${px}`.replace('px', '');

  return (1 / base) * parseInt(tempPx, 10) + 'rem';
};
