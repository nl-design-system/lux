import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*stories.@(js|jsx|ts|tsx)', '../src/**/*.mdx'],
  addons: [
    '@etchteam/storybook-addon-status',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
    '@storybook/addon-docs',
    '@storybook/addon-links',
    'storybook-addon-pseudo-states',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  managerHead(head) {
    return `
      ${head}
      <style>div[data-item-id$="--visual"] { display: none; }</style>
    `;
  },
  features: {},
  staticDirs: ['../../../proprietary/assets/src', '../src/assets'],
  async viteFinal(config) {
    return mergeConfig(config, {
      build: {
        minify: false,
      },
    });
  },
};

export default config;
