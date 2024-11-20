import { LuxFormFieldRadioOption } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';
import { BADGES } from '../../../config/preview';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'React Components/Form Field/Form Field Radio Option',
  id: 'react-components-radio-button',
  component: LuxFormFieldRadioOption,
  subcomponents: {},
  parameters: {
    badges: [BADGES.WIP, BADGES.CANARY],
    tokens,
    tokensPrefix: 'utrecht-radio-button',
  },
  argTypes: {
    invalid: {
      description: 'Invalid state indicator',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
      },
    },
    checked: {
      description: 'Checked state',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        category: 'HTML attribute',
      },
    },
    description: {
      description: 'Description for an option',
      control: 'text',
      table: {
        type: { summary: 'text' },
      },
    },
    disabled: {
      description: 'Disabled state',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        category: 'HTML attribute',
      },
    },
    // Hide other HTML attributes from controls
    name: {
      table: {
        disable: true,
        category: 'HTML attribute',
      },
    },
    id: {
      table: {
        disable: true,
        category: 'HTML attribute',
      },
    },
    className: {
      table: {
        disable: true,
        category: 'HTML attribute',
      },
    },
  },
} satisfies Meta<typeof LuxFormFieldRadioOption>;

export default meta;

const RadioButtonTemplate: Story = {
  args: {
    label: 'Option 1',
    name: 'playground',
  },
};

export const Playground: Story = {
  ...RadioButtonTemplate,
  name: 'playground',
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
  tags: ['!autodocs'],
};

export const Default: Story = {
  ...RadioButtonTemplate,
  args: {
    ...RadioButtonTemplate.args,
    name: 'default',
  },
  name: 'default',
};

export const Checked: Story = {
  ...RadioButtonTemplate,
  args: {
    ...RadioButtonTemplate.args,
    name: 'checked',
    checked: true,
  },
  name: 'checked',
};

export const Invalid: Story = {
  ...RadioButtonTemplate,
  args: {
    ...RadioButtonTemplate.args,
    name: 'invalid',
    invalid: true,
  },
  name: 'invalid',
};

export const Disabled: Story = {
  ...RadioButtonTemplate,
  args: {
    ...RadioButtonTemplate.args,
    name: 'disabled',
    disabled: true,
  },
  name: 'disabled',
};

export const Hover: Story = {
  ...RadioButtonTemplate,
  args: {
    ...RadioButtonTemplate.args,
    name: 'hover',
  },
  name: 'hover',
  parameters: {
    pseudo: { hover: true },
  },
};

export const FocusVisible: Story = {
  ...RadioButtonTemplate,
  args: {
    ...RadioButtonTemplate.args,
    name: 'focus-visible',
  },
  name: 'focus-visible',
  parameters: {
    pseudo: { focus: true, focusVisible: true },
  },
};
