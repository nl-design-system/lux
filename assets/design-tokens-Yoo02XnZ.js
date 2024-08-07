import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as t}from"./index-BI1Biiay.js";import{ae as a,ah as s}from"./index-C_cQaHjT.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DQpA-3CA.js";import"../sb-preview/runtime.js";import"./index-b2-t_3Kz.js";import"./index-D-8MO0q_.js";import"./index-nrpnv_Jx.js";import"./index-DrFu-skq.js";const d=`# Design Tokens

[design-tokens]: /docs/design-tokens-design-tokens--docs
[digid]: https://digid.nl/
[esds-naamgeving]: https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676
[kleurenpallet]: https://www.rijkshuisstijl.nl/publiek/modules/product/DigitalStyleGuide/default/index.aspx?ItemId=6744
[mijn-overheid]: https://www.mijnoverheid.nl/
[nldoc]: https://www.digitoegankelijk.nl/nieuws/publicatietool-nldoc
[nlds-naamgeving]: https://www.nldesignsystem.nl/handboek/design-tokens/#naamgeving
[rijkshuisstijl]: https://www.rijkshuisstijl.nl/publiek
[style-dictionary]: https://amzn.github.io/style-dictionary/

<!-- TODO: (LUX-27) linken "installeren" (einde vd paragraaf) naar installatiehandleiding -->

De basis van het LUX design system is design tokens. Ze bepalen hoe je applicatie of website eruitziet. Ze leggen de designkeuzes vast in code. Om gebruik te maken van de LUX design tokens moet je deze eerst installeren.

Bij Logius werken wij aan verschillende applicaties en websites. Denk aan [Digid][digid], [Mijn Overheid][mijn-overheid] en [NLDoc][nldoc]. Deze hebben allemaal hun eigen huisstijl, gebaseerd op de [Rijkshuisstijl][rijkshuisstijl]. De gebruikersinterface van deze applicaties worden gebouwd met LUX. Ze gebruiken dezelfde LUX componenten, maar die zien er wel allemaal anders uit. Dat doen wij met behulp van design tokens. Om de verschillende huisstijlen waar te maken delen we de design tokens op in verschillende niveau's. Zo kunnen wij makkelijk verschillende thema's bouwen zonder de componenten voor elke applicatie opnieuw te bouwen.

Om onderscheid te kunnen maken tussen verschillende onderdelen van het design zijn de [LUX design tokens][design-tokens] opgesplitst in 3 verschillende lagen: \`core\`, \`common\`, en \`component\`. Elke laag heeft zijn eigen doel en toepassing.

> **Let op:** De voorbeelden op deze pagina beschrijven design tokens in het JSON formaat van [Amazon's Style Dictionary][style-dictionary], de technologie die wij gebruiken om design tokens te definieren en vertalen naar de nodige platformen (CSS, Android, iOS, SCSS, etc.).

## Core Design Tokens

De core design tokens zijn de harde waarden. Alle waarden die überhaupt mogelijk zijn om je thema te maken. Het pallet waarmee we werken. Dit is de diepste laag en heeft geen referenties naar andere lagen. Er wordt wellicht gerefereerd naar een andere core design token. Voorbeelden van design tokens in die in de \`core\` laag zijn gedefiniëerd bijvoorbeeld het [beschikbare kleurenpallet][kleurenpallet], de typografie van LUX, en de beschikbare witruimten.

**NB**: De core design tokens zijn statisch. Dit betekent dat ze nooit van waarde zullen veranderen als het thema wijzigt of men de mode wisselt van \`light\` naar \`dark\`.

Om deze design tokens te benoemen gebruikt LUX de zelfde naamgeving als die van het [Eight Shapes Design System][esds-naamgeving], of _ESDS_.

### Voorbeeld van Core Design Tokens

\`\`\`json
{
  "lux": {
    "color": {
      "groen": {
        "300": { "value": "#39870c" } /* de groene kleur die Logius gebruikt */
      },
      "hemelblauw": {
        "300": { "value": "#007bc7" } /* de blauwe kleur die MijnOverheid gebruikt */
      },
      "oranje": {
        "300": { "value": "#e17000" } /* de oranje kleur die Digid gebruikt */
      }
    }
  }
}
\`\`\`

## Common Design Tokens

Common design tokens beschrijven de design beslissingen die zijn genomen om een bepaald thema te maken. Bijvoorbeeld welk lettertype de koppen en tekst hebben of wat de primaire kleur van het thema is. Common design tokens verwijzen voornamelijk naar core design tokens, maar ook naar andere design tokens in de common laag.

De LUX common design tokens worden benoemd volgens de [ESDS design tokens][esds-naamgeving].

### Voorbeeld van Common Design Tokens

\`\`\`json
{
  "lux": {
    "color": {
      "brand": {
        "default": {
          "value": "{lux.color.groen.300}"
        }
      }
    }
  }
}
\`\`\`

## Component Design Tokens

LUX componenten krijgen hun eigen component design tokens. Deze tokens beschrijven alles van het hoe component er uit ziet. Daarin zijn alle varianten en de mogelijke staat waarin hij verkeert meegenomen. Deze tokens zullen voornamelijk verwijzen naar common design tokens. Af en toe worden ook core design tokens direct gerefereerd.

De naamgeving van LUX component design tokens wijkt af van die van de core en common tokens. Deze tokens zijn genoemd volgens de [tokens van het NL Design System][nlds-naamgeving].

### Voorbeeld van Component Design Tokens

Zie hier dat beide component design tokens verwijzen naar de common design token \`{lux.color.brand.default}\`

\`\`\`json
{
  "lux": {
    "button": {
      "background-color": {
        "value": "{lux.color.brand.default}"
      }
    },
    "header": {
      "background-color": {
        "value": "{lux.color.brand.default}"
      }
    }
  }
}
\`\`\`

## Verschillende Naamgevingen

LUX werkt heel nauw samen met het NLDS. De component design tokens zullen ook gebruikt worden door de NLDS community als zij LUX componenten implementeren in hun eigen systeem. Daarom is het belangrijk om de zelfde naamgeving aan te houden als de [NLDS design tokens][nlds-naamgeving]. Op de core en common laag hebben wij gekozen voor een andere naamgeving. Wij gebruiken hier de naamgeving van het [Eight Shapes Design System][esds-naamgeving]. Deze biedt meer overzicht voor Logius UX designers bij het toepassen van de design tokens in Figma.

De LUX common en core design tokens zijn alleen voor LUX van toepassing. De design tokens in de core en common lagen zijn voor de NLDS community niet van toepassing.
`;function o(n){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Design Tokens/Design Tokens"}),`
`,e.jsx(s,{children:d})]})}function b(n={}){const{wrapper:i}={...t(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(o,{...n})}):o()}export{b as default};
