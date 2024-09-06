import { LuxLoginLink } from '@lux-design-system/web-components-react';

export const VisualAgents = () => (
  <>
    <h5 className="lux-heading-4">Agents</h5>
    <LuxLoginLink agent="digid"></LuxLoginLink>
    <LuxLoginLink agent="digid-machtigen"></LuxLoginLink>
    <LuxLoginLink agent="eherkenning"></LuxLoginLink>
    <LuxLoginLink agent="eidas"></LuxLoginLink>
  </>
);
