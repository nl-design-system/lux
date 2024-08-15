import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'lux-link',
  styleUrl: 'link.scss',
  shadow: true,
})
export class Link {
  /**
   * Laat de browser de {@link href} als download aanbieden. Geef een string op om een bestandsnaam te suggereren
   *
   * @member string
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download
   */
  @Prop() public readonly download?: string;

  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#href
   */
  @Prop() public readonly href!: string;

  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target
   */
  @Prop() public readonly target?: HTMLAnchorElement['target'];

  render() {
    const { href, download, target } = this;

    return (
      <utrecht-link href={href} download={download} target={target}>
        <slot />
      </utrecht-link>
    );
  }
}
