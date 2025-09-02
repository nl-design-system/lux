import { LuxLoginLink } from '@lux-design-system/web-components-react';

export const VisualStates = () => (
  <>
    <h5 className="lux-heading-4">States</h5>
    <LuxLoginLink agent="digid" label="Hover" class="force-state--hover"></LuxLoginLink>
    <LuxLoginLink agent="digid" label="Active" class="force-state--active"></LuxLoginLink>
    <LuxLoginLink agent="digid" label="Focus" class="force-state--focus"></LuxLoginLink>
  </>
);
