import { LuxCheckbox } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'React Components/Checkbox',
  id: 'react-components-checkbox',
  component: LuxCheckbox,
  subcomponents: {},
  parameters: {
    tokens,
    tokensPrefix: 'utrecht-checkbox',
  },
  argTypes: {
    checked: {
      description: 'Checked state',
      control: 'boolean',
    },
    disabled: {
      description: 'Disabled state',
      control: 'boolean',
    },
  },
} satisfies Meta<typeof LuxCheckbox>;

export default meta;

const CheckboxTemplate: Story = {
  args: {
    checked: false,
    disabled: false,
    invalid: false,
    required: false,
  },
  render: ({ ...args }) => <LuxCheckbox {...args} />,
};

export const Playground: Story = {
  ...CheckboxTemplate,
  name: 'Playground',
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
  tags: ['!autodocs'],
};

export const Default: Story = {
  name: 'Default',
  args: {},
};

export const Checked: Story = {
  name: 'Checked',
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    disabled: true,
  },
};

export const CheckedAndDisabled: Story = {
  name: 'Checked and Disabled',
  args: {
    checked: true,
    disabled: true,
  },
};

export const Hover: Story = {
  ...CheckboxTemplate,
  name: 'Hover',
  parameters: {
    pseudo: { hover: true },
  },
};

export const Focus: Story = {
  ...CheckboxTemplate,
  name: 'Focus',
  parameters: {
    pseudo: { focus: true, focusVisible: true },
  },
};

export const FocusVisible: Story = {
  ...CheckboxTemplate,
  name: 'Focus Visible',
  parameters: {
    pseudo: { focusVisible: true },
  },
};
