import '@testing-library/jest-dom/vitest';

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { TestComponent } from './index';

describe('TestComponent', () => {
  it('should live', () => {
    const { getByText } = render(<TestComponent />);

    const el = getByText('test');

    expect(el).toBeInTheDocument();
  });
});
