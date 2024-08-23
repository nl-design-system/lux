import { LuxLink } from '@lux-design-system/web-components-react';

export const VisualStates = () => (
  <>
    <h5 className="lux-heading-4">States</h5>
    <LuxLink href="#">Link</LuxLink>
    <LuxLink href="#" className="force-state--hover">
      Hover link
    </LuxLink>
    <LuxLink href="#" className="force-state--active">
      Active link
    </LuxLink>
    <LuxLink href="#" className="force-state--focus">
      Focus link
    </LuxLink>
  </>
);
