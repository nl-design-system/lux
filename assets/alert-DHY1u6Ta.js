import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2, ag as Canvas, ah as Controls3, ai as DescriptionContainer } from "./index-BX3ByPLz.js";
import { m as markdown } from "./README-i1AxuvIj.js";
import { A as AlertStories, P as Playground, I as Info, O as Ok, W as Warning, E as Error, a as AriaRole } from "./alert.stories-ChQzZMwA.js";
import { C as CitationDocumentation } from "./CitationDocumentation-B3Shsstx.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-B5T7eFD4.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./index-DB79t5Cy.js";
import "./components-Cp22cNJ4.js";
import "./createDesignTokensStory-HiB5Jh-Q.js";
import "./createVisualRegressionStory-Ckg-wQz5.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: AlertStories
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
      id: "variants-type",
      children: "Variants (type)"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "info",
      children: "Info"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Info
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Info
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "ok--confirm",
      children: "OK / Confirm"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Ok
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Ok
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "warning",
      children: "Warning"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Warning
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Warning
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "error",
      children: "Error"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Error
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Error
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "inhoud",
      children: "Inhoud"
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "aria-rolealert",
      children: ["Aria ", jsxRuntimeExports.jsx(_components.code, {
        children: "role=alert"
      })]
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: AriaRole
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: AriaRole,
      sourceState: "shown"
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
