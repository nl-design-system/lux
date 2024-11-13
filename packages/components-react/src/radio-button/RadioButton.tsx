import {
  RadioButton as UtrechtRadioButton,
  type RadioButtonProps as UtrechtRadioButtonProps,
} from '@utrecht/component-library-react/dist/css-module';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export type LuxRadioButtonProps = UtrechtRadioButtonProps & {
  invalid?: boolean;
  name: string;
  checked?: boolean;
};

export const LuxRadioButton = forwardRef(
  (
    {
      disabled,
      required,
      className,
      invalid,
      name,
      id,
      checked,
      value,
      ...restProps
    }: PropsWithChildren<LuxRadioButtonProps>,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <UtrechtRadioButton
        ref={ref}
        aria-invalid={invalid || undefined}
        disabled={disabled}
        required={required}
        id={id}
        name={name}
        value={value}
        className={className}
        checked={checked}
        {...restProps}
      />
    );
  },
);

LuxRadioButton.displayName = 'LuxRadioButton';
