import { languageButtonLoginDigid, languageButtonLoginDigidMachtigen, languageButtonLoginEherkenning, languageButtonLoginEuropeanLogin } from '@lux/design-tokens/dist/labels/en';
import type { ButtonLoginAgent, ButtonLoginLabelTuple } from './types';

export const COMPONENT_TAG = 'lux-button-login';

export const loginAgentsLabels: Record<ButtonLoginAgent, ButtonLoginLabelTuple> = {
  digid: {
    label: languageButtonLoginDigid,
    agentLabel: 'met digid',
  },
  'digid-machtigen': {
    label: languageButtonLoginDigidMachtigen,
    agentLabel: 'met digid',
  },
  eherkenning: {
    label: languageButtonLoginEherkenning,
    agentLabel: 'met e-herkenning',
  },
  eidas: {
    label: languageButtonLoginEuropeanLogin,
    agentLabel: 'met e-idas',
  },
};
