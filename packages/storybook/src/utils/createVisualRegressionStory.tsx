import { LuxHeading3 } from '@lux-design-system/components-react';
import { StoryObj } from '@storybook/react';
import clsx from 'clsx';
import { PropsWithChildren, ReactElement } from 'react';

type VisualRegressionRenderFn = () => ReactElement<void, any>;
interface CreateVisualRegressionStoryFn {
  /* eslint-disable no-unused-vars */
  (
    render: VisualRegressionRenderFn,
    options?: {
      withDocument?: boolean;
    },
  ): StoryObj;
  /* eslint-enable */
}

export type LuxMode = 'light' | 'dark';
export type Product = 'digid' | 'digitoegankelijk' | 'eva' | 'logius' | 'mijnoverheid' | 'nldoc';
export type TestCaseProps<T = unknown> = {
  mode: LuxMode;
  product: Product;
} & T;

type VisualRegressionTestProps = {
  // eslint-disable-next-line no-unused-vars
  testCase: (props: TestCaseProps) => JSX.Element;
  products?: Product[];
};

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
 * @param options set options for the story
 * @returns a storybook story
 */
export const createVisualRegressionStory: CreateVisualRegressionStoryFn = (
  render: VisualRegressionRenderFn,
  options = {},
): StoryObj => {
  const { withDocument = false } = options;
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
      withDocument,
    },
    render,
  };
};

const VisualRegressionWrapperNew = ({
  children,
  className,
  mode,
  product,
}: PropsWithChildren<{ className?: string; mode: LuxMode; product: Product }>): ReactElement => {
  const classNames = clsx({
    'lsb-visual-regression-wrapper': true,
    'lsb-visual-regression-wrapper--dark': mode === 'dark',
    'utrecht-document': true,
    [`lux-theme--${product}-${mode}`]: true,
    [className ?? '']: true,
  });

  return <div className={classNames}>{children}</div>;
};

/**
 * Create an HTML flex container so every visual regression story has the same layout
 *
 * Use together with #createVisualRegressionStory
 *
 * @see {@link createVisualRegressionStory} on how to use it
 * @param props {@link React.PropsWithChildren}
 * @returns A {@link ReactElement}
 */
export const VisualRegressionWrapper = ({
  children,
  className,
}: PropsWithChildren<{ className: string }>): React.ReactElement => {
  return (
    <div
      className={`lsb-visual-regression-wrapper ${className.includes('dark') ? 'lsb-visual-regression-wrapper--dark' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

const MODES: LuxMode[] = ['light', 'dark'];

export const VisualRegressionTest = ({
  testCase: TestCase,
  products = [],
  ...testCaseProps
}: PropsWithChildren<VisualRegressionTestProps>) => (
  <>
    {(['logius', ...products] as Product[]).map((product: Product) =>
      MODES.map((mode: LuxMode) => (
        <VisualRegressionWrapperNew key={`${product}-${mode}`} product={product} mode={mode}>
          <LuxHeading3 className="lsb-visual-regression-heading">
            {product} {mode}
          </LuxHeading3>
          <TestCase product={product} mode={mode} {...testCaseProps} />
        </VisualRegressionWrapperNew>
      )),
    )}
  </>
);
