import { StoryObj } from '@storybook/react';
import { CSSProperties, PropsWithChildren, ReactElement } from 'react';

type VisualRegressionRenderFn = () => ReactElement<void, any>;
interface CreateVisualRegressionStoryFn {
  // eslint-disable-next-line no-unused-vars
  (render: VisualRegressionRenderFn): StoryObj;
}

/**
 * Create a story which will be used by Chromatic, but is invisible to the user. You can still navigate to it via URL.
 *
 * **Usage**
 *
 * Combine it with {@link VisualRegressionWrapper} component to make sure all visual regression stories have the same layout
 *
 * ```ts
 * export const Visual = createVisualRegressionStory(() => (
 *   <VisualRegressionWrapper>
 *     <MyComponent state="default" />
 *     <MyComponent state="special" />
 *     <MyComponent state="special2" />
 *     <MyComponent state="special3" />
 *   </VisualRegressionWrapper>
 * ));
 * ```
 *
 * @remarks By starting your story's name with "visual" it is still tested by Chromatic, but not visible in the side bar. You can still navigate to it through the URL.
 *
 * @see {@link VisualRegressionWrapper}
 * @param render function which renders the story's body
 * @returns a storybook story
 */
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

/**
 * Create an HTML flex container so every visual regression story has the same layout
 *
 * Use together with #createVisualRegressionStory
 *
 * @see {@link createVisualRegressionStory} on how to use it
 * @param props {@link React.PropsWithChildren}
 * @returns A {@link React.ReactElement}
 */
export const VisualRegressionWrapper = ({
  children,
  className,
}: PropsWithChildren<{ className: string }>): React.ReactElement => {
  const wrapperStyle: CSSProperties = {
    backgroundColor: '',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    gap: '16px 32px',
  };

  return (
    <div className={className} style={wrapperStyle}>
      {children}
    </div>
  );
};
