import type { ButtonLoginAgent } from './types';

export const COMPONENT_TAG = 'lux-button-login';

export const LoginAgentsLabels: Record<ButtonLoginAgent, string> = {
  digid: 'Inloggen',
  'digid-machtigen': 'Inloggen als gemachtigde',
  eherkenning: 'Inloggen als bedrijf of instelling',
  eidas: 'European login',
};
