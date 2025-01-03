import { LuxFormFieldCheckbox } from '@lux-design-system/components-react';

export const VisualStates = () => (
  <>
    <LuxFormFieldCheckbox label="Label" />
    <LuxFormFieldCheckbox label="Label" checked />
    <LuxFormFieldCheckbox label="Label" description="Description" />
    <h5 className="utrecht-heading-4">Hover &amp; Focus</h5>
    <div className="pseudo-hover-all">
      <LuxFormFieldCheckbox label="Label" />
    </div>
    <div className="pseudo-focus-all pseudo-focus-visible-all">
      <LuxFormFieldCheckbox label="Label" />
    </div>
    <h5 className="utrecht-heading-4">Invalid</h5>
    <LuxFormFieldCheckbox label="Label" errorMessage="Error Message" invalid />
    <LuxFormFieldCheckbox label="Label" description="Description" errorMessage="Error Message" invalid />
    <h5 className="utrecht-heading-4">Disabled</h5>
    <LuxFormFieldCheckbox label="Label" disabled />
    <LuxFormFieldCheckbox label="Label" disabled checked />
    <LuxFormFieldCheckbox label="Label" description="Description" disabled />
  </>
);
