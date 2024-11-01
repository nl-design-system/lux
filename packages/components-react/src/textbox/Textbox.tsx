import { Textbox as UtrechtTextbox } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, InputHTMLAttributes, PropsWithChildren } from 'react';

const TEXTBOX_CLASSES: { [key: string]: string } = {
  invalid: 'utrecht-textbox--invalid',
  disabled: 'utrecht-textbox--disabled',
  readOnly: 'utrecht-textbox--read-only',
  focus: 'utrecht-textbox--focus',
  focusVisible: 'utrecht-textbox--focus-visible',
  required: 'utrecht-textbox--required',
};

export const INPUT_TYPES = {
  TEXT: 'text',
  EMAIL: 'email',
  URL: 'url',
  TEL: 'tel',
  SEARCH: 'search',
  PASSWORD: 'password',
  NUMBER: 'number',
  DATE: 'date',
  DATETIME_LOCAL: 'datetime-local',
  MONTH: 'month',
  TIME: 'time',
  WEEK: 'week',
} as const;

export type InputType = (typeof INPUT_TYPES)[keyof typeof INPUT_TYPES];
type Direction = 'ltr' | 'rtl' | 'auto';

export interface LuxTextboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  type?: InputType;
  invalid?: boolean;
  dir?: Direction;
  focus?: boolean;
  focusVisible?: boolean;
  autoComplete?: string;
  minLength?: number;
  placeholderDir?: Direction;
  spellCheck?: boolean;
}

export const LuxTextbox = forwardRef(
  (
    {
      className,
      type = INPUT_TYPES.TEXT,
      invalid,
      disabled,
      readOnly,
      dir,
      focus,
      focusVisible,
      required,
      value,
      autoComplete,
      minLength,
      placeholder,
      placeholderDir,
      spellCheck,
      ...restProps
    }: PropsWithChildren<LuxTextboxProps>,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const classes = clsx(
      {
        [TEXTBOX_CLASSES.invalid]: invalid,
        [TEXTBOX_CLASSES.disabled]: disabled,
        [TEXTBOX_CLASSES.readOnly]: readOnly,
        [TEXTBOX_CLASSES.focus]: focus,
        [TEXTBOX_CLASSES.focusVisible]: focusVisible,
        [TEXTBOX_CLASSES.required]: required,
      },
      className,
    );

    return (
      <UtrechtTextbox
        {...restProps}
        ref={ref}
        className={classes}
        type={type}
        disabled={disabled}
        readOnly={readOnly}
        dir={dir ?? 'auto'}
        required={required}
        aria-required={required}
        aria-invalid={invalid || undefined}
        value={value}
        autoComplete={autoComplete}
        minLength={minLength}
        placeholder={placeholder}
        spellCheck={spellCheck ?? false}
        data-placeholder-dir={placeholderDir}
        inputMode={type === INPUT_TYPES.NUMBER ? 'numeric' : undefined}
      />
    );
  },
);

LuxTextbox.displayName = 'LuxTextbox';
