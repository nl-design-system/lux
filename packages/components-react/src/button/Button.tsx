import {
  Button as UtrechtButton,
  type ButtonProps as UtrechtButtonProps,
} from '@utrecht/component-library-react/dist/css-module';
import './Button.css';
import React, { ReactElement } from 'react';

type IconPosition = 'start' | 'end';
type Size = 'small';
export interface LuxButtonProps extends UtrechtButtonProps {
  size?: Size;
  iconPosition?: IconPosition;
}

const SIZE_CLASSNAME: { [key: string]: string } = {
  small: 'lux-button--small',
};

const ICON_POSITIONS: { [key: string]: string } = {
  start: 'lux-button-icon--start',
  end: 'lux-button-icon--end',
};

export const LuxButton = (props: LuxButtonProps) => {
  const { appearance, size, icon: iconNode, iconPosition, ...otherProps } = props;

  const className = `lux-button ${size !== undefined ? SIZE_CLASSNAME[size] : ''}`;

  const positionedIcon = React.Children.map(iconNode, (iconElement) => {
    if (!iconElement) {
      return null;
    }

    if (!React.isValidElement<HTMLElement>(iconElement)) {
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
