import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2, ag as Canvas, ah as Controls3 } from "./index-DlASthxs.js";
import { H as HeadingGroupStories, P as Playground } from "./heading-group.stories-BfylTFgV.js";
import { C as CitationDocumentation } from "./CitationDocumentation-B3Shsstx.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-CUScpp-3.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./index-DzCBCR8w.js";
import "./index-BLZ711uc.js";
import "./preview-CPpl9nLY.js";
import "./createVisualRegressionStory-Ckg-wQz5.js";
const markdown = "<!-- @license CC0-1.0 -->\n\n# Heading group\n\nDe heading group bevat twee onderdelen:\n\n1. een heading component\n2. een pre-heading component of een paragraph component\n\n## Relevante WCAG eisen\n\n- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): gebuik het `<hgroup>` HTML-element, met daarin een `<h1>`-`<h6>` en daarna een `<p>` element.\n- [WCAG eis 1.3.2](https://www.w3.org/TR/WCAG21/#meaningful-sequence): plaats HTML van heading vóór de HTML van de pre-heading, de volgorde kan daarna met CSS aangepast worden.\n";
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: HeadingGroupStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "heading-group",
      children: "Heading-Group"
    }), "\n", jsxRuntimeExports.jsx(CitationDocumentation, {
      component: "Utrecht Heading-Group",
      url: "https://nl-design-system.github.io/utrecht/storybook-css/index.html?path=/docs/css-pre-heading--docs"
    }), "\n", jsxRuntimeExports.jsx(Markdown2, {
      children: markdown
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "playground",
      children: "Playground"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Playground
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: Playground
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
