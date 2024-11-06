import { LuxSelect, LuxSelectOption, type LuxSelectOptionProps } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'React Components/Select',
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
  { value: '', label: 'Select an option', disabled: true },
  { value: '1', label: 'Option #1' },
  { value: '2', label: 'Option #2' },
  { value: '3', label: 'Option #3' },
  { value: '4', label: 'Option #4' },
];

const SelectTemplate: Story = {
  args: {},
  render: ({ ...args }) => (
    <LuxSelect {...args}>
      {selectOptions &&
        selectOptions.length > 0 &&
        selectOptions.map(({ label, value, disabled }, index) => (
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
  args: {
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
  },
};

export const Focus: Story = {
  parameters: {
    pseudo: { focus: true },
  },
};

export const FocusVisible: Story = {
  parameters: {
    pseudo: { focusVisible: true, focus: true },
  },
};

export const Hover: Story = {
  parameters: {
    pseudo: { hover: true },
  },
};
