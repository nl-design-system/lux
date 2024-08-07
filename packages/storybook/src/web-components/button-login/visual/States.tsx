import { LuxButtonLogin } from '@lux-design-system/web-components-react';

export const VisualStates = () => (
  <>
    <h5 className="lux-heading-4">States</h5>
    <LuxButtonLogin agent="digid" label="Hover" class="force-state--hover"></LuxButtonLogin>
    <LuxButtonLogin agent="digid" label="Active" class="force-state--active"></LuxButtonLogin>
    <LuxButtonLogin agent="digid" label="Focus" class="force-state--focus"></LuxButtonLogin>
  </>
);
