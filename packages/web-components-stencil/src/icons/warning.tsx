import { Component, h } from '@stencil/core';
import { applyTestId } from '../utils/test/testid';

@Component({
  tag: 'lux-icon-warning',
  styleUrl: './icon.css',
  shadow: true,
})
export class IconWarning {
  render() {
    return (
      <svg
        class="lux-icon"
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...applyTestId('icon-warning')}
        part="icon"
      >
        <path
          d="M23.38 19.64L13.67 2.47C12.94 1.17 11.07 1.17 10.33 2.47L0.620021 19.64C-0.0999792 20.92 0.820021 22.5 2.29002 22.5H21.72C23.18 22.5 24.1 20.92 23.38 19.64Z"
          style={{ fill: 'var(--_lux-icon-primary-color, #FFB612)' }}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.33 6.98L10.85 7.18H10.84V15.17L13.11 15.12V12.49L13.33 6.98ZM10.9 16.33C10.66 16.63 10.54 17.01 10.54 17.45C10.54 17.96 10.67 18.34 10.92 18.59C11.17 18.85 11.54 18.98 12.02 18.98C12.51 18.98 12.87 18.83 13.11 18.54C13.35 18.25 13.47 17.88 13.47 17.45C13.47 16.93 13.34 16.54 13.09 16.27C12.84 16.01 12.47 15.87 11.99 15.87C11.5 15.87 11.14 16.02 10.9 16.33Z"
          style={{ fill: 'var(--_lux-icon-secondary-color, black)' }}
        />
      </svg>
    );
  }
}
