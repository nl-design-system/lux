import { LuxLinkList } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';
import { BADGES } from '../../../config/preview';

const ExampleIcon = (
  <svg height="28" width="20" xmlns="http://www.w3.org/2000/svg">
    <rect width="11" height="11" y="17" x="3" fill="currentColor" />
  </svg>
);
const ExampleIcon2 = (
  <svg height="28" width="20" xmlns="http://www.w3.org/2000/svg">
    <circle r="6" cx="7" cy="22" fill="currentColor" />
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
      table: {
        type: {
          summary: 'LuxLinkListLink[]',
        },
      },
    },
    icon: {
      description: 'Icon Node',
      control: 'boolean',
      table: {
        type: {
          summary: 'HTML/SVG Content / React Node',
          detail: 'Use the boolean switch to show an Icon',
        },
      },
    },
  },
} satisfies Meta<typeof LuxLinkList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: () => (
    <LuxLinkList
      icon={() => ExampleIcon}
      links={[
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
          icon: ExampleIcon2,
        },
      ]}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'De standaard LinkList geeft een lijst met links met de standaard styling.',
      },
    },
  },
};
