import tokens from '@lux-design-system/design-tokens/dist/index.json';
import { LuxLink as Link } from '@lux-design-system/web-components-react';
import type { JSX } from '@lux-design-system/web-components-stencil';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
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
  parameters: {
    tokens,
    tokensPrefix: 'lux-link',
    tokensDefinition,
  },
  tags: ['!autodocs'],
  argTypes: {
    href: {
      type: 'string',
    },
    download: {
      type: 'string',
    },
    target: {
      type: 'string',
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
  },
  play: async ({ canvasElement }) => {
    const canvas = await within(canvasElement);
    const luxLink = canvas.getByShadowText('Hover Link');
    await userEvent.hover(luxLink);
  },
};

export const Active: Story = {
  name: 'Active',
  args: {
    href,
    children: 'Active Link',
  },
  play: async ({ canvasElement }) => {
    const canvas = await within(canvasElement);
    const luxLink = canvas.getByShadowText('Active Link');
    await userEvent.pointer({ target: luxLink, keys: '[MouseLeft]' });
  },
};

export const Focus: Story = {
  name: 'Focus',
  args: {
    href,
    children: 'Focus Link',
  },
  play: async () => {
    await userEvent.keyboard('[Tab]');
  },
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
