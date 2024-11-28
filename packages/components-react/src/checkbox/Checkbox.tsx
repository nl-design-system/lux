import {
  Checkbox as UtrechtCheckbox,
  type CheckboxProps as UtrechtCheckboxProps,
} from '@utrecht/component-library-react/dist/css-module';
import './Checkbox.css';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export type LuxCheckboxProps = Omit<UtrechtCheckboxProps, 'appearance'> & {
  withTarget?: boolean;
};

const CLASSNAME = {
  checkbox: 'lux-checkbox',
  disabled: 'lux-checkbox--disabled',
  withTarget: 'lux-checkbox--with-target',
};

export const LuxCheckbox = forwardRef(
  (
    { disabled, withTarget, className, ...restProps }: PropsWithChildren<LuxCheckboxProps>,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const combinedClassName = clsx(
      CLASSNAME.checkbox,
      {
        [CLASSNAME.disabled]: disabled,
        [CLASSNAME.withTarget]: withTarget,
      },
      className,
    );

    return <UtrechtCheckbox ref={ref} className={combinedClassName} disabled={disabled} {...restProps} />;
  },
);

LuxCheckbox.displayName = 'LuxCheckbox';
