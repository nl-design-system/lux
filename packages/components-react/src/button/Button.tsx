import { Button as UtrechtButton, type ButtonProps as UtrechtButtonProps } from '@utrecht/button-react/dist/css'; //Utrecht/components-react/dist/css doesn't have css code included
import './button.css';
import React, { ReactElement } from 'react';

type Variant = 'primary' | 'secondary' | 'tertiary';
type IconPosition = 'start' | 'end';
type Size = 'small';
export interface LuxButtonProps extends Omit<UtrechtButtonProps, 'appearance'> {
  variant?: Variant;
  size?: Size;
  iconPosition?: IconPosition;
}

const SIZE_CLASSNAME: { [key: string]: string } = {
  small: 'lux-button--small',
};

const VARIANTS: { [key: string]: string } = {
  primary: 'primary-action-button',
  secondary: 'secondary-action-button',
  tertiary: 'subtle-button',
};

const ICON_POSITIONS: { [key: string]: string } = {
  start: 'lux-button-icon--start',
  end: 'lux-button-icon--end',
};

export const LuxButton = (props: LuxButtonProps) => {
  const { variant, size, icon: iconNode, iconPosition, ...otherProps } = props;

  const className = `lux-button ${size !== undefined ? SIZE_CLASSNAME[size] : ''}`;
  const appearance = variant !== undefined ? VARIANTS[variant] : 'primary-action-button';

  const positionedIcon = React.Children.map(iconNode, (iconElement) => {
    if (!iconElement) {
      return null;
    }

    if (!React.isValidElement(iconElement)) {
      return iconElement;
    }

    return React.cloneElement(iconElement as ReactElement, {
      className: `${iconElement?.props?.className || ''}${iconPosition !== undefined ? ICON_POSITIONS[iconPosition] : ''}`,
    });
  });

  return (
    <UtrechtButton
      {...otherProps}
      appearance={appearance}
      className={className}
      {...(positionedIcon ? { icon: positionedIcon } : {})}
    />
  );
};
