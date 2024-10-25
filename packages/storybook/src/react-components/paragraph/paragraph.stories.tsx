import { LuxParagraph } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import { IconChip } from '@lux-design-system/icons/dist/react-icons';
import type { Meta, StoryObj } from '@storybook/react';
import tokensDefinition from './tokens.json';
import { createVisualRegressionStory, VisualRegressionWrapper } from '../../utils';
import { createDesignTokensStory } from '../../utils';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'React Components/Paragraph',
  id: 'react-components-paragraph',
  component: LuxParagraph,
  argTypes: {
    children: {
      name: 'content (children)',
      description: 'Paragraph text',
      control: 'text',
      table: {
        type: {
          summary: 'HTML Content',
        },
      },
    },
    appearance: {
      name: 'appearance',
      description: 'Appearance modifier',
      control: 'select',
      options: [undefined, 'lead', 'small'],
    },
  },
  parameters: {
    tokens,
    tokensPrefix: 'utrecht-paragraph',
    tokensDefinition,
  },
} satisfies Meta<typeof LuxParagraph>;

export default meta;

export const Playground: Story = {
  name: 'Playground',
  args: {
    appearance: undefined,
    children: (
      <>
        <IconChip />
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Dolor ante id varius, aenean eu faucibus vitae
        malesuada. Viverra malesuada aliquam et placerat justo porta ipsum parturient. Cursus nostra varius efficitur
        lobortis aliquam lectus bibendum.
      </>
    ),
  },
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
  tags: ['!autodocs'],
};

export const Lead: Story = {
  name: 'Lead',
  args: {
    ...Playground.args,
    appearance: 'lead',
  },
  parameters: {
    docs: {
      description: {
        story:
          'De `lead` styling wordt toegepast. De content wordt in een `<b>` geplaatst t.b.v. visueel verschil als CSS niet geladen kan worden.',
      },
    },
  },
};

export const Small: Story = {
  name: 'Small',
  args: {
    ...Playground.args,
    appearance: 'small',
  },
  parameters: {
    docs: {
      description: {
        story:
          'De `small` styling wordt toegepast. De content wordt in een `<small>` geplaatst t.b.v. visueel verschil als CSS niet geladen kan worden.',
      },
    },
  },
};

export const DesignTokens = createDesignTokensStory(meta);

export const Visual = createVisualRegressionStory(
  () => (
    <>
      <h4 className="utrecht-heading-3">Light</h4>
      <VisualRegressionWrapper className={`lux-theme--logius-light`}>
        <LuxParagraph>Lorem ipsum dolor sit amet, content staat in een LuxParagraph.</LuxParagraph>
        <LuxParagraph appearance="lead">
          Lorem ipsum dolor sit amet, content staat in een LuxParagraph met appearance: lead.
        </LuxParagraph>
        <LuxParagraph appearance="small">
          Lorem ipsum dolor sit amet, content staat in een LuxParagraph met appearance: small.
        </LuxParagraph>
      </VisualRegressionWrapper>
      <h4 className="utrecht-heading-3">Dark</h4>
      <VisualRegressionWrapper className={`lux-theme--logius-dark`}>
        <LuxParagraph>Lorem ipsum dolor sit amet, content staat in een LuxParagraph.</LuxParagraph>
        <LuxParagraph appearance="lead">
          Lorem ipsum dolor sit amet, content staat in een LuxParagraph met appearance: lead.
        </LuxParagraph>
        <LuxParagraph appearance="small">
          Lorem ipsum dolor sit amet, content staat in een LuxParagraph met appearance: small.
        </LuxParagraph>
      </VisualRegressionWrapper>
    </>
  ),
  { withDocument: true },
);
