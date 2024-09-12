import {
  Heading as UtrechtHeading,
  HeadingProps as UtrechtHeadingProps,
} from '@utrecht/component-library-react/dist/css-module';
import React from 'react';
import { PropsWithChildren, ReactNode } from 'react';

export interface LuxHeadingProps extends UtrechtHeadingProps {}

export const LuxHeading = ({ children, level = 3, ...props }: PropsWithChildren<LuxHeadingProps>): ReactNode => {
  return (
    <UtrechtHeading level={level} {...props}>
      {children}
    </UtrechtHeading>
  );
};
