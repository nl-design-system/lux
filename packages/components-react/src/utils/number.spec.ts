import { clamp } from './number';

describe('number utils', () => {
  describe('clamp', () => {
    const min = 0;
    const max = 10;

    it('clamps the given value to the lower threshold', () => {
      const value = -5;
      const result = clamp(min, value, max);

      expect(result).toBe(min);
    });

    it('clamps the given value to the upper threshold', () => {
      const value = 15;
      const result = clamp(min, value, max);

      expect(result).toBe(max);
    });

    it('returns the value when it is between the given boundaries', () => {
      const value = 5;
      const result = clamp(min, value, max);

      expect(result).toBe(value);
    });
  });
});
