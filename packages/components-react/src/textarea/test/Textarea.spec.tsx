import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LuxTextArea } from '../Textarea';

describe('LuxTextArea', () => {
  it('renders a basic textarea', () => {
    render(<LuxTextArea />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeInTheDocument();
  });

  it('accepts and displays user text input', async () => {
    const user = userEvent.setup();
    render(<LuxTextArea />);
    const textarea = screen.getByRole('textbox');
    await user.type(textarea, 'Hello, world!');
    expect(textarea).toHaveValue('Hello, world!');
  });

  it('supports the disabled state', () => {
    render(<LuxTextArea disabled />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeDisabled();
  });

  it('supports the readOnly state', () => {
    render(<LuxTextArea readOnly />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('readonly');
  });

  it('supports the required state', () => {
    render(<LuxTextArea required />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeRequired();
  });

  it('applies additional class names', () => {
    render(<LuxTextArea className="custom-class" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('custom-class');
  });

  it('sets direction attribute to auto by default', () => {
    render(<LuxTextArea />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('dir', 'auto');
  });

  it('allows overriding the direction attribute', () => {
    render(<LuxTextArea dir="rtl" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('dir', 'rtl');
  });

  it('applies the rows prop correctly', () => {
    render(<LuxTextArea rows={8} />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('rows', '8');
  });
});
