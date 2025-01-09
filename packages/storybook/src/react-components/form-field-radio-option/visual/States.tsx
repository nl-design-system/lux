import { LuxFormFieldRadioOption } from '@lux-design-system/components-react';
import { LuxMode } from '../../../utils';

export const VisualStates = ({ mode }: { mode: LuxMode }) => (
  <>
    <LuxFormFieldRadioOption name={`radiooption-default-${mode}`} label="Radio Option" />
    <LuxFormFieldRadioOption name={`radiooption-descriptions-${mode}`} label="Radio Option" description="Description" />
    <div className="pseudo-hover-all">
      <LuxFormFieldRadioOption name={`radiooption-default-${mode}`} label="Radio Option Hover" />
    </div>
    <div className="pseudo-focus-all pseudo-focus-visible-all">
      <LuxFormFieldRadioOption name={`radiooption-default-${mode}`} label="Radio Option Focus" />
    </div>
    <LuxFormFieldRadioOption name={`radiooption-checked-${mode}`} label="Radio Option Checked" checked />
    <LuxFormFieldRadioOption name={`radiooption-disabled-${mode}`} label="Radio Option Disabled" disabled />
    <LuxFormFieldRadioOption name={`radiooption-invalid-${mode}`} label="Radio Option Invalid" invalid />
  </>
);
