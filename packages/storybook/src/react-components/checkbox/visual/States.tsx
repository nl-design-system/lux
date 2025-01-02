import { LuxCheckbox } from '@lux-design-system/components-react';

export const VisualStates = () => (
  <>
    <div>
      <LuxCheckbox /> Default
    </div>
    <div>
      <LuxCheckbox checked /> Checked
    </div>
    <div>
      <LuxCheckbox disabled /> Disabled
    </div>
    <div>
      <LuxCheckbox checked disabled /> Checked & Disabled
    </div>
    <div>
      <LuxCheckbox withTarget /> With Target
    </div>
  </>
);
