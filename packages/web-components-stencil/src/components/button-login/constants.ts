import type { ButtonLoginAgent, ButtonLoginLabelTuple } from './types';

export const COMPONENT_TAG = 'lux-button-login';

export const loginAgentsLabels: Record<ButtonLoginAgent, ButtonLoginLabelTuple> = {
  digid: {
    label: 'Inloggen',
    agentLabel: 'met digid',
  },
  'digid-machtigen': {
    label: 'Inloggen als gemachtigde',
    agentLabel: 'met digid',
  },
  eherkenning: {
    label: 'Inloggen als bedrijf of instelling',
    agentLabel: 'met e-herkenning',
  },
  eidas: {
    label: 'European login',
    agentLabel: 'met e-idas',
  },
};
