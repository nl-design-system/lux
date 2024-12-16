import { LuxFormFieldRadioOption } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';
import { BADGES } from '../../../config/preview';
import { createVisualRegressionStory, VisualRegressionWrapper } from '../../utils';

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

export const Visual = createVisualRegressionStory(() => (
  <div className="utrecht-document">
    <h4 className="utrecht-heading-3">Light</h4>
    <VisualRegressionWrapper className={`lux-theme--logius-light`}>
      <LuxFormFieldRadioOption name="radiooption-default-light" label="Radio Option" />
      <LuxFormFieldRadioOption name="radiooption-descriptions-light" label="Radio Option" description="Description" />
      <div className="pseudo-hover-all">
        <LuxFormFieldRadioOption name="radiooption-default-light" label="Radio Option Hover" />
      </div>
      <div className="pseudo-focus-all pseudo-focus-visible-all">
        <LuxFormFieldRadioOption name="radiooption-default-light" label="Radio Option Focus" />
      </div>
      <LuxFormFieldRadioOption name="radiooption-checked-light" label="Radio Option Checked" checked />
      <LuxFormFieldRadioOption name="radiooption-disabled-light" label="Radio Option Disabled" disabled />
      <LuxFormFieldRadioOption name="radiooption-invalid-light" label="Radio Option Invalid" invalid />
    </VisualRegressionWrapper>
    <h4 className="utrecht-heading-3">Dark</h4>
    <VisualRegressionWrapper className={`lux-theme--logius-dark`}>
      <LuxFormFieldRadioOption name="radiooption-default-dark" label="Radio Option" />
      <LuxFormFieldRadioOption name="radiooption-descriptions-dark" label="Radio Option" description="Description" />
      <div className="pseudo-hover-all">
        <LuxFormFieldRadioOption name="radiooption-default-dark" label="Radio Option Hover" />
      </div>
      <div className="pseudo-focus-all pseudo-focus-visible-all">
        <LuxFormFieldRadioOption name="radiooption-default-dark" label="Radio Option Focus" />
      </div>
      <LuxFormFieldRadioOption name="radiooption-checked-dark" label="Radio Option Checked" checked />
      <LuxFormFieldRadioOption name="radiooption-disabled-dark" label="Radio Option Disabled" disabled />
      <LuxFormFieldRadioOption name="radiooption-invalid-dark" label="Radio Option Invalid" invalid />
    </VisualRegressionWrapper>
  </div>
));
