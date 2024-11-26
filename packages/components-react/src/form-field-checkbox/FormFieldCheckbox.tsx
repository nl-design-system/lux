import clsx from 'clsx';
import { useId } from 'react';
import { LuxCheckbox } from '../checkbox/Checkbox';
import { LuxFormField, LuxFormFieldProps } from '../form-field/FormField';
import {
  LuxFormFieldDescription,
  type LuxFormFieldDescriptionAppearance,
} from '../form-field-description/FormFieldDescription';
import { LuxFormFieldErrorMessage } from '../form-field-error-message/FormFieldErrorMessage';
import { LuxFormFieldLabel } from '../form-field-label/FormFieldLabel';
import './FormFieldCheckbox.scss';

export type LuxFormFieldCheckboxProps = LuxFormFieldProps & {
  checked?: boolean;
  disabled?: boolean;
  appearance?: LuxFormFieldDescriptionAppearance;
  withTarget?: boolean;
  distanced?: boolean;
};

export const LuxFormFieldCheckbox = ({
  label,
  description,
  errorMessage,
  checked,
  disabled,
  invalid,
  appearance,
  withTarget,
  distanced,
  children,
  ...restProps
}: LuxFormFieldCheckboxProps) => {
  const inputId = useId();
  const descriptionId = useId();
  const errorMessageId = useId();

  const labelNode =
    typeof label === 'string' ? (
      <LuxFormFieldLabel
        type="checkbox"
        disabled={disabled}
        htmlFor={inputId}
        className="lux-form-field-checkbox__label"
      >
        {label}
      </LuxFormFieldLabel>
    ) : (
      label
    );
  const descriptionNode =
    typeof description === 'string' && description !== '' ? (
      <LuxFormFieldDescription
        appearance={invalid ? 'invalid' : appearance}
        id={descriptionId}
        className="lux-form-field-checkbox__description"
      >
        <label htmlFor={inputId}>{description}</label>
      </LuxFormFieldDescription>
    ) : (
      description
    );
  const errorMessageNode =
    typeof errorMessage === 'string' ? (
      <LuxFormFieldErrorMessage
        distanced={distanced}
        id={errorMessageId}
        className="lux-form-field-checkbox__error-message"
      >
        {errorMessage}
      </LuxFormFieldErrorMessage>
    ) : (
      errorMessage
    );

  return (
    <LuxFormField
      type="checkbox"
      label={labelNode}
      description={descriptionNode}
      errorMessage={errorMessageNode}
      invalid={invalid}
      input={
        <LuxCheckbox id={inputId} disabled={disabled} invalid={invalid} checked={checked} withTarget={withTarget} />
      }
      className={clsx('lux-form-field-checkbox', {
        'lux-form-field-checkbox--invalid': invalid,
        'lux-form-field-checkbox--disabled': disabled,
        'lux-form-field-checkbox--with-target': withTarget,
      })}
      {...restProps}
    >
      {children}
    </LuxFormField>
  );
};
