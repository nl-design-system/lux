import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2, ag as Canvas, ah as Controls3 } from "./index-ByU3F8Vz.js";
import { S as SelectStories, P as Playground, D as Disabled, I as Invalid, F as Focus, a as FocusVisible, H as Hover } from "./select.stories-QDUWFnYl.js";
import { C as CitationDocumentation } from "./CitationDocumentation-B3Shsstx.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-SBh25ahh.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./index-DzCBCR8w.js";
import "./index-C9QTpdn_.js";
import "./preview-CQs3FpNo.js";
const markdown = "<!-- @license CC0-1.0 -->\n\n# Form Select component\n\n## Terminology\n\n- **select**: like the `<select>` element in HTML.\n\n## Class names\n\n- `.utrecht-select`\n- `.utrecht-select--disabled`\n- `.utrecht-select--focus`\n- `.utrecht-select--html-input`\n- `.utrecht-select--invalid`\n- `.utrecht-select--read-only`\n- `.utrecht-select--required`\n";
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: SelectStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "select",
      children: "Select"
    }), "\n", jsxRuntimeExports.jsx(CitationDocumentation, {
      component: "Utrecht Select",
      url: "https://nl-design-system.github.io/utrecht/storybook-css/index.html?path=/docs/css-heading--docs"
    }), "\n", jsxRuntimeExports.jsx(Markdown2, {
      children: markdown
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "playground",
      children: "Playground"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Playground
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: Playground
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "variants",
      children: "Variants"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Disabled
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Invalid
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Focus
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: FocusVisible
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Hover
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
