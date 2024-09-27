import { Component, h } from '@stencil/core';

@Component({
  tag: 'lux-document',
  styleUrl: 'document.scss',
  shadow: true,
})
export class Document {
  render() {
    return (
      <div class="utrecht-document">
        <slot />
      </div>
    );
  }
}
