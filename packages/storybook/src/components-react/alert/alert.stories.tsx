import { LuxAlert as Alert } from '@lux-design-system/components-react/src/Alert';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import { LuxButton as Button, LuxParagraph as Paragraph } from '@lux-design-system/web-components-react';
import type { JSX } from '@lux-design-system/web-components-stencil';
import { useState } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';
import { type HTMLAttributes, type PropsWithChildren } from 'react';
import { createDesignTokensStory, createVisualRegressionStory, VisualRegressionWrapper } from '../../utils';

const LuxAlert = (props: PropsWithChildren<JSX.LuxAlert> & HTMLAttributes<HTMLLuxAlertElement>) => <Alert {...props} />;
const LuxParagraph = ({ children }: any) => <Paragraph>{children}</Paragraph>;
const LuxButton = (props: PropsWithChildren<JSX.LuxButton> & HTMLAttributes<HTMLLuxButtonElement>) => (
  <Button {...props} />
);

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Components React/Alert',
  id: 'components-react-alert',
  component: LuxAlert,
  subcomponents: { LuxParagraph },
  parameters: {
    tokens,
    tokensPrefix: 'react-alert',
    // tokensDefinition,
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
      type: 'string',
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    closable: {
      type: 'boolean',
      control: 'boolean',
    },
  },
} satisfies Meta<typeof LuxAlert>;

export default meta;

const AlertTemplate: Story = {
  render: ({ children, ...args }) => (
    <LuxAlert {...args}>
      <LuxParagraph>{children}</LuxParagraph>
    </LuxAlert>
  ),
  args: {
    type: 'info',
  },
};

const textTemplate = (name = 'dolor sit amet') =>
  `Lorem ipsum ${name}, consectetuer adipiscing elit. Dolor ante id varius, aenean eu faucibus vitae malesuada. Viverra malesuada aliquam et placerat justo porta ipsum parturient. Cursus nostra varius efficitur lobortis aliquam lectus bibendum.`;

export const Playground: Story = {
  ...AlertTemplate,
  name: 'Playground',
  args: {
    children: textTemplate(),
    type: 'success',
    closable: true,
  },
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
  tags: ['!autodocs'],
};

export const Info: Story = {
  ...AlertTemplate,
  name: 'Info',
  args: {
    type: 'info',
    children: textTemplate('Info alert'),
    title: 'Info',
    closable: true,
  },
};

export const Ok: Story = {
  ...AlertTemplate,
  name: 'Success',
  args: {
    type: 'success',
    children: textTemplate('Success alert'),
    closable: true,
  },
};

export const Warning: Story = {
  ...AlertTemplate,
  name: 'Warning',
  args: {
    type: 'warning',
    children: textTemplate('Warning alert'),
    closable: true,
  },
};

export const Error: Story = {
  ...AlertTemplate,
  name: 'Error',
  args: {
    type: 'error',
    title: 'Error',
    children: textTemplate('Error alert'),
    closable: true,
  },
};

export const AriaRole: Story = {
  ...AlertTemplate,
  name: 'Aria Role Alert',
  args: {
    type: 'error',
    children: 'Houston, we hebben een probleem.',
    role: 'alert',
    closable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Hint: test met een Screen reader',
      },
    },
  },
  render: (args: any) => {
    const [shown, toggleAlert] = useState(false);

    const onClick = () => {
      toggleAlert(!shown);
    };

    return (
      <>
        {shown ? (
          <LuxAlert {...args}>
            <LuxParagraph>{args.children}</LuxParagraph>
          </LuxAlert>
        ) : null}
        <br />
        <LuxButton appearance="subtle-button" onClick={onClick}>
          Toggle Alert
        </LuxButton>
      </>
    );
  },
};

export const DesignTokens = createDesignTokensStory(meta);

export const Visual = createVisualRegressionStory(() => (
  <>
    <h4 className="lux-heading-3">Light</h4>
    <VisualRegressionWrapper className={`lux-theme--logius-light`}>
      <VisualTypes />
    </VisualRegressionWrapper>
    <h4 className="lux-heading-3">Dark</h4>
    <VisualRegressionWrapper className={`lux-theme--logius-dark`}>
      <VisualTypes />
    </VisualRegressionWrapper>
  </>
));
