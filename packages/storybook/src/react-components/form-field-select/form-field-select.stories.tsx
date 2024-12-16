import {
  LuxFormFieldSelect,
  type LuxFormFieldSelectOptionsProps,
  type LuxFormFieldSelectProps,
} from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';
import { BADGES } from '../../../config/preview';
import { createDesignTokensStory, createVisualRegressionStory, VisualRegressionWrapper } from '../../utils';
import FormFieldDescriptionMeta from '../form-field-description/form-field-description.stories';
import FormFieldErrorMessageMeta from '../form-field-error-message/form-field-error-message.stories';
import SelectMeta from '../select/select.stories';

const options: LuxFormFieldSelectOptionsProps[] = [
  { value: '1', label: 'Option 1', disabled: true },
  { value: '2', label: 'Option 2', selected: true },
  { value: '3', label: 'Option 3' },
];

const meta = {
  title: 'React Components/Form Field/Form Field Select',
  id: 'react-components-form-field-form-field-select',
  component: LuxFormFieldSelect,
  parameters: {
    badges: [BADGES.WIP, BADGES.CANARY],
    tokens,
    tokensPrefix: 'utrecht-form-field-select',
  },
  argTypes: {
    ...SelectMeta.argTypes,
    appearance: {
      ...FormFieldDescriptionMeta.argTypes.appearance,
    },
    distanced: {
      ...FormFieldErrorMessageMeta.argTypes.distanced,
    },
    disabled: {
      type: 'boolean',
    },
    errorMessage: {
      if: {
        arg: 'invalid',
        truthy: true,
      },
    },
  },
} satisfies Meta<LuxFormFieldSelectProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: 'Playground',
  args: {
    label: 'Label',
    options,
    description: 'Description',
    errorMessage: 'Error Message',
    invalid: false,
    appearance: undefined,
  },
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
  tags: ['!autodocs'],
};

export const Disabled: Story = {
  ...Playground,
  name: 'Disabled',
  args: {
    ...Playground.args,
    disabled: true,
  },
};

export const Invalid: Story = {
  ...Playground,
  name: 'Invalid',
  args: {
    ...Playground.args,
    invalid: true,
  },
};

export const Hover: Story = {
  ...Playground,
  name: 'Hover',
  parameters: {
    pseudo: { hover: true },
  },
};

export const Focus: Story = {
  ...Playground,
  name: 'Focus',
  parameters: {
    pseudo: { focus: true, focusVisible: true },
  },
};

export const DesignTokens = createDesignTokensStory(meta);

export const Visual = createVisualRegressionStory(() => (
  <>
    <h4 className="utrecht-heading-3">Light</h4>
    <VisualRegressionWrapper className={`lux-theme--logius-light`}>
      <LuxFormFieldSelect label="Label" options={options}></LuxFormFieldSelect>
      <LuxFormFieldSelect label="Label" options={options} description="Description" />
      <h5 className="utrecht-heading-4">Hover &amp; Focus</h5>
      <div className="pseudo-hover-all">
        <LuxFormFieldSelect label="Label" options={options} />
      </div>
      <div className="pseudo-focus-all pseudo-focus-visible-all">
        <LuxFormFieldSelect label="Label" options={options} />
      </div>
      <h5 className="utrecht-heading-4">Invalid</h5>
      <LuxFormFieldSelect label="Label" options={options} errorMessage="Error Message" invalid />
      <LuxFormFieldSelect
        label="Label"
        options={options}
        description="Description"
        errorMessage="Error Message"
        invalid
      />
      <h5 className="utrecht-heading-4">Disabled</h5>
      <LuxFormFieldSelect label="Label" options={options} disabled />
      <LuxFormFieldSelect label="Label" options={options} description="Description" disabled />
    </VisualRegressionWrapper>
    <h4 className="utrecht-heading-3">Dark</h4>
    <VisualRegressionWrapper className={`lux-theme--logius-dark`}>
      <LuxFormFieldSelect label="Label" options={options} />
      <LuxFormFieldSelect label="Label" options={options} description="Description" />
      <h5 className="utrecht-heading-4">Hover &amp; Focus</h5>
      <div className="pseudo-hover-all">
        <LuxFormFieldSelect label="Label" options={options} />
      </div>
      <div className="pseudo-focus-all pseudo-focus-visible-all">
        <LuxFormFieldSelect label="Label" options={options} />
      </div>
      <h5 className="utrecht-heading-4">Invalid</h5>
      <LuxFormFieldSelect label="Label" options={options} errorMessage="Error Message" invalid />
      <LuxFormFieldSelect
        label="Label"
        options={options}
        description="Description"
        errorMessage="Error Message"
        invalid
      />
      <h5 className="utrecht-heading-4">Disabled</h5>
      <LuxFormFieldSelect label="Label" options={options} disabled />
      <LuxFormFieldSelect label="Label" options={options} description="Description" disabled />
    </VisualRegressionWrapper>
  </>
));
