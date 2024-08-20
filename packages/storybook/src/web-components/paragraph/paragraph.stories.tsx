import tokens from '@lux-design-system/design-tokens/dist/index.json';
import { LuxParagraph as Paragraph } from '@lux-design-system/web-components-react';
import type { JSX } from '@lux-design-system/web-components-stencil';
import type { Meta, StoryObj } from '@storybook/react';
import { type HTMLAttributes, type PropsWithChildren } from 'react';
import tokensDefinition from './tokens.json';
import { createDesignTokensStory, createVisualRegressionStory, VisualRegressionWrapper } from '../../utils';

const LuxParagraph = (props: PropsWithChildren<JSX.LuxParagraph> & HTMLAttributes<any>) => <Paragraph {...props} />;

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Web Components/Paragraph',
  id: 'web-components-paragraph',
  component: LuxParagraph,
  parameters: {
    tokens,
    tokensPrefix: 'lux-alert',
    tokensDefinition,
  },
  argTypes: {
    children: {
      name: 'content',
      description: 'Paragraph text',
      control: 'text',
      table: {
        type: {
          summary: 'HTML Content',
        },
      },
    },
  },
} satisfies Meta<typeof LuxParagraph>;

export default meta;

export const Playground: Story = {
  name: 'Playground',
  args: {
    role: 'alert',
    children: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Dolor ante id varius, aenean eu faucibus vitae malesuada. Viverra malesuada aliquam et placerat justo porta ipsum parturient. Cursus nostra varius efficitur lobortis aliquam lectus bibendum.`,
  },
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
  tags: ['!autodocs'],
};

export const DesignTokens = createDesignTokensStory(meta);

export const Visual = createVisualRegressionStory(() => (
  <>
    <h4 className="lux-heading-3">Light</h4>
    <VisualRegressionWrapper className={`lux-theme--logius-light`}>
      <LuxParagraph>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</LuxParagraph>
    </VisualRegressionWrapper>
    <h4 className="lux-heading-3">Dark</h4>
    <VisualRegressionWrapper className={`lux-theme--logius-dark`}>
      <LuxParagraph>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</LuxParagraph>
    </VisualRegressionWrapper>
  </>
));
