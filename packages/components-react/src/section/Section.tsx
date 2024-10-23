import { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import './Section.css';

export interface LuxSectionProps extends HTMLAttributes<HTMLDivElement> {}

export const LuxSection = ({ children, className, ...otherProps }: PropsWithChildren<LuxSectionProps>): ReactNode => {
  return (
    <div role="region" {...otherProps} className={`lux-section ${className}`}>
      {children}
    </div>
  );
};
