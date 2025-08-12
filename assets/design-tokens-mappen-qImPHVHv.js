import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2 } from "./index-C2ZycR1s.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-BfbgjdP5.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
const markdown = "# Design tokens toepassen op je eigen componenten\n\nJe wilt wel LUX design tokens gebruiken, en dus makkelijk design updates in je componenten krijgen, maar kan nog niet de LUX componenten toepassen. LUX ondersteund alleen het gebruik van de LUX componenten in combinatie met een LUX thema. Mocht je toch van willen afwijken dan helpt deze pagina je mogelijk.\n\n**Disclaimer** NL Design System en LUX zijn opgezet rondom het gebruiken van design tokens en automatische uitwisseling tussen Figma en jouw codebase door middel van Token Studio. Dit maakt het mogelijk om snel en met git version control design keuzes uit te wisselen met code. Door LUX componenten te gebruiken hoef je ook niet bezig te zijn met het correct instellen van de tokens in code.\n\n**Disclaimer** Bij het volgen van deze handleiding ben je zelf verantwoordelijk voor het correct opstellen, toepassen en synchronisatie tussen code en design. Doe dit alleen als je begrijpt hoe NL Design System en LUX design tokens ingericht zijn. Houdt er rekening mee dat LUX geen ondersteuning kan bieden op deze werkwijze.\n\n## Hoe werkt het\n\n1. Je laadt jouw LUX thema in\n2. Je stelt per component tokens in\n3. Je zorgt dat de tokens in sync blijven met jouw design\n\n## 1. Thema inladen\n\nJe laadt de css file van jouw thema in zoals in de @lux-design-system/design-tokens package beschreven is.\nIn de LUX thema's zitten verschillende soorten tokens. Als een component in de LUX UI kit aanwezig is zullen de component tokens voor dat component ook in jouw thema aanwezig zijn. Als je een component wilt stijlen dat niet in de UI kit aanwezig is zul je design tokens uit de LUX common token laag moeten gebruiken.\n\n## 2. Eigen tokens opstellen\n\nDe simpelste manier is om de CSS van jouw component direct te vullen met CSS variabelen uit het LUX thema:\n\n```css\n.my-button {\n  background-color: var(--utrecht-button-primary-action-background-color);\n}\n```\n\nAls je het niet wenselijk vindt dat er community component prefixes in je code belanden kan je er voor kiezen om per component een mapping bestand te maken:\n\n```bash\n/my-button-folder/\n├── my-button.css\n├── my-button-tokens.css\n```\n\n```css\n.my-button {\n  background-color: var(--myPrefix-button-primary-action-background-color);\n}\n```\n\n```css\n.my-button-tokens {\n  --myPrefix-buttonprimary-action-background-color: var(--utrecht-button-primary-action-background-color);\n}\n```\n\nWanneer een component niet in de LUX UI kit beschikbaar is kan je alleen de common tokens uit jouw thema gebruiken. Houdt zoveel mogelijk de NL Design System token naamgeving aan. Dan blijf je zoveel mogelijk compatible met LUX.\n\nZo moet je je tokens noemen: [NL Design System Handboek/Design Tokens/Naamgeving](https://nldesignsystem.nl/handboek/design-tokens/#naamgeving):\n\n1. Prefix (verplicht, bv: --gg, --mo, --dgd enz)\n2. Block (verplicht, bv: button)\n3. Element (optioneel, bv: icon)\n4. Modifier (optioneel, bv: primary-action)\n5. Property (verplicht, bv: background-color)\n\n## 3. Tokens in sync houden\n\nHoudt er rekening mee dat je zelf verantwoordelijk bent voor het correct laten werken van token inrichtingen en dat token inrichting in LUX af en toe kan wijzigen. Deze wijzigingen worden altijd aan jouw designer medegedeeld.\n\nBovenstaande manier ondersteund geen automatische uitwisseling tussen Figma en jouw component library. LUX gebruikt hier voor Token Studio en Style Dictionary.\n\nAls je geautomatiseerd wilt uitwisselen moet je deze plugins zelf inregelen. LUX kan hier geen ondersteuning op bieden.\n\n[Link naar Style Dictionary](https://docs.tokens.studio/transform-tokens/style-dictionary)\n";
function _createMdxContent(props) {
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Aan de slag/Ontwikkelen/Tokens toepassen"
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
