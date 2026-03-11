import { describe, expect, it } from 'vitest';
import { mergeTokenSets } from './merge-token-sets.mjs';

const defaultTheme = { $themes: ['some', 'stuff'] };

describe('mergeTokenSets', () => {
  it('should not overwrite keys from the original', () => {
    const orig = { a: 'a', ...defaultTheme };
    const add = { a: 'b', ...defaultTheme };

    const [merged] = mergeTokenSets(orig, add);

    expect(merged.a).toBe('a');
  });

  it('should record collisions when merging', () => {
    const orig = { a: 'a', ...defaultTheme };
    const add = { a: 'b', ...defaultTheme };

    const [, collisions] = mergeTokenSets(orig, add);

    expect(collisions).toStrictEqual(['a']);
  });

  it('should merge themes by concatenation', () => {
    const orig = { $themes: ['some'] };
    const add = { $themes: ['stuff'] };

    const [merged] = mergeTokenSets(orig, add);

    expect(merged.$themes).toStrictEqual(['some', 'stuff']);
  });

  it('should not suffer from shallow copy residue', () => {
    const orig = { a: 'a', ...defaultTheme };
    const add1 = { b: 'b', $themes: ['b'] };
    const add2 = { c: 'c', $themes: ['c'] };

    mergeTokenSets(orig, add1);
    const [merged2] = mergeTokenSets(orig, add2);

    expect(merged2.$themes.find((x: string) => x === 'b')).not.toBeTruthy();
  });
});
