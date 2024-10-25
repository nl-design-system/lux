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
  placeholder?: boolean;
  icon?: ReactElement;
  iconPosition?: IconPosition;
};

const MODIFIER_CLASSNAMES = {
  external: 'utrecht-link--external',
  placeholder: 'utrecht-link--placeholder',
};

const ICON_POSITIONS: { [key: string]: string } = {
  start: 'lux-link-icon--start',
  end: 'lux-link-icon--end',
};

export const LuxLink = (props: LuxLinkProps) => {
  const {
    external = false,
    placeholder = false,
    className: providedClassName = '',
    children,
    icon: iconNode,
    iconPosition: providedIconPosition,
    ...otherProps
  } = props;

  // Set default icon position to 'start' if there's an icon but no position specified
  const iconPosition = iconNode ? providedIconPosition || 'start' : undefined;

  const className = clsx('utrecht-link', 'utrecht-link--html-a', 'lux-link', providedClassName, {
    [MODIFIER_CLASSNAMES.external]: external,
    [MODIFIER_CLASSNAMES.placeholder]: placeholder,
  });

  const positionedIcon = React.Children.map(iconNode, (iconElement) => {
    if (!iconElement) {
      return null;
    }

    if (!React.isValidElement<HTMLElement>(iconElement)) {
      return iconElement;
    }

    return React.cloneElement(iconElement as ReactElement, {
      className: clsx('lux-link__icon', iconElement?.props?.className, iconPosition && ICON_POSITIONS[iconPosition]),
    });
  });

  // const content = (
  //   <>
  //     {iconPosition === 'start' && positionedIcon}
  //     <span className="utrecht-link__text">{children}</span>
  //     {iconPosition === 'end' && positionedIcon}
  //   </>
  // );

  const externalProps = external
    ? {
        target: '_blank',
        rel: 'external noopener noreferrer',
      }
    : {};

  return (
    <UtrechtLink {...otherProps} {...externalProps} className={className}>
      {positionedIcon}
      <span className="utrecht-link__text">{children}</span>
    </UtrechtLink>
  );
};
