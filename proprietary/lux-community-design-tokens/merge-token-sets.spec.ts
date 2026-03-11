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
});
