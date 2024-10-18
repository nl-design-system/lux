import { LuxFormFieldDescription, type LuxFormFieldDescriptionProps } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';
import { forwardRef, PropsWithChildren } from 'react';

// Create a wrapper component to handle the forwardRef
const WrappedLuxFormFieldDescription = forwardRef<
  HTMLParagraphElement,
  PropsWithChildren<LuxFormFieldDescriptionProps>
>((props, ref) => <LuxFormFieldDescription {...props} ref={ref} />);

WrappedLuxFormFieldDescription.displayName = 'WrappedLuxFormFieldDescription';

const meta = {
  title: 'React Components/Form Field/Description',
  id: 'react-components-form-field-description',
  component: WrappedLuxFormFieldDescription,
  parameters: {
    tokens,
    tokensPrefix: 'react-form-field-description',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The content of the form field description',
    },
    valid: {
      control: 'boolean',
      description: 'Whether the input is valid',
    },
    invalid: {
      control: 'boolean',
      description: 'Whether the input is invalid',
    },
  },
} satisfies Meta<typeof WrappedLuxFormFieldDescription>;

export default meta;
type Story = StoryObj<typeof meta>;

const FormFieldDescriptionTemplate: Story = {
  render: (args) => <WrappedLuxFormFieldDescription {...args} />,
};

export const Playground: Story = {
  ...FormFieldDescriptionTemplate,
  args: {
    children: 'Enter a description for the form field',
  },
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
};

export const Default: Story = {
  ...FormFieldDescriptionTemplate,
  args: {
    children: 'Default form field description',
  },
};

export const Valid: Story = {
  ...FormFieldDescriptionTemplate,
  args: {
    children: 'This is a valid input',
    valid: true,
  },
};

export const Invalid: Story = {
  ...FormFieldDescriptionTemplate,
  args: {
    children: 'This input is invalid',
    invalid: true,
  },
};
