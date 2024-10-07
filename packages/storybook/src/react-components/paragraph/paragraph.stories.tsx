import { Paragraph } from '@lux-design-system/components-react';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'React Components/Paragraph',
  id: 'react-components-paragraph',
  component: Paragraph,
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
} satisfies Meta<typeof Paragraph>;

export default meta;

export const Playground: Story = {
  name: 'Playground',
  args: {
    appearance: undefined,
    children:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Dolor ante id varius, aenean eu faucibus vitae malesuada. Viverra malesuada aliquam et placerat justo porta ipsum parturient. Cursus nostra varius efficitur lobortis aliquam lectus bibendum.',
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
        story: 'De `small` styling wordt toegepast. De content wordt in een `<small>` geplaatst.',
      },
    },
  },
};
