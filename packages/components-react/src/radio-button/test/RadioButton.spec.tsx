import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { LuxRadioButton } from '../RadioButton';

describe('RadioButton', () => {
  const defaultProps = {
    name: 'test-radio',
    value: 'option1',
    label: 'Test Option',
  };

  it('renders a radio button with label', () => {
    render(<LuxRadioButton {...defaultProps} />);

    const radio = screen.getByRole('radio', {
      name: 'Test Option',
    });
    expect(radio).toBeInTheDocument();
    expect(screen.getByLabelText('Test Option')).toBeInTheDocument();
  });

  it('renders a disabled radio button', () => {
    render(<LuxRadioButton {...defaultProps} disabled />);

    const radio = screen.getByRole('radio');
    expect(radio).toBeDisabled();
    expect(radio).toHaveClass('lux-radio-button--disabled');
  });

  it('renders an invalid radio button', () => {
    render(<LuxRadioButton {...defaultProps} invalid />);

    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('aria-invalid', 'true');
    expect(radio).toHaveClass('lux-radio-button--invalid');
  });

  it('renders a checked radio button', () => {
    render(<LuxRadioButton {...defaultProps} checked />);

    const radio = screen.getByRole('radio');
    expect(radio).toBeChecked();
  });

  it('uses custom id when provided', () => {
    const customId = 'custom-radio-id';
    render(<LuxRadioButton {...defaultProps} id={customId} />);

    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('id', customId);
  });

  it('generates id from name and value when not provided', () => {
    render(<LuxRadioButton {...defaultProps} />);

    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('id', 'test-radio-option1');
  });

  it('applies additional className when provided', () => {
    render(<LuxRadioButton {...defaultProps} className="custom-class" />);

    const radio = screen.getByRole('radio');
    expect(radio).toHaveClass('lux-radio-button', 'custom-class');
  });

  it('renders a required radio button', () => {
    render(<LuxRadioButton {...defaultProps} required />);

    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('required');
  });
});
