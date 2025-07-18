import {
  RadioButton as UtrechtRadioButton,
  type RadioButtonProps as UtrechtRadioButtonProps,
} from '@utrecht/component-library-react/dist/css-module';
import './RadioButton.css';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export type LuxRadioButtonProps = UtrechtRadioButtonProps & {
  invalid?: boolean;
  name: string;
  checked?: boolean;
};

export const LuxRadioButton = forwardRef(
  (
    { disabled, className, invalid, name, id, checked, value, ...restProps }: PropsWithChildren<LuxRadioButtonProps>,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <UtrechtRadioButton
        ref={ref}
        aria-invalid={invalid || undefined}
        disabled={disabled}
        id={id}
        name={name}
        value={value}
        className={clsx('lux-radio-button', className)`}
        checked={checked}
        {...restProps}
      />
    );
  },
);

LuxRadioButton.displayName = 'LuxRadioButton';
