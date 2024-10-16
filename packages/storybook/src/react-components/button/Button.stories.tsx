import { LuxButton as Button, type LuxButtonProps } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';
import { type HTMLAttributes, type PropsWithChildren } from 'react';

const LuxButton = (props: PropsWithChildren<LuxButtonProps> & HTMLAttributes<HTMLButtonElement>) => (
  <Button {...props} />
);

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'React Components/Button',
  id: 'react-components-button',
  component: LuxButton,
  subcomponents: {},
  parameters: {
    tokens,
    tokensPrefix: 'utrecht-button',
    withDocument: false,
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
  tags: ['!autodocs'],
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
  tags: ['!autodocs'],
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
  tags: ['!autodocs'],
};
