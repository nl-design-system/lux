import { LuxLink } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';
import { VisualStates } from './visual/States';
import { BADGES } from '../../../config/preview';
import { createVisualRegressionStory, VisualRegressionTest } from '../../utils';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'React Components/Link',
  id: 'react-components-link',
  component: LuxLink,
  parameters: {
    badges: [BADGES.BETA, BADGES.LATEST],
    tokens,
    tokensPrefix: 'utrecht-link',
  },
  args: {
    children: 'Link',
    href: '#',
  },
  argTypes: {
    children: {
      name: 'Label (children)',
    },
    external: {
      description: 'External link indicator',
      control: 'boolean',
    },
    placeholder: {
      description: 'Shows link in placeholder/loading state',
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
      control: 'boolean',
      table: {
        type: {
          summary: 'HTML Content',
          detail: 'Use the boolean switch to show an Icon',
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

//TODO replace icon in #308
const ExampleIcon = (
  <svg height="14" width="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
    <circle r="5" cx="8" cy="8" fill="white" stroke="currentColor" />
  </svg>
);

const LinkTemplate: Story = {
  args: {
    external: false,
    placeholder: false,
    icon: undefined,
    iconPosition: undefined,
  },
  render: (args) => (
    <LuxLink {...args} icon={args.icon ? ExampleIcon : undefined}>
      {args.children}
    </LuxLink>
  ),
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
  args: {
    className: 'utrecht-link--visited',
  },
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

export const Visual = createVisualRegressionStory(() => <VisualRegressionTest testCase={VisualStates} />);
