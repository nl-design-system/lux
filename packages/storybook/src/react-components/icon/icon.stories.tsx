import { LuxIcon, LuxIconProps } from '@lux-design-system/components-react';
import { IconId, iconIds } from '@lux-design-system/icons';
import type { ArgTypes, Meta, StoryObj } from '@storybook/react';
import * as tablerIcons from '@tabler/icons-react';
import { ReactNode } from 'react';

const CustomLibrary: Partial<Record<string, ReactNode>> = {
  candle: <tablerIcons.IconCandle />,
  bulb: <tablerIcons.IconBulb />,
  lamp: <tablerIcons.IconLamp />,
  'building-lighthouse': <tablerIcons.IconBuildingLighthouse />,
};

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
    iconId: 'lux' as IconId,
  },
  argTypes: {
    iconId: {
      control: 'select',
      options: iconIds,
    },
    library: {
      control: 'object',
    },
  },
  tags: ['!autodocs'],
};

export const IconLibrary: Story = {
  name: 'Icon Library',
  args: {
    library: CustomLibrary,
    iconId: 'candle',
  },
  argTypes: {
    iconId: {
      control: 'select',
      options: Object.keys(CustomLibrary),
    },
  },
};
