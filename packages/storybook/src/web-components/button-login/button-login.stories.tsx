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

// export const Inlogstraat: Story = {
//   name: 'Inlogstraat',
//   parameters: {
//     design: {
//       type: 'figma',
//       url: 'https://www.figma.com/proto/o3Zx3k2kiCUgeOIyEwNkYg/Stijlhandleiding-aansluiten-Toegang?page-id=2%3A12&type=design&node-id=2259-5584&viewport=-1674%2C586%2C0.3&t=sqgz97kPXlwflyCw-1&scaling=contain&mode=design',
//     },
//     docs: {
//       description: {
//         component: inlogstraat,
//       },
//     },
//   }
// }
