import { LuxFormFieldRadioGroup } from '@lux-design-system/components-react';
import { Meta, StoryObj } from '@storybook/react';
import { VisualStates } from './visual/States';
import { BADGES } from '../../../config/preview';
import { createVisualRegressionStory, VisualRegressionWrapper } from '../../utils';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'React Components/Form Field/Form Field Radio Group',
  component: LuxFormFieldRadioGroup,
  subcomponents: {},
  parameters: {
    badges: [BADGES.WIP, BADGES.CANARY],
  },
  args: {
    name: 'contact-default',
    label: 'Voorkeur contactmethode',
    errorMessage: 'Selecteer een contactmethode.',
    options: [
      { value: 'email', label: 'E-mail', description: 'Gebruik het e-mailadres dat bij ons bekend is.' },
      {
        value: 'phone',
        label: 'Telefoon',
        description: (
          <>
            Gebruik een <strong>geldig</strong> telefoonnummer.
          </>
        ),
      },
      { value: 'mail', label: 'Post' },
    ],
  },
  argTypes: {
    label: {
      description: 'Label for the radio group',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    description: {
      description: 'Help text for the radio group',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    errorMessage: {
      description: 'Error message to display when invalid',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    name: {
      description: 'Name attribute for the radio group (used for form submission and ID generation)',
      control: 'text',
      table: {
        type: { summary: 'string' },
        category: 'HTML attribute',
      },
    },
    options: {
      description: 'Array of radio options with value and label properties',
      control: 'object',
      table: {
        type: {
          summary: 'Array<{ value: string; label: string; description?: React.ReactNode; disabled?: boolean; }>',
        },
      },
    },
    invalid: {
      description: 'Invalid state indicator',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
      },
    },
    required: {
      description: 'Required field indicator',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        category: 'HTML attribute',
      },
    },
    value: {
      description: 'Currently selected value (only needed for controlled components)',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof LuxFormFieldRadioGroup>;

export default meta;

export const Playground: Story = {
  args: {
    ...meta.args,
    name: 'contact-playground',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Interactieve demo van de RadioGroup component. De radio buttons krijgen automatisch unieke IDs gebaseerd op de name en value combinatie.',
      },
      sourceState: 'shown',
    },
  },
  tags: ['!autodocs'],
};

export const Default: Story = {
  args: {
    ...meta.args,
    name: 'contact-default',
    description: 'Selecteer uw voorkeurswijze voor contact.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Standaard weergave van een radio group met meerdere opties en een beschrijving.',
      },
    },
  },
};

export const Required: Story = {
  args: {
    ...meta.args,
    name: 'contact-required',
    required: true,
    description: 'Dit is een verplicht veld.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Verplicht veld met een asterisk indicator.',
      },
    },
  },
};

export const Invalid: Story = {
  args: {
    ...meta.args,
    name: 'contact-invalid',
    invalid: true,
    description: 'Kies hoe u gecontacteerd wilt worden.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio group in foutmelding status met foutbericht.',
      },
    },
  },
};

export const WithDisabledOption: Story = {
  args: {
    ...meta.args,
    name: 'contact-disabled',
    description: 'Telefonisch contact is momenteel niet beschikbaar.',
    options: [
      { value: 'email', label: 'E-mail' },
      { value: 'phone', label: 'Telefoon', disabled: true },
      { value: 'mail', label: 'Post' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio group met een uitgeschakelde optie.',
      },
    },
  },
};

export const WithLongLabels: Story = {
  args: {
    ...meta.args,
    name: 'contact-long-labels',
    description: 'Kies een contactmethode op basis van de gewenste reactietijd.',
    options: [
      { value: 'email', label: 'Contact via e-mail (standaard reactietijd: 1 werkdag)' },
      { value: 'phone', label: 'Contact via telefoon (standaard reactietijd: direct)' },
      { value: 'mail', label: 'Contact via post (standaard reactietijd: 3-5 werkdagen)' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio group met langere, beschrijvende labels.',
      },
    },
  },
};

export const Visual = createVisualRegressionStory(() => (
  <div className="utrecht-document">
    <h4 className="utrecht-heading-3">Light</h4>
    <VisualRegressionWrapper className={`lux-theme--logius-light`}>
      <VisualStates />
    </VisualRegressionWrapper>
    <h4 className="utrecht-heading-3">Dark</h4>
    <VisualRegressionWrapper className={`lux-theme--logius-dark`}>
      <VisualStates />
    </VisualRegressionWrapper>
  </div>
));
