import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { LuxFormFieldRadioOption } from '../FormFieldRadioOption';

describe('FormFieldRadioOption', () => {
  const defaultProps = {
    name: 'test-radio',
    value: 'option1',
    label: 'Test Option',
  };

  it('renders a radio button with label', () => {
    render(<LuxFormFieldRadioOption {...defaultProps} />);

    const radio = screen.getByRole('radio', {
      name: 'Test Option',
    });
    expect(radio).toBeInTheDocument();
    expect(screen.getByLabelText('Test Option')).toBeInTheDocument();
  });

  it('renders a disabled radio button', () => {
    render(<LuxFormFieldRadioOption {...defaultProps} disabled />);

    const radio = screen.getByRole('radio');
    expect(radio).toBeDisabled();
    expect(radio).toHaveClass('utrecht-radio-button--disabled');
  });

  it('renders an invalid radio button', () => {
    render(<LuxFormFieldRadioOption {...defaultProps} invalid />);

    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('aria-invalid', 'true');
  });

  it('renders a checked radio button', () => {
    render(<LuxFormFieldRadioOption {...defaultProps} defaultChecked />);

    const radio = screen.getByRole('radio');
    expect(radio).toBeChecked();
  });

  it('uses custom id when provided', () => {
    const customId = 'custom-radio-id';
    render(<LuxFormFieldRadioOption {...defaultProps} id={customId} />);

    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('id', customId);
  });

  it('generates unique id and maintains label association', () => {
    render(<LuxFormFieldRadioOption {...defaultProps} />);

    const radio = screen.getByRole('radio');
    const label = screen.getByText('Test Option');

    expect(radio).toHaveAttribute('id');

    const radioId = radio.getAttribute('id');
    expect(label).toHaveAttribute('for', radioId);
  });

  it('uses provided id when specified', () => {
    const customId = 'custom-radio-id';
    render(<LuxFormFieldRadioOption {...defaultProps} id={customId} />);

    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('id', customId);
  });

  it('applies additional className when provided', () => {
    render(<LuxFormFieldRadioOption {...defaultProps} className="custom-class" />);

    const radio = screen.getByRole('radio');
    expect(radio).toHaveClass('custom-class');
  });

  it('renders a required radio button', () => {
    render(<LuxFormFieldRadioOption {...defaultProps} required />);

    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('required');
  });
});
