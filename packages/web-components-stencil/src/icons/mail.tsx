import { Component, h } from '@stencil/core';
import { applyTestId } from '../utils/test/testid';

@Component({
  tag: 'lux-icon-mail',
  styleUrl: './icon.css',
  shadow: true,
})
export class IconMail {
  render() {
    return (
      <svg
        class="lux-icon"
        width="100%"
        height="100%"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...applyTestId('icon-mail')}
        part="icon"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.666626 4.06667V2.66667H15.3333V4.06667L8.99996 7.86667C8.39996 8.26667 7.59996 8.26667 6.93329 7.86667L0.666626 4.06667ZM0.666626 5.53334L6.93329 9.33334C7.59996 9.73334 8.39996 9.73334 9.06662 9.33334L15.3333 5.53334V12.6667H0.666626V5.53334Z"
          fill="currentColor"
        />
      </svg>
    );
  }
}
