import React, { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import { LuxFormFieldDescription } from '../form-field-description/FormFieldDescription';
import { LuxFormFieldLabel } from '../form-field-label/FormFieldLabel';
import { LuxRadioButton, type LuxRadioButtonProps } from '../radio-button/RadioButton';
import './FormFieldRadioOption.css';

export type LuxFormFieldRadioOptionProps = LuxRadioButtonProps & {
  label: string | React.ReactNode;
  description?: React.ReactNode;
  checked?: boolean;
};

const CLASSNAME = {
  container: 'lux-radio-button__container',
};

export const LuxFormFieldRadioOption = forwardRef(
  (
    {
      disabled,
      className,
      invalid,
      name,
      label,
      description,
      id,
      checked,
      value,
      ...restProps
    }: PropsWithChildren<LuxFormFieldRadioOptionProps>,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const radioId = id || React.useId();

    return (
      <div className={CLASSNAME.container}>
        <LuxRadioButton
          ref={ref}
          aria-invalid={invalid || undefined}
          disabled={disabled}
          id={radioId}
          name={name}
          value={value}
          className={className}
          checked={checked}
          {...restProps}
        />
        <div>
          <LuxFormFieldLabel htmlFor={radioId} type="radio" disabled={disabled}>
            {label}
          </LuxFormFieldLabel>
          {description ? <LuxFormFieldDescription>{description}</LuxFormFieldDescription> : null}
        </div>
      </div>
    );
  },
);

LuxFormFieldRadioOption.displayName = 'LuxFormFieldRadioOption';
