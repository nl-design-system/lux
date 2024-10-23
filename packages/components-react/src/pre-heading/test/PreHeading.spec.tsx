import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { LuxPreHeading } from '../PreHeading';

describe('Heading', () => {
  it('renders a PreHeading', () => {
    render(<LuxPreHeading>Lux PreHeading</LuxPreHeading>);

    const preHeading = screen.getByText('Lux PreHeading');
    expect(preHeading).toBeInTheDocument();
  });

  it('renders rich text content', () => {
    const { container } = render(
      <LuxPreHeading>
        <strong>Lux</strong> PreHeading
      </LuxPreHeading>,
    );

    const preHeading = container.querySelector(':only-child');
    const richText = preHeading.querySelector('strong');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<LuxPreHeading hidden>Lux PreHeading</LuxPreHeading>);

    const preHeading = container.querySelector(':only-child');

    expect(preHeading).not.toBeVisible();
  });

  it('can have an additional class name', () => {
    render(<LuxPreHeading className="large">Lux PreHeading</LuxPreHeading>);

    const preHeading = screen.getByText('Lux PreHeading');

    expect(preHeading).toHaveClass('large');

    expect(preHeading).toHaveClass('utrecht-pre-heading');
  });
});
