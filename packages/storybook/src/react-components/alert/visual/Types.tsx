import { LuxAlert, LuxAlertProps, LuxParagraph } from '@lux-design-system/components-react';
import { PropsWithChildren } from 'react';

const VisualAlertTemplate = ({ children, type }: PropsWithChildren<LuxAlertProps>) => (
  <LuxAlert type={type}>
    <LuxParagraph>{children}</LuxParagraph>
  </LuxAlert>
);

export const VisualTypes = () => (
  <>
    <VisualAlertTemplate type="info">Info Alert</VisualAlertTemplate>
    <VisualAlertTemplate type="success">Okay Alert</VisualAlertTemplate>
    <VisualAlertTemplate type="warning">Warning Alert</VisualAlertTemplate>
    <VisualAlertTemplate type="error">Error Alert</VisualAlertTemplate>
  </>
);
