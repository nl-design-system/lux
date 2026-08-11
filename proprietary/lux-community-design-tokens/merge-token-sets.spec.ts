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

  describe('$metadata.tokenSetOrder', () => {
    it('should append the token set names of the addition', () => {
      const orig = { $metadata: { tokenSetOrder: ['brand/color'] }, ...defaultTheme };
      const add = { 'bwb/color': {}, ...defaultTheme };

      const [merged] = mergeTokenSets(orig, add);

      expect(merged.$metadata.tokenSetOrder).toStrictEqual(['brand/color', 'bwb/color']);
    });

    it('should not append keys prefixed with a $', () => {
      const orig = { $metadata: { tokenSetOrder: ['brand/color'] }, ...defaultTheme };
      const add = { 'bwb/color': {}, $metadata: { tokenSetOrder: ['bwb/other'] }, ...defaultTheme };

      const [merged] = mergeTokenSets(orig, add);

      expect(merged.$metadata.tokenSetOrder).toStrictEqual(['brand/color', 'bwb/color']);
    });

    it('should keep the token sets of the original first and in order', () => {
      const orig = { $metadata: { tokenSetOrder: ['brand/color', 'brand/space'] }, ...defaultTheme };
      const add = { 'bwb/color': {}, 'bwb/space': {}, ...defaultTheme };

      const [merged] = mergeTokenSets(orig, add);

      expect(merged.$metadata.tokenSetOrder).toStrictEqual(['brand/color', 'brand/space', 'bwb/color', 'bwb/space']);
    });

    it('should not add metadata when the original has none', () => {
      const orig = { a: 'a', ...defaultTheme };
      const add = { 'bwb/color': {}, ...defaultTheme };

      const [merged] = mergeTokenSets(orig, add);

      expect(merged.$metadata).toBeUndefined();
    });

    it('should not add a token set order when the metadata has none', () => {
      const orig = { $metadata: { activeThemes: [] }, ...defaultTheme };
      const add = { 'bwb/color': {}, ...defaultTheme };

      const [merged] = mergeTokenSets(orig, add);

      expect(merged.$metadata.tokenSetOrder).toBeUndefined();
    });

    it('should not mutate the metadata of the original', () => {
      const orig = { $metadata: { tokenSetOrder: ['brand/color'] }, ...defaultTheme };
      const add = { 'bwb/color': {}, ...defaultTheme };

      mergeTokenSets(orig, add);

      expect(orig.$metadata.tokenSetOrder).toStrictEqual(['brand/color']);
    });

    it('should not suffer from shallow copy residue', () => {
      const orig = { $metadata: { tokenSetOrder: ['brand/color'] }, ...defaultTheme };
      const add1 = { 'bwb/color': {}, ...defaultTheme };
      const add2 = { 'voorbeeld/color': {}, ...defaultTheme };

      mergeTokenSets(orig, add1);
      const [merged2] = mergeTokenSets(orig, add2);

      expect(merged2.$metadata.tokenSetOrder).toStrictEqual(['brand/color', 'voorbeeld/color']);
    });
  });
});
