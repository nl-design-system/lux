import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2 } from "./index-DBnE9EFM.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-TRm6MOqm.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
const markdown = "## Veelgestelde vragen\n\n### Wat is een design system?\n\nEen design system is als een gereedschapskist voor ontwerpers en ontwikkelaars. Het bevat herbruikbare componenten zoals kleuren, tekst stijlen, knoppen, en andere interactie elementen. Maar bevat ook richtlijnen voor hoe die componenten gebruikt moeten worden. Eigenlijk een set van bouwblokken voor het maken van kwalitatieve websites.\n\nMet een design system zorg je voor consistentie en efficiëntie bij het maken van digitale producten zoals websites. Dat maakt het makkelijker om snel producten te maken terwijl de kwaliteit, zoals gebruikersvriendelijkheid en toegankelijkheid, overal volgens dezelfde standaard geborgd zijn.\n\n### Waar kan ik LUX voor gebruiken?\n\nLUX is er voor alle Logius websites die gebruikt worden door burgers, ondernemers en afnemers. Met LUX heb je een designstoolkit, componenten bibliotheek en richtlijnen voor het toepassen daar van. Je bouwt je applicatie en website nog steeds zelf maar kan gebruik maken van alle kennis en componenten die er al zijn. Dat scheelt je een hoop tijd!\n\n### Hoe verhoud LUX zich tot NL Design System?\n\nLUX is het centrale punt binnen Logius om gebruik te maken van het NL Design System. LUX doet proactief mee in de NL Design System community door onder andere componenten uit LUX bij NL Design System aan te leveren.\n";
function _createMdxContent(props) {
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "LUX/Veelgestelde vragen"
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
