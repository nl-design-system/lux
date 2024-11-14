import { LuxHeading, LuxHeadingGroup, LuxPreHeading } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'React Components/Heading-group',
  id: 'react-components-heading-group',
  component: LuxHeadingGroup,
  subcomponents: {},
  parameters: {
    tokens,
    tokensPrefix: 'react-heading-group',
  },
  argTypes: {
    children: {
      name: 'content',
      description: 'React text',
      table: {
        type: {
          summary: 'HTML Content',
        },
      },
    },
  },
} satisfies Meta<typeof LuxHeadingGroup>;

export default meta;

const headingText = "Pa's wijze lynx bezag vroom het fikse aquaduct!";

const HeadingGroupTemplate: Story = {
  render: ({ ...args }) => <LuxHeadingGroup {...args}>{args['children']}</LuxHeadingGroup>,
};

export const Playground: Story = {
  ...HeadingGroupTemplate,
  name: 'Playground',
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
  args: {
    children: [<LuxHeading level={1}>{headingText}</LuxHeading>, <LuxPreHeading>{headingText}</LuxPreHeading>],
  },
  tags: ['!autodocs'],
};
