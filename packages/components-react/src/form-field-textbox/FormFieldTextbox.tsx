import { TextboxTypes } from '@utrecht/component-library-react/dist/Textbox';
import { FormFieldTextboxProps as UtrechtFormFieldTextboxProps } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import { useId } from 'react';
import { LuxFormField } from '../form-field/FormField';
import {
  LuxFormFieldDescription,
  type LuxFormFieldDescriptionAppearance,
} from '../form-field-description/FormFieldDescription';
import { LuxFormFieldErrorMessage } from '../form-field-error-message/FormFieldErrorMessage';
import { LuxFormFieldLabel } from '../form-field-label/FormFieldLabel';
import { type Direction, LuxTextbox } from '../textbox/Textbox';

export type LuxFormFieldTextboxProps = UtrechtFormFieldTextboxProps & {
  appearance?: LuxFormFieldDescriptionAppearance;
  distanced?: boolean;
  inputDir?: Direction;
};

export const LuxFormFieldTextbox = ({
  label,
  type,
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
}: LuxFormFieldTextboxProps) => {
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

  // TODO: naar utils
  function pick<T extends object, U extends keyof T>(obj: T, paths: Array<U>): Pick<T, U> {
    const ret = {} as Pick<T, U>;
    for (const k of paths) {
      ret[k] = obj[k];
    }
    return ret;
  }

  const textBoxAttrs = pick(restProps, [
    'autoComplete',
    'min',
    'max',
    'minLength',
    'maxLength',
    'pattern',
    'placeholder',
    'readOnly',
    'required',
    'inputRequired',
    'value',
    'defaultValue',
    'list',
    'size',
    'step',
    'onFocus',
    'onBlur',
    'onInput',
    'onChange',
  ]);

  const formFieldAttrs = pick(restProps, ['children']);

  return (
    <LuxFormField
      label={labelNode}
      description={descriptionNode}
      errorMessage={errorMessageNode}
      input={
        <LuxTextbox
          ref={inputRef}
          id={inputId}
          type={(type as TextboxTypes) || 'text'}
          invalid={invalid}
          disabled={disabled}
          dir={inputDir || 'auto'}
          aria-describedby={
            clsx({
              [descriptionId]: description,
              [errorMessageId]: invalid,
            }) || undefined
          }
          {...textBoxAttrs}
        />
      }
      className={className}
      {...formFieldAttrs}
    />
  );
};
