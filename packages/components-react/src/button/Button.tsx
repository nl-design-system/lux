import {
  Button as UtrechtButton,
  type ButtonProps as UtrechtButtonProps,
} from '@utrecht/component-library-react/dist/css-module';
import './Button.css';
import React, { ReactElement } from 'react';

type IconPosition = 'start' | 'end';
type Size = 'small';

export type LuxButtonProps = UtrechtButtonProps & {
  size?: Size;
  iconPosition?: IconPosition;
};

const SIZE_CLASSNAME: { [key: string]: string } = {
  small: 'lux-button--small',
};

const ICON_POSITIONS: { [key: string]: string } = {
  start: 'lux-button-icon--start',
  end: 'lux-button-icon--end',
};

export const LuxButton = (props: LuxButtonProps) => {
  const { size, icon: iconNode, iconPosition, ...otherProps } = props;

  const className = `lux-button ${size !== undefined ? SIZE_CLASSNAME[size] : ''} ${otherProps.className || ''}`;

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

  return <UtrechtButton {...otherProps} className={className} {...(positionedIcon ? { icon: positionedIcon } : {})} />;
};
