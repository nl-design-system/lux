import { Component, Element, h, Prop } from '@stencil/core';

@Component({
  tag: 'lux-link',
  styleUrl: 'link.scss',
  shadow: true,
})
export class Link {
  @Element() hostElement!: HTMLElement;
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

  /**
   * Force the link to (visually) be in a specific user state.
   * @access private
   */
  @Prop() forceState?: 'active' | 'focus' | 'hover';

  private utrechtLinkElement?: HTMLUtrechtLinkElement;
  private linkElement?: HTMLAnchorElement | null;

  componentDidLoad() {
    this.linkElement = this.utrechtLinkElement?.shadowRoot?.querySelector('a');
    if (this.forceState) {
      let forcedClass: string[] = [`utrecht-link--${this.forceState}`];
      if (this.forceState === 'focus') {
        forcedClass.push('utrecht-link--focus-visible');
      }

      console.log(forcedClass, this.linkElement);
      this.linkElement?.classList.add(...forcedClass);
    }
  }

  render() {
    const classNames = { [`force-state--${this.forceState}`]: Boolean(this.forceState), 'lux-link': true };
    const { href, download, target } = this;

    return (
      <utrecht-link
        class={classNames}
        href={href}
        download={download}
        target={target}
        ref={(el: HTMLUtrechtLinkElement) => {
          this.utrechtLinkElement = el;
        }}
      >
        <slot />
      </utrecht-link>
    );
  }
}
