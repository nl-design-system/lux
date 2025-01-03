import { LuxFormFieldTextbox } from '@lux-design-system/components-react';

export const VisualStates = () => (
  <>
    <LuxFormFieldTextbox label="Label" />
    <LuxFormFieldTextbox label="Label" description="Description" />
    <h5 className="utrecht-heading-4">Hover &amp; Focus</h5>
    <div className="pseudo-hover-all">
      <LuxFormFieldTextbox label="Label" />
    </div>
    <div className="pseudo-focus-all pseudo-focus-visible-all">
      <LuxFormFieldTextbox label="Label" />
    </div>
    <h5 className="utrecht-heading-4">Invalid</h5>
    <LuxFormFieldTextbox label="Label" errorMessage="Error Message" invalid />
    <LuxFormFieldTextbox label="Label" description="Description" errorMessage="Error Message" invalid />
    <h5 className="utrecht-heading-4">Disabled</h5>
    <LuxFormFieldTextbox label="Label" disabled />
    <LuxFormFieldTextbox label="Label" description="Description" disabled />
  </>
);
