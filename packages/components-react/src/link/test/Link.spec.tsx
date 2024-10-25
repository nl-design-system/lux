import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { LuxLink } from '../Link';

const ExampleIcon = (
  <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg">
    <circle r="6" cx="7" cy="7" fill="currentColor" />
  </svg>
);

describe('Link', () => {
  it('renders a link', () => {
    render(<LuxLink href="#">Test Link</LuxLink>);

    const link = screen.getByRole('link', {
      name: 'Test Link',
    });
    expect(link).toBeInTheDocument();
  });

  it('renders an external link with correct attributes', () => {
    render(
      <LuxLink href="https://example.com" external>
        External Link
      </LuxLink>,
    );

    const link = screen.getByRole('link', {
      name: 'External Link',
    });

    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'external noopener noreferrer');
  });

  it('renders a link with an icon', () => {
    render(
      <LuxLink href="#" icon={ExampleIcon}>
        Link with Icon
      </LuxLink>,
    );

    const link = screen.getByRole('link', {
      name: 'Link with Icon',
    });

    expect(link.querySelector('svg')).toBeInTheDocument();
  });

  it('renders a link with correct language attributes', () => {
    render(
      <LuxLink href="#" hrefLang="nl" lang="nl">
        Nederlandse Link
      </LuxLink>,
    );

    const link = screen.getByRole('link', {
      name: 'Nederlandse Link',
    });

    expect(link).toHaveAttribute('hrefLang', 'nl');
    expect(link).toHaveAttribute('lang', 'nl');
  });
});
