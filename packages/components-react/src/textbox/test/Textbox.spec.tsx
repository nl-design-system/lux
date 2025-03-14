import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { LuxTextbox } from '../Textbox';

describe('Form Field Text Input', () => {
  it('renders a basic text input', () => {
    render(<LuxTextbox placeholder="Enter text" />);
    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('utrecht-textbox');
  });

  it('applies the correct class for invalid state', () => {
    render(<LuxTextbox invalid placeholder="Invalid input" />);
    const input = screen.getByPlaceholderText('Invalid input');
    expect(input).toHaveClass('utrecht-textbox--invalid');
  });

  it('applies the correct class and property for disabled state', () => {
    render(<LuxTextbox disabled placeholder="Disabled input" />);
    const input = screen.getByPlaceholderText('Disabled input');
    expect(input).toHaveClass('utrecht-textbox--disabled');
    expect(input).toBeDisabled();
  });

  it('applies the correct class for read-only state', () => {
    render(<LuxTextbox readOnly placeholder="Read-only input" />);
    const input = screen.getByPlaceholderText('Read-only input');
    expect(input).toHaveClass('utrecht-textbox--read-only');
  });

  it('can have an additional class name', () => {
    render(<LuxTextbox className="custom-class" placeholder="Custom input" />);
    const input = screen.getByPlaceholderText('Custom input');
    expect(input).toHaveClass('custom-class');
    expect(input).toHaveClass('utrecht-textbox');
  });

  it('passes through other HTML attributes', () => {
    render(<LuxTextbox data-testid="test-input" placeholder="Test input" />);
    const input = screen.getByTestId('test-input');
    expect(input).toBeInTheDocument();
  });

  it('combines multiple classes correctly', () => {
    render(<LuxTextbox invalid disabled readOnly className="custom-class" placeholder="Complex input" />);
    const input = screen.getByPlaceholderText('Complex input');
    expect(input).toHaveClass('utrecht-textbox');
    expect(input).toHaveClass('utrecht-textbox--invalid');
    expect(input).toHaveClass('utrecht-textbox--disabled');
    expect(input).toHaveClass('utrecht-textbox--read-only');
    expect(input).toHaveClass('custom-class');
  });

  it('renders with different input types', () => {
    const types = ['text', 'email', 'password', 'number', 'date'];
    types.forEach((type) => {
      render(<LuxTextbox type={type as any} placeholder={`${type} input`} />);
      const input = screen.getByPlaceholderText(`${type} input`) as HTMLInputElement;
      expect(input).toHaveAttribute('type', type);
    });
  });

  it('handles focus and focus-visible states', () => {
    render(<LuxTextbox focus focusVisible placeholder="Focused input" />);
    const input = screen.getByPlaceholderText('Focused input');
    expect(input).toHaveClass('utrecht-textbox--focus');
    expect(input).toHaveClass('utrecht-textbox--focus-visible');
  });

  it('handles required state', () => {
    render(<LuxTextbox required placeholder="Required input" />);
    const input = screen.getByPlaceholderText('Required input');
    expect(input).toHaveClass('utrecht-textbox--required');
    expect(input).toBeRequired();
  });

  it('applies correct direction', () => {
    render(<LuxTextbox dir="rtl" placeholder="RTL input" />);
    const input = screen.getByPlaceholderText('RTL input');
    expect(input).toHaveAttribute('dir', 'rtl');
  });
});
