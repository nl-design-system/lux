import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2 } from "./index-DGd3ExmD.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-C6YDs8on.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
const markdown = '# Design Tokens\n\n[design-tokens]: /docs/design-tokens-design-tokens--docs\n[digid]: https://digid.nl/\n[esds-naamgeving]: https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676\n[kleurenpallet]: https://www.rijkshuisstijl.nl/publiek/modules/product/DigitalStyleGuide/default/index.aspx?ItemId=6744\n[mijn-overheid]: https://www.mijnoverheid.nl/\n[nldoc]: https://www.digitoegankelijk.nl/nieuws/publicatietool-nldoc\n[nlds-naamgeving]: https://www.nldesignsystem.nl/handboek/design-tokens/#naamgeving\n[rijkshuisstijl]: https://www.rijkshuisstijl.nl/publiek\n[style-dictionary]: https://amzn.github.io/style-dictionary/\n\n<!-- TODO: (LUX-27) linken "installeren" (einde vd paragraaf) naar installatiehandleiding -->\n\nDe basis van het LUX design system is design tokens. Ze bepalen hoe je applicatie of website eruitziet. Ze leggen de designkeuzes vast in code. Om gebruik te maken van de LUX design tokens moet je deze eerst installeren.\n\nBij Logius werken wij aan verschillende applicaties en websites. Denk aan [Digid][digid], [Mijn Overheid][mijn-overheid] en [NLDoc][nldoc]. Deze hebben allemaal hun eigen huisstijl, gebaseerd op de [Rijkshuisstijl][rijkshuisstijl]. De gebruikersinterface van deze applicaties worden gebouwd met LUX. Ze gebruiken dezelfde LUX componenten, maar die zien er wel allemaal anders uit. Dat doen wij met behulp van design tokens. Om de verschillende huisstijlen waar te maken delen we de design tokens op in verschillende niveau\'s. Zo kunnen wij makkelijk verschillende thema\'s bouwen zonder de componenten voor elke applicatie opnieuw te bouwen.\n\nOm onderscheid te kunnen maken tussen verschillende onderdelen van het design zijn de [LUX design tokens][design-tokens] opgesplitst in 3 verschillende lagen: `core`, `common`, en `component`. Elke laag heeft zijn eigen doel en toepassing.\n\n> **Let op:** De voorbeelden op deze pagina beschrijven design tokens in het JSON formaat van [Amazon\'s Style Dictionary][style-dictionary], de technologie die wij gebruiken om design tokens te definieren en vertalen naar de nodige platformen (CSS, Android, iOS, SCSS, etc.).\n\n## Core Design Tokens\n\nDe core design tokens zijn de harde waarden. Alle waarden die überhaupt mogelijk zijn om je thema te maken. Het pallet waarmee we werken. Dit is de diepste laag en heeft geen referenties naar andere lagen. Er wordt wellicht gerefereerd naar een andere core design token. Voorbeelden van design tokens in die in de `core` laag zijn gedefiniëerd bijvoorbeeld het [beschikbare kleurenpallet][kleurenpallet], de typografie van LUX, en de beschikbare witruimten.\n\n**NB**: De core design tokens zijn statisch. Dit betekent dat ze nooit van waarde zullen veranderen als het thema wijzigt of men de mode wisselt van `light` naar `dark`.\n\nOm deze design tokens te benoemen gebruikt LUX de zelfde naamgeving als die van het [Eight Shapes Design System][esds-naamgeving], of _ESDS_.\n\n### Voorbeeld van Core Design Tokens\n\n```json\n{\n  "lux": {\n    "color": {\n      "groen": {\n        "300": { "value": "#39870c" } /* de groene kleur die Logius gebruikt */\n      },\n      "hemelblauw": {\n        "300": { "value": "#007bc7" } /* de blauwe kleur die MijnOverheid gebruikt */\n      },\n      "oranje": {\n        "300": { "value": "#e17000" } /* de oranje kleur die Digid gebruikt */\n      }\n    }\n  }\n}\n```\n\n## Common Design Tokens\n\nCommon design tokens beschrijven de design beslissingen die zijn genomen om een bepaald thema te maken. Bijvoorbeeld welk lettertype de koppen en tekst hebben of wat de primaire kleur van het thema is. Common design tokens verwijzen voornamelijk naar core design tokens, maar ook naar andere design tokens in de common laag.\n\nDe LUX common design tokens worden benoemd volgens de [ESDS design tokens][esds-naamgeving].\n\n### Voorbeeld van Common Design Tokens\n\n```json\n{\n  "lux": {\n    "color": {\n      "brand": {\n        "default": {\n          "value": "{lux.color.groen.300}"\n        }\n      }\n    }\n  }\n}\n```\n\n## Component Design Tokens\n\nLUX componenten krijgen hun eigen component design tokens. Deze tokens beschrijven alles van het hoe component er uit ziet. Daarin zijn alle varianten en de mogelijke staat waarin hij verkeert meegenomen. Deze tokens zullen voornamelijk verwijzen naar common design tokens. Af en toe worden ook core design tokens direct gerefereerd.\n\nDe naamgeving van LUX component design tokens wijkt af van die van de core en common tokens. Deze tokens zijn genoemd volgens de [tokens van het NL Design System][nlds-naamgeving].\n\n### Voorbeeld van Component Design Tokens\n\nZie hier dat beide component design tokens verwijzen naar de common design token `{lux.color.brand.default}`\n\n```json\n{\n  "lux": {\n    "button": {\n      "background-color": {\n        "value": "{lux.color.brand.default}"\n      }\n    },\n    "header": {\n      "background-color": {\n        "value": "{lux.color.brand.default}"\n      }\n    }\n  }\n}\n```\n\n## Verschillende Naamgevingen\n\nLUX werkt heel nauw samen met het NLDS. De component design tokens zullen ook gebruikt worden door de NLDS community als zij LUX componenten implementeren in hun eigen systeem. Daarom is het belangrijk om de zelfde naamgeving aan te houden als de [NLDS design tokens][nlds-naamgeving]. Op de core en common laag hebben wij gekozen voor een andere naamgeving. Wij gebruiken hier de naamgeving van het [Eight Shapes Design System][esds-naamgeving]. Deze biedt meer overzicht voor Logius UX designers bij het toepassen van de design tokens in Figma.\n\nDe LUX common en core design tokens zijn alleen voor LUX van toepassing. De design tokens in de core en common lagen zijn voor de NLDS community niet van toepassing.\n';
function _createMdxContent(props) {
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Design Tokens/Design Tokens"
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
