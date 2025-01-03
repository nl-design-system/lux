import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2 } from "./index-DlASthxs.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-CUScpp-3.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
const mdFaq = '## Veelgestelde vragen\n\n### Wat is LUX?\n\nLUX staat voor "Logius UX", ofwel "Logius User eXperience" en is het design system dat Logius-breed ingezet wordt. LUX staat ook voor de verlichting die het diens gebruikers gaat bieden omdat ze zich hiermee vooral kunnen richten op hun business logic. Het is immers een LUXe dat de UI, UX en toegankelijkheid grotendeels voor hen wordt geregeld door LUX.\n\n### Wat is een design system?\n\nEen design system is als een gereedschapskist voor ontwerpers en ontwikkelaars. Het bevat herbruikbare componenten zoals kleuren, tekst stijlen, knoppen, en andere interactie elementen. Maar bevat ook richtlijnen voor hoe die componenten gebruikt moeten worden. Eigenlijk een set van bouwblokken voor het maken van kwalitatieve websites.\n\nMet een design system zorg je voor consistentie en efficiëntie bij het maken van digitale producten zoals websites. Dat maakt het makkelijker om snel producten te maken terwijl de kwaliteit, zoals gebruikersvriendelijkheid en toegankelijkheid, overal volgens dezelfde standaard geborgd zijn.\n\n### Waar kan ik LUX voor gebruiken?\n\nLUX is er voor alle Logius websites die gebruikt worden door burgers, ondernemers en afnemers. Met LUX heb je een designstoolkit, componenten bibliotheek en richtlijnen voor het toepassen daar van. Je bouwt je applicatie en website nog steeds zelf maar kan gebruik maken van alle kennis en componenten die er al zijn. Dat scheelt je een hoop tijd!\n\n### Hoe verhoud LUX zich tot NL Design System?\n\nLUX is het centrale punt binnen Logius om gebruik te maken van het NL Design System. LUX doet proactief mee in de NL Design System community door onder andere componenten uit LUX bij NL Design System aan te leveren.\n';
const mdIntroduction = '<!-- @license CC0-1.0 -->\n\n[design-tokens]: /docs/design-tokens-design-tokens--docs\n[web-components]: /docs/web-components-alert--docs\n[nlds]: https://www.nldesignsystem.nl/\n\n# LUX: Hét Logius Design System\n\nLUX helpt jou Logius producten te bouwen zonder dat jij hoeft na te denken over hoe het er uit ziet. Jij kan je focussen op hoe het werkt. Momenteel biedt LUX een scala aan [Design Tokens][design-tokens] en [Web Componenten][web-components]. Meer elementen volgen binnenkort. Wij werken nauw samen met het [NL Design System][nlds] (NLDS), waarmee we samen met andere betrokken partijen kennis delen en eenheid creëeren voor de Nederlandse digitale overheid.\n\n## 🎁 Onze code en packages\n\n<ul class="lsb-list--inline sb-unstyled">\n  <li>[<img src="github.png" height="18" alt="Github" /> Code op Github](https://github.com/nl-design-system/lux)</li>\n  <li>[<img src="npm.png" height="18" alt="NPM" /> Packages op NPM](https://www.npmjs.com/org/lux-design-system)</li>\n  <li>[<img src="figma.png" height="18" alt="NPM" /> UI Kit op Figma](https://www.figma.com/design/515tboh6xpSNziwQu6WyAy/LUX---UI-kit?node-id=265-14201)</li>\n</ul>\n\n## 🛎️ Neem Contact Met Ons Op\n\n<ul class="lsb-list--inline sb-unstyled">\n  <li>[<img src="slack.png" height="18" alt="Slack" /> Join us on Slack](https://join.slack.com/t/logius-ux/shared_invite/zt-2isbt3hue-A6ksce6Qz5g~eYxez_DF5g)</li>\n  <li>Of mail ons op [lux.design.system@logius.nl]</li>\n</ul>\n';
function _createMdxContent(props) {
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Intro"
    }), "\n", jsxRuntimeExports.jsx(Markdown2, {
      children: mdIntroduction
    }), "\n", jsxRuntimeExports.jsx(Markdown2, {
      children: mdFaq
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
