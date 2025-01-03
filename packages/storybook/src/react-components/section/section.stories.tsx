import {
  LuxHeading1,
  LuxHeading2,
  LuxParagraph,
  type LuxSectionProps,
  LuxSection as Section,
} from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';
import { type HTMLAttributes, type PropsWithChildren } from 'react';
import { VisualStates } from './visual/States';
import { BADGES } from '../../../config/preview';
import { createVisualRegressionStory, VisualRegressionWrapper } from '../../utils';

const LuxSection = (props: PropsWithChildren<LuxSectionProps> & HTMLAttributes<HTMLDivElement>) => (
  <Section {...props} />
);

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'React Components/Section',
  id: 'react-components-section',
  component: LuxSection,
  parameters: {
    badges: [BADGES.BETA, BADGES.LATEST],
    tokens,
    tokensPrefix: 'react-section',
  },
  argTypes: {
    children: {
      name: 'content',
      description: 'React text',
      table: {
        type: {
          summary: 'HTML Content',
        },
      },
    },
  },
} satisfies Meta<typeof LuxSection>;

export default meta;

const SectionTemplate: Story = {
  render: ({ children, ...args }) => <LuxSection {...args}>{children}</LuxSection>,
};

export const Playground: Story = {
  ...SectionTemplate,
  name: 'Playground',
  args: {
    children: [
      <div>
        <LuxHeading1>Lorem ipsum</LuxHeading1>
        <LuxParagraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Dolor ante id varius, aenean eu faucibus vitae
          malesuada. Viverra malesuada aliquam et placerat justo porta ipsum parturient. Cursus nostra varius efficitur
          lobortis aliquam lectus bibendum.
        </LuxParagraph>
      </div>,
      <div>
        <LuxHeading2>Morbi commodo</LuxHeading2>
        <LuxParagraph>
          Morbi commodo augue eget consequat tempus. Nulla scelerisque cursus fermentum. Aenean placerat ligula libero,
          sit amet malesuada neque maximus et. Phasellus at massa nulla. Quisque sagittis tempor ante, quis sollicitudin
          nisi vulputate eu. Curabitur eget ante a orci efficitur commodo. Fusce lobortis laoreet tincidunt. Nam a massa
          quis risus vestibulum vulputate nec eget erat. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Curabitur finibus semper congue. Integer in nulla venenatis quam luctus
          accumsan. Aliquam molestie tincidunt erat a tincidunt. Donec posuere et dolor sit amet euismod. Praesent dolor
          justo, aliquet quis nulla ac, ultrices dictum leo.
        </LuxParagraph>
      </div>,
    ],
  },
  parameters: {
    backgrounds: {
      default: 'canvas',
    },
    docs: {
      sourceState: 'shown',
    },
  },
  tags: ['!autodocs'],
};

export const Visual = createVisualRegressionStory(() => (
  <>
    <h4 className="utrecht-heading-3">Light</h4>
    <VisualRegressionWrapper className="lux-theme--logius-light">
      <VisualStates />
    </VisualRegressionWrapper>
    <h4 className="utrecht-heading-3">Dark</h4>
    <VisualRegressionWrapper className="lux-theme--logius-dark">
      <VisualStates />
    </VisualRegressionWrapper>
  </>
));
