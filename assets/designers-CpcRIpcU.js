import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta } from "./index-SYPe7JDk.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-BqsQ-D9n.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "LUX/Aan de slag/Designers"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "aan-de-slag-als-designer",
      children: "Aan de slag als designer"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "lux-ui-kit",
      children: "LUX UI kit"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.a, {
        href: "https://www.figma.com/design/515tboh6xpSNziwQu6WyAy/LUX---UI-kit?m=auto&node-id=265-14201",
        rel: "nofollow",
        children: "Lees in de LUX Figma omgeving hoe je de UI kit kan gebruiken"
      }), " om in Figma designs te maken met herbruikbare componenten, in de huisstijl van jouw product."]
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsxRuntimeExports.jsx(MDXLayout, {
    ...props,
    children: jsxRuntimeExports.jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
export {
  MDXContent as default
};
