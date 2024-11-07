import { LuxRadioButton } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'React Components/Radio Button',
  id: 'react-components-radio-button',
  component: LuxRadioButton,
  subcomponents: {},
  parameters: {
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
    disabled: {
      description: 'Disabled state',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        category: 'HTML attribute',
      },
    },
    required: {
      description: 'Required field',
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
} satisfies Meta<typeof LuxRadioButton>;

export default meta;

const RadioButtonTemplate: Story = {
  args: {
    label: 'Option 1',
    name: 'radio-group',
  },
};

export const Playground: Story = {
  ...RadioButtonTemplate,
  name: 'Playground',
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
  tags: ['!autodocs'],
};

export const Default: Story = {
  ...RadioButtonTemplate,
  name: 'Default',
};

export const Checked: Story = {
  ...RadioButtonTemplate,
  args: {
    ...RadioButtonTemplate.args,
    checked: true,
  },
};

export const Invalid: Story = {
  ...RadioButtonTemplate,
  args: {
    ...RadioButtonTemplate.args,
    invalid: true,
  },
};

export const Required: Story = {
  ...RadioButtonTemplate,
  args: {
    ...RadioButtonTemplate.args,
    required: true,
  },
};

export const Disabled: Story = {
  ...RadioButtonTemplate,
  args: {
    ...RadioButtonTemplate.args,
    disabled: true,
  },
};

export const Hover: Story = {
  ...RadioButtonTemplate,
  parameters: {
    pseudo: { hover: true },
  },
};

export const Focus: Story = {
  ...RadioButtonTemplate,
  parameters: {
    pseudo: { focus: true, focusVisible: true },
  },
};
