import {
  FormField as UtrechtFormField,
  FormFieldProps as UtrechtFormFieldProps,
} from '@utrecht/component-library-react/dist/css-module';
import { ForwardedRef, forwardRef } from 'react';

export const LuxFormField = forwardRef(
  ({ children, className, ...restProps }: UtrechtFormFieldProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <UtrechtFormField ref={ref} className={className} {...restProps}>
        {children}
      </UtrechtFormField>
    );
  },
);

LuxFormField.displayName = 'LuxFormField';
