import {
  LuxHeading as Heading,
  LuxHeading1,
  LuxHeading2,
  LuxHeading3,
  LuxHeading4,
  LuxHeading5,
  LuxHeading6,
  type LuxHeadingProps,
} from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';
import { type HTMLAttributes, type PropsWithChildren } from 'react';

const LuxHeading = (props: PropsWithChildren<LuxHeadingProps> & HTMLAttributes<HTMLHeadingElement>) => (
  <Heading {...props} />
);

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Components React/Heading',
  id: 'components-react-heading',
  component: LuxHeading,
  subcomponents: {},
  parameters: {
    tokens,
    tokensPrefix: 'react-heading',
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
    level: {
      type: 'number',
      control: 'number',
    },
    appearance: {
      type: 'number',
      control: 'number',
    },
  },
} satisfies Meta<typeof LuxHeading>;

export default meta;

const headingText = "Pa's wijze lynx bezag vroom het fikse aquaduct!";

const HeadingTemplate: Story = {
  render: ({ children, ...args }) => <LuxHeading {...args}>{children}</LuxHeading>,
  args: {
    children: headingText,
    level: 6,
  },
};

export const Playground: Story = {
  ...HeadingTemplate,
  name: 'Playground',
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
  tags: ['!autodocs'],
};

export const Headings: Story = {
  render: ({ children }) => (
    <div>
      <LuxHeading1>{children}</LuxHeading1>
      <LuxHeading2>{children}</LuxHeading2>
      <LuxHeading3>{children}</LuxHeading3>
      <LuxHeading4>{children}</LuxHeading4>
      <LuxHeading5>{children}</LuxHeading5>
      <LuxHeading6>{children}</LuxHeading6>
    </div>
  ),
  args: {
    children: headingText,
    level: 6,
  },
};

export const HeadingWithDifferentAppearance: Story = {
  ...HeadingTemplate,
  args: {
    children: headingText,
    level: 3,
    appearance: 1,
  },
};
