import { afterEach, describe, expect, it } from '@jest/globals';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LuxAccordionProvider } from './Accordion';

describe('AccordionProvider', () => {
  it('renders the accordion with sections', () => {
    const sectionBody =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n      laborum.';

    const section1Heading = 'Hoe vraag ik een eHerkenning account aan?';
    const { container } = render(
      <LuxAccordionProvider
        sections={[
          {
            body: sectionBody,
            label: section1Heading,
            expanded: true,
          },
          {
            body: sectionBody,
            label: 'Wanneer heb ik wat aan EVA?',
            expanded: false,
          },
          {
            body: sectionBody,
            label: 'Hoe sluit ik aan op digitale overheidsdiensten?',
            expanded: false,
          },
        ]}
        headingLevel={1}
      />,
    );

    const accordionProvider = container.querySelector(':only-child');
    const heading = screen.getByRole('heading', {
      name: section1Heading,
      level: 1,
    });

    expect(heading).toBeInTheDocument();

    expect(accordionProvider).toBeInTheDocument();
    expect(accordionProvider).toBeVisible();

    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'true');
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'false');
    expect(buttons[2]).toHaveAttribute('aria-expanded', 'false');
  });
});

afterEach(() => cleanup());
