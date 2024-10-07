import { LuxHeading as Heading, LuxHeadingProps } from '@lux-design-system/components-react/src/';
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

const HeadingTemplate: Story = {
  render: ({ children, ...args }) => <LuxHeading {...args}>{children}</LuxHeading>,
  args: {
    level: 6,
  },
};

const textTemplate = (name = 'Heading') => `${name}`;

export const Playground: Story = {
  ...HeadingTemplate,
  name: 'Playground',
  args: {
    children: textTemplate(),
    level: 6,
  },
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
  tags: ['!autodocs'],
};

export const Heading1: Story = {
  ...HeadingTemplate,
  name: 'Heading 1',
  args: {
    children: textTemplate('Heading 1'),
    level: 1,
  },
};

export const Heading2: Story = {
  ...HeadingTemplate,
  name: 'Heading 2',
  args: {
    children: textTemplate('Heading 2'),
    level: 2,
  },
};

export const Heading3: Story = {
  ...HeadingTemplate,
  name: 'Heading 3',
  args: {
    children: textTemplate('Heading 3'),
    level: 3,
  },
};

export const Heading4: Story = {
  ...HeadingTemplate,
  name: 'Heading 4',
  args: {
    children: textTemplate('Heading 4'),
    level: 4,
  },
};

export const Heading5: Story = {
  ...HeadingTemplate,
  name: 'Heading 5',
  args: {
    children: textTemplate('Heading 5'),
    level: 5,
  },
};

export const Heading6: Story = {
  ...HeadingTemplate,
  name: 'Heading 6',
  args: {
    children: textTemplate('Heading 6'),
    level: 6,
  },
};
