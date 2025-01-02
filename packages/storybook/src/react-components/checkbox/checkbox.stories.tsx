import { LuxCheckbox } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';
import { BADGES } from '../../../config/preview';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'React Components/Checkbox',
  id: 'react-components-checkbox',
  component: LuxCheckbox,
  subcomponents: {},
  parameters: {
    badges: [BADGES.WIP, BADGES.LATEST],
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
    withTarget: {
      description: 'Sets a 44px by 44px click target around the checkbox (WCAG 2.5.5)',
      control: 'boolean',
    },
  },
} satisfies Meta<typeof LuxCheckbox>;

export default meta;

const CheckboxTemplate: Story = {
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
    defaultChecked: true,
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
    defaultChecked: true,
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

export const WithTarget: Story = {
  ...CheckboxTemplate,
  name: 'With Target',
  args: {
    withTarget: true,
  },
};
