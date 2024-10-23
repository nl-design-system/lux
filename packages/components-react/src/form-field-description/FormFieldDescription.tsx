import {
  FormFieldDescription as UtrechtFormFieldDescription,
  FormFieldDescriptionProps as UtrechtFormFieldDescriptionProps,
} from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';

const FORM_FIELD_DESCRIPTION_CLASSES: Record<LuxFormFieldDescriptionAppearance, string> = {
  valid: 'utrecht-form-field-description--valid',
  invalid: 'utrecht-form-field-description--invalid',
};

export type LuxFormFieldDescriptionAppearance = 'valid' | 'invalid';
// Extend the Utrecht props but omit valid and invalid since we're replacing them
export interface LuxFormFieldDescriptionProps extends Omit<UtrechtFormFieldDescriptionProps, 'valid' | 'invalid'> {
  appearance?: LuxFormFieldDescriptionAppearance;
}

export const LuxFormFieldDescription = (props: LuxFormFieldDescriptionProps) => {
  const { appearance, className, ...restProps } = props;

  const classNames = clsx(
    {
      [FORM_FIELD_DESCRIPTION_CLASSES.valid]: appearance === 'valid',
      [FORM_FIELD_DESCRIPTION_CLASSES.invalid]: appearance === 'invalid',
    },
    className,
  );

  return <UtrechtFormFieldDescription {...restProps} className={classNames} />;
};

LuxFormFieldDescription.displayName = 'LuxFormFieldDescription';
