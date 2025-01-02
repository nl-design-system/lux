import { LuxFormFieldLabel as FormFieldLabel, LuxFormFieldLabelProps } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';
import { type LabelHTMLAttributes, type PropsWithChildren } from 'react';
import { VisualStates } from './visual/States';
import { BADGES } from '../../../config/preview';
import { createDesignTokensStory, createVisualRegressionStory, VisualRegressionWrapper } from '../../utils';

const LuxFormFieldLabel = (
  props: PropsWithChildren<LuxFormFieldLabelProps> & LabelHTMLAttributes<HTMLLabelElement>,
) => <FormFieldLabel {...props} />;

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'React Components/Form Field/Form Field Label',
  id: 'react-components-form-field-label',
  component: LuxFormFieldLabel,
  subcomponents: {},
  parameters: {
    badges: [BADGES.WIP, BADGES.CANARY],
    tokens,
    tokensPrefix: 'utrecht-form-label',
  },
  argTypes: {
    children: {
      name: 'content',
      description: 'React text',
      control: 'text',
      table: {
        type: {
          summary: 'HTML Content',
        },
      },
    },
    type: {
      control: 'select',
      options: [undefined, 'checkbox', 'radio'],
    },
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof LuxFormFieldLabel>;

export default meta;

const FormFieldLabelTemplate: Story = {
  render: ({ children, ...args }) => <LuxFormFieldLabel {...args}>{children}</LuxFormFieldLabel>,
};

const textTemplate = (name = 'Form Label') => `${name}`;

export const Playground: Story = {
  ...FormFieldLabelTemplate,
  name: 'Playground',
  args: {
    children: textTemplate(),
  },
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
  tags: ['!autodocs'],
};

export const Default: Story = {
  ...FormFieldLabelTemplate,
  name: 'Default Form Label',
  args: {
    children: textTemplate('Default Form Label'),
  },
};

export const CheckboxLabel: Story = {
  ...FormFieldLabelTemplate,
  name: 'Checkbox Label',
  args: {
    children: textTemplate('Checkbox Label'),
    type: 'checkbox',
  },
};

export const RadioLabel: Story = {
  ...FormFieldLabelTemplate,
  name: 'Radio Label',
  args: {
    children: textTemplate('Radio Label'),
    type: 'radio',
  },
};

export const DisabledLabel: Story = {
  ...FormFieldLabelTemplate,
  name: 'Disabled Label',
  args: {
    children: textTemplate('Disabled Label'),
    disabled: true,
  },
};

export const CheckedLabel: Story = {
  ...FormFieldLabelTemplate,
  name: 'Checked Label',
  args: {
    children: textTemplate('Checked Label'),
    checked: true,
    type: 'checkbox',
  },
};

export const DesignTokens = createDesignTokensStory(meta);

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
