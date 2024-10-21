import { LuxButton } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'React Components/Button',
  id: 'react-components-button',
  component: LuxButton,
  subcomponents: {},
  parameters: {
    tokens,
    tokensPrefix: 'utrecht-button',
  },
  argTypes: {
    variant: {
      description: 'Variant modifier',
      control: 'select',
      options: [undefined, 'primary', 'secondary', 'tertiary'],
    },
    size: {
      description: 'Size modifier',
      control: 'select',
      options: [undefined, 'small'],
    },
    iconPosition: {
      description: 'Icon Position modifier',
      control: 'select',
      options: [undefined, 'start', 'end'],
    },
    busy: {
      description: 'Busy indicator',
      control: 'boolean',
    },
    pressed: {
      description: 'Pressed indicator',
      control: 'boolean',
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
    label: {
      description: 'Label Node',
      control: 'object',
      table: {
        type: {
          summary: 'HTML Content',
        },
      },
    },
    hint: {
      description: 'Hint text',
      control: 'text',
    },
  },
} satisfies Meta<typeof LuxButton>;

export default meta;

//TODO replace icon in #308
const ExampleIcon = (
  <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg">
    <circle r="6" cx="7" cy="7" fill="white" stroke="green" />
  </svg>
);

const ButtonTemplate: Story = {
  render: ({ children, ...args }) => <LuxButton {...args}>{children}</LuxButton>,
  args: {
    variant: 'primary',
    size: undefined,
    iconPosition: undefined,
    icon: undefined,
    pressed: false,
    busy: false,
    label: 'Klik hier!',
    hint: 'Klik op de button',
    onClick: () => {
      // eslint-disable-next-line no-alert
      alert('Geklikt!');
    },
  },
};

const AllButtonVariantsTemplate: Story = {
  ...ButtonTemplate,
  render: (args) => (
    <>
      <LuxButton {...args} variant="primary">
        {args['children']}
      </LuxButton>
      <LuxButton {...args} variant="secondary">
        {args['children']}
      </LuxButton>
      <LuxButton {...args} variant="tertiary">
        {args['children']}
      </LuxButton>
    </>
  ),
  decorators: [
    (Story) => (
      <div className="lsb-story-grid">
        <Story />
      </div>
    ),
  ],
};

export const Playground: Story = {
  ...ButtonTemplate,
  name: 'Playground',
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
  tags: ['!autodocs'],
};

export const SmallButton: Story = {
  ...ButtonTemplate,
  args: {
    ...ButtonTemplate.args,
    size: 'small',
  },
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
};

export const Primary: Story = {
  name: 'Primary',
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'De Primary styling zet je met `appearance="primary-action-button"`',
      },
    },
  },
};

export const Secondary: Story = {
  name: 'Secondary',
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'De Secondary styling zet je met `appearance="secondary-action-button"`',
      },
    },
  },
};

export const Tertiary: Story = {
  name: 'Tertiary',
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'De Tertiary styling zet je met `appearance="subtle-button"`',
      },
    },
  },
};

export const Active: Story = {
  ...AllButtonVariantsTemplate,
  name: 'Active',
  parameters: {
    pseudo: { active: true },
  },
  args: {
    children: 'Active Button',
  },
};

export const Hover: Story = {
  ...AllButtonVariantsTemplate,
  name: 'Hover',
  parameters: {
    pseudo: { hover: true },
  },
  args: {
    children: 'Hover Button',
  },
};

export const Focus: Story = {
  ...AllButtonVariantsTemplate,
  name: 'Focus',
  parameters: {
    pseudo: { focus: true, focusVisible: true },
  },
  args: {
    children: 'Focus Button',
  },
};

export const Disabled: Story = {
  ...AllButtonVariantsTemplate,
  name: 'Disabled',
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const Busy: Story = {
  ...AllButtonVariantsTemplate,
  name: 'Busy',
  args: {
    children: 'Busy Button',
    busy: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een busy button zet je met het `busy`-attribute (`true`/`false`, default: `undefined`). Toont een `wait` cursor en `aria-busy`-attribute.',
      },
    },
  },
};

export const ButtonWithIconAtPositionStart: Story = {
  ...ButtonTemplate,
  args: {
    ...ButtonTemplate.args,
    icon: ExampleIcon,
    iconPosition: 'start',
  },
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
};

export const ButtonWithIconAtPositionEnd: Story = {
  ...ButtonTemplate,
  args: {
    ...ButtonTemplate.args,
    icon: ExampleIcon,
    iconPosition: 'end',
  },
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
};
