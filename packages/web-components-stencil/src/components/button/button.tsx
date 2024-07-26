import { Component, /* Element,*/ h /*Prop*/ } from '@stencil/core';
// import { HTMLStencilElement } from '@stencil/core/internal';

@Component({
  tag: 'lux-button',
  shadow: true,
  styleUrl: 'button.scss',
})
export class Button {
  render() {
    const classNames = { 'lux-button': true };

    return <utrecht-button class={classNames}>TEST button</utrecht-button>;
  }
}
