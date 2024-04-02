/* @license CC0-1.0 */

import readme from '@lux/components-css/login-method-button/README.md?raw';
import { LuxLoginMethodButton } from '@lux/web-components-react';
import type { JSX } from '@lux/web-components-stencil';
import type { Meta, StoryObj } from '@storybook/react';
import { PropsWithoutRef } from 'react';

const LoginMethodButtonDefault = (props: PropsWithoutRef<JSX.LuxLoginMethodButton>) => (
  <LuxLoginMethodButton {...props} />
);

const meta = {
  title: 'Components/Login Method Button',
  id: 'web-component-login-method',
  component: LoginMethodButtonDefault,
  argTypes: {
    label: {
      type: 'string',
    },
    variant: {
      options: ['digid', 'digid-machtigen', 'e-herkenning', 'eidas'],
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
} satisfies Meta<typeof LoginMethodButtonDefault>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Digid: Story = {
  name: 'Digid',
  args: {
    label: '',
    variant: 'digid',
  },
};

export const DigidMachtigen: Story = {
  name: 'Digid Machtigen',
  args: {
    label: '',
    variant: 'digid-machtigen',
  },
};

export const EHerkenning: Story = {
  name: 'eHerkenning',
  args: {
    label: '',
    variant: 'e-herkenning',
  },
};

export const Eidas: Story = {
  name: 'eIDAS',
  args: {
    label: '',
    variant: 'eidas',
  },
};
