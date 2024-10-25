import {
  type HeadingGroupProps,
  HeadingGroup as UtrechtHeadingGroup,
} from '@utrecht/component-library-react/dist/css-module';
import { PropsWithChildren, ReactNode } from 'react';

export const LuxHeadingGroup = ({ children, ...restProps }: PropsWithChildren<HeadingGroupProps>): ReactNode => {
  return <UtrechtHeadingGroup {...restProps}>{children}</UtrechtHeadingGroup>;
};

export type LuxHeadingGroupProps = HeadingGroupProps;
