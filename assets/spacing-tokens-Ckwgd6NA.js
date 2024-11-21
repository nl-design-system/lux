import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta } from "./index-BlhnSYds.js";
import { D as DesignTokenOverview, e as DesignTokenSpacingPreview } from "./DesignTokenSpacingPreview-BcGKECY1.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-C5n1PiIs.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./createVisualRegressionStory-Ckg-wQz5.js";
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Design Tokens/Core/Spacing"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "spacing-design-tokens",
      children: "Spacing Design Tokens"
    }), "\n", jsxRuntimeExports.jsx(DesignTokenOverview, {
      children: jsxRuntimeExports.jsxs("table", {
        children: [jsxRuntimeExports.jsx("thead", {
          children: jsxRuntimeExports.jsxs("tr", {
            children: [jsxRuntimeExports.jsx("th", {
              children: "Token"
            }), jsxRuntimeExports.jsx("th", {
              children: "Waarde"
            })]
          })
        }), jsxRuntimeExports.jsxs("tbody", {
          children: [jsxRuntimeExports.jsx(DesignTokenSpacingPreview, {
            token: "lux.space.0"
          }), jsxRuntimeExports.jsx(DesignTokenSpacingPreview, {
            token: "lux.space.25"
          }), jsxRuntimeExports.jsx(DesignTokenSpacingPreview, {
            token: "lux.space.50"
          }), jsxRuntimeExports.jsx(DesignTokenSpacingPreview, {
            token: "lux.space.100"
          }), jsxRuntimeExports.jsx(DesignTokenSpacingPreview, {
            token: "lux.space.150"
          }), jsxRuntimeExports.jsx(DesignTokenSpacingPreview, {
            token: "lux.space.200"
          }), jsxRuntimeExports.jsx(DesignTokenSpacingPreview, {
            token: "lux.space.300"
          }), jsxRuntimeExports.jsx(DesignTokenSpacingPreview, {
            token: "lux.space.400"
          }), jsxRuntimeExports.jsx(DesignTokenSpacingPreview, {
            token: "lux.space.500"
          }), jsxRuntimeExports.jsx(DesignTokenSpacingPreview, {
            token: "lux.space.600"
          }), jsxRuntimeExports.jsx(DesignTokenSpacingPreview, {
            token: "lux.space.700"
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
