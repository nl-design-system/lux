import { LuxFormFieldDescription } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';
import { VisualStates } from './visual/States';
import { BADGES } from '../../../config/preview';
import { createDesignTokensStory, createVisualRegressionStory, VisualRegressionTest } from '../../utils';

const CustomStyleBlock = () => (
  <style>
    {`
  .lux-theme--logius-custom {
    --utrecht-form-field-description-valid-color: green;
    --utrecht-form-field-description-invalid-color: red;
  }
  `}
  </style>
);

const meta = {
  title: 'React Components/Form Field/Form Field Description',
  id: 'react-components-form-field-description',
  component: LuxFormFieldDescription,
  parameters: {
    badges: [BADGES.WIP, BADGES.LATEST],
    tokens,
    tokensPrefix: 'utrecht-form-field-description',
    docs: {
      description: {
        component: 'A description component for form fields that provides additional context or validation feedback.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The content of the description',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    appearance: {
      control: 'select',
      options: [undefined, 'valid', 'invalid'],
      description: 'Sets the appearance state of the description',
      table: {
        type: { summary: "'valid' | 'invalid' | undefined" },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
} satisfies Meta<typeof LuxFormFieldDescription>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'This is a form field description',
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground for the description component.',
      },
    },
  },
};

export const Default: Story = {
  args: {
    children: 'Enter your full name',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default description without any validation state.',
      },
    },
  },
};

export const Valid: Story = {
  args: {
    children: 'Your input meets the requirements',
    appearance: 'valid',
  },
  parameters: {
    docs: {
      description: {
        story: 'Description with valid appearance.',
      },
    },
  },
};

export const Invalid: Story = {
  args: {
    children: 'Please check the input requirements',
    appearance: 'invalid',
  },
  parameters: {
    docs: {
      description: {
        story: 'Description with invalid appearance.',
      },
    },
  },
};

export const CustomAppearance: Story = {
  args: {},
  render: () => (
    <>
      <CustomStyleBlock />
      <LuxFormFieldDescription appearance="valid" className={`lux-theme--logius-custom`}>
        Valid Form Field Description
      </LuxFormFieldDescription>
      <LuxFormFieldDescription appearance="invalid" className={`lux-theme--logius-custom`}>
        Invalid Form Field Description
      </LuxFormFieldDescription>
    </>
  ),
  parameters: {
    controls: {
      disable: true,
    },
    docs: {
      source: {
        code: null,
      },
      description: {
        story:
          'Om de `valid` en `invalid` _appearance_ een styling te geven kan dit met de `...valid.color`- en `...invalid.color`-tokens.',
      },
    },
  },
};

export const LongDescription: Story = {
  args: {
    children:
      'This is a longer description that provides more detailed information about what is expected in this form field. It can span multiple lines if needed.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a longer description text.',
      },
    },
  },
};

export const DesignTokens = createDesignTokensStory(meta);

export const Visual = createVisualRegressionStory(() => <VisualRegressionTest testCase={VisualStates} />);
