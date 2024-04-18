import { type StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*stories.@(js|jsx|mdx|ts|tsx)'],
  addons: [
    '@etchteam/storybook-addon-status/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-docs',
    '@storybook/addon-viewport/register',
    '@storybook/preset-scss',
    '@storybook/addon-designs',
  ],
  framework: '@storybook/react-vite',
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: true,
  },
  features: {
    buildStoriesJson: true,
    storyStoreV7: true,
  },
  staticDirs: ['../../../proprietary/assets/src'],
};

export default config;
