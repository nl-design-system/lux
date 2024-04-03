/* @license CC0-1.0 */

import readme from '@lux/components-css/button-login/README.md?raw';
import { LuxButtonLogin } from '@lux/web-components-react';
import type { JSX } from '@lux/web-components-stencil';
import type { Meta, StoryObj } from '@storybook/react';
import { PropsWithoutRef } from 'react';

const ButtonLoginDefault = (props: PropsWithoutRef<JSX.LuxButtonLogin>) => <LuxButtonLogin {...props} />;

const meta = {
  title: 'Components/Button Login',
  id: 'web-component-button-login',
  component: ButtonLoginDefault,
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
} satisfies Meta<typeof ButtonLoginDefault>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Digid: Story = {
  name: 'Digid',
  args: {
    label: '',
    agent: 'digid',
  },
};

export const DigidMachtigen: Story = {
  name: 'Digid Machtigen',
  args: {
    label: '',
    agent: 'digid-machtigen',
  },
};

export const EHerkenning: Story = {
  name: 'eHerkenning',
  args: {
    label: '',
    agent: 'eherkenning',
  },
};

export const Eidas: Story = {
  name: 'eIDAS',
  args: {
    label: '',
    agent: 'eidas',
  },
};
