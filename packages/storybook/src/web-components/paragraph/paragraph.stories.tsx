//import tokens from '@lux-design-system/design-tokens/dist/index.json';
import {
  LuxParagraph as Paragraph,
  // LuxIconChevronLeft as IconChevronLeft,
  // LuxIconChevronRight as IconChevronRight,
} from '@lux-design-system/web-components-react';
import type { JSX } from '@lux-design-system/web-components-stencil';
// import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';
// import { userEvent } from '@storybook/test';
import { type PropsWithChildren } from 'react';
// import { within } from 'shadow-dom-testing-library';
// import tokensDefinition from './tokens.json';
// import { createDesignTokensStory } from '../../utils';

const LuxParagraph = (props: PropsWithChildren<JSX.LuxParagraph>) => <Paragraph {...props} />;

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Web Components/Paragraph',
  id: 'web-components-paragraph',
  component: LuxParagraph,
  parameters: {
    // tokens,
    // tokensPrefix: 'lux-alert',
    // tokensDefinition,
  },
  argTypes: {
    // appearance: {
    //   control: { type: 'select' },
    //   options: [undefined, 'button', 'primary-action-button', 'secondary-action-button', 'subtle-button'],
    // },
    children: {
      name: 'label',
      description: 'Button text',
      control: 'text',
    },
    // busy: {
    //   type: 'boolean',
    // },
    // disabled: {
    //   type: 'boolean',
    // },
    // expanded: {
    //   control: 'select',
    //   options: [undefined, 'false', 'true'],
    // },
    // pressed: {
    //   control: 'select',
    //   options: [undefined, 'false', 'true', 'mixed'],
    // },
    // type: {
    //   control: 'select',
    //   options: [undefined, 'info', 'ok', 'warning', 'error'],
    //   table: {
    //     defaultValue: {
    //       summary: 'info',
    //     },
    //   },
    // },
  },
} satisfies Meta<typeof LuxParagraph>;

export default meta;

export const Playground: Story = {
  name: 'Playground',
  args: {
    children: 'lalala',
  },
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
  tags: ['!autodocs'],
};
