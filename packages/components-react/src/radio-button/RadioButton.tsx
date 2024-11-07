import {
  RadioButton as UtrechtRadioButton,
  type RadioButtonProps as UtrechtRadioButtonProps,
} from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import './RadioButton.css';
import { ForwardedRef, forwardRef, PropsWithChildren, useId } from 'react';

export type LuxRadioButtonProps = UtrechtRadioButtonProps & {
  invalid?: boolean;
  name: string;
  label: string;
  checked?: boolean;
};

const CLASSNAME = {
  container: 'lux-radio-button__container',
  button: 'lux-radio-button',
  label: 'utrecht-form-label',
};

export const LuxRadioButton = forwardRef(
  (
    {
      disabled,
      required,
      className,
      invalid,
      name,
      label,
      id,
      checked,
      value,
      ...restProps
    }: PropsWithChildren<LuxRadioButtonProps>,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const radioId = id || useId();
    const combinedClassName = clsx(CLASSNAME.button, className);

    return (
      <div className={CLASSNAME.container}>
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
        <label className={CLASSNAME.label} htmlFor={radioId}>
          {label}
        </label>
      </div>
    );
  },
);

LuxRadioButton.displayName = 'LuxRadioButton';
