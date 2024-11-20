const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-DXHhUSGJ.js","./index-aC1ZMUrs.js","./_commonjsHelpers-CcAunmGO.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./iframe-D_qrjGFG.js";
import { R as React, r as reactExports } from "./index-aC1ZMUrs.js";
import { r as renderElement, u as unmountElement } from "./react-18-BEw2RJX7.js";
import { aj as CodeOrSourceMdx, ak as AnchorMdx, al as HeadersMdx, am as Docs } from "./index-r1WpqeXB.js";
import "../sb-preview/runtime.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
var defaultComponents = { code: CodeOrSourceMdx, a: AnchorMdx, ...HeadersMdx }, ErrorBoundary = class extends reactExports.Component {
  constructor() {
    super(...arguments);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err) {
    let { showException } = this.props;
    showException(err);
  }
  render() {
    let { hasError } = this.state, { children } = this.props;
    return hasError ? null : React.createElement(React.Fragment, null, children);
  }
}, DocsRenderer = class {
  constructor() {
    this.render = async (context, docsParameter, element) => {
      let components = { ...defaultComponents, ...docsParameter == null ? void 0 : docsParameter.components }, TDocs = Docs;
      return new Promise((resolve, reject) => {
        __vitePreload(async () => {
          const { MDXProvider } = await import("./index-DXHhUSGJ.js");
          return { MDXProvider };
        }, true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url).then(({ MDXProvider }) => renderElement(React.createElement(ErrorBoundary, { showException: reject, key: Math.random() }, React.createElement(MDXProvider, { components }, React.createElement(TDocs, { context, docsParameter }))), element)).then(() => resolve());
      });
    }, this.unmount = (element) => {
      unmountElement(element);
    };
  }
};
export {
  DocsRenderer,
  defaultComponents
};
