import {
  LuxHeading,
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
import tokensDefinition from '@utrecht/heading-css/src/tokens.json';
import { BADGES } from '../../../config/preview';
import { createDesignTokensStory, createVisualRegressionStory, VisualRegressionWrapper } from '../../utils';

type Story = StoryObj<typeof meta>;

const headingText = "Pa's wijze lynx bezag vroom het fikse aquaduct!";

const meta = {
  title: 'React Components/Heading',
  id: 'react-components-heading',
  component: LuxHeading,
  parameters: {
    badges: [BADGES.BETA, BADGES.LATEST],
    tokens,
    tokensPrefix: 'utrecht-heading-1',
    tokensDefinition,
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

export const DesignTokens = createDesignTokensStory(meta);

export const Visual = createVisualRegressionStory(() => (
  <>
    <h4 className="utrecht-heading-3">Light</h4>
    <VisualRegressionWrapper className={`lux-theme--logius-light`} key={'light'}>
      {[1, 2, 3, 4, 5, 6].map((level) => (
        <>
          <LuxHeading level={level as LuxHeadingProps['level']} key={'light-level-' + level}>
            H{level}: {headingText}
          </LuxHeading>
          <LuxHeading
            level={99 as LuxHeadingProps['level']}
            appearance={level as LuxHeadingProps['appearance']}
            key={'light-appeareance-' + level}
          >
            Lijkt op een H{level}: {headingText}
          </LuxHeading>
        </>
      ))}
    </VisualRegressionWrapper>
    <h4 className="utrecht-heading-3">Dark</h4>
    <VisualRegressionWrapper className={`lux-theme--logius-dark`} key="dark">
      {[1, 2, 3, 4, 5, 6].map((level) => (
        <>
          <LuxHeading level={level as LuxHeadingProps['level']} key={'dark-level-' + level}>
            H{level}: {headingText}
          </LuxHeading>
          <LuxHeading
            level={99 as LuxHeadingProps['level']}
            appearance={level as LuxHeadingProps['appearance']}
            key={'dark-appeareance-' + level}
          >
            Lijkt op een H{level}: {headingText}
          </LuxHeading>
        </>
      ))}
    </VisualRegressionWrapper>
  </>
));
