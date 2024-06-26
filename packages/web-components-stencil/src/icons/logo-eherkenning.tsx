import { Component, h } from '@stencil/core';
import { applyTestId } from '../utils/test/testid';

@Component({
  tag: 'lux-icon-logo-eherkenning',
  styleUrl: 'logo.css',
  shadow: true,
})
export class IconLogoEherkenning {
  render() {
    return (
      <svg
        class="lux-icon lux-icon--eherkenning"
        width="100%"
        height="100%"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...applyTestId('icon-eherkenning')}
      >
        <path class="h" d="M21.3875 17.4387H25.3988V7.44183H21.3875V17.4387Z" fill="#E1126E" />
        <path class="h" d="M21.3875 31.6278H25.3988V21.3085H21.3875V31.6278Z" fill="#E1126E" />
        <path
          class="h"
          d="M35.9887 17.4387V7.44186H40V31.6279H35.9887V21.3085H25.7198L27.6452 17.4387H35.9887Z"
          fill="#E1126E"
        />
        <path
          class="e"
          d="M0 24.6946V14.3752C0 10.5459 3.08903 7.44189 6.89944 7.44189H18.6125V11.4729H6.57854C5.16078 11.4729 4.0113 12.6279 4.0113 14.0527V24.8558C4.0113 26.2805 5.16078 27.4357 6.57854 27.4357H18.6125V31.6279H6.89944C3.08903 31.6279 0 28.5239 0 24.6946Z"
          fill="#203A70"
        />
        <path class="e" d="M17.8102 17.4387L15.8848 21.3085H6.90137V17.4387H17.8102Z" fill="#203A70" />
      </svg>
    );
  }
}
