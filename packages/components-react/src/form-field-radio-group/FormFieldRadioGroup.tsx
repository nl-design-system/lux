'use client';
import { ForwardedRef, forwardRef, useId, useState } from 'react';
import './FormFieldRadioGroup.css';
import { LuxFormFieldRadioOption } from '../form-field-radio-button/FormFieldRadioOption';

interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
  [key: string]: any;
}

export interface LuxFormFieldRadioGroupProps {
  name: string;
  label: string;
  description?: string;
  errorMessage?: string;
  options: RadioOption[];
  value?: string;
  invalid?: boolean;
  required?: boolean;
  className?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: string) => void;
}

const CLASSNAME: { [key: string]: string } = {
  fieldset: 'lux-radio-group lux-radio-group__fieldset',
  legend: 'utrecht-form-label',
  description: 'utrecht-form-field-description',
  options: 'lux-radio-group__options',
  error: 'utrecht-form-field-error-message',
};

export const LuxFormFieldRadioGroup = forwardRef(
  (
    {
      name,
      label,
      description,
      options,
      value,
      invalid,
      required,
      errorMessage = '',
      className,
      onChange,
    }: LuxFormFieldRadioGroupProps,
    ref: ForwardedRef<HTMLFieldSetElement>,
  ) => {
    const uniqueId = useId();
    const descriptionId = description ? `${uniqueId}-description` : undefined;
    const errorId = invalid ? `${uniqueId}-error` : undefined;
    const legendId = `${uniqueId}-legend`;

    // Local state for uncontrolled mode (when no value prop is provided)
    const [internalValue, setInternalValue] = useState<string>('');

    // Check if component is controlled by parent (through value prop)
    const isControlled = value !== undefined;

    // Use parent value if controlled, otherwise use local state
    const currentValue = isControlled ? value : internalValue;

    // Handle radio button selection
    const handleChange = (newValue: string) => {
      // Only update local state in uncontrolled mode
      if (!isControlled) {
        setInternalValue(newValue);
      }
      // Always notify parent of changes through onChange
      onChange?.(newValue);
    };

    return (
      <fieldset
        ref={ref}
        className={CLASSNAME.fieldset}
        aria-required={required}
        aria-invalid={invalid || undefined}
        aria-describedby={descriptionId}
        role="radiogroup"
        aria-labelledby={legendId}
      >
        <legend className={CLASSNAME.legend} id={legendId}>
          {label}
        </legend>

        {description && (
          <p className={CLASSNAME.description} id={descriptionId}>
            {description}
          </p>
        )}
        {invalid && (
          <p className={CLASSNAME.error} id={errorId}>
            {errorMessage}
          </p>
        )}

        <div className={CLASSNAME.options}>
          {options.map((option) => {
            const { value: optionValue, label: optionLabel, disabled, ...optionRestProps } = option;
            const optionId = `${uniqueId}-${optionValue}`;

            return (
              <LuxFormFieldRadioOption
                key={optionId}
                id={optionId}
                name={name}
                value={optionValue}
                label={optionLabel}
                checked={currentValue === optionValue}
                disabled={disabled}
                required={required}
                invalid={invalid}
                onChange={(e) => handleChange(e.target.value)}
                className={className}
                {...optionRestProps}
              />
            );
          })}
        </div>
      </fieldset>
    );
  },
);

LuxFormFieldRadioGroup.displayName = 'LuxFormFieldRadioGroup';
