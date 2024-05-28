# Lagen van Design Tokens

[design-tokens]: /docs/design-tokens-design-tokens--docs
[esds-naamgeving]: https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676
[kleurenpallet]: https://www.rijkshuisstijl.nl/publiek/modules/product/DigitalStyleGuide/default/index.aspx?ItemId=6744
[nlds-naamgeving]: https://www.nldesignsystem.nl/handboek/design-tokens/#naamgeving
[style-dictionary]: https://amzn.github.io/style-dictionary/

Om onderscheid te kunnen maken tussen tussen verschillende onderdelen van het design zijn de [LUX design tokens][design-tokens] opgesplits in 3 verschillende lagen: `core`, `common`, en `component`. Elke laag heeft zijn eigen doel en toepassing.

> **Let op:** De voorbeelden op deze pagina beschrijven design tokens in het JSON formaat van [Amazon's Style Dictionary][style-dictionary], de technologie die wij gebruiken om design tokens te definieren en vertalen naar de nodige platformen (CSS, Android, iOS, SCSS, etc.).

## Core Design Tokens

De core design tokens zijn de harde waarden. Alle waarden die überhaupt mogelijk zijn om je thema te maken. Het pallet waarmee we werken. Dit is de diepste laag en heeft geen referenties naar andere lagen. Er wordt wellicht gerefereerd naar een andere core design token. Voorbeelden van design tokens in die in de `core` laag zijn gedefiniëerd bijvoorbeeld het [beschikbare kleurenpallet][kleurenpallet], de typografie van LUX, en de beschikbare witruimten.

**NB**: De core design tokens zijn statisch. Dit betekent dat ze nooit van waarde zullen veranderen als het thema wijzigt of men de mode wisselt van `light` naar `dark`. Het nieuwe thema zal simpelweg verwijzen naar een andere core design token.

Om deze design tokens te benoemen gebruikt LUX de zelfde naamgeving als die van het [Eight Shapes Design System][esds-naamgeving], of _ESDS_.

### Voorbeeld van Core Design Tokens

```json
{
  "lux": {
    "color": {
      "groen": {
        "300": { "value": "#39870c" } /* Logius groen */
      },
      "hemelblauw": {
        "300": { "value": "#007bc7" } /* MijnOverheid blauw */
      },
      "oranje": {
        "300": { "value": "#e17000" } /* Digid oranje */
      }
    }
  }
}
```

## Common Design Tokens

Common design tokens beschrijven de design beslissingen die zijn genomen om een bepaald thema te maken. Bijvoorbeeld welk lettertype de koppen en tekst hebben of wat de primaire kleur van het thema is. Common design tokens verwijzen voornamelijk naar core design tokens, maar ook naar andere design tokens in de common laag.

De LUX common design tokens worden benoemd volgens de [ESDS design tokens][esds-naamgeving].

### Voorbeeld van Common Design Tokens

```json
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
```

## Component Design Tokens

LUX componenten krijgen hun eigen component design tokens. Deze tokens beschrijven alles van het hoe component er uit ziet. Daarin zijn alle varianten en de mogelijke staat waarin hij verkeert meegenomen. Deze tokens zullen voornamelijk verwijzen naar common design tokens. Af en toe worden ook core design tokens direct gerefereerd.

De naamgeving van LUX component design tokens wijkt af van die van de core en common tokens. Deze tokens zijn genoemd volgens de [tokens van het NL Design System][nlds-naamgeving].

### Voorbeeld van Component Design Tokens

Zie hier dat beide component design tokens verwijzen naar de common design token `{lux.color.brand.default}`

```json
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
```

## Verschillende Naamgevingen

LUX werkt heel nauw samen met het NLDS. De component design tokens zullen ook gebruikt worden door de NLDS community als zij LUX componenten implementeren in hun eigen systeem. Daarom is het belangrijk om de zelfde naamgeving aan te houden als de [NLDS design tokens][nlds-naamgeving]. Echter vinden wij in deze naamgeving niet altijd duidelijk welk onderdeel beschreven wordt.

De LUX common en core design tokens zijn alleen voor LUX van toepassing. De NLDS community zal deze lagen nooit gebruiken. Omdat we de NLDS naamgeving niet altijd duidelijk vinden hebben wij een naamgevingssysteem gevonden waarvan wij dat wel vinden. Die van het [Eight Shapes Design System][esds-naamgeving].
