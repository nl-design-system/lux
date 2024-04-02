import { Build } from '@stencil/core';

const testIdProp = 'data-testid';

interface TestIdObject {
  [testIdProp]: string;
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
