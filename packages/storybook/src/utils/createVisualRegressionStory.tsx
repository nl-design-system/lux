import { StoryObj } from '@storybook/react';
import { CSSProperties, PropsWithChildren, ReactElement } from 'react';

type VisualRegressionRenderFn = () => ReactElement<void, any>;
interface CreateVisualRegressionStoryFn {
  // eslint-disable-next-line no-unused-vars
  (render: VisualRegressionRenderFn): StoryObj;
}

export const createVisualRegressionStory: CreateVisualRegressionStoryFn = (
  render: VisualRegressionRenderFn,
): StoryObj => {
  return {
    parameters: {
      options: {
        showPanel: false,
      },
      a11y: { disable: true },
      interactions: { disable: true },
      actions: { disable: true },
      controls: { disable: true },
      backgrounds: { default: 'transparent' },
      chromatic: {
        disable: false,
        disableSnapshot: false,
      },
    },
    render,
  };
};

export const VisualRegressionWrapper = ({ children }: PropsWithChildren) => {
  const wrapperStyle: CSSProperties = {
    backgroundColor: '',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    gap: '16px 32px',
  };

  return <div style={wrapperStyle}>{children}</div>;
};
