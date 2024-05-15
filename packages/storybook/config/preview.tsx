import { defineCustomElements } from '@lux/web-components-stencil/loader/index.js';
import type { Preview, StoryContext } from '@storybook/react';

import '@lux/font/src/index.scss';
import './themes';
import '../src/styles/theme.css';

defineCustomElements();

const preview: Preview = {
  decorators: [
    // Enable `utrecht-document` component as backdrop
    // Enable `utrecht-theme` to configure the design tokens
    // Ensure old html templates will be rendered as react component
    (Story: any, storyContext: StoryContext<any>) => {
      // Hack to make current args for a story available in the transformSource of the docs addon
      storyContext.parameters['args'] = storyContext.args;

      return (
        <div className="lux-theme" style={{ display: 'flex', gap: '1rem', justifyContent: 'space-around' }}>
          <div style={{ padding: '1rem' }}>
            <Story />
          </div>
          <div className="lux-theme--dark" style={{ padding: '1rem', background: 'black', color: 'white' }}>
            <Story />
          </div>
        </div>
      );
    },
  ],
  parameters: {
    backgrounds: {
      default: 'mode',
      values: [
        {
          name: 'mode',
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
      ],
    },
    chromatic: {
      disable: true,
      // Enable on story level. Not every story needs to be tested.
      disableSnapshot: true,
    },
    controls: { expanded: false },
    options: {
      showPanel: true,
      panelPosition: 'bottom',
    },
  },
};

export default preview;
