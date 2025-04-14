import { describe, expect, it } from '@jest/globals';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { LuxLinkList } from '../LinkList';

const ExampleIcon = (
  <svg height="28" width="20" xmlns="http://www.w3.org/2000/svg" data-testid="lux-link-list-icon">
    <rect width="11" height="11" y="17" x="3" fill="currentColor" />
  </svg>
);
const ExampleIcon2 = (
  <svg height="28" width="20" xmlns="http://www.w3.org/2000/svg" data-testid="lux-link-list-link-icon">
    <circle r="6" cx="7" cy="22" fill="currentColor" />
  </svg>
);

describe('LuxLinkList', () => {
  it('renders correctly', () => {
    const { container } = render(<LuxLinkList links={[{ href: '/test', children: 'Test link' }]} />);

    // Check if the list is rendered
    const list = container.querySelector('ul');
    expect(list).toBeInTheDocument();
    expect(list).toHaveClass('utrecht-link-list');

    // Check if the list item is rendered
    const listItem = container.querySelector('li');
    expect(listItem).toBeInTheDocument();
    expect(listItem).toHaveClass('utrecht-link-list__item');

    // Check if the link is rendered
    const link = container.querySelector('.utrecht-link-list__link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');

    // Check if the link text is rendered
    const linkText = container.querySelector('.utrecht-link-list__link-text');
    expect(linkText).toBeInTheDocument();
    expect(linkText).toHaveTextContent('Test link');
  });

  it('renders with custom className', () => {
    const { container } = render(
      <LuxLinkList links={[{ href: '/test', children: 'Test link' }]} className="custom-class" />,
    );

    const list = container.querySelector('ul');
    expect(list).toBeInTheDocument();
    expect(list).toHaveClass('custom-class');
  });

  it('renders with an icon', () => {
    const { container } = render(
      <LuxLinkList links={[{ href: '/test', children: 'Test link' }]} icon={() => ExampleIcon} />,
    );

    const list = container.querySelector('ul');
    expect(list).toBeInTheDocument();

    // Check if the icon is rendered
    const icon = container.querySelector('[data-testid="lux-link-list-icon"]');
    expect(icon).toBeInTheDocument();
    expect(icon?.tagName).toBe('svg');
  });
});

describe('LuxLinkListLink', () => {
  it('renders a link with a custom className', () => {
    const { container } = render(
      <LuxLinkList links={[{ href: '/test', children: 'Test link', className: 'custom-class' }]} />,
    );
    const link = container.querySelector('.utrecht-link-list__item');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('custom-class');
  });

  it('renders with an icon', () => {
    const { container } = render(
      <LuxLinkList links={[{ href: '/test', children: 'Test link', icon: ExampleIcon2 }]} />,
    );
    const list = container.querySelector('ul');
    expect(list).toBeInTheDocument();

    // Check if the link's icon is rendered
    const icon = container.querySelector('[data-testid="lux-link-list-link-icon"]');
    expect(icon).toBeInTheDocument();
    expect(icon?.tagName).toBe('svg');

    // Check if the link text is present
    const linkText = container.querySelector('.utrecht-link-list__link-text');
    expect(linkText).toBeInTheDocument();
    expect(linkText).toHaveTextContent('Test link');
  });

  it('renders a link with a different icon than the list', () => {
    const { container } = render(
      <LuxLinkList
        links={[
          { href: '/test', children: 'Test link' },
          { href: '/test', children: 'Test link', icon: ExampleIcon2 },
        ]}
        icon={() => ExampleIcon}
      />,
    );
    const list = container.querySelector('ul');
    expect(list).toBeInTheDocument();

    // Check if both icons are rendered
    const listIcon = container.querySelector('[data-testid="lux-link-list-icon"]');
    const linkIcon = container.querySelector('[data-testid="lux-link-list-link-icon"]');

    expect(listIcon).toBeInTheDocument();
    expect(linkIcon).toBeInTheDocument();
    expect(listIcon).not.toBe(linkIcon);

    // Check if the link text is present
    const linkText = container.querySelector('.utrecht-link-list__link-text');
    expect(linkText).toBeInTheDocument();
    expect(linkText).toHaveTextContent('Test link');
  });
});
