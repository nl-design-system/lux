import { LuxFormFieldTextbox, type LuxFormFieldTextboxProps } from '@lux-design-system/components-react';

// for some reason, all props are mandatory so have to "fill" them in in order to not break on
//     pnpm --filter @lux-design-system/storybook lint-build
const defaultProps: LuxFormFieldTextboxProps = {
  name: undefined,
  value: 'value',
  disabled: undefined,
  invalid: undefined,
  placeholder: undefined,
  label: undefined,
  size: undefined,
  pattern: undefined,
  min: undefined,
  max: undefined,
  type: undefined,
  defaultValue: undefined,
  list: undefined,
  step: undefined,
  autoComplete: undefined,
  maxLength: undefined,
  minLength: undefined,
  readOnly: undefined,
  required: undefined,
  inputRequired: undefined,
};

export const VisualStates = () => (
  <>
    <LuxFormFieldTextbox {...defaultProps} label="Label" name="Textbox1" />
    <LuxFormFieldTextbox {...defaultProps} label="Label" description="Description" name="Textbox2" />
    <h5 className="utrecht-heading-4">Hover &amp; Focus</h5>
    <div className="pseudo-hover-all">
      <LuxFormFieldTextbox {...defaultProps} label="Label" name="Textbox3" />
    </div>
    <div className="pseudo-focus-all pseudo-focus-visible-all">
      <LuxFormFieldTextbox {...defaultProps} label="Label" name="Textbox4" />
    </div>
    <h5 className="utrecht-heading-4">Invalid</h5>
    <LuxFormFieldTextbox {...defaultProps} label="Label" errorMessage="Error Message" invalid name="Textbox5" />
    <LuxFormFieldTextbox
      {...defaultProps}
      label="Label"
      description="Description"
      errorMessage="Error Message"
      invalid
      name="Textbox6"
    />
    <h5 className="utrecht-heading-4">Disabled</h5>
    <LuxFormFieldTextbox {...defaultProps} label="Label" disabled name="Textbox7" />
    <LuxFormFieldTextbox {...defaultProps} label="Label" description="Description" disabled name="Textbox8" />
  </>
);
