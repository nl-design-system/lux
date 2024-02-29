import LogoDigid from './logos/digid.svg';
import LogoEHerkenning from './logos/e-herkenning.svg';
import LogoEidas from './logos/eidas.svg';
import type { LoginMethodVariant } from "./types";

export const COMPONENT_TAG = 'lux-login-method-button';

export const loginMethodLabels: Record <LoginMethodVariant, string> = {
  'digid': 'Inloggen',
  'digid-machtigen': 'Inloggen als gemachtigde',
  'e-herkenning': 'Inloggen als bedrijf of oraganisatie',
  'eidas': 'Europese login',
};

export const loginMethodLogos: Record<LoginMethodVariant, any> = {
  'digid': LogoDigid,
  'digid-machtigen': LogoDigid,
  'e-herkenning': LogoEHerkenning,
  'eidas': LogoEidas,
}
