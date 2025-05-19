import { LuxLinkList, LuxLinkListProps } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';
import { BADGES } from '../../../config/preview';

type Story = StoryObj<typeof meta>;

const ExampleIcon = (
  <svg height="18" width="18" xmlns="http://www.w3.org/2000/svg">
    <rect width="11" height="11" y="7" x="1" fill="currentColor" />
  </svg>
);

const ExampleIcon2 = (
  <svg height="18" width="18" xmlns="http://www.w3.org/2000/svg">
    <circle r="6" cx="7" cy="12" fill="currentColor" />
  </svg>
);

const meta = {
  title: 'React Components/Link List',
  id: 'react-components-link-list',
  component: LuxLinkList,
  parameters: {
    badges: [BADGES.BETA, BADGES.LATEST],
    tokens,
    tokensPrefix: 'utrecht-link',
  },
  argTypes: {
    links: {
      description: 'Link items to be displayed in the list',
      control: 'object',
      table: {
        type: {
          summary: 'HTML Content',
        },
      },
    },
    icon: {
      name: 'icon',
      description: 'Icon Node',
      control: { type: 'select' },
      options: ['', null, 'rectangle', 'circle'],
      mapping: {
        '': undefined,
        null: null,
        rectangle: () => ExampleIcon,
        circle: () => ExampleIcon2,
      },
    },
  },
} satisfies Meta<typeof LuxLinkList>;

export default meta;

const LinkListTemplate: Story = {
  args: {
    icon: () => ExampleIcon,
    links: [
      {
        href: '#',
        children: 'Link 1 with so much content wow look how long!',
      },
      {
        href: '#',
        children: 'Link 2',
      },
      {
        href: '#',
        children: 'Link 3',
      },
    ],
  },
  render: ({ ...args }: LuxLinkListProps) => <LuxLinkList {...args} />,
};

const LinkListWithOneItemTemplate: Story = {
  args: {
    icon: () => ExampleIcon,
    links: [
      {
        href: '#',
        children: 'Link 1!',
      },
    ],
  },
  render: ({ ...args }: LuxLinkListProps) => <LuxLinkList {...args} />,
};

export const Playground: Story = {
  ...LinkListTemplate,
  name: 'Playground',
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
  tags: ['!autodocs'],
};

export const ListItemWithDifferentIcon: Story = {
  ...LinkListTemplate,
  name: 'ListItem with different icon',
  args: {
    ...LinkListTemplate?.args,
    links: [
      ...(LinkListTemplate?.args?.links || []),
      {
        href: '#',
        children: 'Link 4',
        icon: ExampleIcon2,
      },
    ],
  },
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
};

export const Active: Story = {
  ...LinkListWithOneItemTemplate,
  name: 'Active',
  parameters: {
    pseudo: { active: true },
  },
};

export const Hover: Story = {
  ...LinkListWithOneItemTemplate,
  name: 'Hover',
  parameters: {
    pseudo: { hover: true },
  },
};

export const Focus: Story = {
  ...LinkListWithOneItemTemplate,
  name: 'Focus',
  parameters: {
    pseudo: { focus: true, focusVisible: true },
  },
};

export const Visited: Story = {
  ...LinkListWithOneItemTemplate,
  name: 'Visited',
  parameters: {
    pseudo: { visited: true },
  },
};
