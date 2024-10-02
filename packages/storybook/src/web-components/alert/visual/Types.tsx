import { LuxAlert, LuxParagraph } from '@lux-design-system/web-components-react';
import type { JSX } from '@lux-design-system/web-components-stencil';
import { PropsWithChildren } from 'react';

const VisualAlertTemplate = ({ children, type }: PropsWithChildren<JSX.LuxAlert>) => (
  <LuxAlert type={type}>
    <LuxParagraph>{children}</LuxParagraph>
  </LuxAlert>
);

export const VisualTypes = () => (
  <>
    <VisualAlertTemplate type="info">Info Alert</VisualAlertTemplate>
    <VisualAlertTemplate type="ok">Okay Alert</VisualAlertTemplate>
    <VisualAlertTemplate type="warning">Warning Alert</VisualAlertTemplate>
    <VisualAlertTemplate type="error">Error Alert</VisualAlertTemplate>
  </>
);
