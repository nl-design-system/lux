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
          <utrecht-link class="lux-link">
            <slot></slot>
          </utrecht-link>
        </mock:shadow-root>
      </lux-link>
    `);
  });

  it('passes props', async () => {
    const page = await newSpecPage({
      components: [Link],
      html: `<lux-link download="download.file" href="url.html" target="_parent"></lux-link>`,
    });
    expect(page.root).toEqualHtml(`
      <lux-link class="lux-link" download="download.file" href="url.html" target="_parent">
        <mock:shadow-root>
          <utrecht-link class="lux-link" download="download.file" href="url.html" target="_parent">
            <slot></slot>
          </utrecht-link>
        </mock:shadow-root>
      </lux-link>
    `);
  });
});
