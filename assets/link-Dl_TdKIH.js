import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2, ag as Canvas, ah as Controls3, ai as DescriptionContainer } from "./index-BGKOBH5L.js";
import { m as markdown } from "./README-CSNxhwJ5.js";
import { L as LinkStories, P as Playground, A as Active, H as Hover, F as Focus, D as Download, T as Target, I as Icon, a as InText } from "./link.stories-Uv74VEeB.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-D-8kvnYm.js";
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
    h2: "h2",
    h3: "h3",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: LinkStories
    }), "\n", jsxRuntimeExports.jsxs("p", {
      className: "lsb-citation",
      children: [`Documentatie afkomstig van `, jsxRuntimeExports.jsx("cite", {
        children: jsxRuntimeExports.jsx("a", {
          href: "https://nl-design-system.github.io/utrecht/storybook-css/index.html?path=/docs/css-link--docs",
          children: "Utrecht Link"
        })
      }), `.`]
    }), "\n", jsxRuntimeExports.jsx(Markdown2, {
      children: markdown
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "playground",
      children: "Playground"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Playground
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: Playground
    }), "\n", "\n", jsxRuntimeExports.jsx("h2", {
      id: "states_examples",
      children: "States"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "active",
      children: "Active"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Active
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Active,
      sourceState: "none"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "hover",
      children: "Hover"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Hover
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Hover,
      sourceState: "none"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "focus",
      children: "Focus"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Focus
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Focus,
      sourceState: "none"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "attributes",
      children: "Attributes"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "download",
      children: "Download"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Download
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Download,
      sourceState: "hidden"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "target",
      children: "Target"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Target
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Target,
      sourceState: "hidden"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "gebruik",
      children: "Gebruik"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "icon",
      children: "Icon"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Icon
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Icon,
      sourceState: "hidden"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "in-tekst",
      children: "In Tekst"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: InText
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: InText,
      sourceState: "none"
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
