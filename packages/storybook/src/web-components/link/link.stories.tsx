import tokens from '@lux-design-system/design-tokens/dist/index.json';
import { LuxLink as Link } from '@lux-design-system/web-components-react';
import type { JSX } from '@lux-design-system/web-components-stencil';
import type { Meta, StoryObj } from '@storybook/react';
import { type PropsWithChildren } from 'react';
import tokensDefinition from './tokens.json';
import { createDesignTokensStory } from '../../utils';

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
    href: 'https://logius.nl',
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

export const DesignTokens = createDesignTokensStory(meta);
