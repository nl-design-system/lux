import { LuxFormFieldRadioGroup } from '@lux-design-system/components-react';

const options = [
  { value: '1', label: 'Radio Option 1' },
  { value: '2', label: 'Radio Option 2' },
  { value: '3', label: 'Radio Option 3' },
];

export const VisualStates = ({ mode }: { mode: 'light' | 'dark' }) => (
  <>
    <LuxFormFieldRadioGroup name={`radiogroup-default-${mode}`} label="Radio Group" options={options} />
    <LuxFormFieldRadioGroup
      name={`radiogroup-descriptions-${mode}`}
      label="Radio Group"
      description="Description"
      options={options.map((option) =>
        Object.assign({}, { ...option }, { description: `Option Description ${option.value}` }),
      )}
    />
    <div className="pseudo-hover-all">
      <LuxFormFieldRadioGroup name={`radiogroup-hover-${mode}`} label="Radio Group Hover" options={options} />
    </div>
    <div className="pseudo-focus-all pseudo-focus-visible-all">
      <LuxFormFieldRadioGroup name={`radiogroup-hover-${mode}`} label="Radio Group Focus" options={options} />
    </div>
    <LuxFormFieldRadioGroup
      name={`radiogroup-checked-${mode}`}
      label="Radio Group Checked"
      options={options.map((option) => Object.assign({}, { ...option }, { checked: option.value === '2' }))}
    />
    <LuxFormFieldRadioGroup
      name={`radiogroup-disabled-${mode}`}
      label="Radio Group Disabled"
      options={options.map((option) => Object.assign({}, { ...option }, { disabled: option.value === '2' }))}
    />
    <LuxFormFieldRadioGroup
      name={`radiogroup-invalid-${mode}`}
      label="Radio Group Invalid"
      errorMessage="Error Message"
      invalid
      options={options}
    />
  </>
);
