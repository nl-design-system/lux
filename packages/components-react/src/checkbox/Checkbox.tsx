import {
  Checkbox as UtrechtCheckbox,
  type CheckboxProps as UtrechtCheckboxProps,
} from '@utrecht/component-library-react/dist/css-module';
import './Checkbox.css';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export type LuxCheckboxProps = UtrechtCheckboxProps & {
  invalid?: boolean;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  className?: string;
};

const CLASSNAME = {
  checkbox: 'lux-checkbox',
  disabled: 'lux-checkbox--disabled',
};

export const LuxCheckbox = forwardRef(
  (
    { disabled, className, name, checked, ...restProps }: PropsWithChildren<LuxCheckboxProps>,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const combinedClassName = clsx(
      CLASSNAME.checkbox,
      {
        [CLASSNAME.disabled]: disabled,
      },
      className,
    );

    return (
      <UtrechtCheckbox
        ref={ref}
        name={name}
        className={combinedClassName}
        checked={checked}
        disabled={disabled}
        {...restProps}
      />
    );
  },
);

LuxCheckbox.displayName = 'LuxCheckbox';
