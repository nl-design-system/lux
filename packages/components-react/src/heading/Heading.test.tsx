import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { LuxHeading, LuxHeading1, LuxHeading2, LuxHeading3, LuxHeading4, LuxHeading5, LuxHeading6 } from './Heading';

describe('Dynamic Heading', () => {
  it('renders a heading at heading level 1', () => {
    render(<LuxHeading level={1}>Lux Heading</LuxHeading>);

    const heading = screen.getByRole('heading', {
      name: 'Lux Heading',
      level: 1,
    });
    expect(heading).toBeInTheDocument();
  });
  it('can have a different appearance level', () => {
    render(
      <LuxHeading level={1} appearance={6}>
        Lux Heading
      </LuxHeading>,
    );

    const heading = screen.getByRole('heading', {
      name: 'Lux Heading',
      level: 1,
    });

    expect(heading).toHaveClass('utrecht-heading-6');
  });

  it('renders rich text content', () => {
    render(
      <LuxHeading level={1}>
        <strong>Lux</strong> Heading
      </LuxHeading>,
    );

    const heading = screen.getByRole('heading', {
      name: 'Lux Heading',
    });

    const richText = heading.querySelector('strong');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<LuxHeading level={1} hidden />);

    const heading = container.querySelector(':only-child');

    expect(heading).not.toBeVisible();
  });

  it('can have an additional class name', () => {
    render(
      <LuxHeading level={1} className="large">
        Lux Heading
      </LuxHeading>,
    );

    const heading = screen.getByRole('heading', {
      name: 'Lux Heading',
      level: 1,
    });

    expect(heading).toHaveClass('large');

    expect(heading).toHaveClass('utrecht-heading-1');
  });

  it('can should fall back to level 6 when the level is outside of the heading range', () => {
    /* @ts-ignore */
    render(<LuxHeading level={8}>Lux Heading</LuxHeading>);
    const heading = screen.getByRole('heading', {
      name: 'Lux Heading',
      level: 6,
    });

    expect(heading).toBeInTheDocument();
  });
});
describe('Heading 1', () => {
  it('renders a heading1 component', () => {
    render(<LuxHeading1>Lux Heading</LuxHeading1>);

    const heading = screen.getByRole('heading', {
      name: 'Lux Heading',
      level: 1,
    });
    expect(heading).toBeInTheDocument();
  });
});

describe('Heading 2', () => {
  it('renders a heading2 component', () => {
    render(<LuxHeading2>Lux Heading</LuxHeading2>);

    const heading = screen.getByRole('heading', {
      name: 'Lux Heading',
      level: 2,
    });
    expect(heading).toBeInTheDocument();
  });
});
describe('Heading 3', () => {
  it('renders a heading3 component', () => {
    render(<LuxHeading3>Lux Heading</LuxHeading3>);

    const heading = screen.getByRole('heading', {
      name: 'Lux Heading',
      level: 3,
    });
    expect(heading).toBeInTheDocument();
  });
});
describe('Heading 4', () => {
  it('renders a heading4 component', () => {
    render(<LuxHeading4>Lux Heading</LuxHeading4>);

    const heading = screen.getByRole('heading', {
      name: 'Lux Heading',
      level: 4,
    });
    expect(heading).toBeInTheDocument();
  });
});
describe('Heading 5', () => {
  it('renders a heading5 component', () => {
    render(<LuxHeading5>Lux Heading</LuxHeading5>);

    const heading = screen.getByRole('heading', {
      name: 'Lux Heading',
      level: 5,
    });
    expect(heading).toBeInTheDocument();
  });
});
describe('Heading 6', () => {
  it('renders a heading6 component', () => {
    render(<LuxHeading6>Lux Heading</LuxHeading6>);

    const heading = screen.getByRole('heading', {
      name: 'Lux Heading',
      level: 6,
    });
    expect(heading).toBeInTheDocument();
  });
});
