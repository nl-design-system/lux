import { newSpecPage } from '@stencil/core/testing';
import { Document } from '../document';

describe('lux-document', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Document],
      html: `<lux-document></lux-document>`,
    });
    expect(page.root).toEqualHtml(`
      <lux-document>
        <mock:shadow-root>
          <div class="utrecht-document">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </lux-document>
    `);
  });
});
