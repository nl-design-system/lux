import tokens from '@lux-design-system/design-tokens/dist/index.json';
import { LuxLink as Link, LuxDocument, LuxParagraph } from '@lux-design-system/web-components-react';
import type { JSX } from '@lux-design-system/web-components-stencil';
import type { Meta, StoryObj } from '@storybook/react';
import { type PropsWithChildren } from 'react';
import tokensDefinition from './tokens.json';
import { VisualStates } from './visual/States';
import { createDesignTokensStory, createVisualRegressionStory, VisualRegressionWrapper } from '../../utils';

const href = 'http://logius.nl/';

const LuxLink = (props: PropsWithChildren<JSX.LuxLink>) => <Link {...props} />;

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Web Components/Link',
  id: 'web-components-link',
  component: LuxLink,
  decorators: [
    (Story) => (
      <LuxDocument>
        <Story />
      </LuxDocument>
    ),
  ],
  parameters: {
    tokens,
    tokensPrefix: 'lux-link',
    tokensDefinition,
  },
  tags: ['!autodocs'],
  argTypes: {
    children: {
      name: 'content (label)',
      description: 'Link text',
      control: 'text',
    },
    href: {
      type: 'string',
    },
    download: {
      type: 'string',
    },
    target: {
      type: 'string',
    },
    forceState: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof LuxLink>;

export default meta;

export const Playground: Story = {
  name: 'Playground',
  args: {
    href,
    download: undefined,
    target: undefined,
    children: 'Logius',
  },
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
};

export const Hover: Story = {
  name: 'Hover',
  args: {
    href,
    children: 'Hover Link',
    forceState: 'hover',
  },
};

export const Active: Story = {
  name: 'Active',
  args: {
    href,
    children: 'Active Link',
    forceState: 'active',
  },
};

export const Focus: Story = {
  name: 'Focus',
  args: {
    href,
    children: 'Focus Link',
    forceState: 'focus',
  },
};

export const Download: Story = {
  name: 'Download',
  args: {
    href: '/?path=/docs/web-components-link--docs',
    children: 'Download Link',
    download: 'link-docs.html',
  },
  parameters: {
    docs: {
      description: {
        story: 'Laat de browser de href als download aanbieden. Geef een string op om een bestandsnaam te suggereren',
      },
    },
  },
};

export const Target: Story = {
  name: 'Target',
  args: {
    href: '/?path=/docs/web-components-link--docs',
    children: 'Link with target',
    target: '_parent',
  },
  parameters: {
    docs: {
      description: {
        story: 'Wees voorzichtig met `target="_blank"`. Zie ook de documentatie hierboven.',
      },
    },
  },
};

export const InText: Story = {
  name: 'In Text',
  args: {
    href,
    children: 'Logius',
  },
  render: (args) => (
    <LuxParagraph>
      {`Lorem ipsum `}
      <LuxLink {...args} />
      {` sit amet, consectetuer adipiscing elit. Dolor ante id varius, aenean eu `}
      <LuxLink href="#focus" forceState="focus">
        focus
      </LuxLink>
      {` faucibus vitae malesuada. Viverra malesuada aliquam et placerat justo porta ipsum `}
      <LuxLink href="#hover" forceState="hover">
        hoverium
      </LuxLink>
      {` arturient. Cursus nostra varius efficitur lobortis aliquam lectus bibendum.`}
    </LuxParagraph>
  ),
};

export const DesignTokens = createDesignTokensStory(meta);

export const Visual = createVisualRegressionStory(() => (
  <>
    <h4 className="lux-heading-3">Light</h4>
    <VisualRegressionWrapper className={`lux-theme--logius-light`}>
      <VisualStates />
    </VisualRegressionWrapper>
    <h4 className="lux-heading-3">Dark</h4>
    <VisualRegressionWrapper className={`lux-theme--logius-dark`}>
      <VisualStates />
    </VisualRegressionWrapper>
  </>
));
