import { INPUT_TYPES, LuxFormFieldTextInput, LuxFormFieldTextInputProps } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';
import { forwardRef, InputHTMLAttributes, PropsWithChildren } from 'react';
import { BADGES } from '../../../config/preview';

// Create a wrapper component to handle the forwardRef
const WrappedLuxFormFieldTextInput = forwardRef<
  HTMLInputElement,
  PropsWithChildren<LuxFormFieldTextInputProps> & InputHTMLAttributes<HTMLInputElement>
>((props, ref) => <LuxFormFieldTextInput {...props} ref={ref} />);

WrappedLuxFormFieldTextInput.displayName = 'WrappedLuxFormFieldTextInput';

const meta = {
  title: 'React Components/Form Field/Textbox',
  id: 'react-components-form-field-textbox',
  component: WrappedLuxFormFieldTextInput,
  parameters: {
    badges: [BADGES.WIP, BADGES.CANARY],
    tokens,
    tokensPrefix: 'react-textbox',
  },
  argTypes: {
    type: {
      control: 'select',
      options: Object.values(INPUT_TYPES),
    },
    dir: {
      control: 'select',
      options: ['auto', 'ltr', 'rtl'],
    },
    disabled: {
      control: 'boolean',
    },
    focusVisible: {
      control: 'boolean',
    },
    invalid: {
      control: 'boolean',
    },
    readOnly: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    value: {
      control: 'text',
    },
    autoComplete: {
      control: 'select',
      options: [
        '',
        'additional-name',
        'address-level1',
        'address-level2',
        'address-level3',
        'address-level4',
        'address-line1',
        'address-line2',
        'address-line3',
        'bday',
        'bday-day',
        'bday-month',
        'bday-year',
        'cc-additional-name',
        'cc-csc',
        'cc-exp',
        'cc-exp-month',
        'cc-exp-year',
        'cc-family-name',
        'cc-given-name',
        'cc-name',
        'cc-number',
        'cc-type',
        'country',
        'country-name',
        'current-password',
        'email',
        'family-name',
        'fax',
        'given-name',
        'home',
        'honorific-prefix',
        'honorific-suffix',
        'impp',
        'language',
        'mobile',
        'name',
        'new-password',
        'nickname',
        'one-time-code',
        'organization',
        'organization-title',
        'pager',
        'photo',
        'postal-code',
        'sex',
        'street-address',
        'tel',
        'tel-area-code',
        'tel-country-code',
        'tel-extension',
        'tel-local',
        'tel-local-prefix',
        'tel-local-suffix',
        'tel-national',
        'transaction-amount',
        'transaction-currency',
        'url',
        'username',
        'work',
      ],
    },
    minLength: {
      control: 'number',
    },
    placeholder: {
      control: 'text',
    },
    placeholderDir: {
      control: 'select',
      options: ['auto', 'ltr', 'rtl'],
    },
    spellCheck: {
      control: 'select',
      options: ['', 'true', 'false'],
    },
    focus: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof WrappedLuxFormFieldTextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const TextInputTemplate: Story = {
  render: (args) => <WrappedLuxFormFieldTextInput {...args} />,
};

export const Playground: Story = {
  ...TextInputTemplate,
  args: {
    placeholder: 'Enter text',
    type: INPUT_TYPES.TEXT,
  },
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
};

export const Default: Story = {
  ...TextInputTemplate,
  args: {
    placeholder: 'Default text input',
  },
};

export const Naam: Story = {
  ...TextInputTemplate,
  args: {
    value: 'Sjors van Amerongen',
    autoComplete: 'name',
  },
};
export const Voornaam: Story = {
  ...TextInputTemplate,
  args: {
    value: 'Sjors',
    autoComplete: 'given-name',
  },
};
export const Achternaam: Story = {
  ...TextInputTemplate,
  args: {
    value: 'van Amerongen',
    autoComplete: 'family-name',
  },
};
export const Voorvoegsel: Story = {
  ...TextInputTemplate,
  args: {
    value: 'van Amerongen',
    autoComplete: 'name-prefix',
  },
};

export const Emailadres: Story = {
  ...TextInputTemplate,
  args: {
    type: INPUT_TYPES.EMAIL,
    placeholder: 'Vul een e-mailadres in',
    autoComplete: 'email',
  },
};
export const Website: Story = {
  ...TextInputTemplate,
  args: {
    type: INPUT_TYPES.URL,
    autoComplete: 'email',
    value: 'https://google.com',
  },
};

export const Wachtwoord: Story = {
  ...TextInputTemplate,
  args: {
    type: INPUT_TYPES.PASSWORD,
    autoComplete: 'current-password',
  },
};
export const WachtwoordKiezen: Story = {
  ...TextInputTemplate,
  args: {
    type: INPUT_TYPES.PASSWORD,
    autoComplete: 'new-password',
  },
};

export const Organisatienaam: Story = {
  ...TextInputTemplate,
  args: {
    autoComplete: 'organization',
  },
};
export const Huisnummer: Story = {
  ...TextInputTemplate,
  args: {
    maxLength: 5,
    min: 1,
    max: 99999,
    pattern: '[0-9]+',
    type: 'number',
    value: 42,
  },
};
export const Huisletter: Story = {
  ...TextInputTemplate,
  args: {
    maxLength: 1,
    min: 1,
    max: 99999,
    type: 'number',
    pattern: '[A-Za-z]+',
    value: 'Q',
  },
};

export const DatumSelecteren: Story = {
  ...TextInputTemplate,
  args: {
    type: INPUT_TYPES.DATE,
    placeholder: 'Selecteer datum',
  },
};

export const MaandSelecteren: Story = {
  ...TextInputTemplate,
  args: {
    type: INPUT_TYPES.MONTH,
    placeholder: 'Selecteer maand',
  },
};

export const TijdSelecteren: Story = {
  ...TextInputTemplate,
  args: {
    type: INPUT_TYPES.TIME,
    placeholder: 'Selecteer tijd',
  },
};

export const WeekSelecteren: Story = {
  ...TextInputTemplate,
  args: {
    type: INPUT_TYPES.WEEK,
    placeholder: 'Selecteer week',
  },
};

export const Zoekveld: Story = {
  ...TextInputTemplate,
  args: {
    type: INPUT_TYPES.SEARCH,
    placeholder: 'Zoeken...',
  },
};

export const Telefoonnummer: Story = {
  ...TextInputTemplate,
  args: {
    type: INPUT_TYPES.TEL,
    autoComplete: 'tel',
    value: '+31 30 286 00 00',
  },
};

export const Disabled: Story = {
  ...TextInputTemplate,
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
};

export const Invalid: Story = {
  ...TextInputTemplate,
  args: {
    invalid: true,
    placeholder: 'Invalid input',
  },
};

export const ReadOnly: Story = {
  ...TextInputTemplate,
  args: {
    readOnly: true,
    value: 'Read-only input',
  },
};

export const Required: Story = {
  ...TextInputTemplate,
  args: {
    required: true,
    placeholder: 'Required field',
  },
};

export const FocusVisible: Story = {
  ...TextInputTemplate,
  args: {
    focus: true,
    placeholder: 'Focused input',
  },
};

export const RTL: Story = {
  ...TextInputTemplate,
  args: {
    dir: 'rtl',
    placeholderDir: 'rtl',
  },
};
