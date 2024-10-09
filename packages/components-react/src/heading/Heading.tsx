import { Heading as UtrechtHeading } from '@utrecht/component-library-react/dist/css-module';
import { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';

type HeadingLevels = 1 | 2 | 3 | 4 | 5 | 6;

export interface LuxHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  appearance?: HeadingLevels;
  level: HeadingLevels;
}

export const LuxHeading = ({
  children,
  level = 6,
  appearance = level,
  ...props
}: PropsWithChildren<LuxHeadingProps>): ReactNode => {
  const _level = level > 6 || level < 1 ? 6 : level;
  const _appearance = appearance > 6 || appearance < 1 ? 6 : appearance;
  return (
    <UtrechtHeading
      level={_level}
      {...(_appearance ? { appearance: `utrecht-heading-${_appearance}` } : {})}
      {...props}
    >
      {children}
    </UtrechtHeading>
  );
};

export const LuxHeading1 = ({ ...props }: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>): ReactNode => (
  <LuxHeading level={1} appearance={1} {...props} />
);
export const LuxHeading2 = ({ ...props }: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>): ReactNode => (
  <LuxHeading level={2} appearance={2} {...props} />
);
export const LuxHeading3 = ({ ...props }: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>): ReactNode => (
  <LuxHeading level={3} appearance={3} {...props} />
);
export const LuxHeading4 = ({ ...props }: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>): ReactNode => (
  <LuxHeading level={4} appearance={4} {...props} />
);
export const LuxHeading5 = ({ ...props }: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>): ReactNode => (
  <LuxHeading level={5} appearance={5} {...props} />
);
export const LuxHeading6 = ({ ...props }: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>): ReactNode => (
  <LuxHeading level={6} appearance={6} {...props} />
);
