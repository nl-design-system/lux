import { LuxPreHeading } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';
import { BADGES } from '../../../config/preview';
import { createVisualRegressionStory, VisualRegressionTest } from '../../utils';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'React Components/PreHeading',
  id: 'react-components-pre-heading',
  component: LuxPreHeading,
  subcomponents: {},
  parameters: {
    badges: [BADGES.STABLE, BADGES.LATEST],
    tokens,
    tokensPrefix: 'react-pre-heading',
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
  },
} satisfies Meta<typeof LuxPreHeading>;

export default meta;

const preHeadingText = "Pa's wijze lynx bezag vroom het fikse aquaduct!";

const PreHeadingTemplate: Story = {
  render: ({ ...args }) => <LuxPreHeading {...args}>{args['children']}</LuxPreHeading>,
  args: {
    children: preHeadingText,
  },
};

export const Playground: Story = {
  ...PreHeadingTemplate,
  name: 'Playground',
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
  tags: ['!autodocs'],
};

export const Visual = createVisualRegressionStory(() => (
  <VisualRegressionTest testCase={() => <LuxPreHeading>LuxPreHeading: {preHeadingText}</LuxPreHeading>} />
));
