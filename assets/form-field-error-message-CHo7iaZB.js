import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2, ag as Canvas, ah as Controls3, ai as DescriptionContainer } from "./index-BIS83Dcj.js";
import { F as FormFieldErrorMessageStories, P as Playground, D as Default, a as Distanced } from "./form-field-error-message.stories-Dxym1wD-.js";
import { C as CitationDocumentation } from "./CitationDocumentation-B3Shsstx.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-DZw5951-.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./index-FCweSokR.js";
import "./index-BLZ711uc.js";
import "./preview-Dn1p4Bmj.js";
const markdown = '<!-- @license CC0-1.0 -->\n\n# Form field error message\n\nGebruik dit component voor foutmeldingen bij formuliervelden die geen valide invoer hebben.\n\nDit component is meestal een onderdeel van het _form field_ component.\n\n## Gebruikte termen\n\n- `form` komt van `<form>` in HTML en `role="form"` in WAI-ARIA.\n- `field` komt van `<fieldset>` in HTML.\n- `error-message` komt van `aria-errormessage`.\n\n## HTML\n\nGebruik een `id` attribuut op dit element, zodat je met `aria-describedby` op de _form control_ met `aria-invalid="true"` een koppeling kunt maken. Support voor `aria-errormessage` is nog onvoldoende, dus gebruik voorlopig nog `aria-describedby`.\n\nGebruik in HTML in plaats van `aria-live="polite"` het attribuut `role="status"`.\n\nGebruik in HTML in plaats van `aria-live="assertive"` het attribuut `role="alert"`.\n\n## Relevante WCAG eisen\n\n- [WCAG eis 1.4.1](https://www.w3.org/TR/WCAG21/#use-of-color): gebruik niet alleen kleur om duidelijk te maken dat het een foutmelding is.\n- [WCAG eis 3.3.1](https://www.w3.org/TR/WCAG21/#error-identification). Gebruik `id` attribuut op de _form field description_ en koppel de _form control_ met `aria-describedby` aan deze `id`. Zie ook: [WCAG Technique: Using `aria-invalid` to Indicate An Error Field](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA21)\n- [WCAG eis 3.3.2](https://www.w3.org/TR/WCAG21/#labels-or-instructions). Zie ook: [WCAG Technique ARIA1: Using the `aria-describedby` property to provide a descriptive label for user interface controls](https://www.w3.org/WAI/WCAG21/)\n- [WCAG eis 3.3.2](https://www.w3.org/TR/WCAG21/#error-suggestion)\n';
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
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
      of: FormFieldErrorMessageStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "lux-form-field-error-message",
      children: "Lux Form Field Error Message"
    }), "\n", jsxRuntimeExports.jsx(CitationDocumentation, {
      component: "Utrecht Form Field Error Message",
      url: "https://nl-design-system.github.io/utrecht/storybook-css/index.html?path=/docs/css-form-field-error-message--docs"
    }), "\n", jsxRuntimeExports.jsx(Markdown2, {
      children: markdown
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "opmerkingen",
      children: "Opmerkingen"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Gebruik dit component voor foutmeldingen bij formuliervelden die geen valide invoer hebben."
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Dit component is meestal een onderdeel van het ", jsxRuntimeExports.jsx(_components.em, {
          children: "form field"
        }), " component."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Gebruik een ", jsxRuntimeExports.jsx(_components.code, {
          children: "id"
        }), " attribuut op dit element, zodat je met ", jsxRuntimeExports.jsx(_components.code, {
          children: "aria-describedby"
        }), " op de ", jsxRuntimeExports.jsx(_components.em, {
          children: "form control"
        }), " met ", jsxRuntimeExports.jsx(_components.code, {
          children: 'aria-invalid="true"'
        }), " een koppeling kunt maken."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Gebruik in HTML in plaats van ", jsxRuntimeExports.jsx(_components.code, {
          children: 'aria-live="polite"'
        }), " het attribuut ", jsxRuntimeExports.jsx(_components.code, {
          children: 'role="status"'
        }), "."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Gebruik in HTML in plaats van ", jsxRuntimeExports.jsx(_components.code, {
          children: 'aria-live="assertive"'
        }), " het attribuut ", jsxRuntimeExports.jsx(_components.code, {
          children: 'role="alert"'
        }), "."]
      }), "\n"]
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
      id: "default-form-field-error-message",
      children: "Default Form Field Error Message"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Default
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Default
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "distanced-error-message",
      children: "Distanced Error Message"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Distanced
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Distanced
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
