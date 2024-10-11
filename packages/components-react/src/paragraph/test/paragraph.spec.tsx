import { describe, expect, it } from '@jest/globals';
import { render, screen, within } from '@testing-library/react';
import { LuxParagraph } from '../Paragraph';

const paragraphText = 'Dit is een paragraaf';
const leadParagraphText = paragraphText + ' die een inleiding is';
const smallParagraphText = paragraphText + ' die klein is';

describe('Paragraph', () => {
  it('renders a paragraph', () => {
    render(<LuxParagraph>{paragraphText}</LuxParagraph>);

    const paragraph = screen.getByRole('paragraph');

    expect(within(paragraph).getByText(paragraphText, { selector: '.utrecht-paragraph' })).toBeInTheDocument();
  });

  it('renders a lead paragraph', () => {
    render(<LuxParagraph appearance="lead">{leadParagraphText}</LuxParagraph>);

    const paragraph = screen.getByRole('paragraph');

    expect(within(paragraph).getByText('', { selector: '.utrecht-paragraph--lead' })).toBeInTheDocument();
  });

  it('renders a small paragraph', () => {
    render(<LuxParagraph appearance="small">{smallParagraphText}</LuxParagraph>);

    const paragraph = screen.getByRole('paragraph');

    expect(within(paragraph).getByText('', { selector: '.utrecht-paragraph--small' })).toBeInTheDocument();
  });
});
