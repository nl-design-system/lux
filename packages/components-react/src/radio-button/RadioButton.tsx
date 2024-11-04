import {
  RadioButton as UtrechtRadioButton,
  type RadioButtonProps as UtrechtRadioButtonProps,
} from '@utrecht/component-library-react/dist/css-module';
import './RadioButton.css';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export type LuxRadioButtonProps = UtrechtRadioButtonProps & {
  invalid?: boolean;
  name: string;
  label: string;
  checked?: boolean;
};

const CLASSNAME: { [key: string]: string } = {
  disabled: 'lux-radio-button--disabled',
  invalid: 'lux-radio-button--invalid',
};

export const LuxRadioButton = forwardRef(
  (
    {
      disabled,
      required,
      className,
      invalid,
      value,
      name,
      label,
      id,
      checked,
      ...restProps
    }: PropsWithChildren<LuxRadioButtonProps>,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const radioId = id || `${name}-${value}`;

    const combinedClassName = clsx(
      'lux-radio-button',
      {
        [CLASSNAME.disabled]: disabled,
        [CLASSNAME.invalid]: invalid,
      },
      className,
    );

    return (
      <div className="lux-radio-button__container">
        <UtrechtRadioButton
          ref={ref}
          aria-invalid={invalid || undefined}
          disabled={disabled}
          required={required}
          id={radioId}
          name={name}
          value={value}
          className={combinedClassName}
          checked={checked}
          {...restProps}
        />
        <label className="lux-radio-button__label" htmlFor={radioId}>
          {label}
        </label>
      </div>
    );
  },
);
LuxRadioButton.displayName = 'LuxRadioButton';
