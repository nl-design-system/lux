import {
  RadioButton as UtrechtRadioButton,
  type RadioButtonProps as UtrechtRadioButtonProps,
} from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import './FormFieldRadioOption.css';
import { ForwardedRef, forwardRef, PropsWithChildren, useId } from 'react';
import { LuxFormFieldLabel } from '../form-field-label/FormFieldLabel';

export type LuxFormFieldRadioOptionProps = UtrechtRadioButtonProps & {
  invalid?: boolean;
  name: string;
  label: string;
  checked?: boolean;
};

const CLASSNAME = {
  container: 'lux-radio-button__container',
  button: 'lux-radio-button',
};

export const LuxFormFieldRadioOption = forwardRef(
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
    }: PropsWithChildren<LuxFormFieldRadioOptionProps>,
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
        <LuxFormFieldLabel htmlFor={radioId} type="radio">
          {label}
        </LuxFormFieldLabel>
      </div>
    );
  },
);

LuxFormFieldRadioOption.displayName = 'LuxFormFieldRadioOption';
