import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta } from "./index-ChTriOZ2.js";
import { D as DesignTokenOverview, a as DesignTokenBorderPreview } from "./DesignTokenSpacingPreview-yVeFn0oZ.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-qSd8NSvo.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-DLlB04eo.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./createVisualRegressionStory-CMDMpfq0.js";
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Design Tokens/Core/Borders"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "border-design-tokens",
      children: "Border Design Tokens"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "radius",
      children: "Radius"
    }), "\n", jsxRuntimeExports.jsxs(DesignTokenOverview, {
      children: [jsxRuntimeExports.jsxs("table", {
        children: [jsxRuntimeExports.jsx("thead", {
          children: jsxRuntimeExports.jsxs("tr", {
            children: [jsxRuntimeExports.jsx("th", {
              children: "Token"
            }), jsxRuntimeExports.jsx("th", {
              children: "Waarde"
            })]
          })
        }), jsxRuntimeExports.jsxs("tbody", {
          children: [jsxRuntimeExports.jsx(DesignTokenBorderPreview, {
            token: "lux.border-radius.circle"
          }), jsxRuntimeExports.jsx(DesignTokenBorderPreview, {
            token: "lux.border-radius.none"
          })]
        })]
      }), jsxRuntimeExports.jsx(_components.h2, {
        id: "width",
        children: "Width"
      }), jsxRuntimeExports.jsxs("table", {
        children: [jsxRuntimeExports.jsx("thead", {
          children: jsxRuntimeExports.jsxs("tr", {
            children: [jsxRuntimeExports.jsx("th", {
              children: "Token"
            }), jsxRuntimeExports.jsx("th", {
              children: "Waarde"
            })]
          })
        }), jsxRuntimeExports.jsxs("tbody", {
          children: [jsxRuntimeExports.jsx(DesignTokenBorderPreview, {
            token: "lux.border-width.default"
          }), jsxRuntimeExports.jsx(DesignTokenBorderPreview, {
            token: "lux.border-width.m"
          }), jsxRuntimeExports.jsx(DesignTokenBorderPreview, {
            token: "lux.border-width.none"
          })]
        })]
      })]
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