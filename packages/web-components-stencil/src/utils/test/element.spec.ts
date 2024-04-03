import { describe, expect, it } from '@jest/globals';
import { MockHTMLElement } from '@stencil/core/mock-doc';
import { newSpecPage } from '@stencil/core/testing';
import { getTestableShadowElement } from './element';
import { LoginMethodButton } from '../../components/login-method-button/login-method-button';

describe('getTestableShadowElement', () => {
  it('finds the element with the given testid', async () => {
    const page = await newSpecPage({
      components: [LoginMethodButton],
      html: `<lux-login-method-button variant="digid" />`,
    });

    const result = getTestableShadowElement(page, 'label');

    expect(result).toBeInstanceOf(MockHTMLElement);
  });
});
