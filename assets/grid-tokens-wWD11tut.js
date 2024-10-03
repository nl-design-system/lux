import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta } from "./index-BXWjUseB.js";
import { D as DesignTokenOverview, d as DesignTokenSizingPreview } from "./DesignTokenSpacingPreview-yVeFn0oZ.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-BJglMeU9.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-DLlB04eo.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./createVisualRegressionStory-CMDMpfq0.js";
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Design Tokens/Common/Grid"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "grid-design-tokens",
      children: "Grid Design Tokens"
    }), "\n", jsxRuntimeExports.jsx(DesignTokenOverview, {
      children: jsxRuntimeExports.jsxs("table", {
        children: [jsxRuntimeExports.jsx("thead", {
          children: jsxRuntimeExports.jsxs("tr", {
            children: [jsxRuntimeExports.jsx("th", {
              children: "Token"
            }), jsxRuntimeExports.jsx("th", {
              children: "Waarde"
            }), jsxRuntimeExports.jsx("th", {
              children: "Set (Figma)"
            })]
          })
        }), jsxRuntimeExports.jsxs("tbody", {
          children: [jsxRuntimeExports.jsx(DesignTokenSizingPreview, {
            token: "lux.grid.max-inline",
            value: "77.5rem",
            set: "common"
          }), jsxRuntimeExports.jsx(DesignTokenSizingPreview, {
            token: "lux.grid.gutter",
            value: "2rem",
            set: "product"
          }), jsxRuntimeExports.jsx(DesignTokenSizingPreview, {
            token: "lux.grid.margin",
            value: "2.5rem",
            set: "product"
          })]
        })]
      })
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
