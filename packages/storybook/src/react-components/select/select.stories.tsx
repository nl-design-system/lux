import { LuxSelect, LuxSelectOption, type LuxSelectOptionProps } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'React Components/Form Field/Select',
  id: 'react-components-select',
  component: LuxSelect,
  subcomponents: {},
  parameters: {
    tokens,
    tokensPrefix: 'utrecht-select',
  },
  argTypes: {
    disabled: {
      description: 'disabled indicator',
      control: 'boolean',
    },
    required: {
      description: 'required indicator',
      control: 'boolean',
    },
    invalid: {
      description: 'invalid indicator',
      control: 'boolean',
    },
  },
} satisfies Meta<typeof LuxSelect>;

export default meta;

const selectOptions: LuxSelectOptionProps[] = [
  { value: '0', label: 'Select an option', disabled: true },
  { value: '1', label: 'Disabled' },
  { value: '2', label: 'Required', selected: true },
  { value: '3', label: 'Invalid' },
  { value: '4', label: 'Focus' },
  { value: '5', label: 'FocusVisible' },
  { value: '6', label: 'Hover' },
];

const SelectTemplate: Story = {
  args: {
    defaultValue: '0',
  },
  render: ({ ...args }) => (
    <LuxSelect {...args}>
      {selectOptions.map(({ label, value, disabled }, index) => (
        <LuxSelectOption key={index} value={value} disabled={disabled}>
          {label}
        </LuxSelectOption>
      ))}
    </LuxSelect>
  ),
};

export const Playground: Story = {
  ...SelectTemplate,
  name: 'Playground',
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
  tags: ['!autodocs'],
};

export const Disabled: Story = {
  ...SelectTemplate,
  args: {
    ...SelectTemplate.args,
    disabled: true,
    defaultValue: '1',
  },
};

export const Required: Story = {
  ...SelectTemplate,
  args: {
    ...SelectTemplate.args,
    required: true,
    defaultValue: '2',
  },
};

export const Invalid: Story = {
  ...SelectTemplate,
  args: {
    ...SelectTemplate.args,
    invalid: true,
    defaultValue: '3',
  },
};

export const Focus: Story = {
  ...SelectTemplate,
  args: {
    ...SelectTemplate.args,
    defaultValue: '4',
  },
  parameters: {
    pseudo: { focus: true },
  },
};

export const FocusVisible: Story = {
  ...SelectTemplate,
  args: {
    ...SelectTemplate.args,
    defaultValue: '5',
  },
  parameters: {
    pseudo: { focusVisible: true, focus: true },
  },
};

export const Hover: Story = {
  ...SelectTemplate,
  args: {
    ...SelectTemplate.args,
    defaultValue: '6',
  },
  parameters: {
    pseudo: { hover: true },
  },
};
