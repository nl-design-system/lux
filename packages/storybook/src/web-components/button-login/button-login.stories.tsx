/* @license CC0-1.0 */

import { LuxButtonLogin as ButtonLogin } from '@lux-design-system/web-components-react';
import type { JSX } from '@lux-design-system/web-components-stencil';
import type { Meta, StoryObj } from '@storybook/react';
import { PropsWithoutRef } from 'react';
import { VisualAgents } from './visual/Agents';
import { VisualStates } from './visual/States';
import { createVisualRegressionStory, VisualRegressionWrapper } from '../../utils/createVisualRegressionStory';

const LuxButtonLogin = (props: PropsWithoutRef<JSX.LuxButtonLogin>) => <ButtonLogin {...props} />;

const meta = {
  title: 'Web Components/Button login',
  id: 'web-components-button-login',
  component: LuxButtonLogin,
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

export const Visual = createVisualRegressionStory(() => (
  <VisualRegressionWrapper>
    <VisualAgents />
    <VisualStates />
  </VisualRegressionWrapper>
));
