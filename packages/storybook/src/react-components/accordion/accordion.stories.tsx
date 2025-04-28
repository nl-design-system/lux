import { LuxAccordionProvider, LuxIcon } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';
import { IconChevronDown } from '@tabler/icons-react';
import { BADGES } from '../../../config/preview';

const meta = {
  title: 'React Components/Accordion',
  id: 'react-components-accordion',
  component: LuxAccordionProvider,
  parameters: {
    badges: [BADGES.WIP, BADGES.LATEST],
    tokens,
    tokensPrefix: 'utrecht-accordion',
  },
  argTypes: {
    sections: {
      label: {
        name: 'label',
        type: { name: 'string', required: true },
        defaultValue: { summary: '' },
      },
      body: {
        name: 'body',
        type: { name: 'string', required: true },
        defaultValue: { summary: '' },
      },
      expanded: {
        name: 'expanded',
        type: { name: 'boolean', required: false },
        defaultValue: { summary: '' },
      },
      icon: {
        name: 'icon',
        description: 'Icon at the start',
        control: { type: 'select' },
        options: ['', null, 'chevron-down'],
        mapping: {
          '': undefined,
          null: null,
          'chevron-down': <LuxIcon icon={<IconChevronDown />} />,
        },
      },
    },
  },
} satisfies Meta<typeof LuxAccordionProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sections: [
      {
        label: 'Lorem ipsum 3',
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
    laborum.`,
        expanded: true,
      },
    ],
  },
};

export const AccordionWithMultipleSections: Story = {
  args: {
    sections: [
      {
        label: 'Lorem ipsum 1',
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.`,
        expanded: true,
      },
      {
        label: 'Lorem ipsum 2',
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.`,
        expanded: true,
      },
      {
        label: 'Lorem ipsum 3',
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.`,
        expanded: true,
      },
    ],
  },
  name: 'Accordion with sections',
};
