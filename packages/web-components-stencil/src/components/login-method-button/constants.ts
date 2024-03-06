import type { LoginMethodVariant } from './types';

export const COMPONENT_TAG = 'lux-login-method-button';

export const loginMethodLabels: Record<LoginMethodVariant, string> = {
  digid: 'Inloggen',
  'digid-machtigen': 'Inloggen als gemachtigde',
  'e-herkenning': 'Inloggen als bedrijf of organisatie',
  eidas: 'Europese login',
};
