import { LuxButtonLogin } from '@lux/web-components-react';

export const VisualAgents = () => (
  <>
    <h4 className="lux-heading-4">Agents</h4>
    <LuxButtonLogin agent="digid"></LuxButtonLogin>
    <LuxButtonLogin agent="digid-machtigen"></LuxButtonLogin>
    <LuxButtonLogin agent="eherkenning"></LuxButtonLogin>
    <LuxButtonLogin agent="eidas"></LuxButtonLogin>
  </>
);
