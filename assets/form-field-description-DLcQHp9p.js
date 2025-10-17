import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2, ag as Canvas, ah as Controls3, ai as DescriptionContainer } from "./index-C8muavV0.js";
import { F as FormFieldDescriptionStories, P as Playground, D as Default, V as Valid, I as Invalid, C as CustomAppearance, L as LongDescription } from "./form-field-description.stories-H07jYroP.js";
import { C as CitationDocumentation } from "./CitationDocumentation-B3Shsstx.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-9blm6m3u.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./index-BJfiFLmy.js";
import "./index-DB79t5Cy.js";
import "./preview-c-NMwvN3.js";
import "./createDesignTokensStory-HiB5Jh-Q.js";
import "./createVisualRegressionStory-Ckg-wQz5.js";
const markdown = '<!-- @license CC0-1.0 -->\n\n# Form field description\n\nGebruik dit component voor extra beschrijvingen en instructies bij formuliervelden. Gebruik variaties van dit component voor meldingen dat er iets mis is met de invoer (`invalid`), dat er iets fout ging met het behandelen van de invoer (`error`), feedback over de status van de invoer, of feedback dat de invoer OK is.\n\nDit component is meestal een onderdeel van het _form field_ component.\n\n## Feedback van een formulier\n\nFormulieren geven meerdere soorten feedback, die kun je allemaal weergeven met de _form field description_ component:\n\n- Informatie over de status van de invoer.\n- Resultaat van validatie: niet valide.\n- Resultaat van validatie: invoer voldoet aan de eisen.\n- Foutmelding bij een actie uitvoeren.\n- Resultaat van _submit_: verzenden gelukt.\n- Resultaat van _submit_: verzenden niet gelukt, want invoer voldoet niet aan de eisen.\n- Resultaat van _submit_: verzenden niet gelukt, want er is een fout bij de server.\n- Resultaat van een berekening.\n\nFeedback van een formulier moet duidelijk zijn voor gebruikers die hulpmiddelen gebruiken, zoals een _screen reader_. Kies bij alle feedback welke soort _live region_ gebruikt moet worden: _polite_ of _assertive_, beleefd of dringend.\n\nLet op: in de meeste sitaties moet je geen `role="status"` en `role="alert"` gebruiken in server-side templates. Het is niet handig als meerdere teksten direct worden voorgelezen door een _screen reader_ zodra de pagina geladen is.\n\n### Beleefd / _polite_\n\nGebruik _polite_ voor feedback over acties van de gebruiker. Dat kan in HTML met het attribuut `role="status"`, dat hoeft niet met `aria-live="polite"`. Zie ook: [Using role=status to present status messages](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA22). Bijvoorbeeld:\n\n- informatie over hoeveel meer tekens nog gebruikt mogen worden voordat de limiet is bereikt.\n- informatie over hoeveel zoekresultaten een combobox heeft.\n\n### Dringend / _assertive_\n\nGebruik `role="alert"` voor fouten die optreden door een actie van de gebruiker, bijvoorbeeld:\n\n- Wanneer een formulierveld niet juist is ingevuld.\n- Wanneer een formulier niet verzonden kan worden, omdat geen verbinding met de server gemaakt kan worden.\n\n## Gebruikte termen\n\n- `form` komt van `<form>` in HTML en `role="form"` in WAI-ARIA.\n- `field` komt van `<fieldset>` in HTML.\n- `description` komt van `aria-describedby`.\n- `invalid` komt van `:invalid` in CSS en `aria-invalid` in WAI-ARIA.\n- `valid` from `:valid` in CSS.\n\n## HTML\n\nGebruik een `id` attribuut op dit element, zodat je met `aria-describedby` op de _form control_ een koppeling kunt maken.\n\nGebruik in HTML in plaats van `aria-live="polite"` het attribuut `role="status"`.\n\nGebruik in HTML in plaats van `aria-live="assertive"` het attribuut `role="alert"`.\n\n## Relevante WCAG eisen\n\n- [WCAG eis 3.3.1](https://www.w3.org/TR/WCAG21/#error-identification). Gebruik `id` attribuut op de _form field description_ en koppel de _form control_ met `aria-describedby` aan deze `id`. Zie ook: [WCAG Technique: Using `aria-invalid` to Indicate An Error Field](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA21)\n- [WCAG eis 3.3.2](https://www.w3.org/TR/WCAG21/#labels-or-instructions). Zie ook: [WCAG Technique ARIA1: Using the `aria-describedby` property to provide a descriptive label for user interface controls](https://www.w3.org/WAI/WCAG21/)\n- [WCAG eis 3.3.2](https://www.w3.org/TR/WCAG21/#error-suggestion)\n';
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    pre: "pre",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: FormFieldDescriptionStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "lux-form-field-description",
      children: "Lux Form Field Description"
    }), "\n", jsxRuntimeExports.jsx(CitationDocumentation, {
      component: "Utrecht Form Field Description",
      url: "https://nl-design-system.github.io/utrecht/storybook-css/index.html?path=/docs/css-form-field-description--docs"
    }), "\n", jsxRuntimeExports.jsx(Markdown2, {
      children: markdown
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "opmerkingen",
      children: "Opmerkingen"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["De component gebruikt een ", jsxRuntimeExports.jsx(_components.code, {
          children: "appearance"
        }), " prop om de validatiestatus van het gekoppelde formulierelement weer te geven."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["De ", jsxRuntimeExports.jsx(_components.code, {
          children: "appearance"
        }), " prop kan worden ingesteld op 'valid' of 'invalid' om de juiste validatiestatus te tonen."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["De classnames ", jsxRuntimeExports.jsx(_components.code, {
          children: "utrecht-form-field-description--valid"
        }), " en ", jsxRuntimeExports.jsx(_components.code, {
          children: "utrecht-form-field-description--invalid"
        }), " worden automatisch toegepast op basis van de ", jsxRuntimeExports.jsx(_components.code, {
          children: "appearance"
        }), " prop."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Wanneer geen ", jsxRuntimeExports.jsx(_components.code, {
          children: "appearance"
        }), " is ingesteld, wordt de standaard weergave gebruikt."]
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
      id: "standaard-beschrijving",
      children: "Standaard Beschrijving"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Default
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Default
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "geldige-status",
      children: "Geldige Status"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Valid
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Valid
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "ongeldige-status",
      children: "Ongeldige Status"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Invalid
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Invalid
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "appearance-vormgegeven-met-tokens",
      children: "Appearance vormgegeven met tokens"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: CustomAppearance
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: CustomAppearance,
      sourceState: "none"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "lange-beschrijving",
      children: "Lange Beschrijving"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: LongDescription
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: LongDescription
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "properties",
      children: "Properties"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "children"
        }), ": De inhoud van de beschrijving (ReactNode)"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "appearance"
        }), ": De weergavestatus van de beschrijving ('valid' | 'invalid' | undefined)"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "className"
        }), ": Extra CSS-klassen voor styling"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "voorbeelden",
      children: "Voorbeelden"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: '// Standaard gebruik\n<LuxFormFieldDescription>\n  Voer uw gegevens in\n</LuxFormFieldDescription>\n\n// Met geldige status\n<LuxFormFieldDescription appearance="valid">\n  Uw invoer voldoet aan de vereisten\n</LuxFormFieldDescription>\n\n// Met ongeldige status\n<LuxFormFieldDescription appearance="invalid">\n  Controleer uw invoer\n</LuxFormFieldDescription>\n'
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
