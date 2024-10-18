import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { LuxFormFieldErrorMessage } from '../FormFieldErrorMessage';

describe('Form Field Error Message', () => {
  it('renders a basic error message', () => {
    render(<LuxFormFieldErrorMessage>Test Error Message</LuxFormFieldErrorMessage>);

    const errorMessage = screen.getByText('Test Error Message');
    expect(errorMessage).toBeInTheDocument();
  });

  it('applies the base class', () => {
    render(<LuxFormFieldErrorMessage>Test Error Message</LuxFormFieldErrorMessage>);

    const errorMessage = screen.getByText('Test Error Message');
    expect(errorMessage).toHaveClass('utrecht-form-field-error-message');
  });

  it('can have an additional class name', () => {
    render(<LuxFormFieldErrorMessage className="custom-class">Test Error Message</LuxFormFieldErrorMessage>);

    const errorMessage = screen.getByText('Test Error Message');
    expect(errorMessage).toHaveClass('utrecht-form-field-error-message');
    expect(errorMessage).toHaveClass('custom-class');
  });

  it('applies the distanced class when distanced prop is true', () => {
    render(<LuxFormFieldErrorMessage distanced>Test Error Message</LuxFormFieldErrorMessage>);

    const errorMessage = screen.getByText('Test Error Message');
    expect(errorMessage).toHaveClass('utrecht-form-field-error-message--distanced');
  });

  it('passes through other HTML attributes', () => {
    render(<LuxFormFieldErrorMessage data-testid="test-error-message">Test Error Message</LuxFormFieldErrorMessage>);

    const errorMessage = screen.getByTestId('test-error-message');
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders rich text content', () => {
    render(
      <LuxFormFieldErrorMessage data-testid="rich-text-error-message">
        <strong>Error:</strong> Invalid input
      </LuxFormFieldErrorMessage>,
    );
    const errorMessage = screen.getByTestId('rich-text-error-message');
    expect(errorMessage).toBeInTheDocument();

    const strongText = errorMessage.querySelector('strong');
    expect(strongText).toBeInTheDocument();
    expect(strongText).toHaveTextContent('Error:');
  });
});
