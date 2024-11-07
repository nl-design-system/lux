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
