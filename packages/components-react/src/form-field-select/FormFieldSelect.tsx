import { FormFieldProps as UtrechtFormFieldProps } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import { Ref, useId } from 'react';
import { LuxFormField } from '../form-field/FormField';
import {
  LuxFormFieldDescription,
  type LuxFormFieldDescriptionAppearance,
} from '../form-field-description/FormFieldDescription';
import { LuxFormFieldErrorMessage } from '../form-field-error-message/FormFieldErrorMessage';
import { LuxFormFieldLabel } from '../form-field-label/FormFieldLabel';
import { LuxSelect, type LuxSelectProps } from '../select/Select';

export interface LuxFormFieldSelectProps
  extends Omit<UtrechtFormFieldProps, 'type' | 'onBlur' | 'onChange' | 'onFocus'>,
    Pick<
      LuxSelectProps,
      | 'defaultValue'
      | 'busy'
      | 'className'
      | 'disabled'
      | 'invalid'
      | 'name'
      | 'onBlur'
      | 'onChange'
      | 'onFocus'
      | 'required'
      | 'size'
      | 'value'
    > {
  appearance?: LuxFormFieldDescriptionAppearance;
  distanced?: boolean;
  inputRef?: Ref<HTMLSelectElement>;
}

export const LuxFormFieldSelect = ({
  label,
  description,
  errorMessage,
  disabled,
  invalid,
  appearance,
  distanced,
  className,
  inputRef,
  ...restProps
}: LuxFormFieldSelectProps) => {
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

  const selectAttrs = pick(restProps, [
    'busy',
    'defaultValue',
    'name',
    'onBlur',
    'onChange',
    'onFocus',
    'required',
    'size',
    'value',
  ]);

  const formFieldAttrs = pick(restProps, ['children']);

  // TODO: Options

  return (
    <LuxFormField
      label={labelNode}
      description={descriptionNode}
      errorMessage={errorMessageNode}
      input={
        <LuxSelect
          ref={inputRef}
          id={inputId}
          invalid={invalid}
          disabled={disabled}
          aria-describedby={
            clsx({
              [descriptionId]: description,
              [errorMessageId]: invalid,
            }) || undefined
          }
          {...selectAttrs}
        />
      }
      className={className}
      {...formFieldAttrs}
    />
  );
};
