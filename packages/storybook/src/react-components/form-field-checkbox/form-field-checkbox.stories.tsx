import { LuxFormFieldCheckbox, type LuxFormFieldCheckboxProps } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';
import { BADGES } from '../../../config/preview';
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

export const WithDescription: Story = {
  name: 'With Description',
  args: {
    ...Playground.args,
    description: 'Description',
  },
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

export const WithTarget: Story = {
  name: 'With Target',
  args: {
    ...Playground.args,
    withTarget: true,
  },
};
