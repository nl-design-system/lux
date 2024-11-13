import { ForwardedRef, forwardRef, PropsWithChildren, useId } from 'react';
import { LuxFormFieldLabel } from '../form-field-label/FormFieldLabel';
import { LuxRadioButton, type LuxRadioButtonProps } from '../radio-button/RadioButton';
import './FormFieldRadioOption.css';

export type LuxFormFieldRadioOptionProps = LuxRadioButtonProps & {
  name: string;
  label: string;
  checked?: boolean;
};

const CLASSNAME = {
  container: 'lux-radio-button__container',
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

    return (
      <div className={CLASSNAME.container}>
        <LuxRadioButton
          ref={ref}
          aria-invalid={invalid || undefined}
          disabled={disabled}
          required={required}
          id={radioId}
          name={name}
          value={value}
          className={className}
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
