import { LuxDocument, LuxParagraph } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';
import tokensDefinition from './tokens.json';
import { createVisualRegressionStory, VisualRegressionWrapper } from '../../utils';
import { createDesignTokensStory } from '../../utils';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'React Components/Document',
  id: 'react-components-document',
  component: LuxDocument,
  argTypes: {
    children: {
      name: 'content (children)',
      description: 'Document inhoud',
      control: 'object',
      table: {
        type: {
          summary: 'HTML Content',
        },
      },
    },
  },
  parameters: {
    tokens,
    tokensPrefix: 'utrecht-document',
    tokensDefinition,
    withDocument: false,
  },
} satisfies Meta<typeof LuxDocument>;

export default meta;

export const Playground: Story = {
  name: 'Playground',
  args: {
    children: (
      <article>
        <h1>Lorem ipsum</h1>
        <LuxParagraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Dolor ante id varius, aenean eu faucibus vitae
          malesuada. Viverra malesuada aliquam et placerat justo porta ipsum parturient. Cursus nostra varius efficitur
          lobortis aliquam lectus bibendum.
        </LuxParagraph>
      </article>
    ),
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
    <h4 className="utrecht-heading-3">Light</h4>
    <VisualRegressionWrapper className={`lux-theme--logius-light`}>
      <div>Lorem ipsum dolor sit amet, content staat NIET in een LuxDocument.</div>
      <LuxDocument>Lorem ipsum dolor sit amet, content staat in een LuxDocument.</LuxDocument>
    </VisualRegressionWrapper>
    <h4 className="utrecht-heading-3">Dark</h4>
    <VisualRegressionWrapper className={`lux-theme--logius-dark`}>
      <div>Lorem ipsum dolor sit amet, content staat NIET in een LuxDocument.</div>
      <LuxDocument>Lorem ipsum dolor sit amet, content staat in een LuxDocument.</LuxDocument>
    </VisualRegressionWrapper>
  </>
));
