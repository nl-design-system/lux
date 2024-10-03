import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta } from "./index-ChTriOZ2.js";
import { D as DesignTokenOverview, d as DesignTokenSizingPreview } from "./DesignTokenSpacingPreview-yVeFn0oZ.js";
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
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Design Tokens/Common/Afmetingen"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "sizing-design-tokens",
      children: "Sizing Design Tokens"
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
          children: [jsxRuntimeExports.jsx(DesignTokenSizingPreview, {
            token: "lux.size.target",
            value: "3rem",
            set: "product"
          }), jsxRuntimeExports.jsx(DesignTokenSizingPreview, {
            token: "lux.size.icon",
            value: "1rem",
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
        }), jsxRuntimeExports.jsxs("tbody", {
          children: [jsxRuntimeExports.jsx(DesignTokenSizingPreview, {
            token: "figma.size.icon.wrapper-height",
            value: "figma.viewport.size.icon.wrapper-height",
            set: "common"
          }), jsxRuntimeExports.jsx(DesignTokenSizingPreview, {
            token: "figma.viewport.size.icon.wrapper-height",
            value: "1.75rem",
            set: "viewport"
          }), jsxRuntimeExports.jsx(DesignTokenSizingPreview, {
            token: "figma.screen-size",
            value: "90rem",
            set: "viewport"
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
