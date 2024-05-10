/* @license CC0-1.0 */

import { LuxButtonLogin as ButtonLogin } from '@lux/web-components-react';
import type { JSX } from '@lux/web-components-stencil';
import type { Meta, StoryObj } from '@storybook/react';
import { PropsWithoutRef } from 'react';
import readme from './button-login.md?raw';

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
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
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
};
