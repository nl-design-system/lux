import {
  FormFieldDescription as UtrechtFormFieldDescription,
  FormFieldDescriptionProps as UtrechtFormFieldDescriptionProps,
} from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';

const FORM_FIELD_DESCRIPTION_CLASSES: { [key: string]: string } = {
  valid: 'utrecht-form-field-description--valid',
  invalid: 'utrecht-form-field-description--invalid',
};

export type LuxFormFieldDescriptionProps = UtrechtFormFieldDescriptionProps;

export const LuxFormFieldDescription = (props: LuxFormFieldDescriptionProps) => {
  const { valid, invalid, className, ...restProps } = props;

  const classNames = clsx(
    {
      [FORM_FIELD_DESCRIPTION_CLASSES.valid]: valid,
      [FORM_FIELD_DESCRIPTION_CLASSES.invalid]: invalid,
    },
    className,
  );

  return <UtrechtFormFieldDescription {...restProps} className={classNames} />;
};

LuxFormFieldDescription.displayName = 'LuxFormFieldDescription';
