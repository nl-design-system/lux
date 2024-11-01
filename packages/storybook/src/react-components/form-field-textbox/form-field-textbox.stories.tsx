import { LuxFormFieldTextbox } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';
// import { forwardRef, InputHTMLAttributes, PropsWithChildren } from 'react';
import { BADGES } from '../../../config/preview';
import TextboxMeta from '../textbox/textbox.stories';

const meta = {
  title: 'React Components/Form Field/Form Field Textbox',
  id: 'react-components-form-field-form-field-textbox',
  component: LuxFormFieldTextbox,
  parameters: {
    badges: [BADGES.WIP, BADGES.CANARY],
    tokens,
    tokensPrefix: 'react-form-field',
  },
  argTypes: {
    ...TextboxMeta.argTypes,
    // type: {
    //   control: 'select',
    //   options: ['text', 'checkbox', 'radio'],
    //   description: 'The type of the form field',
    // },
    // invalid: {
    //   control: 'boolean',
    //   description: 'Whether the field is in an invalid state',
    //   defaultValue: false,
    // },
  },
} satisfies Meta<typeof LuxFormFieldTextbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: 'Playground',
  args: {
    label: 'test',
    description: '', // ReactNode;
    errorMessage: '', // ReactNode;
    inputDir: undefined, //TextboxProps['dir'];
    inputRef: undefined, // Ref<HTMLInputElement>;
    invalid: false,
    status: '', // ReactNode;
    // appearance: undefined,
    // children:
    //   'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Dolor ante id varius, aenean eu faucibus vitae malesuada. Viverra malesuada aliquam et placerat justo porta ipsum parturient. Cursus nostra varius efficitur lobortis aliquam lectus bibendum.',
  },
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
  tags: ['!autodocs'],
};
