import { newSpecPage } from '@stencil/core/testing';
import { Paragraph } from '../paragraph';

describe('lux-paragraph', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Paragraph],
      html: `<lux-paragraph></lux-paragraph>`,
    });
    expect(page.root).toEqualHtml(`
      <lux-paragraph>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lux-paragraph>
    `);
  });
});
