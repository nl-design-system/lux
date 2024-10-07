import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, ah as Markdown2, af as Canvas, ag as Controls3, am as DescriptionContainer } from "./index-CbVplE-E.js";
import { A as AlertStories, P as Playground, I as Info, O as Ok, W as Warning, E as Error, a as AriaRole } from "./alert.stories-C5x3j8UO.js";
import { C as CitationDocumentation } from "./CitationDocumentation-B3Shsstx.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-DVJB8KU2.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-DLlB04eo.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./components-BDvJjw3I.js";
import "./createVisualRegressionStory-CMDMpfq0.js";
const markdown = '<!-- @license CC0-1.0 -->\n\n# Alert\n\nDe _alert component_ is er voor berichten die de gebruiker snel moet weten, omdat ze belangrijk zijn voor het uitvoeren van de huidige taak. De alert is alleen voor eenvoudige berichten. Gebruik in de alert geen buttons, geen formulier-componenten en geen complexe opmaak zoals tabellen.\n\nLet op: de alert component gebruiken kan essentieël zijn voor gebruikers van een schermvoorlezer, maar onjuist gebruik kan heel erg vervelend zijn.\n\nGebruik niet een alert voor een algemene aankondiging die op meerdere pagina\'s staat, als het niet per se relevant is voor de huidige taak van de bezoeker. De alert wordt door schermvoorlezers als eerste voorgelezen op elke pagina waar de alert staat, het kan lastig zijn de website te gebruiken als de schermlezer elke keer wordt geblokkeerd met steeds dezelfde melding. Gebruik in die situaties de notification banner component.\n\n## Componenten die lijken op alert\n\n- de _alert_: wordt zo snel mogelijk aangekondigd.\n- de _notification banner_: wordt ook snel aangekondigd, omdat het één van eerste onderdelen van de pagina is als je de banner plaatst aan het begin van de page header. Je kunt de banner overslaan een _skip link_.\n- de _error appearance_ van de _form field description_: voor feedback in een formulier die hoort bij een form control. Wordt aangekondigd door schermlezers wanneer de form control focus heeft.\n\n## Tekst\n\nSchrijf een bericht voor de alert die ook duidelijk is als de gebruiker geen icoon of signaalkleur ziet.\n\nLet op: als de tekst met een script aangepast wordt dan wordt de alert in zijn geheel nogmaals voorgelezen door een schermvoorlezer. Een tekst met een veranderend onderdeel zoals "Over 14 minuten en 59 seconden verloopt je sessie.", heeft als effect dat de schermlezer alleen nog de alert voorleest en de pagina verder onbruikbaar is.\n\n## HTML\n\nHet belangrijkste onderdeel van de alert is het bericht, plaats die in een `<div role="alert">`.\n\nGebruik bij voorkeur een _paragraph component_ voor de inhoud van het bericht, voor een goede `font-size` en `line-height` en zodat de alert `margin` heeft wanneer de CSS niet geladen kan worden.\n\nAls je wel een button gebruikt (bijvoorbeeld om de alert te verbergen), plaats die dan nooit binnen het element met `role="alert"`, maar daarbuiten.\n\n```html\n<div class="utrecht-alert">\n  <div class="utrecht-alert__icon">\n    <!-- optioneel: een icon -->\n  </div>\n  <div class="utrecht-alert__message" role="alert">\n    <!-- het bericht, bijvoorbeeld: -->\n    <p class="utrecht-paragraph">Let op: er is nu een storing waardoor...</p>\n  </div>\n  <!-- optioneel en nog niet ondersteund: een button, buiten het bericht -->\n</div>\n```\n\n## Relevante WCAG eisen\n\n- [WCAG eis 1.1.1](https://www.w3.org/TR/WCAG21/#non-text-content): als de alert een icoon gebruikt met een bepaalde betekenis, moet de betekenis ook uit de tekst blijken.\n- [WCAG eis 1.4.1](https://www.w3.org/TR/WCAG21/#use-of-color): als de alert een signaalkleur gebruikt moet de tekst datzelfde ook duidelijk maken, bijvoorbeeld met signaalwoorden. Gebruik bijvoorbeeld "Let op:" voor een waarschuwing.\n- [WCAG eis 2.2.1](https://www.w3.org/TR/WCAG21/#timing-adjustable): laat de alert niet automatisch verdwijnen na een bepaalde tijd (lees de WCAG specificatie voor enkele uitzonderingen).\n';
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: AlertStories
    }), "\n", jsxRuntimeExports.jsx(CitationDocumentation, {
      component: "Utrecht Alert",
      url: "https://nl-design-system.github.io/utrecht/storybook-css/index.html?path=/docs/css-alert--docs"
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
      id: "variants-type",
      children: "Variants (type)"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "info",
      children: "Info"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Info
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Info
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "ok--confirm",
      children: "OK / Confirm"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Ok
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Ok
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "warning",
      children: "Warning"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Warning
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Warning
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "error",
      children: "Error"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Error
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Error
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "inhoud",
      children: "Inhoud"
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "aria-rolealert",
      children: ["Aria ", jsxRuntimeExports.jsx(_components.code, {
        children: "role=alert"
      })]
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: AriaRole
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: AriaRole,
      sourceState: "shown"
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
