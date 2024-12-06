import { LuxLink } from '@lux-design-system/components-react';

export const VisualStates = () => (
  <div className="utrecht-document">
    <LuxLink href="#">Link</LuxLink>
    <div className="pseudo-hover-all">
      <LuxLink href="#">Hover link</LuxLink>
    </div>
    <div className="pseudo-active-all">
      <LuxLink href="#">Active link</LuxLink>
    </div>
    <div className="pseudo-visited-all">
      <LuxLink href="#">Visited link</LuxLink>
    </div>
    <div className="pseudo-focus-all">
      <LuxLink href="#">Focus link</LuxLink>
    </div>
    <div className="pseudo-focus-visible-all">
      <LuxLink href="#">Focus visible link</LuxLink>
    </div>
  </div>
);
