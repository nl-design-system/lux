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

    it('renders external link in new tab with correct attributes and text', () => {
      const linkText = 'External Link';
      render(
        <LuxLink href="https://example.com" external openInNewTab>
          {linkText}
        </LuxLink>,
      );

      const link = screen.getByRole('link', {
        name: `${linkText} (opent in nieuw venster)`,
      });
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer external');

      const newWindowText = screen.getByText('(opent in nieuw venster)');
      expect(newWindowText).toBeInTheDocument();
    });
  });

  // Icon tests
  describe('Icon rendering', () => {
    it('renders icon at start position by default', () => {
      render(
        <LuxLink href="#" icon={ExampleIcon}>
          Link with Icon
        </LuxLink>,
      );

      const container = screen.getByRole('link').closest('div');
      const svg = container?.querySelector('svg');
      expect(svg).toHaveClass('lux-link__icon');
      expect(container?.firstElementChild).toBe(svg);
    });

    it('renders icon at end position', () => {
      render(
        <LuxLink href="#" icon={ExampleIcon} iconPosition="end">
          Link with End Icon
        </LuxLink>,
      );

      const container = screen.getByRole('link').closest('div');
      const svg = container?.querySelector('svg');
      expect(svg).toHaveClass('lux-link__icon');
      expect(container?.children[1]).toBe(svg);
    });

    it('applies custom className to icon', () => {
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

      const svg = screen.getByRole('link').closest('div')?.querySelector('svg');
      expect(svg).toHaveClass('lux-link__icon', 'custom-icon-class');
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

  // Container tests
  describe('Container structure', () => {
    it('wraps content in container with correct class', () => {
      render(<LuxLink href="#">Test Link</LuxLink>);

      const container = screen.getByRole('link').closest('div');
      expect(container).toHaveClass('lux-link__container');
    });

    it('renders new window text at the end', () => {
      render(
        <LuxLink href="#" openInNewTab icon={ExampleIcon} iconPosition="end">
          Test Link
        </LuxLink>,
      );

      const container = screen.getByRole('link').closest('div');
      const lastChild = container?.lastElementChild;
      expect(lastChild).toHaveTextContent('(opent in nieuw venster)');
    });
  });

  // Combined features test
  it('renders correctly with all features combined', () => {
    const linkText = 'Complex Link';
    render(
      <LuxLink
        href="https://example.com"
        external
        openInNewTab
        icon={ExampleIcon}
        iconPosition="end"
        className="custom-class"
        hrefLang="en"
      >
        {linkText}
      </LuxLink>,
    );

    const container = screen
      .getByRole('link', {
        name: `${linkText} (opent in nieuw venster)`,
      })
      .closest('div');

    const link = screen.getByRole('link');
    const svg = container?.querySelector('svg');
    const newWindowText = screen.getByText('(opent in nieuw venster)');

    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer external');
    expect(link).toHaveAttribute('hrefLang', 'en');
    expect(svg).toHaveClass('lux-link__icon');
    expect(newWindowText).toBeInTheDocument();
  });
});
