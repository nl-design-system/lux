import {
  LuxButton as Button,
  LuxIconChevronLeft as IconChevronLeft,
  LuxIconChevronRight as IconChevronRight,
} from '@lux-design-system/web-components-react';
import type { JSX } from '@lux-design-system/web-components-stencil';
import type { Meta, StoryObj } from '@storybook/react';
import { type PropsWithChildren /*, type PropsWithoutRef */ } from 'react';

const LuxButton = (props: PropsWithChildren<JSX.LuxButton>) => <Button {...props} />;

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Web Components/Button',
  id: 'web-components-button',
  component: LuxButton,
  // parameters: {
  //   tokens,
  //   tokensPrefix: 'lux-button',
  //   tokensDefinition,
  // },
  argTypes: {
    appearance: {
      control: { type: 'select' },
      options: [undefined, 'button', 'primary-action-button', 'secondary-action-button', 'subtle-button'],
    },
    children: {
      description: 'Button text',
      control: 'text',
    },
    busy: {
      type: 'boolean',
    },
    disabled: {
      type: 'boolean',
    },
    expanded: {
      control: 'select',
      options: [undefined, 'false', 'true'],
    },
    pressed: {
      control: 'select',
      options: [undefined, 'false', 'true', 'mixed'],
    },
    type: {
      control: 'select',
      options: [undefined, 'button', 'reset', 'submit'],
      table: {
        defaultValue: {
          summary: 'button',
        },
      },
    },
  },
} satisfies Meta<typeof LuxButton>;

export default meta;

export const Playground: Story = {
  name: 'Playground',
  args: {
    appearance: 'primary-action-button',
    children: 'Button',
    type: undefined,
    name: '',
    value: '',
    busy: false,
    disabled: false,
    expanded: undefined,
    pressed: undefined,
    form: '',
    formAction: '',
    formEnctype: '',
    formMethod: '',
    formNoValidate: false,
    popoverTarget: '',
    popoverTargetAction: '',
  },
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
};

export const WithStartIcon: Story = {
  name: 'Start Icon',
  args: {
    appearance: 'primary-action-button',
  },
  render: (args) => (
    <LuxButton {...args}>
      <IconChevronLeft />
      Start Icon
    </LuxButton>
  ),
};

export const WithEndIcon: Story = {
  name: 'End Icon',
  args: {
    appearance: 'primary-action-button',
  },
  render: (args) => (
    <LuxButton {...args}>
      End Icon
      <IconChevronRight />
    </LuxButton>
  ),
};

export const WithEndIcon2: Story = {
  name: 'Child Icon',
  args: {
    appearance: 'primary-action-button',
  },
  render: (args) => (
    <LuxButton {...args}>
      <span>Between </span>
      <IconChevronRight />
      <span> Icon</span>
    </LuxButton>
  ),
};
