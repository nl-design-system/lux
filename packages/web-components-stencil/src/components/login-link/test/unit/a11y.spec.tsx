import { describe, expect, it } from '@jest/globals';
import { newSpecPage } from '@stencil/core/testing';
import { getTestableShadowElement } from '../../../../utils/test/element';
import { LoginLink } from '../../login-link';

describe('a11y', () => {
  it('hides logo icons from the a11y tree', async () => {
    const page = await newSpecPage({
      components: [LoginLink],
      html: `<lux-login-link agent="digid" />`,
    });

    const logoContainerElement = getTestableShadowElement(page, 'logo');
    expect(logoContainerElement.getAttribute('aria-hidden')).toBe('true');
  });

  it('identifies the agent to assistive technologies', async () => {
    const page = await newSpecPage({
      components: [LoginLink],
      html: `<lux-login-link agent="digid" />`,
    });

    const { textContent }: HTMLElement = getTestableShadowElement(page, 'label');
    expect(textContent).toMatch('met digid');
  });
});
