import { LuxFormFieldTextbox, type LuxFormFieldTextboxProps } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';
import { BADGES } from '../../../config/preview';
import { createDesignTokensStory, createVisualRegressionStory, VisualRegressionWrapper } from '../../utils';
import FormFieldDescriptionMeta from '../form-field-description/form-field-description.stories';
import FormFieldErrorMessageMeta from '../form-field-error-message/form-field-error-message.stories';
import TextboxMeta from '../textbox/textbox.stories';

const meta = {
  title: 'React Components/Form Field/Form Field Textbox',
  id: 'react-components-form-field-form-field-textbox',
  component: LuxFormFieldTextbox,
  parameters: {
    badges: [BADGES.WIP, BADGES.CANARY],
    tokens,
    tokensPrefix: 'utrecht-form-field-textbox',
  },
  argTypes: {
    ...TextboxMeta.argTypes,
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
} satisfies Meta<LuxFormFieldTextboxProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: 'Playground',
  args: {
    label: 'Form Field Textbox',
    description: 'Textbox in een FormField',
    errorMessage: 'Zo kan het ook een ErrorMessage hebben',
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

export const DesignTokens = createDesignTokensStory(meta);

export const Visual = createVisualRegressionStory(() => (
  <>
    <h4 className="utrecht-heading-3">Light</h4>
    <VisualRegressionWrapper className={`lux-theme--logius-light`}>
      <LuxFormFieldTextbox label="Label" />
      <LuxFormFieldTextbox label="Label" description="Description" />
      <h5 className="utrecht-heading-4">Hover &amp; Focus</h5>
      <div className="pseudo-hover-all">
        <LuxFormFieldTextbox label="Label" />
      </div>
      <div className="pseudo-focus-all pseudo-focus-visible-all">
        <LuxFormFieldTextbox label="Label" />
      </div>
      <h5 className="utrecht-heading-4">Invalid</h5>
      <LuxFormFieldTextbox label="Label" errorMessage="Error Message" invalid />
      <LuxFormFieldTextbox label="Label" description="Description" errorMessage="Error Message" invalid />
      <h5 className="utrecht-heading-4">Disabled</h5>
      <LuxFormFieldTextbox label="Label" disabled />
      <LuxFormFieldTextbox label="Label" description="Description" disabled />
    </VisualRegressionWrapper>
    <h4 className="utrecht-heading-3">Dark</h4>
    <VisualRegressionWrapper className={`lux-theme--logius-dark`}>
      <LuxFormFieldTextbox label="Label" />
      <LuxFormFieldTextbox label="Label" description="Description" />
      <h5 className="utrecht-heading-4">Hover &amp; Focus</h5>
      <div className="pseudo-hover-all">
        <LuxFormFieldTextbox label="Label" />
      </div>
      <div className="pseudo-focus-all pseudo-focus-visible-all">
        <LuxFormFieldTextbox label="Label" />
      </div>
      <h5 className="utrecht-heading-4">Invalid</h5>
      <LuxFormFieldTextbox label="Label" errorMessage="Error Message" invalid />
      <LuxFormFieldTextbox label="Label" description="Description" errorMessage="Error Message" invalid />
      <h5 className="utrecht-heading-4">Disabled</h5>
      <LuxFormFieldTextbox label="Label" disabled />
      <LuxFormFieldTextbox label="Label" description="Description" disabled />
    </VisualRegressionWrapper>
  </>
));
