import { FormLabel as UtrechtFormLabel } from '@utrecht/component-library-react/dist/css-module';
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
    const classes = [
      FORM_LABEL_CLASSES.base,
      type && FORM_LABEL_CLASSES[type],
      disabled && FORM_LABEL_CLASSES.disabled,
      checked && FORM_LABEL_CLASSES.checked,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <UtrechtFormLabel {...restProps} ref={ref} className={classes}>
        {children}
      </UtrechtFormLabel>
    );
  },
);

LuxFormFieldLabel.displayName = 'LuxFormFieldLabel';
