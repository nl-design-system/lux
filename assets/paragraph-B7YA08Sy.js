import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2, ag as Canvas, ah as Controls3 } from "./index-C9EDLUz2.js";
import { P as ParagraphStories, a as Playground } from "./paragraph.stories-DxLMg6dE.js";
import { C as CitationDocumentation } from "./CitationDocumentation-B3Shsstx.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-DD9Likps.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-DLlB04eo.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./index-oIKpS5lp.js";
import "./createDesignTokensStory-HiB5Jh-Q.js";
import "./createVisualRegressionStory-Ckg-wQz5.js";
import "./components-Cp22cNJ4.js";
const markdown = "<!-- @license CC0-1.0 -->\n\n# Paragraph\n";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: ParagraphStories
    }), "\n", jsxRuntimeExports.jsx(CitationDocumentation, {
      component: "Utrecht Paragraph",
      url: "https://nl-design-system.github.io/utrecht/storybook-css/index.html?path=/docs/css-paragraph--docs"
    }), "\n", jsxRuntimeExports.jsx(Markdown2, {
      children: markdown
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "wijzigingen-tov-huidig-utrecht-paragraph",
      children: "Wijzigingen t.o.v. Huidig Utrecht Paragraph"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Het attribute ", jsxRuntimeExports.jsx(_components.code, {
        children: "lead"
      }), " en ", jsxRuntimeExports.jsx(_components.code, {
        children: "small"
      }), " is niet geimplementeerd in onze versie van het component.\nHet lijkt erop dat deze ook niet in het ", jsxRuntimeExports.jsx(_components.code, {
        children: "nl-paragraph"
      }), " gaan komen, maar in een los component."]
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
