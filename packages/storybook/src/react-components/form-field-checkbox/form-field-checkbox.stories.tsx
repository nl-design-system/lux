import { LuxFormFieldCheckbox, type LuxFormFieldCheckboxProps } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';
import { BADGES } from '../../../config/preview';
import { createDesignTokensStory, createVisualRegressionStory, VisualRegressionWrapper } from '../../utils';
import CheckboxMeta from '../checkbox/checkbox.stories';
import FormFieldDescriptionMeta from '../form-field-description/form-field-description.stories';
import FormFieldErrorMessageMeta from '../form-field-error-message/form-field-error-message.stories';

const meta = {
  title: 'React Components/Form Field/Form Field Checkbox',
  id: 'react-components-form-field-form-field-checkbox',
  component: LuxFormFieldCheckbox,
  parameters: {
    badges: [BADGES.WIP, BADGES.CANARY],
    tokens,
    tokensPrefix: 'utrecht-form-field-checkbox',
  },
  argTypes: {
    ...CheckboxMeta.argTypes,
    description: {
      ...FormFieldDescriptionMeta.argTypes.children,
    },
    appearance: {
      ...FormFieldDescriptionMeta.argTypes.appearance,
    },
    distanced: {
      ...FormFieldErrorMessageMeta.argTypes.distanced,
    },
    disabled: {
      type: 'boolean',
    },
    withTarget: {
      type: 'boolean',
      description: 'Makes the whole inner part a click target.',
    },
    errorMessage: {
      if: {
        arg: 'invalid',
        truthy: true,
      },
    },
  },
} satisfies Meta<LuxFormFieldCheckboxProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: 'Playground',
  args: {
    label: 'Label',
    errorMessage: 'ErrorMessage',
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

export const Invalid: Story = {
  name: 'Invalid',
  args: {
    ...Playground.args,
    invalid: true,
  },
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    ...Playground.args,
    disabled: true,
  },
};

export const WithDescription: Story = {
  name: 'With Description',
  args: {
    ...Playground.args,
    description: 'Description',
  },
};

export const WithTarget: Story = {
  name: 'With Target',
  args: {
    ...Playground.args,
    withTarget: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Met `withTarget` wordt het hele component (behalve de foutmelding) een klikdoel. _Let op:_ dit kan voor gebruikers onverwacht zijn.',
      },
    },
  },
};

export const withLongTexts: Story = {
  name: 'With long texts',
  args: {
    ...Playground.args,
    label: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
    description:
      'Dolor ante id varius, aenean eu faucibus vitae malesuada. Viverra malesuada aliquam et placerat justo porta ipsum parturient.',
    errorMessage: 'Cursus nostra varius efficitur lobortis aliquam lectus bibendum',
    invalid: true,
    withTarget: true,
  },
};

export const DesignTokens = createDesignTokensStory(meta);

export const Visual = createVisualRegressionStory(() => (
  <>
    <h4 className="utrecht-heading-3">Light</h4>
    <VisualRegressionWrapper className={`lux-theme--logius-light`}>
      <LuxFormFieldCheckbox label="Label" />
      <LuxFormFieldCheckbox label="Label" checked />
      <LuxFormFieldCheckbox label="Label" description="Description" />
      <h5 className="utrecht-heading-4">Hover &amp; Focus</h5>
      <div className="pseudo-hover-all">
        <LuxFormFieldCheckbox label="Label" />
      </div>
      <div className="pseudo-focus-all pseudo-focus-visible-all">
        <LuxFormFieldCheckbox label="Label" />
      </div>
      <h5 className="utrecht-heading-4">Invalid</h5>
      <LuxFormFieldCheckbox label="Label" errorMessage="Error Message" invalid />
      <LuxFormFieldCheckbox label="Label" description="Description" errorMessage="Error Message" invalid />
      <h5 className="utrecht-heading-4">Disabled</h5>
      <LuxFormFieldCheckbox label="Label" disabled />
      <LuxFormFieldCheckbox label="Label" disabled checked />
      <LuxFormFieldCheckbox label="Label" description="Description" disabled />
    </VisualRegressionWrapper>
    <h4 className="utrecht-heading-3">Dark</h4>
    <VisualRegressionWrapper className={`lux-theme--logius-dark`}>
      <LuxFormFieldCheckbox label="Label" />
      <LuxFormFieldCheckbox label="Label" checked />
      <LuxFormFieldCheckbox label="Label" description="Description" />
      <h5 className="utrecht-heading-4">Hover &amp; Focus</h5>
      <div className="pseudo-hover-all">
        <LuxFormFieldCheckbox label="Label" />
      </div>
      <div className="pseudo-focus-all pseudo-focus-visible-all">
        <LuxFormFieldCheckbox label="Label" />
      </div>
      <h5 className="utrecht-heading-4">Invalid</h5>
      <LuxFormFieldCheckbox label="Label" errorMessage="Error Message" invalid />
      <LuxFormFieldCheckbox label="Label" description="Description" errorMessage="Error Message" invalid />
      <h5 className="utrecht-heading-4">Disabled</h5>
      <LuxFormFieldCheckbox label="Label" disabled />
      <LuxFormFieldCheckbox label="Label" disabled checked />
      <LuxFormFieldCheckbox label="Label" description="Description" disabled />
    </VisualRegressionWrapper>
  </>
));
