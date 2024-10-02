import tokens from '@lux-design-system/design-tokens/dist/index.json';
import { LuxDocument as Document } from '@lux-design-system/web-components-react';
import type { JSX } from '@lux-design-system/web-components-stencil';
import type { Meta, StoryObj } from '@storybook/react';
import { type PropsWithChildren } from 'react';
import tokensDefinition from './tokens.json';
import { createDesignTokensStory } from '../../utils';

const LuxDocument = (props: PropsWithChildren<JSX.LuxDocument>) => <Document {...props} />;

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Web Components/Document',
  id: 'web-components-document',
  component: LuxDocument,
  parameters: {
    tokens,
    tokensPrefix: 'lux-link',
    tokensDefinition,
  },
  tags: ['!autodocs'],
} satisfies Meta<typeof LuxDocument>;

export default meta;

export const Playground: Story = {
  name: 'Playground',
  args: {
    children: 'Lorem',
  },
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
};

export const DesignTokens = createDesignTokensStory(meta);
