import { virtual } from '@guidepup/virtual-screen-reader';
import { describe, expect, it } from '@jest/globals';
import { render } from '@testing-library/react';
import React from 'react';
import { LuxSelect, LuxSelectOption } from '../Select';

describe('a11y', () => {
  it('can be found by a screen reader', async () => {
    const { container } = render(
      <LuxSelect name="gender">
        <LuxSelectOption value="Male"></LuxSelectOption>
        <LuxSelectOption value="Female"></LuxSelectOption>
        <LuxSelectOption value="Other"></LuxSelectOption>
        <LuxSelectOption value="NotSpecified">I don&apos;t want to specify</LuxSelectOption>
      </LuxSelect>,
    );

    await virtual.start({ container });
    await virtual.next();

    expect(await virtual.lastSpokenPhrase()).toEqual('option, Male, position 1, set size 4, not selected');

    await virtual.next();
    expect(await virtual.lastSpokenPhrase()).toEqual('option, Female, position 2, set size 4, not selected');

    await virtual.next();
    expect(await virtual.lastSpokenPhrase()).toEqual('option, Other, position 3, set size 4, not selected');

    await virtual.next();
    expect(await virtual.lastSpokenPhrase()).toEqual(
      `option, I don't want to specify, NotSpecified, position 4, set size 4, not selected`,
    );
  });
});
