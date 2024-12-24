import IconSet, { type IconId } from '@lux-design-system/icons';
// import * as IconsTabler from '@tabler/icons-react';
import { Icon as UtrechtIcon, type IconProps as UtrechtIconProps } from '@utrecht/component-library-react';
import { PropsWithChildren, ReactNode } from 'react';
import FallbackIcon from './FallbackIcon';

export type IconProps = UtrechtIconProps & {
  iconId: IconId | string;
  iconLibrary?: Partial<Record<string, ReactNode>>;
};

export const Icon = ({ iconId, iconLibrary, children }: PropsWithChildren<IconProps>): ReactNode => {
  const iconSet: Partial<Record<string, ReactNode>> = iconLibrary || IconSet;

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
