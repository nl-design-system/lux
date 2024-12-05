import {
  Link as UtrechtLink,
  type LinkProps as UtrechtLinkProps,
} from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import React, { ReactElement } from 'react';
import './Link.css';

type IconPosition = 'start' | 'end';

export type LuxLinkProps = UtrechtLinkProps & {
  external?: boolean;
  icon?: ReactElement | undefined;
  iconPosition?: IconPosition;
};

const CLASSNAMES = {
  link: 'lux-link',
  text: 'lux-link__text',
};

const ICON_POSITIONS: { [key: string]: string } = {
  start: 'lux-link-icon--start',
  end: 'lux-link-icon--end',
};

export const LuxLink = (props: LuxLinkProps) => {
  const {
    external = false,
    className,
    children,
    icon: iconNode,
    iconPosition: providedIconPosition,
    ...otherProps
  } = props;

  // Set default icon position to 'start' if there's an icon but no position specified
  const iconPosition = iconNode ? providedIconPosition || 'start' : undefined;

  const combinedClassName = clsx(CLASSNAMES.link, className);

  const positionedIcon = React.Children.map(iconNode, (iconElement) => {
    if (!iconElement) {
      return null;
    }

    if (!React.isValidElement<HTMLElement>(iconElement)) {
      return iconElement;
    }

    return React.cloneElement(iconElement as ReactElement, {
      className: clsx(iconElement?.props?.className, iconPosition && ICON_POSITIONS[iconPosition]),
    });
  });

  const externalProps = external ? { rel: 'external noopener noreferrer' } : {};

  return (
    <UtrechtLink className={combinedClassName} {...externalProps} {...otherProps}>
      {positionedIcon}
      <span className={CLASSNAMES.text}>{children}</span>
    </UtrechtLink>
  );
};
