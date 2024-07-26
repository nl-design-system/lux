import { LuxButton as Button } from '@lux-design-system/web-components-react';
import type { JSX } from '@lux-design-system/web-components-stencil';
import type { Meta, StoryObj } from '@storybook/react';
import { type PropsWithoutRef } from 'react';

const LuxButton = (props: PropsWithoutRef<JSX.LuxButton>) => <Button {...props} />;

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Web Components/Button',
  id: 'web-components-button',
  component: LuxButton,
  // parameters: {
  //   tokens,
  //   tokensPrefix: 'lux-button-login',
  //   tokensDefinition,
  // },
  argTypes: {
    label: {
      type: 'string',
    },
  },
} satisfies Meta<typeof LuxButton>;

export default meta;

export const Playground: Story = {
  name: 'Playground',
  args: {
    label: '',
  },
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
};
