import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import * as React from 'react';
import {
  LuxFormSummary,
  LuxFormSummaryActions,
  LuxFormSummaryItem,
  LuxFormSummaryKey,
  LuxFormSummaryValue,
} from '../FormSummary';

describe('FormSummary', () => {
  it('renders a FormSummary', () => {
    const keyText = 'Field 1';
    const valueText = 'Value 2';

    render(
      <LuxFormSummary>
        <LuxFormSummaryItem>
          <LuxFormSummaryKey>{keyText}</LuxFormSummaryKey>
          <LuxFormSummaryValue>{valueText}</LuxFormSummaryValue>
        </LuxFormSummaryItem>
      </LuxFormSummary>,
    );

    const summaryKey = screen.getByText(keyText);
    expect(summaryKey).toBeInTheDocument();
    const summaryValue = screen.getByText(valueText);
    expect(summaryValue).toBeInTheDocument();
  });

  it('renders a FormSummary with an action', () => {
    const keyText = 'Field 1 for action';
    const valueText = 'Value 2 of action';
    const actionText = 'Action';
    const ActionComponent = () => <button>{actionText}</button>;

    render(
      <LuxFormSummary>
        <LuxFormSummaryItem>
          <LuxFormSummaryKey>{keyText}</LuxFormSummaryKey>
          <LuxFormSummaryValue>{valueText}</LuxFormSummaryValue>
          <LuxFormSummaryActions>
            <ActionComponent />
          </LuxFormSummaryActions>
        </LuxFormSummaryItem>
      </LuxFormSummary>,
    );

    const summaryKey = screen.getByText(keyText);
    expect(summaryKey).toBeInTheDocument();
    const summaryValue = screen.getByText(valueText);
    expect(summaryValue).toBeInTheDocument();

    // Assert for text and element
    const summaryAction = screen.getByText(actionText);
    expect(summaryAction).toBeInTheDocument();
    const summaryActionButton = screen.getByRole('button');
    expect(summaryActionButton).toBeInTheDocument();
  });
});
