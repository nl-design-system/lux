import { describe, expect, it } from '@jest/globals';
import { MockHTMLElement } from '@stencil/core/mock-doc';
import { newSpecPage } from '@stencil/core/testing';
import { getTestableShadowElement } from './element';
import { LoginLink } from '../../components/login-link/login-link';

describe('getTestableShadowElement', () => {
  it('finds the element with the given testid', async () => {
    const page = await newSpecPage({
      components: [LoginLink],
      html: `<lux-login-link agent="digid" />`,
    });

    const result = getTestableShadowElement(page, 'label');

    expect(result).toBeInstanceOf(MockHTMLElement);
  });
});
