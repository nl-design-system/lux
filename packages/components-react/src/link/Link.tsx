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
  icon?: ReactElement;
  iconPosition?: IconPosition;
  openInNewTab?: boolean;
};

const CLASSNAMES = {
  container: 'lux-link__container',
  link: 'lux-link',
};

export const LuxLink = (props: LuxLinkProps) => {
  const {
    external = false,
    className,
    children,
    icon: iconNode,
    iconPosition: providedIconPosition,
    openInNewTab = false,
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
      className: clsx('lux-link__icon', iconElement?.props?.className),
    });
  });

  const externalProps = external ? { rel: 'external noopener noreferrer' } : {};
  const newTabProps = openInNewTab
    ? {
        target: '_blank',
        rel: `noopener noreferrer${external ? ' external' : ''}`, // Combine rel attributes if external
        'aria-label': `${children} (opent in nieuw venster)`,
      }
    : {};

  return (
    <div className={CLASSNAMES.container}>
      {iconPosition === 'start' && positionedIcon}
      <UtrechtLink className={combinedClassName} {...externalProps} {...newTabProps} {...otherProps}>
        {children}
      </UtrechtLink>
      {iconPosition === 'end' && positionedIcon}
      {openInNewTab && <span>(opent in nieuw venster)</span>}
    </div>
  );
};
