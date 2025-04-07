import { FormFieldTextareaProps as UtrechtFormFieldTextareaProps } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import { useId } from 'react';
import { LuxFormField } from '../form-field/FormField';
import {
  LuxFormFieldDescription,
  type LuxFormFieldDescriptionAppearance,
} from '../form-field-description/FormFieldDescription';
import { LuxFormFieldErrorMessage } from '../form-field-error-message/FormFieldErrorMessage';
import { LuxFormFieldLabel } from '../form-field-label/FormFieldLabel';
import { type Direction, LuxTextArea } from '../textarea/Textarea';
import { pick } from '../utils/object';

export type LuxFormFieldTextareaProps = UtrechtFormFieldTextareaProps & {
  appearance?: LuxFormFieldDescriptionAppearance;
  distanced?: boolean;
  inputDir?: Direction;
};

export const LuxFormFieldTextarea = ({
  label,
  description,
  errorMessage,
  disabled,
  invalid,
  appearance,
  distanced,
  className,
  inputRef,
  inputDir,
  ...restProps
}: LuxFormFieldTextareaProps) => {
  const inputId = useId();
  const descriptionId = useId();
  const errorMessageId = useId();

  const labelNode =
    typeof label === 'string' ? (
      <LuxFormFieldLabel disabled={disabled} htmlFor={inputId}>
        {label}
      </LuxFormFieldLabel>
    ) : (
      label
    );

  const descriptionNode =
    typeof description === 'string' ? (
      <LuxFormFieldDescription appearance={invalid ? 'invalid' : appearance} id={descriptionId}>
        {description}
      </LuxFormFieldDescription>
    ) : (
      description
    );

  const errorMessageNode =
    typeof errorMessage === 'string' ? (
      <LuxFormFieldErrorMessage distanced={distanced} id={errorMessageId}>
        {errorMessage}
      </LuxFormFieldErrorMessage>
    ) : (
      errorMessage
    );

  const textareaAttrs = pick(restProps, [
    'autoComplete',
    'cols',
    'defaultValue',
    'maxLength',
    'minLength',
    'name',
    'onBlur',
    'onChange',
    'onFocus',
    'onInput',
    'placeholder',
    'readOnly',
    'required',
    'rows',
    'value',
    'onBlur',
    'onChange',
    'onFocus',
    'onInput',
  ]);

  const formFieldAttrs = pick(restProps, ['children']);

  return (
    <LuxFormField
      label={labelNode}
      description={descriptionNode}
      errorMessage={errorMessageNode}
      invalid={invalid}
      input={
        <LuxTextArea
          ref={inputRef}
          id={inputId}
          invalid={invalid}
          disabled={disabled}
          dir={inputDir || 'auto'}
          aria-describedby={
            clsx({
              [descriptionId]: description,
              [errorMessageId]: invalid,
            }) || undefined
          }
          {...textareaAttrs}
        />
      }
      className={className}
      {...formFieldAttrs}
    />
  );
};
