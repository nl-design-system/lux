import { newSpecPage } from '@stencil/core/testing';
import { Alert } from '../alert';

describe('lux-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Alert],
      html: `<lux-alert></lux-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <lux-alert>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lux-alert>
    `);
  });
});
