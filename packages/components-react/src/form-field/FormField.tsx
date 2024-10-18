import {
  FormField as UtrechtFormField,
  FormFieldProps as UtrechtFormFieldProps,
} from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import React, { ForwardedRef, forwardRef } from 'react';
import { LuxFormFieldDescription } from '../form-field-description/FormFieldDescription';
import { LuxFormFieldErrorMessage } from '../form-field-error-message/FormFieldErrorMessage';
import { LuxFormFieldLabel } from '../form-field-label/FormFieldLabel';

const FORM_FIELD_CLASSES: { [key: string]: string } = {
  checkbox: 'utrecht-form-field--checkbox',
  radio: 'utrecht-form-field--radio',
  text: 'utrecht-form-field--text',
};

export interface LuxFormFieldProps extends Omit<UtrechtFormFieldProps, 'type'> {
  label: React.ReactNode;
  input: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  invalid?: boolean;
  type?: 'checkbox' | 'radio' | 'text';
}

export const LuxFormField = forwardRef(
  (
    {
      label,
      input,
      description,
      errorMessage,
      invalid = false,
      children,
      type,
      className,
      ...restProps
    }: LuxFormFieldProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const classNames = clsx(
      {
        [FORM_FIELD_CLASSES.checkbox]: type === 'checkbox',
        [FORM_FIELD_CLASSES.radio]: type === 'radio',
        [FORM_FIELD_CLASSES.text]: type === 'text',
      },
      className,
    );

    return (
      <UtrechtFormField ref={ref} className={classNames} {...restProps}>
        <LuxFormFieldLabel>{label}</LuxFormFieldLabel>
        {description && <LuxFormFieldDescription>{description}</LuxFormFieldDescription>}
        {input}
        {invalid && errorMessage && <LuxFormFieldErrorMessage>{errorMessage}</LuxFormFieldErrorMessage>}
        {children}
      </UtrechtFormField>
    );
  },
);

LuxFormField.displayName = 'LuxFormField';
