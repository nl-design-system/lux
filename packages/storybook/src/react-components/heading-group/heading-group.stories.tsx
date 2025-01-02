import { LuxHeading, LuxHeading1, LuxHeadingGroup, LuxPreHeading } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';
import { createVisualRegressionStory, VisualRegressionWrapper } from '../../utils';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'React Components/HeadingGroup',
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

export const Visual = createVisualRegressionStory(() => (
  <>
    <h4 className="utrecht-heading-3">Light</h4>
    <VisualRegressionWrapper className="lux-theme--logius-light" key="light">
      <LuxHeadingGroup>
        <LuxHeading1>LuxHeading1</LuxHeading1>
        <LuxPreHeading>LuxPreHeading</LuxPreHeading>
      </LuxHeadingGroup>
    </VisualRegressionWrapper>
    <h4 className="utrecht-heading-3">Dark</h4>
    <VisualRegressionWrapper className="lux-theme--logius-dark" key="dark">
      <LuxHeadingGroup>
        <LuxHeading1>LuxHeading1</LuxHeading1>
        <LuxPreHeading>LuxPreHeading</LuxPreHeading>
      </LuxHeadingGroup>
    </VisualRegressionWrapper>
  </>
));
