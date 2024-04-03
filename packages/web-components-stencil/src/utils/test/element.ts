import { type SpecPage } from '@stencil/core/internal';
import { getTestIdSelector } from './testid';

export const getTestableShadowElement = <T extends Element>(page: SpecPage, testId: string): T =>
  page.root?.shadowRoot?.querySelector(getTestIdSelector(testId)) as T;
