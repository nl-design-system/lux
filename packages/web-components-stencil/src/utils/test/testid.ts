import { Build } from '@stencil/core';

const testIdProp = 'data-testid';

interface TestIdObject {
  'data-testid': string;
}

export const applyTestId = (id: string): TestIdObject | null => {
  if (Build.isDev || Build.isTesting) {
    return {
      [testIdProp]: id,
    };
  }

  return null;
};

export const getTestIdSelector = (id: string): string => `[${testIdProp}="${id}"]`;
