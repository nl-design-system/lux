/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'lux-button',
  styleUrl: 'index.scss',
  shadow: true,
})
export class Button {
  render() {
    return (
      <button class="lux-button" type="button">
        <span class="lux-button__text">
          <slot></slot>
        </span>
      </button>
    );
  }
}
