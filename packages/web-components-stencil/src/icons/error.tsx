import { Component, h } from '@stencil/core';
import { applyTestId } from '../utils/test/testid';

@Component({
  tag: 'lux-icon-error',
  styleUrl: './icon.css',
  shadow: true,
})
export class IconError {
  render() {
    return (
      <svg
        class="lux-icon"
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...applyTestId('icon-error')}
        part="icon"
      >
        <circle cx="12" cy="12" r="10.5" style={{ fill: 'var(--_lux-icon-primary-color, #D52B1E)' }} />
        <path
          d="M15.12 7.71L12 10.48L8.88 7.71C8.55 7.42 8.05 7.43 7.73 7.73C7.43 8.05 7.42 8.54 7.71 8.87L10.48 12L7.71 15.12C7.42 15.45 7.42 15.95 7.73 16.26C8.05 16.56 8.54 16.57 8.87 16.28L12 13.52L15.12 16.29C15.45 16.58 15.95 16.57 16.26 16.27C16.56 15.95 16.57 15.46 16.28 15.13L13.52 12L16.29 8.88C16.58 8.55 16.58 8.05 16.27 7.74C15.95 7.43 15.45 7.42 15.12 7.71Z"
          style={{ fill: 'var(--_lux-icon-secondary-color, white)' }}
        />
      </svg>
    );
  }
}
