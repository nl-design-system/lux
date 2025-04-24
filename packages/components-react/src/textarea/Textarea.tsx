import {
  Textarea as UtrechtTextarea,
  type TextareaProps as UtrechtTextareaProps,
} from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import './Textarea.css';

export type Direction = 'ltr' | 'rtl' | 'auto';

export interface LuxTextAreaProps extends UtrechtTextareaProps {
  dir?: Direction;
}

export const LuxTextArea = forwardRef(
  (
    {
      className,
      invalid,
      disabled,
      readOnly,
      required,
      dir,
      inputRequired,
      ...restProps
    }: PropsWithChildren<LuxTextAreaProps>,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ) => {
    return (
      <UtrechtTextarea
        {...restProps}
        ref={ref}
        className={clsx(className, 'lux-textarea')}
        disabled={disabled}
        readOnly={readOnly}
        invalid={invalid}
        required={required}
        dir={dir ?? 'auto'}
        inputRequired={inputRequired}
      />
    );
  },
);

LuxTextArea.displayName = 'LuxTextArea';
