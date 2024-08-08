import { Component, h } from '@stencil/core';
import { applyTestId } from '../utils/test/testid';

@Component({
  tag: 'lux-icon-chevron-right',
  styleUrl: './icon.css',
  shadow: true,
})
export class IconChevronRight {
  render() {
    return (
      <svg
        class="lux-icon"
        width="100%"
        height="100%"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...applyTestId('icon-chevron-right')}
        part="icon"
      >
        <path
          d="M4.50918 13.5412C4.00833 13.0407 3.80799 12.39 4.35893 11.8895L8.21551 8.0356L4.30884 4.13162C3.80799 3.6311 3.95824 2.98044 4.4591 2.47993C4.95995 1.97942 5.61107 1.77921 6.11192 2.32978L10.9201 7.13468C11.421 7.63519 11.421 8.43601 10.9201 8.93652L6.16201 13.6914C5.66115 14.1919 5.01004 14.0417 4.50918 13.5412Z"
          fill="currentColor"
        />
      </svg>
    );
  }
}
