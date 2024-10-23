import {
  type PreHeadingProps,
  PreHeading as UtrechtPreHeading,
} from '@utrecht/component-library-react/dist/css-module';
import { PropsWithChildren, ReactNode } from 'react';

export const LuxPreHeading = ({ children, ...restProps }: PropsWithChildren<PreHeadingProps>): ReactNode => {
  return <UtrechtPreHeading {...restProps}>{children}</UtrechtPreHeading>;
};

export type LuxPreHeadingProps = PreHeadingProps;
