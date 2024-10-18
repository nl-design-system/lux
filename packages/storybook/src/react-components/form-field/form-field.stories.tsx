import { LuxFormField } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'React Components/Form Field',
  id: 'react-components-form-field',
  component: LuxFormField,
  parameters: {
    tokens,
    tokensPrefix: 'react-form-field',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'The label for the form field',
    },
    description: {
      control: 'text',
      description: 'Additional description for the form field',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display when the field is invalid',
    },
    invalid: {
      control: 'boolean',
      description: 'Whether the field is in an invalid state',
    },
    type: {
      control: 'select',
      options: ['text', 'checkbox', 'radio'],
      description: 'The type of the form field',
    },
  },
} satisfies Meta<typeof LuxFormField>;

export default meta;
type Story = StoryObj<typeof meta>;

const FormFieldTemplate: Story = {
  render: (args) => <LuxFormField {...args} />,
};

export const TextInput: Story = {
  ...FormFieldTemplate,
  args: {
    label: 'Name',
    input: <input type="text" />,
    description: 'Enter your full name',
    type: 'text',
  },
};

export const Checkbox: Story = {
  ...FormFieldTemplate,
  args: {
    label: 'Accept terms and conditions',
    input: <input type="checkbox" />,
    type: 'checkbox',
  },
};

export const Radio: Story = {
  ...FormFieldTemplate,
  args: {
    label: 'Gender',
    input: (
      <>
        <input type="radio" id="male" name="gender" value="male" />
        <label htmlFor="male">Male</label>
        <input type="radio" id="female" name="gender" value="female" />
        <label htmlFor="female">Female</label>
      </>
    ),
    type: 'radio',
  },
};

export const WithError: Story = {
  ...FormFieldTemplate,
  args: {
    label: 'Email',
    input: <input type="email" />,
    errorMessage: 'Please enter a valid email address',
    invalid: true,
    type: 'text',
  },
};

export const WithDescription: Story = {
  ...FormFieldTemplate,
  args: {
    label: 'Password',
    input: <input type="password" />,
    description: 'Password must be at least 8 characters long',
    type: 'text',
  },
};
