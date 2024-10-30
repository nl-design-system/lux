/**
 * Clamp a `value` between the given `min` and `max`
 *
 * @param min the minimum value to return
 * @param value the value to clamp
 * @param max the maximum value to return
 * @returns the clamped value
 */
export const clamp = (min: number, value: number, max: number): number => Math.max(min, Math.min(value, max));
