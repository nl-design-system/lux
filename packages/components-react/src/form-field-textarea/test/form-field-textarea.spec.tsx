import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LuxFormFieldTextarea } from '../FormFieldTextarea';

describe('Form Field Textarea', () => {
  test('renders correctly with required props', () => {
    render(<LuxFormFieldTextarea label="Test Label" />);

    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  test('renders with description and error message', () => {
    render(
      <LuxFormFieldTextarea
        label="Test Label"
        description="Test description"
        errorMessage="Test error message"
        invalid
      />,
    );

    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByText('Test error message')).toBeInTheDocument();
  });

  test('applies disabled attribute', () => {
    render(<LuxFormFieldTextarea label="Test Label" disabled />);
    expect(screen.getByLabelText('Test Label')).toBeDisabled();
  });

  test('applies dir attribute correctly', () => {
    render(<LuxFormFieldTextarea label="Test Label" inputDir="rtl" />);
    expect(screen.getByLabelText('Test Label')).toHaveAttribute('dir', 'rtl');
  });

  test('supports user input', async () => {
    render(<LuxFormFieldTextarea label="Test Label" />);
    const textarea = screen.getByLabelText('Test Label');
    await userEvent.type(textarea, 'Hello World');
    expect(textarea).toHaveValue('Hello World');
  });
});
