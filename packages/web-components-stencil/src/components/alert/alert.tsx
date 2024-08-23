import { Component, Element, h, Prop } from '@stencil/core';

@Component({
  tag: 'lux-alert',
  styleUrl: 'alert.scss',
  shadow: true,
})
export class Alert {
  @Prop() type!: 'info' | 'ok' | 'warning' | 'error';
  @Element() hostElement!: HTMLElement;

  render() {
    const { type } = this;

    return (
      <utrecht-alert type={type}>
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
        <slot />
      </utrecht-alert>
    );
  }
}
