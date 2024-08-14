import { LuxButtonLogin } from '@lux-design-system/web-components-react';

export const VisualAgents = () => (
  <>
    <h5 className="lux-heading-4">Agents</h5>
    <LuxButtonLogin agent="digid"></LuxButtonLogin>
    <LuxButtonLogin agent="digid-machtigen"></LuxButtonLogin>
    <LuxButtonLogin agent="eherkenning"></LuxButtonLogin>
    <LuxButtonLogin agent="eidas"></LuxButtonLogin>
  </>
);
