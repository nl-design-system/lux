import {
  Icon as UtrechtIcon,
  type IconProps as UtrechtIconProps,
} from '@utrecht/component-library-react/dist/css-module';
import { PropsWithChildren, ReactNode } from 'react';
import FallbackIcon from './FallbackIcon';

export type LuxIconProps = UtrechtIconProps & {
  iconId: string;
  library?: Record<string, ReactNode>;
};

export const LuxIcon = ({ iconId, library, children }: PropsWithChildren<LuxIconProps>): ReactNode => {
  return (
    <UtrechtIcon>
      <style>
        {`svg {
  fill: currentColor;
          }`}
      </style>
      {library !== undefined && iconId in library ? library[iconId] : <FallbackIcon />}
      {children}
    </UtrechtIcon>
  );
};
