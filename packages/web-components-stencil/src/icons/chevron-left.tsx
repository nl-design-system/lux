import { Component, h } from '@stencil/core';
import { applyTestId } from '../utils/test/testid';

@Component({
  tag: 'lux-icon-chevron-left',
  styleUrl: './icon.css',
  shadow: true,
})
export class IconChevronLeft {
  render() {
    return (
      <svg
        class="lux-icon"
        width="100%"
        height="100%"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...applyTestId('icon-chevron-left')}
        part="icon"
      >
        <path
          d="M10.4909 2.45878C10.9917 2.95929 11.1921 3.60996 10.6411 4.11047L6.78455 7.9644L10.6912 11.8684C11.1921 12.3689 11.0418 13.0196 10.541 13.5201C10.0401 14.0206 9.38899 14.2208 8.88814 13.6702L4.07993 8.86532C3.57907 8.36481 3.57907 7.56399 4.07993 7.06348L8.83805 2.30863C9.33891 1.80812 9.99002 1.95827 10.4909 2.45878Z"
          fill="currentColor"
        />
      </svg>
    );
  }
}
