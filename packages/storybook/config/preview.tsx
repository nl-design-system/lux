import { LuxDocument } from '@lux-design-system/components-react';
import { defineCustomElements } from '@lux-design-system/web-components-stencil/loader/index.js';
import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview, ReactRenderer } from '@storybook/react-vite';

import '@lux-design-system/font/src/index.scss';
import './themes';
import '../src/styles/theme.css';

export const BADGES = {
  WIP: 'wip',
  CANARY: 'canary',
  LATEST: 'latest',
  BETA: 'beta',
  STABLE: 'stable',
} as const;

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
        'Mijn Aansluitingen light': 'lux-theme--eva-light',
        'Mijn Aansluitingen dark': 'lux-theme--eva-dark',
        'Mijn Overheid light': 'lux-theme--mijnoverheid-light',
        'Mijn Overheid dark': 'lux-theme--mijnoverheid-dark',
        'KOOP light': 'lux-theme--koop-light',
        'KOOP dark': 'lux-theme--koop-dark',
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
      options: {
        default: {
          name: 'default',
          value: 'var(--lux-color-background-default)',
        },
        canvas: {
          name: 'canvas',
          value: 'var(--lux-color-canvas)',
        },
        boundaries: {
          /*
          Deliberately provide a background which we'd never use in production.
          This helps us identify the component boundaries. Use purple because
          it's Aline's favorite color.
          */
          name: 'boundaries',
          value: 'rebeccapurple',
        },
        transparent: {
          name: 'transparent',
          value:
            'fixed repeating-conic-gradient(#EFEFEF 0% 25%, var(--lux-color-background-default) 0% 50%) 50% / 20px 20px',
        },
        light: {
          name: 'light',
          value: 'white',
        },
        dark: {
          name: 'dark',
          value: 'black',
        },
      },
    },
    status: {
      statuses: {
        [BADGES.WIP]: {
          background: '#666666',
          color: '#ffffff',
          description: 'Work in progress',
        },
        [BADGES.CANARY]: {
          background: '#FFFF8F',
          color: '#181920',
          description: 'Alleen beschikbaar in de canary release packages',
        },
        [BADGES.LATEST]: {
          background: '#4cbb17',
          color: '#181920',
          description: 'Beschikbaar in de latest release package',
        },
        [BADGES.BETA]: {
          background: '#3065ee',
          color: '#ffffff',
          description: 'Beta',
        },
        [BADGES.STABLE]: {
          background: '#088008',
          color: '#ffffff',
          description: 'Stable',
        },
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
          'LUX',
          ['Start', 'Wat is LUX?', 'NL Design System', '*', 'Changelogs'],
          'Aan de slag',
          ['Ontwerpen', ['Aan de slag'], 'Ontwikkelen', ['Aan de slag', 'Frameworks', 'Design tokens'], 'Bijdragen'],
          'Design Tokens',
          ['Design Tokens', 'Core', 'Common'],
          'React Components',
          'Web Components',
          ['Docs', 'Playground', '*', 'Design Tokens'],
        ],
      },
    },
  },
  initialGlobals: {
    backgrounds: {
      value: 'default',
    },
  },
  tags: ['autodocs'],
};

export default preview;
