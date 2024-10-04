import { Paragraph } from '@lux-design-system/components-react';
import type { Meta, StoryObj } from '@storybook/react';
// import { type HTMLAttributes, type PropsWithChildren } from 'react';

const LuxParagraph = ({ children }: any) => <Paragraph>{children}</Paragraph>;

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'React Components/Paragraph',
  id: 'react-components-paragraph',
  component: LuxParagraph,
} satisfies Meta<typeof LuxParagraph>;

export default meta;

export const Playground: Story = {
  name: 'Playground',
  args: {
    children: 'lalala',
  },
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
  tags: ['!autodocs'],
};
