import { Component, Element, h } from '@stencil/core';

@Component({
  tag: 'lux-paragraph',
  styleUrl: 'paragraph.scss',
  shadow: true,
})
export class Paragraph {
  @Element() hostElement!: HTMLParagraphElement;

  render() {
    return (
      <utrecht-paragraph part="utrecht-paragraph">
        <slot />
      </utrecht-paragraph>
    );
  }
}
