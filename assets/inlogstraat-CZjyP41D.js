import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2 } from "./index-0ELbgbwn.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-Bw4HLrIN.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
const markdown = '# Inlogstraat\n\n<iframe\n  allow="fullscreen"\n  height="700"\n  width="100%"\n  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fo3Zx3k2kiCUgeOIyEwNkYg%2FStijlhandleiding-aansluiten-Toegang%3Fpage-id%3D2%253A12%26node-id%3D2259-5584%26scaling%3Dscale-down-width%26starting-point-node-id%3D2259%253A5584%26mode%3Ddesign%26t%3DtDOmFrmbT1MhxhrZ-1"\n  style="border: solid 1px rgba(0, 0, 0, 0.1);"\n></iframe>\n';
function _createMdxContent(props) {
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Web Components/Login Link/Interactieve stijlgids"
    }), "\n", jsxRuntimeExports.jsx(Markdown2, {
      children: markdown
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
  }) : _createMdxContent();
}
export {
  MDXContent as default
};
