import { LuxFormFieldErrorMessage, type LuxFormFieldErrorMessageProps } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';
import { forwardRef, PropsWithChildren } from 'react';
import { VisualStates } from './visual/States';
import { BADGES } from '../../../config/preview';
import {
  createDesignTokensStory,
  createVisualRegressionStory,
  VisualRegressionTest,
  VisualRegressionWrapper,
} from '../../utils';

const WrappedLuxFormFieldErrorMessage = forwardRef<
  HTMLParagraphElement,
  PropsWithChildren<LuxFormFieldErrorMessageProps>
>((props, ref) => <LuxFormFieldErrorMessage {...props} ref={ref} />);

WrappedLuxFormFieldErrorMessage.displayName = 'WrappedLuxFormFieldErrorMessage';

const meta = {
  title: 'React Components/Form Field/Form Field Error Message',
  id: 'react-components-form-field-error-message',
  component: WrappedLuxFormFieldErrorMessage,
  parameters: {
    badges: [BADGES.WIP, BADGES.LATEST],
    tokens,
    tokensPrefix: 'utrecht-form-field-error-message',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The content of the form field error message',
    },
    distanced: {
      control: 'boolean',
      description: 'Whether the error message should be distanced from the form field',
    },
    id: {
      control: 'text',
      description: 'Unique identifier to associate it with a form input',
    },
  },
} satisfies Meta<typeof WrappedLuxFormFieldErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

const FormFieldErrorMessageTemplate: Story = {
  render: (args) => <WrappedLuxFormFieldErrorMessage {...args} />,
};

export const Playground: Story = {
  ...FormFieldErrorMessageTemplate,
  args: {
    children: 'Your password must contain at least 16 characters.',
    id: 'error-message-1',
  },
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
};

export const Default: Story = {
  ...FormFieldErrorMessageTemplate,
  args: {
    children: 'Your password must contain at least 16 characters.',
    id: 'error-message-2',
  },
};

export const Distanced: Story = {
  ...FormFieldErrorMessageTemplate,
  args: {
    children: 'Your password must contain at least 16 characters.',
    id: 'error-message-3',
    distanced: true,
  },
};

export const DesignTokens = createDesignTokensStory(meta);

export const VisualNew = createVisualRegressionStory(() => <VisualRegressionTest testCase={VisualStates} />);

export const Visual = createVisualRegressionStory(() => (
  <>
    <h4 className="utrecht-heading-3">Light</h4>
    <VisualRegressionWrapper className={`lux-theme--logius-light`}>
      <VisualStates />
    </VisualRegressionWrapper>
    <h4 className="utrecht-heading-3">Dark</h4>
    <VisualRegressionWrapper className={`lux-theme--logius-dark`}>
      <VisualStates />
    </VisualRegressionWrapper>
  </>
));
