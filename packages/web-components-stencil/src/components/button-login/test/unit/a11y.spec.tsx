import { describe, expect, it } from '@jest/globals';
import { newSpecPage } from '@stencil/core/testing';
import { getTestableShadowElement } from '../../../../utils/test/element';
import { ButtonLogin } from '../../button-login';

describe('a11y', () => {
  it('hides logo icons from the a11y tree', async () => {
    const page = await newSpecPage({
      components: [ButtonLogin],
      html: `<lux-button-login agent="digid" />`,
    });

    const logoContainerElement = getTestableShadowElement(page, 'logo');
    expect(logoContainerElement.getAttribute('aria-hidden')).toBe('true');
  });
});
