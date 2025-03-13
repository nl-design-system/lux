import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2 } from "./index-DJyKHn0n.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-7jfKsalY.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
const markdown = "# Community Componenten\n\n[estafette-model]: https://www.nldesignsystem.nl/handboek/estafettemodel\n[lux-naamgeving]: /docs/developer-naamgeving-design-tokens--docs\n[lux-design-tokens]: /docs/design-tokens-design-tokens--docs\n[nlds]: https://www.nldesignsystem.nl/\n[nlds-components]: https://www.nldesignsystem.nl/componenten\n[storybook-utrecht]: https://nl-design-system.github.io/utrecht/storybook/\n[utrecht-badge-component]: https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-badge-tokens--docs\n\nMomenteel biedt LUX slechts een paar componenten aan. Mettertijd zullen dit er meer en meer worden. In de tussentijd kun je gebruik maken van de componenten die in het [NL Design System][nlds] (NLDS) worden aangeboden. Bijvoorbeeld die van [gemeente Utrecht][storybook-utrecht]. Deze worden al veel in de NLDS community gebruikt. Deze componenten zijn wel volgens het design van [gemeente Utrecht][storybook-utrecht]. Dit moet nog aangepast worden naar de stijl van LUX.\n\nHierin moet je een aantal stappen nemen:\n\n1. <b>Zoek het gewenste component bij [NLDS][nlds-components]</b>\n1. <b>Installeer het component zoals staat beschreven bij de aanbieder</b>\n   <br>**Let op:** Het heeft altijd de voorkeur om een NLDS [_Hall of Fame_][estafette-model] component te gebruiken als die beschikbaar is\n1. <b>Als LUX voor het betreffende component nog geen design tokens aanbiedt</b> kun je 2 dingen doen:\n   1. Handmatig de juiste design tokens toepassen. Volg het [onderstaande voorbeeld](#zelf-doen);\n   1. Wachten tot LUX de design tokens aanbiedt.<br>Natuurlijk proberen wij deze z.s.m. aan te bieden.\n1. <b>Neem contact op met LUX</b> en laat weten welk component je gebruikt\n\n## Contact opnemen met LUX\n\n<!-- TODO: (LUX-257): linken naar contact-pagina -->\n\nVoor LUX is het belangrijk om te weten welke [community componenten][nlds-components] waar gebruikt worden. Laat het ons dan ook altijd weten welk component je gebruikt.\n\n## Zelf doen\n\nDe meeste aanbieders van [community componenten][nlds-components] laten op hun Storybook zien welke design tokens er beschikbaar zijn voor hun componenten. Pak de lijst met tokens van het component en vul de waarden met de common design tokens van LUX. Je UX designer kan je helpen bepalen welke je moet gebruiken.\n\n### Voorbeeld\n\nAls voorbeeld gebruiken wij de CSS variabelen van het [`utrecht-badge` component][utrecht-badge-component]. Zoals je ziet staat de CSS property waarop het design token wordt toegepast ook in de naam van het token. Om de juiste LUX design tokens toe te passen is het belangrijk om de [naamgeving van LUX design tokens][lux-naamgeving] te kennen.\n\n> **Disclaimer:** Hoewel onderstaand voorbeeld de [LUX design tokens][lux-design-tokens] toekent aan die van het community component is het slechts een voorbeeld. Dit zijn niet per se de tokens die LUX zou toepassen.\n\n```css\n.your-theme {\n  --utrecht-badge-background-color: var(--lux-color-brand-default);\n  --utrecht-badge-border-radius: var(--lux-border-radius-default);\n  --utrecht-badge-color: var(--lux-color-foreground-onEmphasis);\n  --utrecht-badge-font-size: var(--lux-font-size-sm);\n  --utrecht-badge-font-weight: var(--lux-font-weight-default);\n  --utrecht-badge-line-height: var(--lux-font-line-height-s);\n  --utrecht-badge-padding-block: var(--lux-space-05-x);\n  --utrecht-badge-padding-inline: var(--lux-space-05-x);\n  --utrecht-badge-text-transform: inherit;\n}\n```\n";
function _createMdxContent(props) {
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Design Tokens/Community Componenten"
    }), "\n", jsxRuntimeExports.jsx(Markdown2, {
      children: markdown
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
  }) : _createMdxContent();
}
export {
  MDXContent as default
};
