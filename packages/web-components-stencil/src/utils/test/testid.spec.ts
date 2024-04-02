import { describe, expect, it } from '@jest/globals';
import { Build } from '@stencil/core';
import { applyTestId, getTestIdSelector } from './testid';

describe('applyTestId', () => {
  it('creates a testid attribute in a test environment', () => {
    const result = applyTestId('foo');

    expect(result).toMatchObject({
      'data-testid': 'foo',
    });
  });

  it('does not create a testid attribute in a non-test environment', () => {
    Build.isTesting = false;
    Build.isDev = false;

    const result = applyTestId('foo');

    expect(result).toBe(null);
  });
});

describe('getTestIdSelector', () => {
  it('creates a testid selector', () => {
    const result = getTestIdSelector('foo');

    expect(result).toBe('[data-testid="foo"]');
  });
});
