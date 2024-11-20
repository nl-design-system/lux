import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { r as react_default } from "./index-cEa3Pm8r.js";
import { ae as Meta, af as Markdown2, ag as Canvas, ah as Controls3 } from "./index-BOymdV03.js";
import { T as TextboxStories, P as Playground } from "./textbox.stories-BEK_Kr9G.js";
import { C as CitationDocumentation } from "./CitationDocumentation-B3Shsstx.js";
import { m as meta } from "./form-field-textbox.stories-DwWboAR2.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-vKye6HrD.js";
import "./iframe-BkJAT2pG.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./index-CLsfO9S4.js";
import "./index-BLZ711uc.js";
import "./preview-B52J-ax5.js";
import "./form-field-description.stories-Yjw3vAuQ.js";
import "./form-field-error-message.stories-8DiWD9w8.js";
const markdown = "<!-- @license CC0-1.0 -->\n\n# Text box\n\nBiedt de mogelijkheid om één regel aan tekens in te vullen.\n";
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
      of: TextboxStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "textbox",
      children: "Textbox"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Lux Textbox is gebaseerd op Utrecht Textbox. Dit is alleen het input-element, over het algemeen wordt deze binnen het FormField component gebruikt.\nZie ook het ", jsxRuntimeExports.jsx(react_default, {
        kind: meta.title,
        story: "docs",
        children: "FormFieldTextbox"
      }), "-component."]
    }), "\n", jsxRuntimeExports.jsx(CitationDocumentation, {
      component: "Utrecht Textbox",
      url: "https://nl-design-system.github.io/utrecht/storybook-css/index.html?path=/docs/css-textbox--docs"
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
      id: "gebruik",
      children: "Gebruik"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "De Lux Form Field Text Input component kan worden gebruikt voor het invoeren van tekst in formulieren. Het ondersteunt verschillende types en staten."
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-jsx",
        children: `import { LuxTextbox } from '@lux-design-system/components-react';

<LuxTextbox placeholder="Enter your name" />
<LuxTextbox type="email" placeholder="Enter your email" />
<LuxTextbox type="password" placeholder="Enter your password" />
<LuxTextbox type="number" placeholder="Enter a number" />
<LuxTextbox required placeholder="Required field" />
<LuxTextbox dir="rtl" placeholder="RTL input" />
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
