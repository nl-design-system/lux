import { newSpecPage } from '@stencil/core/testing';
import { Link } from '../link';

describe('lux-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Link],
      html: `<lux-link></lux-link>`,
    });
    expect(page.root).toEqualHtml(`
      <lux-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lux-link>
    `);
  });
});
