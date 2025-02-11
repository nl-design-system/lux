import IconSet, { type IconId } from '@lux-design-system/icons';
import {
  Icon as UtrechtIcon,
  type IconProps as UtrechtIconProps,
} from '@utrecht/component-library-react/dist/css-module';
import { PropsWithChildren, ReactNode } from 'react';
import FallbackIcon from './FallbackIcon';

export type LuxIconProps = UtrechtIconProps & {
  iconId: IconId | string;
  library?: Record<string, ReactNode>;
};

export const LuxIcon = ({ iconId, library, children }: PropsWithChildren<LuxIconProps>): ReactNode => {
  const iconSet: Record<string, ReactNode> = library || IconSet;

  return (
    <UtrechtIcon>
      <style>
        {`svg {
  fill: currentColor;          
          }`}
      </style>
      {iconId in iconSet ? iconSet[iconId] : <FallbackIcon />}
      {children}
    </UtrechtIcon>
  );
};
