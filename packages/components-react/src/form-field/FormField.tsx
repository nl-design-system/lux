import {
  FormField as UtrechtFormField,
  FormFieldProps as UtrechtFormFieldProps,
} from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import React, { ForwardedRef, forwardRef } from 'react';

const FORM_FIELD_CLASSES: { [key: string]: string } = {
  checkbox: 'utrecht-form-field--checkbox',
  radio: 'utrecht-form-field--radio',
  text: 'utrecht-form-field--text',
};

export interface LuxFormFieldProps extends Omit<UtrechtFormFieldProps, 'type'> {
  type?: 'checkbox' | 'radio' | 'text';
}

export const LuxFormField = forwardRef(
  ({ children, type, className, ...restProps }: LuxFormFieldProps, ref: ForwardedRef<HTMLDivElement>) => {
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
        {children}
      </UtrechtFormField>
    );
  },
);

LuxFormField.displayName = 'LuxFormField';
