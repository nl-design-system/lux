import { LuxFormFieldDescription } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';
import { BADGES } from '../../../config/preview';

const meta = {
  title: 'React Components/Form Field/Form Field Description',
  id: 'react-components-form-field-description',
  component: LuxFormFieldDescription,
  parameters: {
    badges: [BADGES.WIP, BADGES.CANARY],
    tokens,
    tokensPrefix: 'react-form-field-description',
    docs: {
      description: {
        component: 'A description component for form fields that provides additional context or validation feedback.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The content of the description',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    appearance: {
      control: 'select',
      options: [undefined, 'valid', 'invalid'],
      description: 'Sets the appearance state of the description',
      table: {
        type: { summary: "'valid' | 'invalid' | undefined" },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
} satisfies Meta<typeof LuxFormFieldDescription>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'This is a form field description',
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground for the description component.',
      },
    },
  },
};

export const Default: Story = {
  args: {
    children: 'Enter your full name',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default description without any validation state.',
      },
    },
  },
};

export const Valid: Story = {
  args: {
    children: 'Your input meets the requirements',
    appearance: 'valid',
  },
  parameters: {
    docs: {
      description: {
        story: 'Description with valid appearance.',
      },
    },
  },
};

export const Invalid: Story = {
  args: {
    children: 'Please check the input requirements',
    appearance: 'invalid',
  },
  parameters: {
    docs: {
      description: {
        story: 'Description with invalid appearance.',
      },
    },
  },
};

export const LongDescription: Story = {
  args: {
    children:
      'This is a longer description that provides more detailed information about what is expected in this form field. It can span multiple lines if needed.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a longer description text.',
      },
    },
  },
};
