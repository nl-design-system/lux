import { LuxLink } from '@lux-design-system/web-components-react';

export const VisualStates = () => (
  <>
    <LuxLink href="#">Link</LuxLink>
    <LuxLink href="#" forceState="hover">
      Hover link
    </LuxLink>
    <LuxLink href="#" forceState="active">
      Active link
    </LuxLink>
    <LuxLink href="#" forceState="focus">
      Focus link
    </LuxLink>
  </>
);
