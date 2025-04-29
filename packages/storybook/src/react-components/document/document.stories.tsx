import { LuxDocument, LuxParagraph } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';
import tokensDefinition from './tokens.json';
import { BADGES } from '../../../config/preview';
import { createDesignTokensStory, createVisualRegressionStory, VisualRegressionTest } from '../../utils';

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
    badges: [BADGES.STABLE, BADGES.LATEST],
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
  <VisualRegressionTest
    testCase={() => (
      <>
        <div>Lorem ipsum dolor sit amet, content staat NIET in een LuxDocument.</div>
        <LuxDocument>Lorem ipsum dolor sit amet, content staat in een LuxDocument.</LuxDocument>
      </>
    )}
  />
));
