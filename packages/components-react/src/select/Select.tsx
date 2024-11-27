import {
  SelectOption,
  Select as UtrechtSelect,
  type SelectOptionProps as UtrechtSelectOptionProps,
  type SelectProps as UtrechtSelectProps,
} from '@utrecht/component-library-react/dist/css-module';
import './Select.css';
import clsx from 'clsx';
import { forwardRef } from 'react';
export type LuxSelectProps = UtrechtSelectProps;
export type LuxSelectOptionProps = UtrechtSelectOptionProps;

export const LuxSelect = forwardRef((props: LuxSelectProps) => {
  const { className, ...restProps } = props;

  return <UtrechtSelect className={clsx(className, 'lux-select')} {...restProps} />;
});

export const LuxSelectOption = SelectOption;

LuxSelect.displayName = 'LuxSelect';
LuxSelectOption.displayName = 'LuxSelectOption';
