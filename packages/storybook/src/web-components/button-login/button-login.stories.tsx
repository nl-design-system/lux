/* @license CC0-1.0 */

import tokens from '@lux/design-tokens/dist/index.json';
import { LuxButtonLogin as ButtonLogin } from '@lux-design-system/web-components-react';
import type { JSX } from '@lux-design-system/web-components-stencil';
import type { Meta, StoryObj } from '@storybook/react';
import { type PropsWithoutRef } from 'react';
import tokensDefinition from './tokens.json';
import { VisualAgents } from './visual/Agents';
import { VisualStates } from './visual/States';
import { createDesignTokensStory, createVisualRegressionStory, VisualRegressionWrapper } from '../../utils/';

const LuxButtonLogin = (props: PropsWithoutRef<JSX.LuxButtonLogin>) => <ButtonLogin {...props} />;

const meta = {
  title: 'Web Components/Button login',
  id: 'web-components-button-login',
  component: LuxButtonLogin,
  parameters: {
    tokens,
    tokensPrefix: 'lux-button-login',
    tokensDefinition,
  },
  argTypes: {
    label: {
      type: 'string',
    },
    agent: {
      options: ['digid', 'digid-machtigen', 'eherkenning', 'eidas'],
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof LuxButtonLogin>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: 'Playground',
  args: {
    label: '',
    agent: 'digid',
  },
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
};

export const LightTheme: Story = {
  name: 'Light version',
  args: {
    label: '',
    agent: 'digid',
  },
  parameters: {
    themes: {
      themeOverride: 'Logius light',
    },
    backgrounds: {
      default: 'light',
    },
  },
};

export const DarkTheme: Story = {
  name: 'Dark version',
  args: {
    label: '',
    agent: 'digid',
  },
  parameters: {
    themes: {
      themeOverride: 'Logius dark',
    },
    backgrounds: {
      default: 'dark',
    },
  },
};

export const DesignTokens = createDesignTokensStory(meta);

export const Visual = createVisualRegressionStory(() => (
  <>
    <h4 className="lux-heading-3">Light</h4>
    <VisualRegressionWrapper className={`lux-theme--logius-light`}>
      <VisualAgents />
      <VisualStates />
    </VisualRegressionWrapper>
    <h4 className="lux-heading-3">Dark</h4>
    <VisualRegressionWrapper className={`lux-theme--logius-dark`}>
      <VisualAgents />
      <VisualStates />
    </VisualRegressionWrapper>
  </>
));
