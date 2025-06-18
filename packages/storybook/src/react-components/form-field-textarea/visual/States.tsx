import { LuxFormFieldTextarea } from '@lux-design-system/components-react';

export const VisualStates = () => (
  <>
    <LuxFormFieldTextarea label="Label" />
    <LuxFormFieldTextarea label="Label" description="Description" />
    <h5 className="utrecht-heading-4">Hover &amp; Focus</h5>
    <div className="pseudo-hover-all">
      <LuxFormFieldTextarea label="Label" />
    </div>
    <div className="pseudo-focus-all pseudo-focus-visible-all">
      <LuxFormFieldTextarea label="Label" />
    </div>
    <h5 className="utrecht-heading-4">Invalid</h5>
    <LuxFormFieldTextarea label="Label" errorMessage="Error Message" invalid />
    <LuxFormFieldTextarea label="Label" description="Description" errorMessage="Error Message" invalid />
    <h5 className="utrecht-heading-4">Disabled</h5>
    <LuxFormFieldTextarea label="Label" disabled />
    <LuxFormFieldTextarea label="Label" description="Description" disabled />
  </>
);
