import { LuxIcon, LuxIconProps } from '@lux-design-system/components-react';
import type { ArgTypes, Meta, StoryObj } from '@storybook/react';
import { IconBuildingLighthouse, IconBulb, IconCandle, IconLamp } from '@tabler/icons-react';

interface ExtraArgs {
  size?: number | string;
}

type Story = StoryObj<typeof meta> & { args: ExtraArgs };

const meta = {
  title: 'React Components/Icon',
  id: 'react-components-icon',
  component: LuxIcon,
  decorators: [
    (Story, { args }: { args: LuxIconProps & ExtraArgs }) => (
      <>
        <style>
          {`:root {
            --utrecht-icon-color: ${args.color};
            --utrecht-icon-size: ${args.size}rem;
          }`}
        </style>
        <Story />
      </>
    ),
  ],
  args: {
    size: 4,
  },
  argTypes: {
    color: {
      control: 'color',
    },
    size: {
      control: 'number',
    },
  },
  parameters: {},
} satisfies Meta<typeof LuxIcon> & { args: ExtraArgs; argTypes: ArgTypes<ExtraArgs> };

export default meta;

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
  args: {
    icon: 'fallback',
  },
  argTypes: {
    icon: {
      control: 'select',
      options: ['fallback', 'candle', 'bulb', 'lamp', 'building-lighthouse'],
      mapping: {
        fallback: undefined,
        candle: <IconCandle />,
        bulb: <IconBulb />,
        lamp: <IconLamp />,
        'building-lighthouse': <IconBuildingLighthouse />,
      },
    },
  },
  tags: ['!autodocs'],
};
