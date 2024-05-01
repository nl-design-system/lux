import '@lux/design-tokens/dist/logius/light/lg.css';
import '@lux/design-tokens/dist/logius/dark/lg.css';
import '@lux/font/src/index.scss';
import { defineCustomElements } from '@lux/web-components-stencil/loader/index.js';
import type { Preview, StoryContext } from '@storybook/react';

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
          <div className="lux-theme--dark" style={{ padding: '1rem', backgroundColor: 'black' }}>
            <Story />
          </div>
        </div>
      );
    },
  ],
  parameters: {
    controls: { expanded: false },
    options: {
      panelPosition: 'bottom',
    },
  },
};

export default preview;
