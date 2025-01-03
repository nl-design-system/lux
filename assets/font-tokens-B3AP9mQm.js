import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta } from "./index-DBiJJaHA.js";
import { D as DesignTokenOverview, c as DesignTokenFontPreview } from "./DesignTokenSpacingPreview-BcGKECY1.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-B2qDwUMB.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./createVisualRegressionStory-Ckg-wQz5.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Design Tokens/Common/Typografie"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "font-design-tokens",
      children: "Font Design Tokens"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "font-family",
      children: "Font Family"
    }), "\n", jsxRuntimeExports.jsxs(DesignTokenOverview, {
      children: [jsxRuntimeExports.jsxs("table", {
        children: [jsxRuntimeExports.jsx("thead", {
          children: jsxRuntimeExports.jsxs("tr", {
            children: [jsxRuntimeExports.jsx("th", {
              children: "Token"
            }), jsxRuntimeExports.jsx("th", {
              children: "Referentie"
            }), jsxRuntimeExports.jsx("th", {
              children: "Set (Figma)"
            })]
          })
        }), jsxRuntimeExports.jsx("tbody", {
          children: jsxRuntimeExports.jsx(DesignTokenFontPreview, {
            token: "lux.font-family.primary",
            reference: "ro.font-family.primary",
            set: "product"
          })
        })]
      }), jsxRuntimeExports.jsx(_components.h2, {
        id: "font-size",
        children: "Font Size"
      }), jsxRuntimeExports.jsxs("table", {
        children: [jsxRuntimeExports.jsx("thead", {
          children: jsxRuntimeExports.jsxs("tr", {
            children: [jsxRuntimeExports.jsx("th", {
              children: "Token"
            }), jsxRuntimeExports.jsx("th", {
              children: "Referentie"
            }), jsxRuntimeExports.jsx("th", {
              children: "Set (Figma)"
            })]
          })
        }), jsxRuntimeExports.jsxs("tbody", {
          children: [jsxRuntimeExports.jsx(DesignTokenFontPreview, {
            token: "lux.font-size.heading.level-1",
            reference: "viewport.font-size.heading.level-1",
            set: "product"
          }), jsxRuntimeExports.jsx(DesignTokenFontPreview, {
            token: "lux.font-size.heading.level-2",
            reference: "viewport.font-size.heading.level-2",
            set: "product"
          }), jsxRuntimeExports.jsx(DesignTokenFontPreview, {
            token: "lux.font-size.heading.level-3",
            reference: "viewport.font-size.heading.level-3",
            set: "product"
          }), jsxRuntimeExports.jsx(DesignTokenFontPreview, {
            token: "lux.font-size.heading.level-4",
            reference: "viewport.font-size.heading.level-4",
            set: "product"
          }), jsxRuntimeExports.jsx(DesignTokenFontPreview, {
            token: "lux.font-size.body.large",
            reference: "viewport.font-size.body.large",
            set: "product"
          }), jsxRuntimeExports.jsx(DesignTokenFontPreview, {
            token: "lux.font-size.body.default",
            reference: "viewport.font-size.body.default",
            set: "product"
          }), jsxRuntimeExports.jsx(DesignTokenFontPreview, {
            token: "lux.font-size.body.small",
            reference: "viewport.font-size.body.small",
            set: "product"
          })]
        })]
      }), jsxRuntimeExports.jsx(_components.h2, {
        id: "line-height",
        children: "Line Height"
      }), jsxRuntimeExports.jsxs("table", {
        children: [jsxRuntimeExports.jsx("thead", {
          children: jsxRuntimeExports.jsxs("tr", {
            children: [jsxRuntimeExports.jsx("th", {
              children: "Token"
            }), jsxRuntimeExports.jsx("th", {
              children: "Referentie"
            }), jsxRuntimeExports.jsx("th", {
              children: "Set (Figma)"
            })]
          })
        }), jsxRuntimeExports.jsxs("tbody", {
          children: [jsxRuntimeExports.jsx(DesignTokenFontPreview, {
            token: "lux.line-height.heading.level-1",
            reference: "viewport.line-height.heading.level-1",
            set: "product"
          }), jsxRuntimeExports.jsx(DesignTokenFontPreview, {
            token: "lux.line-height.heading.level-2",
            reference: "viewport.line-height.heading.level-2",
            set: "product"
          }), jsxRuntimeExports.jsx(DesignTokenFontPreview, {
            token: "lux.line-height.heading.level-3",
            reference: "viewport.line-height.heading.level-3",
            set: "product"
          }), jsxRuntimeExports.jsx(DesignTokenFontPreview, {
            token: "lux.line-height.heading.level-4",
            reference: "viewport.line-height.heading.level-4",
            set: "product"
          }), jsxRuntimeExports.jsx(DesignTokenFontPreview, {
            token: "lux.line-height.body.large",
            reference: "viewport.line-height.body.large",
            set: "product"
          }), jsxRuntimeExports.jsx(DesignTokenFontPreview, {
            token: "lux.line-height.body.default",
            reference: "viewport.line-height.body.default",
            set: "product"
          }), jsxRuntimeExports.jsx(DesignTokenFontPreview, {
            token: "lux.line-height.body.small",
            reference: "viewport.line-height.body.small",
            set: "product"
          })]
        })]
      }), jsxRuntimeExports.jsx(_components.h2, {
        id: "viewport-tokens",
        children: "Viewport Tokens"
      }), jsxRuntimeExports.jsxs(_components.p, {
        children: ["Deze tokens kun je niet selecteren in Figma. Hiermee passen we de ", jsxRuntimeExports.jsx(_components.code, {
          children: "font-size"
        }), " aan op viewport xs voor Logius thema."]
      }), jsxRuntimeExports.jsxs("table", {
        children: [jsxRuntimeExports.jsx("thead", {
          children: jsxRuntimeExports.jsxs("tr", {
            children: [jsxRuntimeExports.jsx("th", {
              children: "Token"
            }), jsxRuntimeExports.jsx("th", {
              children: "Referentie"
            }), jsxRuntimeExports.jsx("th", {
              children: "Set (Figma)"
            })]
          })
        }), jsxRuntimeExports.jsxs("tbody", {
          children: [jsxRuntimeExports.jsx(DesignTokenFontPreview, {
            token: "viewport.font-size.heading.level-1",
            reference: "lux.font-size.large-scale.xl",
            set: "viewport"
          }), jsxRuntimeExports.jsx(DesignTokenFontPreview, {
            token: "viewport.font-size.heading.level-2",
            reference: "lux.font-size.large-scale.lg",
            set: "viewport"
          }), jsxRuntimeExports.jsx(DesignTokenFontPreview, {
            token: "viewport.font-size.heading.level-3",
            reference: "lux.font-size.large-scale.md",
            set: "viewport"
          }), jsxRuntimeExports.jsx(DesignTokenFontPreview, {
            token: "viewport.font-size.heading.level-4",
            reference: "lux.font-size.large-scale.sm",
            set: "viewport"
          }), jsxRuntimeExports.jsx(DesignTokenFontPreview, {
            token: "viewport.font-size.body.large",
            reference: "lux.font-size.large-scale.md",
            set: "viewport"
          }), jsxRuntimeExports.jsx(DesignTokenFontPreview, {
            token: "viewport.font-size.body.default",
            reference: "lux.font-size.large-scale.sm",
            set: "viewport"
          }), jsxRuntimeExports.jsx(DesignTokenFontPreview, {
            token: "viewport.font-size.body.small",
            reference: "lux.font-size.large-scale.xs",
            set: "viewport"
          }), jsxRuntimeExports.jsx(DesignTokenFontPreview, {
            token: "viewport.line-height.heading.level-1",
            reference: "lux.line-height.large-scale.xl",
            set: "viewport"
          }), jsxRuntimeExports.jsx(DesignTokenFontPreview, {
            token: "viewport.line-height.heading.level-2",
            reference: "lux.line-height.large-scale.lg",
            set: "viewport"
          }), jsxRuntimeExports.jsx(DesignTokenFontPreview, {
            token: "viewport.line-height.heading.level-3",
            reference: "lux.line-height.large-scale.md",
            set: "viewport"
          }), jsxRuntimeExports.jsx(DesignTokenFontPreview, {
            token: "viewport.line-height.heading.level-4",
            reference: "lux.line-height.large-scale.sm",
            set: "viewport"
          }), jsxRuntimeExports.jsx(DesignTokenFontPreview, {
            token: "viewport.line-height.body.large",
            reference: "lux.line-height.large-scale.md",
            set: "viewport"
          }), jsxRuntimeExports.jsx(DesignTokenFontPreview, {
            token: "viewport.line-height.body.default",
            reference: "lux.line-height.large-scale.sm",
            set: "viewport"
          }), jsxRuntimeExports.jsx(DesignTokenFontPreview, {
            token: "viewport.line-height.body.small",
            reference: "lux.line-height.large-scale.xs",
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
