import {
  LuxFormField,
  LuxFormFieldDescription,
  LuxFormFieldErrorMessage,
  LuxFormFieldLabel,
  LuxFormFieldTextInput,
} from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';
import { BADGES } from '../../../config/preview';

const meta = {
  title: 'React Components/Form Field',
  id: 'react-components-form-field',
  component: LuxFormField,
  parameters: {
    badges: [BADGES.WIP, BADGES.CANARY],
    tokens,
    tokensPrefix: 'react-form-field',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'checkbox', 'radio'],
      description: 'The type of the form field',
    },
    invalid: {
      control: 'boolean',
      description: 'Whether the field is in an invalid state',
      defaultValue: false,
    },
  },
} satisfies Meta<typeof LuxFormField>;

export default meta;
type Story = StoryObj<typeof meta>;

interface FormFieldProps {
  invalid?: boolean;
}

// Text Input Component
const TextInputField = ({ invalid }: FormFieldProps) => (
  <LuxFormField type="text" invalid={invalid}>
    <LuxFormFieldLabel htmlFor="name-input">Name</LuxFormFieldLabel>
    <LuxFormFieldTextInput id="name-input" type="text" />
    <LuxFormFieldDescription>
      <p id="name-description">Enter your full name</p>
    </LuxFormFieldDescription>
    {invalid && <LuxFormFieldErrorMessage id="name-error">This field is required</LuxFormFieldErrorMessage>}
  </LuxFormField>
);

//TODO: Add checkbox component when available
// const CheckboxField = ({ invalid }: FormFieldProps) => (
//   <LuxFormField type="checkbox" invalid={invalid}>
//     <LuxFormFieldLabel htmlFor="terms-checkbox">Accept terms and conditions</LuxFormFieldLabel>
//     <LuxFormFieldTextInput id="terms-checkbox" type="checkbox" aria-describedby={invalid ? 'terms-error' : undefined} />
//     {invalid && <LuxFormFieldErrorMessage id="terms-error">You must accept the terms</LuxFormFieldErrorMessage>}
//   </LuxFormField>
// );

//TODO: Add radio button component when available
// const RadioField = ({ invalid }: FormFieldProps) => (
//   <LuxFormField type="radio" invalid={invalid}>
//     <LuxFormFieldLabel id="gender-group-label">Select one</LuxFormFieldLabel>
//     <div role="radiogroup" aria-labelledby="gender-group-label">
//       <div>
//         <input
//           type="radio"
//           id="gender-male"
//           name="gender"
//           value="male"
//           aria-describedby={invalid ? 'gender-error' : undefined}
//         />
//         <label htmlFor="gender-male">Male</label>
//       </div>
//       <div>
//         <input
//           type="radio"
//           id="gender-female"
//           name="gender"
//           value="female"
//           aria-describedby={invalid ? 'gender-error' : undefined}
//         />
//         <label htmlFor="gender-female">Female</label>
//       </div>
//     </div>
//     {invalid && <LuxFormFieldErrorMessage id="gender-error">Please select an option</LuxFormFieldErrorMessage>}
//   </LuxFormField>
// );

// Error Component
const ErrorField = ({ invalid }: FormFieldProps) => (
  <LuxFormField
    type="text"
    invalid={invalid}
    label={<LuxFormFieldLabel htmlFor="email-input">Email</LuxFormFieldLabel>}
  >
    <LuxFormFieldTextInput id="email-input" type="email" aria-describedby={invalid ? 'email-error' : undefined} />
    <LuxFormFieldErrorMessage id="email-error">Please enter a valid email address</LuxFormFieldErrorMessage>
  </LuxFormField>
);

// Description Component
const DescriptionField = ({ invalid }: FormFieldProps) => (
  <LuxFormField type="text" invalid={invalid}>
    <LuxFormFieldLabel htmlFor="password-input">Password</LuxFormFieldLabel>
    <LuxFormFieldTextInput
      id="password-input"
      type="password"
      aria-describedby={`password-description${invalid ? ' password-error' : ''}`}
    />
    <LuxFormFieldDescription>
      <p id="password-description">Password must be at least 8 characters long</p>
    </LuxFormFieldDescription>
    {invalid && <LuxFormFieldErrorMessage id="password-error">Password is too short</LuxFormFieldErrorMessage>}
  </LuxFormField>
);

export const TextInput: Story = {
  render: (args) => <TextInputField {...args} />,
  args: {
    invalid: false,
  },
};

// export const Checkbox: Story = {
//   render: (args) => <CheckboxField {...args} />,
//   args: {
//     invalid: false,
//   },
// };

// export const Radio: Story = {
//   render: (args) => <RadioField {...args} />,
//   args: {
//     invalid: false,
//   },
// };

export const WithError: Story = {
  render: (args) => <ErrorField {...args} />,
  args: {
    invalid: true,
  },
};

export const WithDescription: Story = {
  render: (args) => <DescriptionField {...args} />,
  args: {
    invalid: false,
  },
};
