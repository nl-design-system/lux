import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, ag as Canvas, ah as Controls3, ai as DescriptionContainer } from "./index-DBiJJaHA.js";
import { P as ParagraphStories, a as Playground, L as Lead, S as Small } from "./paragraph.stories-CC0LfBU5.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-B2qDwUMB.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./index-DzCBCR8w.js";
import "./index-BLZ711uc.js";
import "./preview-CEiTtpTH.js";
import "./createDesignTokensStory-HiB5Jh-Q.js";
import "./createVisualRegressionStory-Ckg-wQz5.js";
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: ParagraphStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "paragraph",
      children: "Paragraph"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Toont een alinea aan tekst."
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "playground",
      children: "Playground"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Playground
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: Playground
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "variants-appearance",
      children: "Variants (appearance)"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "lead",
      children: "Lead"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Lead
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Lead
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "small",
      children: "Small"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Small
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Small
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
