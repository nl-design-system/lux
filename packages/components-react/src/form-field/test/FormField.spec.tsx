import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { LuxFormField } from '../FormField';

describe('Form Field', () => {
  it('renders a basic form field with label and input', () => {
    render(<LuxFormField label="Name" input={<input type="text" />} />);

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('applies the base class', () => {
    render(<LuxFormField label="Name" input={<input type="text" />} />);

    const formField = screen.getByText('Name').closest('.utrecht-form-field');
    expect(formField).toHaveClass('utrecht-form-field');
  });

  it('can have an additional class name', () => {
    render(<LuxFormField label="Name" input={<input type="text" />} className="custom-class" />);

    const formField = screen.getByText('Name').closest('.utrecht-form-field');
    expect(formField).toHaveClass('utrecht-form-field');
    expect(formField).toHaveClass('custom-class');
  });

  it('renders description when provided', () => {
    render(<LuxFormField label="Name" input={<input type="text" />} description="Enter your full name" />);

    expect(screen.getByText('Enter your full name')).toBeInTheDocument();
  });

  it('renders error message when invalid and error message provided', () => {
    render(<LuxFormField label="Name" input={<input type="text" />} invalid={true} errorMessage="Name is required" />);

    expect(screen.getByText('Name is required')).toBeInTheDocument();
  });

  it('does not render error message when not invalid', () => {
    render(<LuxFormField label="Name" input={<input type="text" />} invalid={false} errorMessage="Name is required" />);

    expect(screen.queryByText('Name is required')).not.toBeInTheDocument();
  });

  it('applies the correct class for checkbox type', () => {
    render(<LuxFormField label="Accept terms" input={<input type="checkbox" />} type="checkbox" />);

    const formField = screen.getByText('Accept terms').closest('.utrecht-form-field');
    expect(formField).toHaveClass('utrecht-form-field--checkbox');
  });

  it('applies the correct class for radio type', () => {
    render(<LuxFormField label="Gender" input={<input type="radio" />} type="radio" />);

    const formField = screen.getByText('Gender').closest('.utrecht-form-field');
    expect(formField).toHaveClass('utrecht-form-field--radio');
  });

  it('applies the correct class for text type', () => {
    render(<LuxFormField label="Name" input={<input type="text" />} type="text" />);

    const formField = screen.getByText('Name').closest('.utrecht-form-field');
    expect(formField).toHaveClass('utrecht-form-field--text');
  });
});
