import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2, ag as Canvas, ah as Controls3 } from "./index-DFlXEd0g.js";
import { m as markdown } from "./README-i1AxuvIj.js";
import { A as AlertStories, P as Playground, I as InfoAlert, S as SuccessAlert, W as WarningAlert, E as ErrorAlert } from "./alert.stories-B2J6ehFC.js";
import { C as CitationDocumentation } from "./CitationDocumentation-B3Shsstx.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-B7TQ1rTm.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./index-B0rW5TGL.js";
import "./index-DdOurD3B.js";
import "./preview-Dnis8LZl.js";
import "./createVisualRegressionStory-Ckg-wQz5.js";
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: AlertStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "alert",
      children: "Alert"
    }), "\n", jsxRuntimeExports.jsx(CitationDocumentation, {
      component: "Utrecht Alert",
      url: "https://nl-design-system.github.io/utrecht/storybook-css/index.html?path=/docs/css-alert--docs"
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
      of: InfoAlert
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: SuccessAlert
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: WarningAlert
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ErrorAlert
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
