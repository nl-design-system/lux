import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { LuxCheckbox } from '../Checkbox';

describe('Checkbox', () => {
  it('renders a checkbox', () => {
    render(<LuxCheckbox name="test-checkbox" />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  it('renders a checkbox with correct name attribute', () => {
    render(<LuxCheckbox name="test-checkbox" />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('name', 'test-checkbox');
  });

  it('renders a checked checkbox when checked prop is true', () => {
    render(<LuxCheckbox name="test-checkbox" checked={true} />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('renders an unchecked checkbox when checked prop is false', () => {
    render(<LuxCheckbox name="test-checkbox" checked={false} />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  it('renders a disabled checkbox when disabled prop is true', () => {
    render(<LuxCheckbox name="test-checkbox" disabled={true} />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
    expect(checkbox).toHaveClass('lux-checkbox--disabled');
  });

  it('applies custom className when provided', () => {
    const customClass = 'custom-checkbox';
    render(<LuxCheckbox name="test-checkbox" className={customClass} />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass(customClass);
  });

  it('forwards additional props to the checkbox input', () => {
    render(<LuxCheckbox name="test-checkbox" data-testid="test-id" aria-label="test label" />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('data-testid', 'test-id');
    expect(checkbox).toHaveAttribute('aria-label', 'test label');
  });

  it('combines multiple classes correctly', () => {
    render(<LuxCheckbox name="test-checkbox" className="custom-class" disabled={true} />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('lux-checkbox__input');
    expect(checkbox).toHaveClass('lux-checkbox--disabled');
    expect(checkbox).toHaveClass('custom-class');
  });
});
