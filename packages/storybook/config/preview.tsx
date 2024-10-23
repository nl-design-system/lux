import { BADGE_LOCATION } from '@geometricpanda/storybook-addon-badges';
import { LuxDocument } from '@lux-design-system/components-react';
import { defineCustomElements } from '@lux-design-system/web-components-stencil/loader/index.js';
import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview, ReactRenderer } from '@storybook/react';

import '@lux-design-system/font/src/index.scss';
import './themes';
import '../src/styles/theme.css';

/* eslint-disable no-unused-vars */
export enum BADGES {
  WIP = 'wip',
  CANARY = 'canary',
  LATEST = 'latest',
}
/* eslint-enable */

defineCustomElements();

const preview: Preview = {
  decorators: [
    // LUX-303: Spike - Mogelijkheid thema's en modus te splitsen in Storybook themes.
    withThemeByClassName<ReactRenderer>({
      themes: {
        'DigiD light': 'lux-theme--digid-light',
        'DigiD dark': 'lux-theme--digid-dark',
        'Logius light': 'lux-theme--logius-light',
        'Logius dark': 'lux-theme--logius-dark',
        'Mijn Overheid light': 'lux-theme--mijnoverheid-light',
        'Mijn Overheid dark': 'lux-theme--mijnoverheid-dark',
        'NLdoc light': 'lux-theme--nldoc-light',
        'NLdoc dark': 'lux-theme--nldoc-dark',
      },
      defaultTheme: 'Logius light',
    }),
    (Story, { parameters: { withDocument = true } }) =>
      withDocument ? (
        <LuxDocument>
          <Story />
        </LuxDocument>
      ) : (
        <Story />
      ),
  ],
  parameters: {
    backgrounds: {
      default: 'default',
      values: [
        {
          name: 'default',
          value: 'var(--lux-color-background-default)',
        },
        {
          /*
          Deliberately provide a background which we'd never use in production.
          This helps us identify the component boundaries. Use purple because
          it's Aline's favorite color.
          */
          name: 'boundaries',
          value: 'rebeccapurple',
        },
        {
          name: 'transparent',
          value:
            'fixed repeating-conic-gradient(#CCC 0% 25%, var(--lux-color-background-default) 0% 50%) 50% / 20px 20px',
        },
        {
          name: 'light',
          value: 'white',
        },
        {
          name: 'dark',
          value: 'black',
        },
      ],
    },
    badgesConfig: {
      [BADGES.WIP]: {
        location: [BADGE_LOCATION.TOOLBAR],
        title: 'W.I.P.',
        tooltip: 'Work in progress',
      },
      [BADGES.CANARY]: {
        styles: {
          backgroundColor: '#FFFF8F', // Canary Yellow
          borderColor: '#bfbf6b',
          textTransform: 'none',
        },
        location: [BADGE_LOCATION.TOOLBAR_EXTRA],
        title: 'Canary',
        tooltip: 'Alleen beschikbaar in de canary release packages',
      },
      [BADGES.LATEST]: {
        styles: {
          backgroundColor: '#4cbb17',
          borderColor: '#398c11',
          color: '#181920', // Contrast Ratio: 7.03:1
          textTransform: 'none',
        },
        location: [BADGE_LOCATION.TOOLBAR_EXTRA],
        title: 'Latest',
        tooltip: 'Beschikbaar in de latest release package',
      },
    },
    chromatic: {
      disable: true,
      // Enable on story level. Not every story needs to be tested.
      disableSnapshot: true,
    },
    controls: { expanded: false },
    docs: {
      toc: {
        headingSelector: 'h2',
        title: 'Op deze pagina',
      },
    },
    options: {
      showPanel: true,
      panelPosition: 'bottom',
      storySort: {
        order: [
          'Intro',
          'Design Tokens',
          ['Design Tokens', 'Core', 'Common'],
          'React Components',
          'Web Components',
          ['Docs', 'Playground', '*', 'Design Tokens'],
          '*',
          'Colofon',
        ],
      },
    },
  },
};

export default preview;
