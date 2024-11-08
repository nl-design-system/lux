import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { LuxHeadingGroup } from '../HeadingGroup';

describe('Heading', () => {
  it('renders a HeadingGroup', () => {
    render(
      <LuxHeadingGroup>
        <p>Lux Pre-Heading</p>
        <h1>Lux Heading</h1>
      </LuxHeadingGroup>,
    );

    const heading = screen.getByText('Lux Heading');
    expect(heading).toBeInTheDocument();
    const preHeading = screen.getByText('Lux Pre-Heading');
    expect(preHeading).toBeInTheDocument();
  });
  it('can be hidden', () => {
    const { container } = render(
      <LuxHeadingGroup hidden>
        <p>Lux Pre-Heading</p>
        <h1>Lux Heading</h1>
      </LuxHeadingGroup>,
    );

    const headingGroup = container.querySelector(':only-child');

    expect(headingGroup).not.toBeVisible();
  });

  it('can have an additional class name', () => {
    const { container } = render(
      <LuxHeadingGroup className="large">
        <p>Lux Pre-Heading</p>
        <h1>Lux Heading</h1>
      </LuxHeadingGroup>,
    );

    const headingGroup = container.querySelector(':only-child');

    expect(headingGroup).toHaveClass('large');

    expect(headingGroup).toHaveClass('utrecht-heading-group');
  });
});
