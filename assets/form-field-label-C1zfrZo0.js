import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2, ag as Canvas, ah as Controls3, ai as DescriptionContainer } from "./index-DjOCnJ5z.js";
import { F as FormFieldLabelStories, P as Playground, D as Default, C as CheckboxLabel, R as RadioLabel, a as DisabledLabel, b as CheckedLabel } from "./form-field-label.stories-C85NKRJ0.js";
import { C as CitationDocumentation } from "./CitationDocumentation-B3Shsstx.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-D8Bsb5lD.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./index-25q23o6t.js";
import "./index-BLZ711uc.js";
import "./preview-B1dH9ukS.js";
const markdown = "<!-- @license CC0-1.0 -->\n\n# Form label\n\n## Design\n\nHet label moet aanklikbaar zijn om de _form input_ te activeren. Gebruik `display: inline` voor het label, zodat de tekst aanklikbaar is. Je wilt dat de witruimte naast de tekst niet aanklikbaar is, omdat niet duidelijk is welke actie hoort bij de witruimte.\n\nAls je het label wilt gebruiken als onderdeel van `display: grid` of `display: flex`, gebruik dan een extra _`<div>` wrapper element_ om het label heen, om te voorkomen dat de label heel groot wordt.\n\n## Terminologie\n\n- **label**: net als `<label>` in HTML\n\n## Class names\n\n- `utrecht-form-label`\n\n## Design tokens\n\n- Form label\n  - `utrecht-form-label-font-weight`\n  - `utrecht-form-label-font-size`\n\n## Relevante WCAG regels\n\n- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de tekst van het label moet duidelijk zijn\n";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: FormFieldLabelStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "lux-form-field-label",
      children: "Lux Form Field Label"
    }), "\n", jsxRuntimeExports.jsx(CitationDocumentation, {
      component: "Utrecht Form Label",
      url: "https://nl-design-system.github.io/utrecht/storybook-css/index.html?path=/docs/css-form-label--docs"
    }), "\n", jsxRuntimeExports.jsx(Markdown2, {
      children: markdown
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "opmerkingen",
      children: "Opmerkingen"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["De property ", jsxRuntimeExports.jsx(_components.code, {
          children: "type"
        }), " kan de waarden ", jsxRuntimeExports.jsx(_components.code, {
          children: "checkbox"
        }), " of ", jsxRuntimeExports.jsx(_components.code, {
          children: "radio"
        }), " krijgen om specifieke stijlen toe te passen."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["De properties ", jsxRuntimeExports.jsx(_components.code, {
          children: "disabled"
        }), " en ", jsxRuntimeExports.jsx(_components.code, {
          children: "checked"
        }), " zijn toegevoegd om de status van het gekoppelde formulierelement weer te geven."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["De classnames ", jsxRuntimeExports.jsx(_components.code, {
          children: "lux-form-label--${type}"
        }), ", ", jsxRuntimeExports.jsx(_components.code, {
          children: "lux-form-label--disabled"
        }), ", en ", jsxRuntimeExports.jsx(_components.code, {
          children: "lux-form-label--checked"
        }), " worden automatisch toegepast op basis van de properties."]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "playground",
      children: "Playground"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Playground
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: Playground
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "form-field-label-varianten",
      children: "Form Field Label varianten"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "default-form-label",
      children: "Default Form Label"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Default
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Default
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "checkbox-label",
      children: "Checkbox Label"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: CheckboxLabel
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: CheckboxLabel
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "radio-label",
      children: "Radio Label"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: RadioLabel
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: RadioLabel
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "uitgeschakeld-label",
      children: "Uitgeschakeld Label"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: DisabledLabel
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: DisabledLabel
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "aangevinkt-label",
      children: "Aangevinkt Label"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: CheckedLabel
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: CheckedLabel
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
