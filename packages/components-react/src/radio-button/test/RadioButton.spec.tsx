import { describe, expect, it, jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { LuxRadioButton } from '../RadioButton';

describe('LuxRadioButton', () => {
  const defaultProps = {
    name: 'test-radio',
    value: 'option1',
  };

  it('renders a radio button with required props', () => {
    render(<LuxRadioButton {...defaultProps} />);

    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
    expect(radio).toHaveAttribute('name', 'test-radio');
    expect(radio).toHaveAttribute('value', 'option1');
  });

  it('renders a disabled radio button', () => {
    render(<LuxRadioButton {...defaultProps} disabled />);

    const radio = screen.getByRole('radio');
    expect(radio).toBeDisabled();
  });

  it('renders an invalid radio button', () => {
    render(<LuxRadioButton {...defaultProps} invalid />);

    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('aria-invalid', 'true');
  });

  it('does not set aria-invalid when invalid prop is false', () => {
    render(<LuxRadioButton {...defaultProps} invalid={false} />);

    const radio = screen.getByRole('radio');
    expect(radio).not.toHaveAttribute('aria-invalid');
  });

  it('renders a checked radio button', () => {
    render(<LuxRadioButton {...defaultProps} checked />);

    const radio = screen.getByRole('radio');
    expect(radio).toBeChecked();
  });

  it('handles unchecked state correctly', () => {
    render(<LuxRadioButton {...defaultProps} checked={false} />);

    const radio = screen.getByRole('radio');
    expect(radio).not.toBeChecked();
  });

  it('applies custom id when provided', () => {
    const customId = 'custom-radio-id';
    render(<LuxRadioButton {...defaultProps} id={customId} />);

    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('id', customId);
  });

  it('applies additional className when provided', () => {
    render(<LuxRadioButton {...defaultProps} className="custom-class" />);

    const radio = screen.getByRole('radio');
    expect(radio).toHaveClass('custom-class');
  });

  it('renders a required radio button', () => {
    render(<LuxRadioButton {...defaultProps} required />);

    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('required');
  });

  it('forwards additional props to the underlying radio button', () => {
    render(<LuxRadioButton {...defaultProps} data-testid="custom-test-id" />);

    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('data-testid', 'custom-test-id');
  });

  it('forwards ref to the underlying radio button', () => {
    const ref = jest.fn();
    render(<LuxRadioButton {...defaultProps} ref={ref} />);

    expect(ref).toHaveBeenCalled();
    expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLInputElement);
  });
});
