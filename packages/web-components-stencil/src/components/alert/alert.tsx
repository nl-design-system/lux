import { Component, Element, h, Prop } from '@stencil/core';

@Component({
  tag: 'lux-alert',
  styleUrl: 'alert.scss',
  shadow: true,
})
export class Alert {
  @Prop() type?: string;
  @Prop() hideIcon? = false;
  @Element() hostElement!: HTMLElement;

  // private utrechtAlertElement?: HTMLUtrechtAlertElement;

  render() {
    const { type, hideIcon } = this;

    return (
      <utrecht-alert type={type} part="utrecht-alert">
        {!hideIcon ? (
          <slot name="icon" slot="icon">
            {(() => {
              switch (type) {
                case 'info':
                  return <lux-icon-info />;
                case 'ok':
                  return <lux-icon-success />;
                case 'warning':
                  return <lux-icon-warning />;
                case 'error':
                  return <lux-icon-error />;
                default:
                  return null;
              }
            })()}
          </slot>
        ) : null}
        <slot />
      </utrecht-alert>
    );
  }
}
