import { LuxButton } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import tokensDefinition from '@utrecht/button-css/src/tokens.json';
import { InteractiveStates, PropertyStates } from './visual/States';
import { Appearances, Sizes } from './visual/Variants';
import { BADGES } from '../../../config/preview';
import { createDesignTokensStory, createVisualRegressionStory, VisualRegressionWrapper } from '../../utils';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'React Components/Button',
  id: 'react-components-button',
  component: LuxButton,
  subcomponents: {},
  parameters: {
    badges: [BADGES.BETA, BADGES.LATEST],
    tokens,
    tokensDefinition,
    tokensPrefix: 'utrecht-button',
  },
  argTypes: {
    appearance: {
      description: 'Appearance modifier',
      control: 'select',
      options: [undefined, 'primary-action-button', 'secondary-action-button', 'subtle-button'],
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
      table: {
        defaultValue: {
          summary: 'start',
        },
      },
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
      control: 'boolean',
      table: {
        type: {
          summary: 'HTML/SVG Content / React Node',
          detail: 'Use the boolean switch to show an Icon',
        },
      },
    },
    children: {
      description: 'Label (children)',
      table: {
        type: {
          summary: 'HTML Content / React Node',
        },
      },
    },
  },
} satisfies Meta<typeof LuxButton>;

export default meta;

//TODO replace icon in #308
const ExampleIcon = (
  <svg height="16" width="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <circle r="6" cx="7" cy="7" fill="white" stroke="currentColor" />
  </svg>
);

const ButtonTemplate: Story = {
  args: {
    appearance: 'primary-action-button',
    size: undefined,
    iconPosition: undefined,
    icon: undefined,
    pressed: false,
    busy: false,
    children: 'Button',
  },
  render: ({ icon, children, ...args }: { icon: boolean; children: any; args: unknown }) => (
    <LuxButton icon={icon ? ExampleIcon : null} {...args}>
      {children}
    </LuxButton>
  ),
};

const AllButtonVariantsTemplate: Story = {
  ...ButtonTemplate,
  render: ({ ...args }) => (
    <>
      <LuxButton {...args} appearance="primary-action-button">
        {args['children']}
      </LuxButton>
      <LuxButton {...args} appearance="secondary-action-button">
        {args['children']}
      </LuxButton>
      <LuxButton {...args} appearance="subtle-button">
        {args['children']}
      </LuxButton>
    </>
  ),
  decorators: [
    (Story: StoryFn) => (
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

export const Primary: Story = {
  ...ButtonTemplate,
  name: 'Primary',
  args: {
    ...ButtonTemplate.args,
    appearance: 'primary-action-button',
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
  ...ButtonTemplate,
  name: 'Secondary',
  args: {
    ...ButtonTemplate.args,
    appearance: 'secondary-action-button',
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
  ...ButtonTemplate,
  name: 'Tertiary',
  args: {
    ...ButtonTemplate.args,
    appearance: 'subtle-button',
  },
  parameters: {
    docs: {
      description: {
        story: 'De Tertiary styling zet je met `appearance="subtle-button"`',
      },
    },
  },
};

export const SmallButton: Story = {
  ...ButtonTemplate,
  name: 'Small',
  args: {
    ...ButtonTemplate.args,
    size: 'small',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een kleine variant zet je met `size="small"`.',
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
    ...ButtonTemplate.args,
  },
};

export const Hover: Story = {
  ...AllButtonVariantsTemplate,
  name: 'Hover',
  parameters: {
    pseudo: { hover: true },
  },
  args: {
    ...ButtonTemplate.args,
  },
};

export const Focus: Story = {
  ...AllButtonVariantsTemplate,
  name: 'Focus',
  parameters: {
    pseudo: { focus: true, focusVisible: true },
  },
  args: {
    ...ButtonTemplate.args,
  },
};

export const Disabled: Story = {
  ...AllButtonVariantsTemplate,
  name: 'Disabled',
  args: {
    ...ButtonTemplate.args,
    disabled: true,
  },
};

export const Busy: Story = {
  ...AllButtonVariantsTemplate,
  name: 'Busy',
  args: {
    ...ButtonTemplate.args,
    busy: true,
  },
  parameters: {
    docs: {
      description: {
        story: `Een busy button zet je met het \`busy\`-attribute (\`true\`/\`false\`, default: \`undefined\`). Toont een \`wait\` cursor en \`aria-busy\`-attribute. Dit gebruik je 
          bijvoorbeeld als een gebruiker met een knop een actie in gang zet die langer kan duren, zoals een download.`,
      },
    },
  },
};

export const Toggle: Story = {
  ...ButtonTemplate,
  name: 'Toggle',
  args: {
    ...ButtonTemplate.args,
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
        Button {args.pressed ? 'pressed' : 'not pressed'}
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
  parameters: {
    docs: {
      description: {
        story:
          'Een pressed button zet je met het `pressed`-attribute (`true`/`false`/`"mixed"`, default: `undefined`). Zet `aria-pressed`-attribute.',
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

export const DesignTokens = createDesignTokensStory(meta);

export const Visual = createVisualRegressionStory(() => (
  <>
    <h4 className="utrecht-heading-3">Light</h4>
    <h5 className="utrecht-heading-4">Logius</h5>
    <VisualRegressionWrapper className={`lux-theme--logius-light`}>
      <Appearances />
      <Sizes />
      <InteractiveStates />
      <PropertyStates />
    </VisualRegressionWrapper>
    <h5 className="utrecht-heading-4">MijnAansluitingen</h5>
    <VisualRegressionWrapper className={`lux-theme--eva-light`}>
      <Appearances />
      <Sizes />
      <InteractiveStates />
      <PropertyStates />
    </VisualRegressionWrapper>
    <h4 className="utrecht-heading-3">Dark</h4>
    <h5 className="utrecht-heading-4">Logius</h5>
    <VisualRegressionWrapper className={`lux-theme--logius-dark`}>
      <Appearances />
      <Sizes />
      <InteractiveStates />
      <PropertyStates />
    </VisualRegressionWrapper>
    <h5 className="utrecht-heading-4">MijnAansluitingen</h5>
    <VisualRegressionWrapper className={`lux-theme--eva-dark`}>
      <Appearances />
      <Sizes />
      <InteractiveStates />
      <PropertyStates />
    </VisualRegressionWrapper>
  </>
));
