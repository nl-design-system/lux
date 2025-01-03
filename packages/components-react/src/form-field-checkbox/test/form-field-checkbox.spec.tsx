import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { LuxFormFieldCheckbox } from '../FormFieldCheckbox';

describe('Form Field Checkbox', () => {
  it('renders a basic form field checkbox with label and input', () => {
    render(<LuxFormFieldCheckbox label="Name" />);

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('applies the base class', () => {
    render(<LuxFormFieldCheckbox label="Name" />);

    const formField = screen.getByText('Name').closest('.utrecht-form-field');
    expect(formField).toHaveClass('utrecht-form-field');
  });

  it('can have an additional class name', () => {
    render(<LuxFormFieldCheckbox label="Name" className="custom-class" />);

    const formField = screen.getByText('Name').closest('.utrecht-form-field');
    expect(formField).toHaveClass('utrecht-form-field');
    expect(formField).toHaveClass('custom-class');
  });

  it('renders description when provided', () => {
    render(<LuxFormFieldCheckbox label="Name" description="Enter your full name" />);

    expect(screen.getByText('Enter your full name')).toBeInTheDocument();
  });

  it('renders error message when invalid and error message provided', () => {
    render(<LuxFormFieldCheckbox label="Name" invalid={true} errorMessage="Name is required" />);

    expect(screen.getByText('Name is required')).toBeInTheDocument();
  });

  it('adds the correct attributes to the Checkbox', () => {
    render(<LuxFormFieldCheckbox label="Name" checked required />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();
    expect(checkbox).toHaveAttribute('aria-required', 'true');
    expect(checkbox).not.toHaveAttribute('required');
  });
});
