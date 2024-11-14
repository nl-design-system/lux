import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { LuxFormFieldTextbox } from '../FormFieldTextbox';

describe('Form Field Textbox', () => {
  it('renders a basic form field textbox with label and input', () => {
    render(<LuxFormFieldTextbox label="Name" />);

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('applies the base class', () => {
    render(<LuxFormFieldTextbox label="Name" />);

    const formField = screen.getByText('Name').closest('.utrecht-form-field');
    expect(formField).toHaveClass('utrecht-form-field');
  });

  it('can have an additional class name', () => {
    render(<LuxFormFieldTextbox label="Name" className="custom-class" />);

    const formField = screen.getByText('Name').closest('.utrecht-form-field');
    expect(formField).toHaveClass('utrecht-form-field');
    expect(formField).toHaveClass('custom-class');
  });

  it('renders description when provided', () => {
    render(<LuxFormFieldTextbox label="Name" description="Enter your full name" />);

    expect(screen.getByText('Enter your full name')).toBeInTheDocument();
  });

  it('renders error message when invalid and error message provided', () => {
    render(<LuxFormFieldTextbox label="Name" invalid={true} errorMessage="Name is required" />);

    expect(screen.getByText('Name is required')).toBeInTheDocument();
  });

  it('adds the correct attributes to the Textbox', () => {
    render(<LuxFormFieldTextbox label="Name" autoComplete="on" inputDir="rtl" required />);

    const textbox = screen.getByRole('textbox');

    expect(textbox).toBeInTheDocument();
    expect(textbox).toHaveAttribute('autocomplete', 'on');
    expect(textbox).toHaveAttribute('dir', 'rtl');
    expect(textbox).toHaveAttribute('aria-required', 'true');
    expect(textbox).not.toHaveAttribute('required');
  });
});
