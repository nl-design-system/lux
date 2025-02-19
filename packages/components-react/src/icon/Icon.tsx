import {
  Icon as UtrechtIcon,
  type IconProps as UtrechtIconProps,
} from '@utrecht/component-library-react/dist/css-module';
import { PropsWithChildren, ReactNode } from 'react';
import FallbackIcon from './FallbackIcon';

export type LuxIconProps = UtrechtIconProps & {
  icon?: ReactNode;
};

export const LuxIcon = ({ icon, children }: PropsWithChildren<LuxIconProps>): ReactNode => {
  return (
    <UtrechtIcon>
      <style>
        {`svg {
  fill: currentColor;
          }`}
      </style>
      {icon ?? <FallbackIcon />}
      {children}
    </UtrechtIcon>
  );
};
