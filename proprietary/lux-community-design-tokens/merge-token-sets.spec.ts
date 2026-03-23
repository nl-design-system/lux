import { describe, expect, it } from 'vitest';
import { mergeTokenSets } from './merge-token-sets.mjs';

const defaultTheme = { $themes: [{ id: 'some' }, { id: 'stuff' }] };

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

  it('should not merge themes, but only use the local ones', () => {
    const orig = { $themes: [{ id: 'some' }] };
    const add = { $themes: [{ id: 'stuff' }] };

    const [merged] = mergeTokenSets(orig, add);

    expect(merged.$themes).toStrictEqual([{ id: 'stuff' }]);
  });

  it('should not suffer from shallow copy residue', () => {
    const orig = { a: 'a', ...defaultTheme };
    const add1 = { b: 'b', $themes: [{ id: 'b' }] };
    const add2 = { c: 'c', $themes: [{ id: 'c' }] };

    mergeTokenSets(orig, add1);
    const [merged2] = mergeTokenSets(orig, add2);

    expect(merged2.$themes.find((x: { id: string }) => x.id === 'b')).not.toBeTruthy();
  });
});
