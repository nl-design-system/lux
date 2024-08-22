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
          <utrecht-alert part="utrecht-alert">
            <slot name="icon" slot="icon"></slot>
            <slot></slot>
          </utrecht-alert>
        </mock:shadow-root>
      </lux-alert>
    `);
  });

  it.each([
    ['info', 'icon-info'],
    ['ok', 'icon-success'],
    ['warning', 'icon-warning'],
    ['error', 'icon-error'],
  ])('renders the correct icon', async (type: string, icon: string) => {
    const page = await newSpecPage({
      components: [Alert],
      html: `<lux-alert type="${type}"></lux-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <lux-alert type="${type}">
        <mock:shadow-root>
          <utrecht-alert part="utrecht-alert" type="${type}">
            <slot name="icon" slot="icon">
              <lux-${icon}></lux-${icon}>
            </slot>
            <slot></slot>
          </utrecht-alert>
        </mock:shadow-root>
      </lux-alert>
    `);
  });
});
