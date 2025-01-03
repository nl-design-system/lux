import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { LuxSelect } from '../Select';

describe('Select', () => {
  it('renders a select', () => {
    render(<LuxSelect />);

    const select = screen.getByRole('combobox');

    expect(select).toBeInTheDocument();
    expect(select).toBeVisible();
  });

  it('can have an additional class name', () => {
    render(<LuxSelect className="large" />);

    const select = screen.getByRole('combobox');

    expect(select).toHaveClass('large');

    expect(select).toHaveClass('utrecht-select');
  });

  it('can be hidden', () => {
    const { container } = render(<LuxSelect hidden />);

    const select = container.querySelector(':only-child');

    expect(select).not.toBeVisible();
  });
});
