import { Component, Element, h, Prop } from '@stencil/core';

@Component({
  tag: 'lux-link',
  styleUrl: 'link.scss',
  shadow: true,
})
export class Link {
  @Element() private host!: HTMLElement;

  /**
   * Laat de browser de {@link href} als download aanbieden. Geef een string op om een bestandsnaam te suggereren
   *
   * @member string
   * @access public
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download
   */
  @Prop() public readonly download?: string;

  /**
   * @access public
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#href
   */
  @Prop() public readonly href!: string;

  /**
   * @access public
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target
   */
  @Prop() public readonly target?: HTMLAnchorElement['target'];

  render() {
    const className = {
      [this.host.className]: Boolean(this.host.className),
      'lux-link': true,
    };
    console.log({ className, host: this.host });
    const { href, download, target } = this;

    return (
      <utrecht-link className={`lux-link`} href={href} download={download} target={target}>
        <slot />
      </utrecht-link>
    );
  }
}
