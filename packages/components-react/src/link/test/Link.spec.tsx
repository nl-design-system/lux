import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { LuxLink } from '../Link';

const ExampleIcon = (
  <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg">
    <circle r="6" cx="7" cy="7" fill="currentColor" />
  </svg>
);

describe('Link', () => {
  // Basic rendering
  it('renders a basic link with correct attributes', () => {
    render(
      <LuxLink href="#" className="custom-class">
        Test Link
      </LuxLink>,
    );

    const link = screen.getByRole('link', { name: 'Test Link' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#');
    expect(link).toHaveClass('lux-link', 'custom-class');
    expect(link.querySelector('.utrecht-link__text')).toHaveTextContent('Test Link');
  });

  // External link tests
  describe('External link', () => {
    it('renders external link with correct attributes', () => {
      render(
        <LuxLink href="https://example.com" external>
          External Link
        </LuxLink>,
      );

      const link = screen.getByRole('link', { name: 'External Link' });
      expect(link).toHaveAttribute('rel', 'external noopener noreferrer');
    });

    it('does not add external attributes when external prop is false', () => {
      render(<LuxLink href="https://example.com">Regular Link</LuxLink>);

      const link = screen.getByRole('link', { name: 'Regular Link' });
      expect(link).not.toHaveAttribute('rel');
    });
  });

  // Icon tests
  describe('Icon rendering', () => {
    it('renders icon with default start position', () => {
      render(
        <LuxLink href="#" icon={ExampleIcon}>
          Link with Icon
        </LuxLink>,
      );

      const link = screen.getByRole('link');
      const svg = link.querySelector('svg');
      expect(svg).toHaveClass('lux-link__icon', 'lux-link-icon--start');
    });

    it('renders icon at end position', () => {
      render(
        <LuxLink href="#" icon={ExampleIcon} iconPosition="end">
          Link with End Icon
        </LuxLink>,
      );

      const link = screen.getByRole('link');
      const svg = link.querySelector('svg');
      expect(svg).toHaveClass('lux-link__icon', 'lux-link-icon--end');
    });

    it('applies custom className to icon while preserving default classes', () => {
      const iconWithClass = (
        <svg className="custom-icon-class" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
          <circle r="6" cx="7" cy="7" fill="currentColor" />
        </svg>
      );

      render(
        <LuxLink href="#" icon={iconWithClass}>
          Link with Custom Icon Class
        </LuxLink>,
      );

      const svg = screen.getByRole('link').querySelector('svg');
      expect(svg).toHaveClass('lux-link__icon', 'custom-icon-class', 'lux-link-icon--start');
    });
  });

  // Language attributes
  it('renders link with correct language attributes', () => {
    render(
      <LuxLink href="#" hrefLang="nl" lang="nl">
        Nederlandse Link
      </LuxLink>,
    );

    const link = screen.getByRole('link', { name: 'Nederlandse Link' });
    expect(link).toHaveAttribute('hrefLang', 'nl');
    expect(link).toHaveAttribute('lang', 'nl');
  });

  // Text wrapper test
  it('wraps text content in span with correct class', () => {
    render(<LuxLink href="#">Test Link</LuxLink>);

    const textWrapper = screen.getByRole('link').querySelector('.utrecht-link__text');
    expect(textWrapper).toBeInTheDocument();
    expect(textWrapper).toHaveTextContent('Test Link');
  });

  // Combined features test
  it('renders correctly with all features combined', () => {
    render(
      <LuxLink
        href="https://example.com"
        external
        icon={ExampleIcon}
        iconPosition="end"
        className="custom-class"
        hrefLang="en"
      >
        Complex Link
      </LuxLink>,
    );

    const link = screen.getByRole('link');
    const svg = link.querySelector('svg');
    const textWrapper = link.querySelector('.utrecht-link__text');

    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('rel', 'external noopener noreferrer');
    expect(link).toHaveAttribute('hrefLang', 'en');
    expect(link).toHaveClass('lux-link', 'custom-class');
    expect(svg).toHaveClass('lux-link__icon', 'lux-link-icon--end');
    expect(textWrapper).toHaveTextContent('Complex Link');
  });
});
