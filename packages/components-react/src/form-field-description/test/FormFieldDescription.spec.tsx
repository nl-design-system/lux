import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { LuxFormFieldDescription } from '../FormFieldDescription';

describe('Form Field Description', () => {
  it('renders a basic description', () => {
    render(<LuxFormFieldDescription>Test Description</LuxFormFieldDescription>);

    const description = screen.getByText('Test Description');
    expect(description).toBeInTheDocument();
  });

  it('applies the base class', () => {
    render(<LuxFormFieldDescription>Test Description</LuxFormFieldDescription>);

    const description = screen.getByText('Test Description');
    expect(description).toHaveClass('utrecht-form-field-description');
  });

  it('can have an additional class name', () => {
    render(<LuxFormFieldDescription className="custom-class">Test Description</LuxFormFieldDescription>);

    const description = screen.getByText('Test Description');
    expect(description).toHaveClass('utrecht-form-field-description');
    expect(description).toHaveClass('custom-class');
  });

  it('passes through other HTML attributes', () => {
    render(<LuxFormFieldDescription data-testid="test-description">Test Description</LuxFormFieldDescription>);

    const description = screen.getByTestId('test-description');
    expect(description).toBeInTheDocument();
  });
  it('renders content with a paragraph', () => {
    render(
      <LuxFormFieldDescription data-testid="rich-text-description">
        <p>This is a paragraph</p>
      </LuxFormFieldDescription>,
    );
    const description = screen.getByTestId('rich-text-description');
    expect(description).toBeInTheDocument();

    const paragraph = description.querySelector('p');
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent('This is a paragraph');
  });
  it('renders rich text content', () => {
    render(
      <LuxFormFieldDescription data-testid="rich-text-description">
        <strong>Bold</strong> Description
      </LuxFormFieldDescription>,
    );
    const description = screen.getByTestId('rich-text-description');
    expect(description).toBeInTheDocument();

    const boldText = description.querySelector('strong');
    expect(boldText).toBeInTheDocument();
    expect(boldText).toHaveTextContent('Bold');
  });
});
