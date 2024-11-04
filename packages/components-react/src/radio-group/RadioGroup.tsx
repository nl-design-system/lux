import clsx from 'clsx';
import { ForwardedRef, forwardRef, useState } from 'react';
import './RadioGroup.css';
import { LuxRadioButton } from '../radio-button/RadioButton';

interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface LuxRadioGroupProps {
  name: string;
  label: string;
  options: RadioOption[];
  value?: string;
  invalid?: boolean;
  required?: boolean;
  className?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: string) => void;
}

export const LuxRadioGroup = forwardRef(
  (
    { name, label, options, value, invalid, required, className, onChange }: LuxRadioGroupProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    // Rest of the component implementation remains the same
    const [internalValue, setInternalValue] = useState<string>('');
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    const handleChange = (newValue: string) => {
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    };

    const groupClassName = clsx('lux-radio-group', className);
    const legendId = `${name}-legend`;

    return (
      <div ref={ref} role="radiogroup" className={groupClassName} aria-required={required} aria-labelledby={legendId}>
        <div className="lux-radio-group__label" id={legendId}>
          {label}
        </div>
        <div className="lux-radio-group__options">
          {options.map((option) => (
            <LuxRadioButton
              key={`${name}-${option.value}`}
              id={`${name}-${option.value}`}
              name={name}
              value={option.value}
              label={option.label}
              checked={currentValue === option.value}
              disabled={option.disabled}
              required={required}
              invalid={invalid}
              onChange={(e) => handleChange(e.target.value)}
            />
          ))}
        </div>
      </div>
    );
  },
);

LuxRadioGroup.displayName = 'LuxRadioGroup';
