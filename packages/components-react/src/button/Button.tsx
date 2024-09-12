import { type ButtonProps as UtrechtButtonProps } from '@utrecht/component-library-react';
import { Button as UtrechtButton } from '@utrecht/component-library-react/dist/css-module';

import './button.scss';

type Variant = 'primary' | 'secondary' | 'tertiary';

export type LuxButtonProps = Omit<UtrechtButtonProps, 'appearance'> & {
  variant: Variant;
  size: undefined | 'small';
};

const mapVariant = (variant: Variant): string => {
  return {
    undefined: 'primary-action-button',
    primary: 'primary-action-button',
    secondary: 'secondary-action-button',
    tertiary: 'subtle-button',
  }[variant];
};

export const LuxButton = (props: LuxButtonProps) => {
  const newProps: any = {
    ...props,
    appearance: mapVariant(props.variant),
  };

  const classNames = { 'lux-button--small': props.size === 'small' };

  return <UtrechtButton {...newProps} className={classNames} />;
};
