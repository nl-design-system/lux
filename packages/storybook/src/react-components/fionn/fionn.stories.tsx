import { Fionn } from '@lux-design-system/components-react';
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import type { Meta, StoryObj } from '@storybook/react';
import { BADGES } from '../../../config/preview';
import { createDesignTokensStory, createVisualRegressionStory, VisualRegressionWrapper } from '../../utils';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'React Components/Fionn',
  id: 'react-components-fionn',
  component: Fionn,
  parameters: {
    badges: [BADGES.STABLE, BADGES.LATEST],
    tokens,
  },
} satisfies Meta<typeof Fionn>;

export default meta;

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
  tags: ['!autodocs'],
};

export const DesignTokens = createDesignTokensStory(meta);

export const Visual = createVisualRegressionStory(
  () => (
    <>
      <h4 className="utrecht-heading-3">Light</h4>
      <VisualRegressionWrapper className={`lux-theme--logius-light`}>
        <Fionn />
      </VisualRegressionWrapper>
      <h4 className="utrecht-heading-3">Dark</h4>
      <VisualRegressionWrapper className={`lux-theme--logius-dark`}>
        <Fionn />
      </VisualRegressionWrapper>
    </>
  ),
  { withDocument: true },
);
