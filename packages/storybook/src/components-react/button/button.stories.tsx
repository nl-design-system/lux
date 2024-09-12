import { LuxButton } from '@lux-design-system/components-react/src/button/Button';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'React/Button',
  id: 'components-react-button',
  component: LuxButton,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: { type: 'select' },
      options: [undefined, 'small'],
    },
    hint: {
      control: { type: 'select' },
      options: ['ready', 'warning', 'danger'],
    },
    children: {
      name: 'label',
      description: 'Button text',
      control: 'text',
    },
    busy: {
      type: 'boolean',
    },
    disabled: {
      type: 'boolean',
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
    variant: 'primary',
    size: undefined,
    hint: undefined,
    children: 'Button',
    type: undefined,
    name: '',
    value: '',
    busy: false,
    disabled: false,
    pressed: undefined,
    form: undefined,
    formAction: '',
    formMethod: '',
    formNoValidate: false,
  },
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
  tags: ['!autodocs'],
};

export const Primary: Story = {
  name: 'Primary',
  args: {
    variant: 'primary',
    size: undefined,
    children: 'Primary Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'De Primary styling zet je met `appearance="primary-action-button"`',
      },
    },
  },
};
