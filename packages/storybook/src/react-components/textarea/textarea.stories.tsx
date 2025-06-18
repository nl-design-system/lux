import { LuxTextArea, type LuxTextAreaProps } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';
import { BADGES } from '../../../config/preview';

const meta = {
  title: 'React Components/Textarea',
  id: 'react-components-textarea',
  component: LuxTextArea,
  parameters: {
    badges: [BADGES.WIP, BADGES.LATEST],
    tokens,
    tokensPrefix: 'utrecht-textarea',
  },
  argTypes: {
    dir: {
      description: 'Text direction',
      control: { type: 'select' },
      options: ['auto', 'ltr', 'rtl'],
    },
    disabled: {
      description: 'Disabled',
      control: 'boolean',
    },
    invalid: {
      description: 'Invalid',
      control: 'boolean',
    },
    readOnly: {
      description: 'Read-only',
      control: 'boolean',
    },
    required: {
      description: 'Required',
      control: 'boolean',
    },
    rows: {
      description: 'Rows',
      control: 'number',
    },
    placeholder: {
      description: 'Set the value of the placeholder text',
      control: 'text',
    },
    spellCheck: {
      description: 'Spellcheck',
      control: 'boolean',
    },
  },
  args: {
    dir: 'auto',
    disabled: false,
    invalid: false,
    readOnly: false,
    required: false,
    spellCheck: true,
  },
} satisfies Meta<typeof LuxTextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const TextareaTemplate: Story = {
  render: (args: LuxTextAreaProps) => <LuxTextArea {...args} />,
};

export const Playground: Story = {
  ...TextareaTemplate,
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
};

export const Default: Story = {
  ...TextareaTemplate,
  args: {
    placeholder: 'Default textarea',
  },
};

export const RTL: StoryObj<LuxTextAreaProps> = {
  args: {
    placeholder: 'اكتب هنا...',
    dir: 'rtl',
  },
};

export const Invalid: StoryObj<LuxTextAreaProps> = {
  args: {
    placeholder: 'Typ hier iets...',
    invalid: true,
  },
};

export const Disabled: StoryObj<LuxTextAreaProps> = {
  args: {
    placeholder: 'Dit veld is uitgeschakeld',
    disabled: true,
  },
};

export const ReadOnly: StoryObj<LuxTextAreaProps> = {
  args: {
    placeholder: 'Dit veld is alleen-lezen',
    readOnly: true,
    value: 'Dit is een alleen-lezen tekst',
  },
};

export const Required: StoryObj<LuxTextAreaProps> = {
  args: {
    placeholder: 'Vul dit veld in',
    required: true,
  },
};

export const DisableSpellCheck: StoryObj<LuxTextAreaProps> = {
  args: {
    placeholder: 'Spellingscontrole is uitgeschakeld',
    spellCheck: false,
  },
};

export const AutoFocus: StoryObj<LuxTextAreaProps> = {
  args: {
    placeholder: 'Dit veld krijgt automatisch focus',
    autoFocus: true,
  },
};

export const FocusVisible: StoryObj<LuxTextAreaProps> = {
  args: {
    placeholder: 'Tab hiernaartoe om focus-visible te testen',
  },
  parameters: {
    pseudo: { focusVisible: true },
  },
};

export const Hover: StoryObj<LuxTextAreaProps> = {
  args: {
    placeholder: 'Beweeg je muis hierover',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const MaxLengte: StoryObj<LuxTextAreaProps> = {
  args: {
    placeholder: 'Maximaal 100 tekens',
    maxLength: 100,
  },
};

export const CustomCSSClass: StoryObj<LuxTextAreaProps> = {
  args: {
    placeholder: 'Met een aangepaste class',
    className: 'custom-textarea',
  },
};

export const Rows: StoryObj<LuxTextAreaProps> = {
  args: {
    placeholder: 'Aantal regels',
    rows: 8,
  },
};
