import { virtual } from '@guidepup/virtual-screen-reader';
import { describe, expect, it } from '@jest/globals';
import { render } from '@testing-library/react';
import React from 'react';
import { LuxFormFieldRadioGroup } from '../FormFieldRadioGroup';

describe('a11y', () => {
  const defaultProps = {
    name: 'test-group',
    label: 'Test Group',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  };

  it('can be found by a screen reader', async () => {
    // This could be even in a separate file
    const { container } = render(
      <div role="contentinfo">
        <LuxFormFieldRadioGroup {...defaultProps} />
      </div>,
    );

    await virtual.start({ container });
    // This `while` statement navigates through the component using the
    //  Virtual Screen Reader to speak the text whereever the cursor is located.
    //  It will continue until it reaches the end of the element with role="contentinfo",
    while ((await virtual.lastSpokenPhrase()) !== 'end of contentinfo') {
      // `.next()` moves the Virtual cursor to the next location.
      await virtual.next();
    }

    // This could be even in a separate file
    const expected = [
      'contentinfo',
      'radiogroup, Test Group',
      'legend, Test Group',
      'radio, Option 1, not checked, position 1, set size 3',
      'Option 1',
      'radio, Option 2, not checked, position 2, set size 3',
      'Option 2',
      'radio, Option 3, not checked, position 3, set size 3',
      'Option 3',
      'end of radiogroup, Test Group',
      'end of contentinfo',
    ];

    expect(await virtual.spokenPhraseLog()).toEqual(expected);
  });
});
