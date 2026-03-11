import { describe, expect, it } from 'vitest';
import { mergeTokenSets } from './merge-token-sets.mjs';

describe('mergeTokenSets', () => {
  it('should not overwrite keys from the original', () => {
    const orig = { a: 'a' };
    const add = { a: 'b' };

    const [merged, _] = mergeTokenSets(orig, add);

    expect(merged.a).toBe('a');
  });
});
