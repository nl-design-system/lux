import { describe, expect, it } from '@jest/globals';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LuxBreadcrumbLink, LuxBreadcrumbNav, LuxBreadcrumbSeparator } from './Breadcrumbs';

const ChevronRightIcon = () => (
  <span style={{ width: '16px', height: '24px' }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="16" width="16">
      <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
    </svg>
  </span>
);

describe('LuxBreadcrumbNav', () => {
  it('renders correctly', () => {
    const { container } = render(
      <LuxBreadcrumbNav>
        <LuxBreadcrumbLink href="/">Home</LuxBreadcrumbLink>
        <LuxBreadcrumbSeparator>
          <ChevronRightIcon />
        </LuxBreadcrumbSeparator>
        <LuxBreadcrumbLink href="/section">Section</LuxBreadcrumbLink>
        <LuxBreadcrumbSeparator>
          <ChevronRightIcon />
        </LuxBreadcrumbSeparator>
        <LuxBreadcrumbLink href="/section/page">Page</LuxBreadcrumbLink>
      </LuxBreadcrumbNav>,
    );

    const nav = container.querySelector('nav');
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveClass('utrecht-breadcrumb-nav');

    const list = container.querySelector('ol');
    expect(list).toBeInTheDocument();
    expect(list).toHaveClass('utrecht-breadcrumb-nav__list');

    const listItems = container.querySelectorAll('li');
    expect(listItems.length).toBe(5);

    const links = container.querySelectorAll('.utrecht-breadcrumb-nav__link');
    expect(links.length).toBe(3);

    expect(links[0]).toHaveAttribute('href', '/');
    expect(links[0]).toHaveTextContent('Home');

    expect(links[1]).toHaveAttribute('href', '/section');
    expect(links[1]).toHaveTextContent('Section');

    expect(links[2]).toHaveAttribute('href', '/section/page');
    expect(links[2]).toHaveTextContent('Page');

    const separators = container.querySelectorAll('.utrecht-breadcrumb-nav__separator');
    expect(separators.length).toBe(2);
  });

  it('renders with custom className', () => {
    const { container } = render(
      <LuxBreadcrumbNav className="custom-class">
        <LuxBreadcrumbLink href="/">Home</LuxBreadcrumbLink>
      </LuxBreadcrumbNav>,
    );

    const nav = container.querySelector('nav');
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveClass('custom-class');
  });
});

describe('LuxBreadcrumbLink', () => {
  it('renders a link with a custom className', () => {
    const { container } = render(
      <LuxBreadcrumbNav>
        <LuxBreadcrumbLink href="/" className="custom-class">
          Home
        </LuxBreadcrumbLink>
      </LuxBreadcrumbNav>,
    );

    const link = container.querySelector('.utrecht-breadcrumb-nav__link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('custom-class');
  });
});

describe('LuxBreadcrumbSeparator', () => {
  it('renders a separator with a custom className', () => {
    const { container } = render(
      <LuxBreadcrumbNav>
        <LuxBreadcrumbLink href="/">Home</LuxBreadcrumbLink>
        <LuxBreadcrumbSeparator className="custom-separator-class">
          <ChevronRightIcon />
        </LuxBreadcrumbSeparator>
        <LuxBreadcrumbLink href="/section">Section</LuxBreadcrumbLink>
      </LuxBreadcrumbNav>,
    );

    const separator = container.querySelector('.utrecht-breadcrumb-nav__separator');
    expect(separator).toBeInTheDocument();
    expect(separator).toHaveClass('custom-separator-class');
  });
});
