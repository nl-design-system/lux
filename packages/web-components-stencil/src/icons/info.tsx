import { Component, h } from '@stencil/core';
import { applyTestId } from '../utils/test/testid';

@Component({
  tag: 'lux-icon-info',
  styleUrl: './icon.css',
  shadow: true,
})
export class IconInfo {
  render() {
    return (
      <svg
        class="lux-icon"
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...applyTestId('icon-info')}
        part="icon"
      >
        <path
          d="M22.04 3.78C21.88 2.83 21.16 2.11 20.21 1.95C17.48 1.5 12.91 1.5 12 1.5C11.09 1.5 6.52 1.5 3.78 1.96C2.84 2.11 2.11 2.84 1.96 3.78C1.5 6.52 1.5 11.09 1.5 12C1.5 12.91 1.5 17.48 1.96 20.22C2.12 21.17 2.84 21.89 3.79 22.05C6.53 22.51 11.09 22.51 12.01 22.51C12.92 22.51 17.49 22.51 20.23 22.05C21.18 21.89 21.9 21.17 22.06 20.22C22.52 17.48 22.52 12.92 22.52 12C22.5 9.26 22.5 6.52 22.04 3.78Z"
          style={{ fill: 'var(--_lux-icon-primary-color, #007BC7)' }}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.04 6.05C10.82 6.3 10.71 6.59 10.71 6.93C10.71 7.28 10.82 7.57 11.04 7.81C11.27 8.04 11.58 8.16 11.99 8.16C12.39 8.16 12.71 8.04 12.93 7.79C13.15 7.54 13.26 7.25 13.26 6.93C13.26 6.57 13.15 6.27 12.93 6.03C12.71 5.79 12.4 5.67 11.99 5.67C11.58 5.67 11.26 5.8 11.04 6.05ZM13.11 18.28V9.32L10.9 9.41V18.28H13.11Z"
          style={{ fill: 'var(--_lux-icon-secondary-color, white)' }}
        />
      </svg>
    );
  }
}
