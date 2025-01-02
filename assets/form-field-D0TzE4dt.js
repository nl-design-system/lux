import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { r as react_default } from "./index-cEa3Pm8r.js";
import { af as Markdown2, ae as Meta, ag as Canvas, ah as Controls3, ai as DescriptionContainer } from "./index-vExcF883.js";
import { F as FormFieldStories, P as Playground, a as FormFieldTextbox, b as FormFieldDescription, c as FormFieldError } from "./form-field.stories-CQCI-WRp.js";
import { C as CitationDocumentation } from "./CitationDocumentation-B3Shsstx.js";
import { m as meta } from "./form-field-textbox.stories-38M95Ynl.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-vKye6HrD.js";
import "./iframe-NIvnQ-PN.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./index-CDlQSoJ1.js";
import "./index-BLZ711uc.js";
import "./preview-Cg2ZxX99.js";
import "./form-field-description.stories-C6wfGoF_.js";
import "./form-field-error-message.stories-CGkCxCu5.js";
import "./textbox.stories-r3fMTEu4.js";
const mdAnatomy = '<!-- @license CC0-1.0 -->\n\n# Anatomy\n\nGebruik het _form field_ component om een alle onderdelen van een formulierveld in te verzamelen: het label, de _form control_, eventueel een extra beschrijving of de status en eventueel een validatiemelding of foutmelding.\n\nDe volgende componenten zijn vaak onderdeel van een _form field_:\n\n- _form label_ component\n- _form field description_ component met extra beschrijving\n- _form field description_ component met een validatiemelding\n- een form control component zoals bijvoorbeeld:\n  - _textbox_ component\n  - _textarea_ component\n  - _checkbox_ component\n  - _radio button_ component\n  - _form select_ component\n  - etcetera\n- _form field description_ component met een foutmelding\n- _form field description_ component status van component\n\n## Gebruikte termen\n\n- `form` komt van `<form>` in HTML en `role="form"` in WAI-ARIA.\n- `field` komt van `<fieldset>` in HTML.\n- `invalid` komt van `aria-invalid` in WAI-ARIA.\n- `radio` komt van `<input type="radio">` in HTML.\n- `checkbox` komt van `<input type="checkbox">` in HTML.\n- `label` komt van `<label>` in HTML en `aria-labelledby` in WAI-ARIA.\n- `description` komt van `aria-describedby` in WAI-ARIA.\n';
const mdWcag = "<!-- @license CC0-1.0 -->\n\n# Relevante WCAG regels\n\n- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de tekst van het label moet duidelijk zijn\n- [WCAG eis 3.3.9](https://www.w3.org/TR/WCAG22/#redundant-entry): gebruik niet een formulierveld voor informatie die de gebruiker eerder al heeft ingevuld.\n  - Vraag gebruikers niet twee keer achter elkaar identieke gegevens in te vullen, bijvoorbeeld om typfouten te herkennen en daarmee fouten te voorkomen. Bied liever een mogelijkheid aan om de gegevens te controleren als laatste stap.\n  - Vul bestaande gegevens in als standaardwaarde wanneer je de gegevens al hebt maar je graag zeker wilt weken of de oude gegevens nog juist zijn.\n";
const MarkdownDocumentation = ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Markdown2, { children: children.replace(/^(#+) (.+)/gim, "#$1 $2") });
MarkdownDocumentation.__docgenInfo = { "description": "Renders a <Markdown> component, but with the headings 1 level down", "methods": [], "displayName": "MarkdownDocumentation", "props": { "children": { "required": true, "tsType": { "name": "string" }, "description": "" } } };
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: FormFieldStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "form-field",
      children: "Form Field"
    }), "\n", jsxRuntimeExports.jsx(CitationDocumentation, {
      component: "Utrecht Form Field",
      url: "https://nl-design-system.github.io/utrecht/storybook-css/index.html?path=/docs/css-form-field--docs"
    }), "\n", jsxRuntimeExports.jsx(MarkdownDocumentation, {
      children: mdAnatomy
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "wanneer-gebruik-je-dit-component",
      children: "Wanneer gebruik je dit component?"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Dit component gebruik je als een van de voorgedefinieerde FormField", jsxRuntimeExports.jsx(_components.em, {
        children: "Type"
      }), "'s niet voldoen. Bekijk ook:"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["\n", jsxRuntimeExports.jsx(react_default, {
          kind: meta.title,
          story: "docs",
          children: jsxRuntimeExports.jsx(_components.p, {
            children: "FormFieldTextbox"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "Let op:"
      }), " Op dit moment rendert het de foutmelding onder het input."]
    }), "\n", jsxRuntimeExports.jsx(MarkdownDocumentation, {
      children: mdWcag
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "playground",
      children: "Playground"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Playground
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: Playground
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "varianten",
      children: "Varianten"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "textbox",
      children: "Textbox"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: FormFieldTextbox
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: FormFieldTextbox
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "textbox-met-beschrijving",
      children: "Textbox met beschrijving"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: FormFieldDescription
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: FormFieldDescription
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "textbox-met-foutmelding",
      children: "Textbox met foutmelding"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: FormFieldError
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: FormFieldError
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "gebruik",
      children: "Gebruik"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-jsx",
        children: '<LuxFormField\n  label="Gebruikersnaam"\n  input={<input type="text" />}\n  description="Kies een unieke gebruikersnaam"\n  type="text"\n/>\n\n<LuxFormField\n  label="Accepteer voorwaarden"\n  input={<input type="checkbox" />}\n  type="checkbox"\n/>\n\n<LuxFormField\n  label="E-mailadres"\n  input={<input type="email" />}\n  errorMessage="Voer een geldig e-mailadres in"\n  invalid={true}\n  type="text"\n/>\n'
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
