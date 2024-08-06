import {
  LuxButton as Button,
  LuxIconChevronLeft as IconChevronLeft,
  LuxIconChevronRight as IconChevronRight,
} from '@lux-design-system/web-components-react';
import type { JSX } from '@lux-design-system/web-components-stencil';
import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent /*, fn, within*/ } from '@storybook/test';
import { type PropsWithChildren /*, type PropsWithoutRef */ } from 'react';
import {
  //   deepQuerySelector,
  //   deepQuerySelectorAll,
  //   getAllElementsAndShadowRoots,
  //   screen,
  within,
} from 'shadow-dom-testing-library';
// import { withinShadowRoot } from '../../utils/withinShadowRoot';

const LuxButton = (props: PropsWithChildren<JSX.LuxButton>) => <Button {...props} />;

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Web Components/Button',
  id: 'web-components-button',
  component: LuxButton,
  // parameters: {
  //   tokens,
  //   tokensPrefix: 'lux-button',
  //   tokensDefinition,
  // },
  argTypes: {
    appearance: {
      control: { type: 'select' },
      options: [undefined, 'button', 'primary-action-button', 'secondary-action-button', 'subtle-button'],
    },
    children: {
      name: 'label',
      description: 'Button text',
      control: 'text',
    },
    busy: {
      type: 'boolean',
    },
    disabled: {
      type: 'boolean',
    },
    expanded: {
      control: 'select',
      options: [undefined, 'false', 'true'],
    },
    pressed: {
      control: 'select',
      options: [undefined, 'false', 'true', 'mixed'],
    },
    type: {
      control: 'select',
      options: [undefined, 'button', 'reset', 'submit'],
      table: {
        defaultValue: {
          summary: 'button',
        },
      },
    },
  },
} satisfies Meta<typeof LuxButton>;

export default meta;

export const Playground: Story = {
  name: 'Playground',
  args: {
    appearance: 'primary-action-button',
    children: 'Button',
    type: undefined,
    name: '',
    value: '',
    busy: false,
    disabled: false,
    expanded: undefined,
    pressed: undefined,
    form: '',
    formAction: '',
    formEnctype: '',
    formMethod: '',
    formNoValidate: false,
    popoverTarget: '',
    popoverTargetAction: '',
  },
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
  tags: ['!autodocs'],
};

export const Primary: Story = {
  name: 'Primary',
  args: {
    appearance: 'primary-action-button',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  name: 'Secondary',
  args: {
    appearance: 'secondary-action-button',
    children: 'Secondary Button',
  },
};

export const Tertiary: Story = {
  name: 'Tertiary',
  args: {
    appearance: 'subtle-button',
    children: 'Tertiary Button',
  },
};

// export const WithoutAppearance: Story = {
//   name: 'Default',
//   args: {
//     appearance: '',
//     children: 'Without appearance Button',
//   },
// };

// TODO: see how we can trigger active (and others)
export const Active: Story = {
  name: 'Active',
  args: {
    appearance: 'primary-action-button',
    children: 'Active Button',
    forceState: 'active',
  },
  play: async ({ canvasElement }) => {
    const canvas = await within(canvasElement);
    const luxButton = canvas.getByShadowText('Active Button');
    await userEvent.pointer({ target: luxButton, keys: '[MouseLeft]' });
  },
};

export const Hover: Story = {
  name: 'Hover',
  args: {
    appearance: 'primary-action-button',
    children: 'Hover Button',
    forceState: 'hover',
  },
  // render: (args) => (
  //   <LuxButton {...args}>
  //     { args.children }
  //   </LuxButton>
  // ),
};

export const Focus: Story = {
  name: 'Focus',
  args: {
    appearance: 'primary-action-button',
    children: 'Focus Button',
    forceState: 'focus',
  },
};

export const WithStartIcon: Story = {
  name: 'Start Icon',
  args: {
    appearance: 'primary-action-button',
    children: 'Start Icon',
  },
  render: (args) => (
    <LuxButton {...args}>
      <IconChevronLeft />
      {args.children}
    </LuxButton>
  ),
};

export const WithEndIcon: Story = {
  name: 'End Icon',
  args: {
    appearance: 'primary-action-button',
    children: 'End Icon',
  },
  render: (args) => (
    <LuxButton {...args}>
      {args.children}
      <IconChevronRight />
    </LuxButton>
  ),
};

export const Busy: Story = {
  name: 'Busy',
  args: {
    appearance: 'primary-action-button',
    children: 'Busy Button',
    busy: true,
  },
};

export const Toggle: Story = {
  name: 'Toggle',
  args: {
    appearance: 'primary-action-button',
    pressed: true,
  },
  render: (args: any) => {
    const [{ pressed }, updateArgs] = useArgs();

    const onPress = () => {
      updateArgs({ pressed: !pressed });
    };

    return (
      <LuxButton {...args} onClick={onPress}>
        Toggle Button {args.pressed ? 'pressed' : 'not pressed'}
      </LuxButton>
    );
  },
  argTypes: {
    pressed: {
      control: 'boolean',
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
  // play: async({ canvasElement }) => {
  //   const canvas = await within(canvasElement);
  //   // const canvas = await withinShadowRoot(canvasElement, 'lux-button');
  //   const luxButton = canvas.getByShadowText('Toggle Button'); // deepQuerySelector(canvasElement, '*');
  //   // const utrechtButton = deepQuerySelector(canvasElement, 'utrecht-button', { shallow: true });

  //   // console.log(canvasElement, canvas, luxButton, utrechtButton, luxButton && within(luxButton));

  //   await userEvent.click(luxButton);
  // }
};
