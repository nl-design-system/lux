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
import { createDesignTokensStory, createVisualRegressionStory, VisualRegressionWrapper } from '../../utils';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'React Components/Heading',
  id: 'react-components-heading',
  component: LuxHeading,
  subcomponents: {},
  parameters: {
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

export const DesignTokens = createDesignTokensStory(meta);

const headings = ['indefinitus', 'primus', 'secundus', 'tertius', 'quārtus', 'quīntus', 'sextus', 'invalidus'];

export const Visual = createVisualRegressionStory(() => (
  <>
    <h4 className="utrecht-heading-3">Light</h4>
    <VisualRegressionWrapper className={`lux-theme--logius-light`} key={'light'}>
      {headings.map((heading, index) => (
        <>
          <LuxHeading level={index as LuxHeadingProps['level']} key={'light-level-' + index}>
            Lorem ipsum dolor sit amet, titulus {heading}.
          </LuxHeading>
          <LuxHeading
            level={99 as LuxHeadingProps['level']}
            appearance={index as LuxHeadingProps['appearance']}
            key={'light-appeareance-' + index}
          >
            Lorem ipsum dolor sit amet, aspectus {heading}.
          </LuxHeading>
        </>
      ))}
    </VisualRegressionWrapper>
    <h4 className="utrecht-heading-3">Dark</h4>
    <VisualRegressionWrapper className={`lux-theme--logius-dark`} key="dark">
      {headings.map((heading, index) => (
        <>
          <LuxHeading level={index as LuxHeadingProps['level']} key={'dark-level-' + index}>
            Lorem ipsum dolor sit amet, titulus {heading}.
          </LuxHeading>
          <LuxHeading
            level={99 as LuxHeadingProps['level']}
            appearance={index as LuxHeadingProps['appearance']}
            key={'dark-appearance-' + index}
          >
            Lorem ipsum dolor sit amet, aspectus {heading}.
          </LuxHeading>
        </>
      ))}
    </VisualRegressionWrapper>
  </>
));
