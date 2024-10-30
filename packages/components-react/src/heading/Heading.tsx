import { Heading as UtrechtHeading } from '@utrecht/component-library-react/dist/css-module';
import { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { clamp } from '../utils/number';

type HeadingLevels = 1 | 2 | 3 | 4 | 5 | 6;

export interface LuxHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  appearance?: HeadingLevels;
  level: HeadingLevels;
}

const APPEARANCES: { [key: number]: string } = {
  1: 'utrecht-heading-1',
  2: 'utrecht-heading-2',
  3: 'utrecht-heading-3',
  4: 'utrecht-heading-4',
  5: 'utrecht-heading-5',
  6: 'utrecht-heading-6',
};

export const LuxHeading = ({
  children,
  level,
  appearance = level,
  ...restProps
}: PropsWithChildren<LuxHeadingProps>): ReactNode => {
  const _level = clamp(1, level, 6);
  const _appearance = clamp(1, appearance, 6);

  return (
    <UtrechtHeading {...restProps} level={_level} {...(_appearance ? { appearance: APPEARANCES[_appearance] } : {})}>
      {children}
    </UtrechtHeading>
  );
};

export const LuxHeading1 = ({ ...props }: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>): ReactNode => (
  <LuxHeading {...props} level={1} />
);
export const LuxHeading2 = ({ ...props }: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>): ReactNode => (
  <LuxHeading {...props} level={2} />
);
export const LuxHeading3 = ({ ...props }: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>): ReactNode => (
  <LuxHeading {...props} level={3} />
);
export const LuxHeading4 = ({ ...props }: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>): ReactNode => (
  <LuxHeading {...props} level={4} />
);
export const LuxHeading5 = ({ ...props }: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>): ReactNode => (
  <LuxHeading {...props} level={5} />
);
export const LuxHeading6 = ({ ...props }: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>): ReactNode => (
  <LuxHeading {...props} level={6} />
);
