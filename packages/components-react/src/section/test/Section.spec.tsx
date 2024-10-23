import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { LuxSection } from '../Section';

describe('Section', () => {
  it('renders a section', () => {
    render(<LuxSection>Lux Section</LuxSection>);

    const section = screen.getByRole('region', {});
    expect(section).toBeInTheDocument();
  });

  it('can have an additional class name', () => {
    render(<LuxSection className="info-section">Lux Section</LuxSection>);

    const section = screen.getByRole('region', {});

    expect(section).toHaveClass('info-section');

    expect(section).toHaveClass('lux-section');
  });

  it('can have extra properties', () => {
    const { container } = render(<LuxSection hidden={true}>Lux Section</LuxSection>);

    const section = container.querySelector(':only-child');

    expect(section).not.toBeVisible();
  });
});
