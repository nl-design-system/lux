import {
  FormFieldErrorMessage as UtrechtFormFieldErrorMessage,
  FormFieldErrorMessageProps as UtrechtFormFieldErrorMessageProps,
} from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';

const FORM_FIELD_ERROR_MESSAGE_CLASSES: { [key: string]: string } = {
  distanced: 'utrecht-form-field-error-message--distanced',
};

export interface LuxFormFieldErrorMessageProps extends Omit<UtrechtFormFieldErrorMessageProps, 'appearance'> {
  distanced?: boolean;
}

export const LuxFormFieldErrorMessage = forwardRef(
  (
    { children, className, distanced, ...restProps }: PropsWithChildren<LuxFormFieldErrorMessageProps>,
    ref: ForwardedRef<HTMLParagraphElement>,
  ) => {
    const classNames = clsx(
      {
        [FORM_FIELD_ERROR_MESSAGE_CLASSES.distanced]: distanced,
      },
      className,
    );

    return (
      <UtrechtFormFieldErrorMessage {...restProps} ref={ref} className={classNames}>
        {children}
      </UtrechtFormFieldErrorMessage>
    );
  },
);

LuxFormFieldErrorMessage.displayName = 'LuxFormFieldErrorMessage';
