import { describe, expect, it } from '@jest/globals';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { LuxDocument } from '../Document';

const documentText = 'Dit is de content van het document';

describe('Document', () => {
  it('renders a document', () => {
    render(<LuxDocument>{documentText}</LuxDocument>);

    expect(screen.getByText(documentText, { selector: '.utrecht-document' })).toBeInTheDocument();
  });
});
