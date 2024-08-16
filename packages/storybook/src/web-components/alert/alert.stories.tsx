//import tokens from '@lux-design-system/design-tokens/dist/index.json';
import {
  LuxAlert as Alert,
  // LuxIconChevronLeft as IconChevronLeft,
  LuxIconMail as IconMail,
  // LuxIconWarning as IconWarning,
  LuxParagraph as Paragraph,
  // LuxIconChevronRight as IconChevronRight,
} from '@lux-design-system/web-components-react';
import type { JSX } from '@lux-design-system/web-components-stencil';
// import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';
// import { userEvent } from '@storybook/test';
import { type PropsWithChildren } from 'react';
// import { within } from 'shadow-dom-testing-library';
// import tokensDefinition from './tokens.json';
// import { createDesignTokensStory } from '../../utils';

const LuxAlert = (props: PropsWithChildren<JSX.LuxAlert>) => <Alert {...props} />;
const LuxParagraph = ({ children }: any) => <Paragraph>{children}</Paragraph>;

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Web Components/Alert',
  id: 'web-components-alert',
  component: LuxAlert,
  subcomponents: { LuxParagraph },
  parameters: {
    // tokens,
    // tokensPrefix: 'lux-alert',
    // tokensDefinition,
  },
  argTypes: {
    children: {
      name: 'content',
      description: 'Alert text',
      control: 'text',
    },
    type: {
      type: 'string',
      control: 'select',
      options: [undefined, 'info', 'ok', 'warning', 'error'],
    },
    icon: {
      type: 'boolean',
      table: {
        defaultValue: {
          summary: 'true',
        },
      },
    },
  },
} satisfies Meta<typeof LuxAlert>;

export default meta;

const AlertTemplate: Story = {
  render: (args) => (
    <LuxAlert {...args}>
      <LuxParagraph>{args.children}</LuxParagraph>
    </LuxAlert>
  ),
};

const textTemplate = (name = 'odor amet') =>
  `Lorem ipsum ${name}, consectetuer adipiscing elit. Dolor ante id varius, aenean eu faucibus vitae malesuada. Viverra malesuada aliquam et placerat justo porta ipsum parturient. Cursus nostra varius efficitur lobortis aliquam lectus bibendum.`;

export const Playground: Story = {
  ...AlertTemplate,
  name: 'Playground',
  args: {
    children: textTemplate(),
    type: undefined,
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
  },
};

export const Ok: Story = {
  ...AlertTemplate,
  name: 'OK / Success',
  args: {
    type: 'ok',
    children: textTemplate('Okay alert'),
  },
};

export const Warning: Story = {
  ...AlertTemplate,
  name: 'Warning',
  args: {
    type: 'warning',
    children: textTemplate('Warning alert'),
  },
};

export const Error: Story = {
  ...AlertTemplate,
  name: 'Error',
  args: {
    type: 'error',
    children: textTemplate('Error alert'),
  },
};

export const Heading: Story = {
  ...AlertTemplate,
  name: 'With a Heading',
  args: {
    type: 'info',
    children: textTemplate('Alert with heading'),
  },
  render: (args) => (
    <LuxAlert {...args}>
      <h2 title="NOTE: waiting for lux-heading" style={{ margin: 0 }}>
        Title of the Alert
      </h2>
      <LuxParagraph>{args.children}</LuxParagraph>
    </LuxAlert>
  ),
};

export const Icon: Story = {
  name: 'Custom Icon',
  args: {
    type: 'info',
    children: textTemplate('Alert with custom icon'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Een custom icon kan geplaats worden via `slot="icon"`.',
      },
    },
  },
  render: (args) => (
    <LuxAlert {...args}>
      <LuxParagraph>{args.children}</LuxParagraph>
      <IconMail slot="icon" />
    </LuxAlert>
  ),
};

export const NoIcon: Story = {
  ...AlertTemplate,
  name: 'No Icon',
  args: {
    type: 'info',
    icon: false,
    children: textTemplate('No Icon alert'),
  },
};
