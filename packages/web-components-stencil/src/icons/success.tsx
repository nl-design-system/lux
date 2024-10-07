import { Component, h } from '@stencil/core';
import { applyTestId } from '../utils/test/testid';

@Component({
  tag: 'lux-icon-success',
  styleUrl: './icon.css',
  shadow: true,
})
export class IconSuccess {
  render() {
    return (
      <svg
        class="lux-icon"
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...applyTestId('icon-success')}
        part="icon"
      >
        <path
          d="M22.04 3.78C21.88 2.83 21.16 2.11 20.21 1.95C17.48 1.5 12.91 1.5 12 1.5C11.09 1.5 6.52 1.5 3.78 1.96C2.83 2.11 2.11 2.83 1.96 3.78C1.5 6.52 1.5 11.09 1.5 12C1.5 12.91 1.5 17.48 1.96 20.22C2.12 21.17 2.84 21.89 3.79 22.05C6.53 22.51 11.09 22.51 12.01 22.51C12.92 22.51 17.49 22.51 20.23 22.05C21.18 21.89 21.9 21.17 22.06 20.22C22.52 17.48 22.52 12.92 22.52 12C22.5 9.26 22.5 6.52 22.04 3.78Z"
          style={{ fill: 'var(--_lux-icon-primary-color, #39870C)' }}
        />
        <path
          d="M16.5 7.35C16.19 7.12 15.75 7.16 15.49 7.45L11.09 12.4L8.44002 10.1C8.16002 9.86 7.75002 9.86 7.47002 10.1C7.19002 10.34 7.12002 10.75 7.31002 11.07L10.51 16.45C10.65 16.68 10.89 16.82 11.15 16.82C11.41 16.82 11.66 16.68 11.79 16.46L16.68 8.37C16.89 8.02 16.81 7.59 16.5 7.35Z"
          style={{ fill: 'var(--_lux-icon-secondary-color, white)' }}
        />
      </svg>
    );
  }
}
