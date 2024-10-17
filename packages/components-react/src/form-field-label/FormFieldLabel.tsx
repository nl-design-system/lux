import { FormLabel as UtrechtFormLabel } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, LabelHTMLAttributes, PropsWithChildren } from 'react';

const FORM_LABEL_CLASSES: { [key: string]: string } = {
  base: 'utrecht-form-label',
  checkbox: 'utrecht-form-label--checkbox',
  radio: 'utrecht-form-label--radio',
  disabled: 'utrecht-form-label--disabled',
  checked: 'utrecht-form-label--checked',
};

export interface LuxFormFieldLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  type?: 'checkbox' | 'radio';
  disabled?: boolean;
  checked?: boolean;
}

export const LuxFormFieldLabel = forwardRef(
  (
    { children, className, type, disabled, checked, ...restProps }: PropsWithChildren<LuxFormFieldLabelProps>,
    ref: ForwardedRef<HTMLLabelElement>,
  ) => {
    const classNames = clsx(
      {
        [FORM_LABEL_CLASSES.base]: true,
        [FORM_LABEL_CLASSES.type]: type,
        [FORM_LABEL_CLASSES.disabled]: disabled,
        [FORM_LABEL_CLASSES.checked]: checked,
      },
      className,
    );

    return (
      <UtrechtFormLabel {...restProps} ref={ref} className={classNames}>
        {children}
      </UtrechtFormLabel>
    );
  },
);

LuxFormFieldLabel.displayName = 'LuxFormFieldLabel';
