import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { LuxFormFieldLabel } from '../FormFieldLabel';

describe('Form Field Label', () => {
  it('renders a basic label', () => {
    render(<LuxFormFieldLabel htmlFor="test-input">Test Label</LuxFormFieldLabel>);

    const label = screen.getByText('Test Label');
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('for', 'test-input');
  });

  it('applies the correct class for checkbox type', () => {
    render(<LuxFormFieldLabel type="checkbox">Checkbox Label</LuxFormFieldLabel>);

    const label = screen.getByText('Checkbox Label');
    expect(label).toHaveClass('utrecht-form-label--checkbox');
  });

  it('applies the correct class for radio type', () => {
    render(<LuxFormFieldLabel type="radio">Radio Label</LuxFormFieldLabel>);

    const label = screen.getByText('Radio Label');
    expect(label).toHaveClass('utrecht-form-label--radio');
  });

  it('applies the disabled class when disabled prop is true', () => {
    render(<LuxFormFieldLabel disabled>Disabled Label</LuxFormFieldLabel>);

    const label = screen.getByText('Disabled Label');
    expect(label).toHaveClass('utrecht-form-label--disabled');
  });

  it('applies the checked class when checked prop is true', () => {
    render(<LuxFormFieldLabel checked>Checked Label</LuxFormFieldLabel>);

    const label = screen.getByText('Checked Label');
    expect(label).toHaveClass('utrecht-form-label--checked');
  });

  it('can have an additional class name', () => {
    render(<LuxFormFieldLabel className="custom-class">Custom Label</LuxFormFieldLabel>);

    const label = screen.getByText('Custom Label');
    expect(label).toHaveClass('custom-class');
    expect(label).toHaveClass('utrecht-form-label');
  });

  it('passes through other HTML attributes', () => {
    render(<LuxFormFieldLabel data-testid="test-label">Test Label</LuxFormFieldLabel>);

    const label = screen.getByTestId('test-label');
    expect(label).toBeInTheDocument();
  });

  it('renders rich text content', () => {
    render(
      <LuxFormFieldLabel data-testid="rich-text-label">
        <strong>Bold</strong> Label
      </LuxFormFieldLabel>,
    );
    const label = screen.getByTestId('rich-text-label');
    expect(label).toBeInTheDocument();

    const boldText = label.querySelector('strong');
    expect(boldText).toBeInTheDocument();
    expect(boldText).toHaveTextContent('Bold');
  });

  it('combines multiple classes correctly', () => {
    render(
      <LuxFormFieldLabel type="checkbox" disabled checked className="custom-class">
        Complex Label
      </LuxFormFieldLabel>,
    );

    const label = screen.getByText('Complex Label');
    expect(label).toHaveClass('utrecht-form-label');
    expect(label).toHaveClass('utrecht-form-label--checkbox');
    expect(label).toHaveClass('utrecht-form-label--disabled');
    expect(label).toHaveClass('utrecht-form-label--checked');
    expect(label).toHaveClass('custom-class');
  });
});
