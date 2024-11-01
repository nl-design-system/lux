import {
  LuxFormField,
  LuxFormFieldDescription,
  LuxFormFieldErrorMessage,
  LuxFormFieldLabel,
  LuxParagraph,
  LuxTextbox,
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
    input: {
      control: {
        type: 'select',
      },
      description: 'De Input van het Form Field, bijv `<LuxTextbox />`.',
      options: ['Textbox'],
      mapping: {
        Textbox: <LuxTextbox />,
      },
      table: { type: { summary: 'ReactNode' } },
    },
    type: {
      control: 'select',
      options: ['text', 'checkbox', 'radio'],
      description: 'Het type van het Form Field.',
      table: {
        defaultValue: { summary: 'text' },
      },
    },
    invalid: {
      control: 'boolean',
      description: 'Zet het Form Field in `invalid` status.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    errorMessage: {
      if: {
        arg: 'invalid',
        truthy: true,
      },
    },
    children: {
      type: 'string',
      description: 'Extra content, of als properties niet gebruikt worden, de content.',
      table: { type: { summary: 'ReactNode' } },
    },
  },
} satisfies Meta<typeof LuxFormField>;

export default meta;
type Story = StoryObj<typeof meta>;

const FormFieldTemplate: Story = {
  args: {
    input: 'Textbox',
    invalid: false,
    label: 'Form Field Label',
    description: 'Form Field Description',
    errorMessage: 'Form Field Error Message',
  },
  render: ({ ...args }) => {
    const { label, description, errorMessage, invalid, children, ...restArgs } = args;

    const labelNode = <LuxFormFieldLabel>{label}</LuxFormFieldLabel>;
    const descriptionNode = (
      <LuxFormFieldDescription>
        <LuxParagraph>{description}</LuxParagraph>
      </LuxFormFieldDescription>
    );
    const errorMessageNode = invalid ? <LuxFormFieldErrorMessage>{errorMessage}</LuxFormFieldErrorMessage> : undefined;

    return (
      <LuxFormField
        label={labelNode}
        description={descriptionNode}
        errorMessage={errorMessageNode}
        invalid={invalid}
        {...restArgs}
      >
        {children}
      </LuxFormField>
    );
  },
};

export const Playground: Story = {
  name: 'Playground',
  ...FormFieldTemplate,
  args: {
    ...FormFieldTemplate.args,
  },
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
  tags: ['!autodocs'],
};

export const FormFieldTextbox: Story = {
  name: 'Form Field met Textbox',
  ...FormFieldTemplate,
  args: {
    ...FormFieldTemplate.args,
    label: 'Voornaam',
    description: undefined,
  },
};

export const FormFieldDescription: Story = {
  name: 'Form Field met beschrijving',
  ...FormFieldTemplate,
  args: {
    ...FormFieldTemplate.args,
    label: 'Achternaam',
    description: 'Gebruikt u de naam van uw partner? Vul dan ook uw eigen achternaam in.',
  },
};

export const FormFieldError: Story = {
  name: 'Form Field met een foutmelding',
  ...FormFieldTemplate,
  args: {
    ...FormFieldTemplate.args,
    label: 'Nederlandse IBAN',
    description: undefined,
    errorMessage: 'Een Nederlandse IBAN begint altijd met NL',
    invalid: true,
  },
};

// interface FormFieldProps {
//   invalid?: boolean;
// }

// // Text Input Component
// const TextInputField = ({ invalid }: FormFieldProps) => (
//   <LuxFormField
//     type="text"
//     invalid={invalid}
//     input={<LuxTextbox id="name-input" type="text" />}
//     label={<LuxFormFieldLabel htmlFor="name-input">Name</LuxFormFieldLabel>}
//     errorMessage={<LuxFormFieldErrorMessage id="name-error">This field is required</LuxFormFieldErrorMessage>}
//     description={
//       <LuxFormFieldDescription>
//         <LuxParagraph id="name-description">Enter your full name</LuxParagraph>
//       </LuxFormFieldDescription>
//     }
//   />
// );

// //TODO: Add checkbox component when available
// // const CheckboxField = ({ invalid }: FormFieldProps) => (
// //   <LuxFormField type="checkbox" invalid={invalid}>
// //     <LuxFormFieldLabel htmlFor="terms-checkbox">Accept terms and conditions</LuxFormFieldLabel>
// //     <LuxFormFieldTextInput id="terms-checkbox" type="checkbox" aria-describedby={invalid ? 'terms-error' : undefined} />
// //     {invalid && <LuxFormFieldErrorMessage id="terms-error">You must accept the terms</LuxFormFieldErrorMessage>}
// //   </LuxFormField>
// // );

// //TODO: Add radio button component when available
// // const RadioField = ({ invalid }: FormFieldProps) => (
// //   <LuxFormField type="radio" invalid={invalid}>
// //     <LuxFormFieldLabel id="gender-group-label">Select one</LuxFormFieldLabel>
// //     <div role="radiogroup" aria-labelledby="gender-group-label">
// //       <div>
// //         <input
// //           type="radio"
// //           id="gender-male"
// //           name="gender"
// //           value="male"
// //           aria-describedby={invalid ? 'gender-error' : undefined}
// //         />
// //         <label htmlFor="gender-male">Male</label>
// //       </div>
// //       <div>
// //         <input
// //           type="radio"
// //           id="gender-female"
// //           name="gender"
// //           value="female"
// //           aria-describedby={invalid ? 'gender-error' : undefined}
// //         />
// //         <label htmlFor="gender-female">Female</label>
// //       </div>
// //     </div>
// //     {invalid && <LuxFormFieldErrorMessage id="gender-error">Please select an option</LuxFormFieldErrorMessage>}
// //   </LuxFormField>
// // );

// // Error Component
// const ErrorField = ({ invalid }: FormFieldProps) => (
//   <LuxFormField
//     type="text"
//     invalid={invalid}
//     label={<LuxFormFieldLabel htmlFor="email-input">Email</LuxFormFieldLabel>}
//     errorMessage={
//       <LuxFormFieldErrorMessage id="email-error">Please enter a valid email address</LuxFormFieldErrorMessage>
//     }
//     input={
//       <LuxTextbox id="email-input" type="email" aria-describedby={invalid ? 'email-error' : undefined} />
//     }
//   />
// );

// // Description Component
// const DescriptionField = ({ invalid }: FormFieldProps) => (
//   <LuxFormField
//     type="text"
//     invalid={invalid}
//     label={<LuxFormFieldLabel htmlFor="password-input">Password</LuxFormFieldLabel>}
//     input={
//       <LuxFormFieldTextInput
//         id="password-input"
//         type="password"
//         aria-describedby={`password-description${invalid ? ' password-error' : ''}`}
//       />
//     }
//     description={
//       <LuxFormFieldDescription>
//         <LuxParagraph id="password-description">Password must be at least 8 characters long</LuxParagraph>
//       </LuxFormFieldDescription>
//     }
//     errorMessage={<LuxFormFieldErrorMessage id="password-error">Password is too short</LuxFormFieldErrorMessage>}
//   />
// );

// export const TextInput: Story = {
//   render: (args) => <TextInputField {...args} />,
//   args: {
//     invalid: false,
//   },
// };

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

// export const WithError: Story = {
//   render: (args) => <ErrorField {...args} />,
//   args: {
//     invalid: true,
//   },
// };

// export const WithDescription: Story = {
//   render: (args) => <DescriptionField {...args} />,
//   args: {
//     invalid: false,
//   },
// };
