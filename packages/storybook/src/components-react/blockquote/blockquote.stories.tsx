import { LuxBlockquote } from '@lux-design-system/components-react/src/blockquote/Blockquote';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'React/blockquote',
  id: 'components-react-blockquote',
  component: LuxBlockquote,
  argTypes: {
    children: {
      name: 'quote text',
      description: 'quote text',
      control: 'text',
    },
    cite: {
      name: 'cite',
      description: 'quote URL',
      control: 'text',
    },
    attribution: {
      name: 'author',
      description: 'Who gave the quote',
      control: 'text',
    },
  },
} satisfies Meta<typeof LuxBlockquote>;

export default meta;

export const Playground: Story = {
  name: 'Playground',
  args: {
    cite: 'https://example.com/',
    attribution: '- Morgan Freeman',
    children: 'Hello, world!',
  },
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
  tags: ['!autodocs'],
};
