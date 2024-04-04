import { describe, expect, it } from '@jest/globals';
import { MockHTMLElement } from '@stencil/core/mock-doc';
import { newSpecPage } from '@stencil/core/testing';
import { getTestableShadowElement } from './element';
import { ButtonLogin } from '../../components/button-login/button-login';

describe('getTestableShadowElement', () => {
  it('finds the element with the given testid', async () => {
    const page = await newSpecPage({
      components: [ButtonLogin],
      html: `<lux-button-login agent="digid" />`,
    });

    const result = getTestableShadowElement(page, 'label');

    expect(result).toBeInstanceOf(MockHTMLElement);
  });
});
