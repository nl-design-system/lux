import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { LuxIconFallbackSVGTestId } from '../FallbackIcon';
import { LuxIcon } from '../Icon';

describe('Icon', () => {
  it('renders the fallback icon when no other icon is given', () => {
    render(<LuxIcon></LuxIcon>);

    const fallbackSVG = screen.getByTestId(LuxIconFallbackSVGTestId);

    expect(fallbackSVG).toBeInTheDocument();
  });

  it('renders the fallback icon when undefined icon is given', () => {
    render(<LuxIcon icon={undefined}></LuxIcon>);

    const fallbackSVG = screen.getByTestId(LuxIconFallbackSVGTestId);

    expect(fallbackSVG).toBeInTheDocument();
  });

  it('renders the given icon', () => {
    const suppliedSVGTestId = 'lux-icon-supplied-svg';
    const suppliedSVG = (
      <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" data-testid={suppliedSVGTestId}></svg>
    );

    render(<LuxIcon icon={suppliedSVG}></LuxIcon>);

    const foundSVG = screen.getByTestId(suppliedSVGTestId);

    expect(foundSVG).toBeInTheDocument();
  });
});
