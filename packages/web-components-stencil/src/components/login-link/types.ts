export type LoginLinkAgent = 'digid' | 'digid-machtigen' | 'eidas' | 'eherkenning';

export interface LoginLinkLabelTuple {
  label: string;
  agentLabel: string;
}
