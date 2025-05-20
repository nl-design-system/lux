import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2, ag as Canvas, ah as Controls3 } from "./index-DFlXEd0g.js";
import { T as TextareaStories, P as Playground } from "./textarea.stories-DrS5QyH0.js";
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
const markdown = "<!-- @license CC0-1.0 -->\n\n# Textarea\n\nInvoerveld voor het bewerken van meerdere regels tekst.\n";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    pre: "pre",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: TextareaStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "textarea",
      children: "Textarea"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Lux Textarea is gebaseerd op Utrecht Textarea."
    }), "\n", jsxRuntimeExports.jsx(CitationDocumentation, {
      component: "Utrecht Textarea",
      url: "https://nl-design-system.github.io/utrecht/storybook-css/index.html?path=/docs/css-textarea--docs"
    }), "\n", jsxRuntimeExports.jsx(Markdown2, {
      children: markdown
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "playground",
      children: "Playground"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Playground
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: Playground
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "gebruik",
      children: "Gebruik"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "De Lux Textarea component kan worden gebruikt voor het invoeren van meerdere regels tekst in formulieren. Het ondersteunt verschillende types en staten."
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-jsx",
        children: `import { LuxTextArea } from '@lux-design-system/components-react';

<LuxTextArea placeholder="Typ hier iets..." />
<LuxTextArea placeholder="Verplicht veld..." required />
<LuxTextArea placeholder="Rechts-naar-links tekst" dir="rtl" />
<LuxTextArea placeholder="Er is iets mis, probeer het opnieuw..." invalid />
<LuxTextArea placeholder="Alleen-lezen veld" readOnly value="Dit is een alleen-lezen tekst" />
<LuxTextArea placeholder="Dit veld is uitgeschakeld" disabled />
<LuxTextArea placeholder="Spellingscheck is uitgeschakeld" spellCheck={false} />
<LuxTextArea placeholder="Dit veld krijgt automatisch focus" autoFocus />
<LuxTextArea placeholder="Maximaal 100 tekens" maxLength={100} />
<LuxTextArea placeholder="Aantal rijen" rows={8} />
`
      })
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
