import { LuxFormFieldLabel } from '@lux-design-system/components-react';

export const VisualStates = () => (
  <>
    <LuxFormFieldLabel>Label</LuxFormFieldLabel>
    <LuxFormFieldLabel type="checkbox">Checkbox Label</LuxFormFieldLabel>
    <LuxFormFieldLabel type="radio">Radio Label</LuxFormFieldLabel>
    <LuxFormFieldLabel checked>Checked Label</LuxFormFieldLabel>
    <LuxFormFieldLabel disabled>Disabled Label</LuxFormFieldLabel>
  </>
);
