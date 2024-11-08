import {
  Select,
  SelectOption,
  type SelectOptionProps as UtrechtSelectOptionProps,
  type SelectProps as UtrechtSelectProps,
} from '@utrecht/component-library-react/dist/css-module';

export type LuxSelectProps = UtrechtSelectProps;
export type LuxSelectOptionProps = UtrechtSelectOptionProps;

Select.displayName = 'LuxSelect';
SelectOption.displayName = 'LuxSelectOption';

export const LuxSelect = Select;
export const LuxSelectOption = SelectOption;
