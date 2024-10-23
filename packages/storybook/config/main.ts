import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*stories.@(js|jsx|ts|tsx)', '../src/**/*.mdx'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-backgrounds',
    '@storybook/addon-themes',
    '@storybook/addon-controls',
    '@storybook/addon-docs',
    '@storybook/addon-viewport',
    '@storybook/addon-actions',
    '@storybook/addon-interactions',
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
  docs: {
    autodocs: true,
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
