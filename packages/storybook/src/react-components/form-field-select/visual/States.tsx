import { LuxFormFieldSelect, type LuxFormFieldSelectProps } from '@lux-design-system/components-react';

export const VisualStates = ({ options }: Pick<LuxFormFieldSelectProps, 'options'>) => (
  <>
    <LuxFormFieldSelect label="Label" options={options}></LuxFormFieldSelect>
    <LuxFormFieldSelect label="Label" options={options} description="Description" />
    <h5 className="utrecht-heading-4">Hover &amp; Focus</h5>
    <div className="pseudo-hover-all">
      <LuxFormFieldSelect label="Label" options={options} />
    </div>
    <div className="pseudo-focus-all pseudo-focus-visible-all">
      <LuxFormFieldSelect label="Label" options={options} />
    </div>
    <h5 className="utrecht-heading-4">Invalid</h5>
    <LuxFormFieldSelect label="Label" options={options} errorMessage="Error Message" invalid />
    <LuxFormFieldSelect
      label="Label"
      options={options}
      description="Description"
      errorMessage="Error Message"
      invalid
    />
    <h5 className="utrecht-heading-4">Disabled</h5>
    <LuxFormFieldSelect label="Label" options={options} disabled />
    <LuxFormFieldSelect label="Label" options={options} description="Description" disabled />
  </>
);
