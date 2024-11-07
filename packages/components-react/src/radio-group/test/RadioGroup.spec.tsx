import { describe, expect, it, jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { LuxRadioGroup } from '../RadioGroup';

describe('RadioGroup', () => {
  const defaultProps = {
    name: 'test-group',
    label: 'Test Group',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  };

  it('renders radio group with options', () => {
    render(<LuxRadioGroup {...defaultProps} />);

    const radioGroup = screen.getByRole('radiogroup', { name: 'Test Group' });
    expect(radioGroup).toBeInTheDocument();

    const options = screen.getAllByRole('radio');
    expect(options).toHaveLength(3);
  });

  it('renders radio group with custom className', () => {
    render(<LuxRadioGroup {...defaultProps} className="custom-class" />);

    const radioGroup = screen.getByRole('radiogroup');

    const elements = radioGroup.getElementsByClassName('custom-class');
    expect(elements.length).toBeGreaterThan(0);
  });

  it('renders disabled options', () => {
    const propsWithDisabled = {
      ...defaultProps,
      options: [
        { value: 'option1', label: 'Option 1', disabled: true },
        { value: 'option2', label: 'Option 2' },
      ],
    };

    render(<LuxRadioGroup {...propsWithDisabled} />);

    const disabledOption = screen.getByRole('radio', { name: 'Option 1' });
    const enabledOption = screen.getByRole('radio', { name: 'Option 2' });

    expect(disabledOption).toBeDisabled();
    expect(enabledOption).not.toBeDisabled();
  });

  it('renders invalid state for all radio buttons', () => {
    render(<LuxRadioGroup {...defaultProps} invalid />);

    const options = screen.getAllByRole('radio');
    options.forEach((option) => {
      expect(option).toHaveAttribute('aria-invalid', 'true');
    });
  });

  it('renders required state', () => {
    render(<LuxRadioGroup {...defaultProps} required />);

    const radioGroup = screen.getByRole('radiogroup');
    expect(radioGroup).toHaveAttribute('aria-required', 'true');

    const options = screen.getAllByRole('radio');
    options.forEach((option) => {
      expect(option).toHaveAttribute('required');
    });
  });

  it('renders with controlled value', () => {
    render(<LuxRadioGroup {...defaultProps} value="option2" />);

    const selectedOption = screen.getByRole('radio', { name: 'Option 2' });
    expect(selectedOption).toBeChecked();
  });

  it('handles uncontrolled state correctly', () => {
    render(<LuxRadioGroup {...defaultProps} />);

    const option1 = screen.getByRole('radio', { name: 'Option 1' });
    const option2 = screen.getByRole('radio', { name: 'Option 2' });

    // Initially no option should be checked
    expect(option1).not.toBeChecked();
    expect(option2).not.toBeChecked();

    // Click first option
    fireEvent.click(option1);
    expect(option1).toBeChecked();
    expect(option2).not.toBeChecked();

    // Click second option
    fireEvent.click(option2);
    expect(option1).not.toBeChecked();
    expect(option2).toBeChecked();
  });

  it('calls onChange with selected value', () => {
    const onChange = jest.fn();
    render(<LuxRadioGroup {...defaultProps} onChange={onChange} />);

    const option = screen.getByRole('radio', { name: 'Option 1' });
    fireEvent.click(option);

    expect(onChange).toHaveBeenCalledWith('option1');
  });

  it('generates unique ids for options', () => {
    render(<LuxRadioGroup {...defaultProps} />);

    const options = screen.getAllByRole('radio');

    // Check that IDs are unique
    const ids = options.map((option) => option.getAttribute('id'));
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(options.length);

    // Check that each radio has a corresponding label
    options.forEach((option, index) => {
      const optionId = option.getAttribute('id');
      const optionLabel = screen.getByText(`Option ${index + 1}`);
      expect(optionLabel).toHaveAttribute('for', optionId);
    });
  });

  it('associates legend with radiogroup through aria-labelledby', () => {
    render(<LuxRadioGroup {...defaultProps} />);

    const radioGroup = screen.getByRole('radiogroup');
    const legend = screen.getByText(defaultProps.label);

    // Get the generated aria-labelledby value
    const labelledById = radioGroup.getAttribute('aria-labelledby');

    // Verify the relationship exists
    expect(labelledById).toBeTruthy();
    expect(legend).toHaveAttribute('id', labelledById);
  });
});
