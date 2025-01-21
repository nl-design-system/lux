import { LuxAlert, type LuxAlertProps, LuxHeading1, LuxParagraph } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';
import { VisualTypes } from './visual/Types';
import { BADGES } from '../../../config/preview';
import { createVisualRegressionStory, VisualRegressionTest } from '../../utils';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'React Components/Alert',
  id: 'react-components-alert',
  component: LuxAlert,
  parameters: {
    badges: [BADGES.WIP, BADGES.LATEST],
    tokens,
    tokensPrefix: 'utrecht-alert',
  },
  argTypes: {
    type: {
      description: 'Type modifier',
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    children: {
      name: 'content (children)',
      description: 'Alert inhoud',
      control: 'object',
      table: {
        type: {
          summary: 'HTML Content',
        },
      },
    },
  },
} satisfies Meta<typeof LuxAlert>;

export default meta;

const AlertTemplate: Story = {
  args: {
    type: 'info',
  },
  render: ({ ...args }: LuxAlertProps, context) => (
    <LuxAlert {...args}>
      <>
        <LuxHeading1>{context.name}</LuxHeading1>
        <LuxParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis massa lorem. Ut laoreet varius rhoncus.
        </LuxParagraph>
      </>
    </LuxAlert>
  ),
};

export const Playground: Story = {
  ...AlertTemplate,
  name: 'Playground',
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
  tags: ['!autodocs'],
};

export const InfoAlert: Story = {
  ...AlertTemplate,
  args: {
    ...AlertTemplate.args,
    type: 'info',
  },
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
};

export const SuccessAlert: Story = {
  ...AlertTemplate,
  args: {
    ...AlertTemplate.args,
    type: 'success',
  },
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
};

export const WarningAlert: Story = {
  ...AlertTemplate,
  args: {
    ...AlertTemplate.args,
    type: 'warning',
  },
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
};

export const ErrorAlert: Story = {
  ...AlertTemplate,
  args: {
    ...AlertTemplate.args,
    type: 'error',
  },
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
};

export const Visual = createVisualRegressionStory(() => <VisualRegressionTest testCase={VisualTypes} />);
