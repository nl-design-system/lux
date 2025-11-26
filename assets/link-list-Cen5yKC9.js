import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, ag as Canvas, ah as Controls3, ai as DescriptionContainer } from "./index-BX3ByPLz.js";
import { L as LinkListStories, P as Playground, A as Active, F as Focus, H as Hover, V as Visited, a as ListItemWithDifferentIcon } from "./link-list.stories-DMZnuNOw.js";
import { C as CitationDocumentation } from "./CitationDocumentation-B3Shsstx.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-B5T7eFD4.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./index-BJfiFLmy.js";
import "./index-DB79t5Cy.js";
import "./preview-CjWCEDbk.js";
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
      of: LinkListStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "linklist",
      children: "LinkList"
    }), "\n", jsxRuntimeExports.jsx(CitationDocumentation, {
      component: "Utrecht LinkList",
      url: "https://nl-design-system.github.io/utrecht/storybook-css/index.html?path=/docs/css-link-list--docs"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Links met een pijl als voorloopteken worden gebruikt aan het einde van een tekst. Ze verwijzen naar gerelateerde informatie over het onderwerp wat er in de voorafgaande tekst is besproken."
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
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "active",
      children: "Active"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Active
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Active
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "focus",
      children: "Focus"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Focus
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Focus
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "hover",
      children: "Hover"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Hover
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Hover
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "visited",
      children: "Visited"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Visited
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Visited
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "item-with-different-icon",
      children: "Item With Different Icon"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: ListItemWithDifferentIcon
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ListItemWithDifferentIcon
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
