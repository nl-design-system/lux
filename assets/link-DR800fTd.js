import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2, ag as Canvas, ah as Controls3 } from "./index-DUOfkPG3.js";
import { m as markdown } from "./README-CSNxhwJ5.js";
import { L as LinkStories, P as Playground, E as External, H as Hover, A as Active, F as Focus, a as LinkWithIcon, b as LinkWithIconStart, c as LinkWithIconEnd } from "./link.stories-CJx-FoBb.js";
import { C as CitationDocumentation } from "./CitationDocumentation-B3Shsstx.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-5xFXpkQa.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./index-DzCBCR8w.js";
import "./index-B7uU0MWU.js";
import "./preview-xu8AB9Hz.js";
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
      of: LinkStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "link",
      children: "Link"
    }), "\n", jsxRuntimeExports.jsx(CitationDocumentation, {
      component: "Utrecht Link",
      url: "https://nl-design-system.github.io/utrecht/storybook-css/index.html?path=/docs/css-link--docs"
    }), "\n", jsxRuntimeExports.jsx(Markdown2, {
      children: markdown
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "playground",
      children: "Playground"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Experimenteer met de verschillende mogelijkheden van de Link component:"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Playground
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: Playground
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "variants",
      children: "Variants"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "standaard-link",
      children: "Standaard Link"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Een basis link zonder extra toevoegingen."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Playground
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "external-link",
      children: "External Link"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Een externe link opent in een nieuw tabblad en heeft de juiste security attributes."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: External
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "states",
      children: "States"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Links kunnen verschillende states hebben voor interactie:"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "hover",
      children: "Hover"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Hover
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "active",
      children: "Active"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Active
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "focus",
      children: "Focus"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Focus
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "link-met-icoon",
      children: "Link met Icoon"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Links kunnen worden verrijkt met een icoon voor extra visuele context."
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "default-positie",
      children: "Default Positie"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: LinkWithIcon
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "icoon-aan-het-begin",
      children: "Icoon aan het Begin"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: LinkWithIconStart
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "icoon-aan-het-einde",
      children: "Icoon aan het Einde"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: LinkWithIconEnd
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
