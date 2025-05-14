import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta } from "./index-CfYIPNzr.js";
import { D as DesignTokenOverview, b as DesignTokenColorPreview, a as DesignTokenBorderPreview } from "./DesignTokenSpacingPreview-BcGKECY1.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-DK0YFUcp.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./createVisualRegressionStory-Ckg-wQz5.js";
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Design Tokens/Common/Focus"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "focus-design-tokens",
      children: "Focus Design Tokens"
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
            }), jsxRuntimeExports.jsx("th", {
              children: "Set (Figma)"
            })]
          })
        }), jsxRuntimeExports.jsxs("tbody", {
          children: [jsxRuntimeExports.jsx(DesignTokenColorPreview, {
            token: "lux.color.focus.outline",
            reference: "lux.color.border.strong",
            set: "mode"
          }), jsxRuntimeExports.jsx(DesignTokenBorderPreview, {
            token: "lux.focus.outline-width",
            group: "outline",
            value: "2px",
            set: "product"
          }), jsxRuntimeExports.jsx(DesignTokenBorderPreview, {
            token: "lux.focus.outline-offset",
            group: "outline",
            value: "lux.space.25",
            set: "product"
          })]
        })]
      }), jsxRuntimeExports.jsx(_components.h2, {
        id: "figma-tokens",
        children: "Figma tokens"
      }), jsxRuntimeExports.jsx(_components.p, {
        children: "Deze tokens zijn specifiek voor Figma, deze komen niet terug in de code."
      }), jsxRuntimeExports.jsxs("table", {
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
        }), jsxRuntimeExports.jsx("tbody", {
          children: jsxRuntimeExports.jsx(DesignTokenBorderPreview, {
            token: "figma.focus.outline-radius",
            group: "outline",
            value: "6px",
            set: "product"
          })
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
