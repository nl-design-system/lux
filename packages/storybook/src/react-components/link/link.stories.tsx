import { LuxLink } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'React Components/Link',
  id: 'react-components-link',
  component: LuxLink,
  parameters: {
    tokens,
    tokensPrefix: 'utrecht-link',
  },
  args: {
    children: 'Read more',
    href: '#',
  },
  argTypes: {
    external: {
      description: 'External link indicator',
      control: 'boolean',
    },
    placeholder: {
      description: 'Shows link in placeholder/loading state',
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      },
    },
    openInNewTab: {
      description: 'Controls whether the link opens in a new tab',
      control: 'boolean',
    },
    href: {
      description: 'URL',
      control: 'text',
    },
    'aria-current': {
      description: 'Current page indicator',
      control: 'boolean',
    },
    hrefLang: {
      description: 'Language of the linked resource',
      control: 'text',
    },
    icon: {
      description: 'Icon Node',
      control: 'object',
      table: {
        type: {
          summary: 'HTML Content',
        },
      },
    },
    iconPosition: {
      description: 'Position of the icon relative to the text',
      control: 'radio',
      options: ['start', 'end'],
      table: {
        type: { summary: 'start | end' },
        defaultValue: { summary: 'start' },
      },
    },
  },
} satisfies Meta<typeof LuxLink>;

export default meta;

// Example icon for stories
const ExampleIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="external-link">
      <path
        id="Vector"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.7336 1.4C14.0003 1.33333 14.2003 1.4 14.4003 1.6C14.5336 1.8 14.667 2 14.6003 2.26667L14.0003 7.86667C13.9336 8.26667 13.6003 8.6 13.2003 8.6C12.8003 8.6 12.467 8.26667 12.4003 7.86667L12.2003 5.4L9.06696 8.53333C8.53363 9.06667 8.00029 8.8 7.60029 8.4C7.20029 8 6.93363 7.46667 7.46696 6.93333L10.6003 3.8L8.13363 3.6C7.73363 3.53333 7.40029 3.2 7.40029 2.8C7.40029 2.4 7.73363 2.06667 8.13363 2L13.7336 1.4ZM2.66699 5.33333V13.3333H10.667V9.33333H12.667V14.6C12.667 15 12.3337 15.3333 11.9337 15.3333H1.40033C1.00033 15.3333 0.666992 15 0.666992 14.6V4.06667C0.666992 3.66667 1.00033 3.33333 1.40033 3.33333H6.66699V5.33333H2.66699Z"
        fill="#01689B"
      />
    </g>
  </svg>
);

const LinkTemplate: Story = {
  args: {
    external: false,
    openInNewTab: false,
    placeholder: false,
    icon: undefined,
    iconPosition: undefined,
  },
  render: ({ ...args }) => <LuxLink {...args}>{args['children']}</LuxLink>,
};

export const Playground: Story = {
  ...LinkTemplate,
  name: 'Playground',
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
  tags: ['!autodocs'],
};

export const Hover: Story = {
  name: 'Hover',
  parameters: {
    pseudo: { hover: true },
  },
};

export const Active: Story = {
  name: 'Active',
  parameters: {
    pseudo: { active: true },
  },
};
export const Visisted: Story = {
  name: 'Visited',
  parameters: {
    pseudo: { visited: true },
  },
};

export const Focus: Story = {
  name: 'Focus',
  parameters: {
    pseudo: { focus: true },
  },
};

export const FocusVisible: Story = {
  name: 'Focus Visible',
  parameters: {
    pseudo: { focusVisible: true },
  },
};

export const Placeholder: Story = {
  name: 'Placeholder',
  args: {
    placeholder: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Link in placeholder/loading state, useful for loading states or progressive enhancement.',
      },
    },
  },
};
export const External: Story = {
  name: 'External',
  args: {
    href: 'https://google.com',
    external: true,
    openInNewTab: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Een externe link opent in een nieuw tabblad en heeft de juiste security attributes.',
      },
    },
  },
};

export const LinkWithIcon: Story = {
  name: 'Link with Icon',
  args: {
    icon: ExampleIcon,
  },
  parameters: {
    docs: {
      description: {
        story: 'Een link kan een icoon bevatten voor extra visuele context.',
      },
    },
  },
};

export const LinkWithIconStart: Story = {
  name: 'Link with Icon at Start',
  args: {
    icon: ExampleIcon,
    iconPosition: 'start',
  },
  parameters: {
    docs: {
      description: {
        story: 'Link met icoon aan het begin.',
      },
    },
  },
};

export const LinkWithIconEnd: Story = {
  name: 'Link with Icon at End',
  args: {
    icon: ExampleIcon,
    iconPosition: 'end',
  },
  parameters: {
    docs: {
      description: {
        story: 'Link met icoon aan het einde.',
      },
    },
  },
};
