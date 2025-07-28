# Design tokens toepassen op je eigen componenten

Je wilt wel LUX design tokens gebruiken, en dus makkelijk design updates in je componenten krijgen, maar kan nog niet de LUX componenten toepassen. LUX ondersteund alleen het gebruik van de LUX componenten in combinatie met een LUX thema. Mocht je toch van willen afwijken dan helpt deze pagina je mogelijk.

**Disclaimer** NL Design System en LUX zijn opgezet rondom het gebruiken van design tokens en automatische uitwisseling tussen Figma en jouw codebase door middel van Token Studio. Dit maakt het mogelijk om snel en met git version control design keuzes uit te wisselen met code. Door LUX componenten te gebruiken hoef je ook niet bezig te zijn met het correct instellen van de tokens in code.

**Disclaimer** Bij het volgen van deze handleiding ben je zelf verantwoordelijk voor het correct opstellen, toepassen en synchronisatie tussen code en design. Doe dit alleen als je begrijpt hoe NL Design System en LUX design tokens ingericht zijn. Houdt er rekening mee dat LUX geen ondersteuning kan bieden op deze werkwijze.

## Hoe werkt het

1. Je laadt jouw LUX thema in
2. Je stelt per component tokens in
3. Je zorgt dat de tokens in sync blijven met jouw design

## 1. Thema inladen

Je laadt de css file van jouw thema in zoals in de @lux-design-system/design-tokens package beschreven is.
In de LUX thema's zitten verschillende soorten tokens. Als een component in de LUX UI kit aanwezig is zullen de component tokens voor dat component ook in jouw thema aanwezig zijn. Als je een component wilt stijlen dat niet in de UI kit aanwezig is zul je design tokens uit de LUX common token laag moeten gebruiken.

## 2. Eigen tokens opstellen

De simpelste manier is om de CSS van jouw component direct te vullen met CSS variabelen uit het LUX thema:

```css
.my-button {
  background-color: var(--utrecht-button-primary-action-background-color);
}
```

Als je het niet wenselijk vindt dat er community component prefixes in je code belanden kan je er voor kiezen om per component een mapping bestand te maken:

```bash
/my-button-folder/
├── my-button.css
├── my-button-tokens.css
```

```css
.my-button {
  background-color: var(--myPrefix-button-primary-action-background-color);
}
```

```css
.my-button-tokens {
  --myPrefix-buttonprimary-action-background-color: var(--utrecht-button-primary-action-background-color);
}
```

Wanneer een component niet in de LUX UI kit beschikbaar is kan je alleen de common tokens uit jouw thema gebruiken. Houdt zoveel mogelijk de NL Design System token naamgeving aan. Dan blijf je zoveel mogelijk compatible met LUX.

Zo moet je je tokens noemen: [NL Design System Handboek/Design Tokens/Naamgeving](https://nldesignsystem.nl/handboek/design-tokens/#naamgeving):

1. Prefix (verplicht, bv: --gg, --mo, --dgd enz)
2. Block (verplicht, bv: button)
3. Element (optioneel, bv: icon)
4. Modifier (optioneel, bv: primary-action)
5. Property (verplicht, bv: background-color)

## 3. Tokens in sync houden

Houdt er rekening mee dat je zelf verantwoordelijk bent voor het correct laten werken van token inrichtingen en dat token inrichting in LUX af en toe kan wijzigen. Deze wijzigingen worden altijd aan jouw designer medegedeeld.

Bovenstaande manier ondersteund geen automatische uitwisseling tussen Figma en jouw component library. LUX gebruikt hier voor Token Studio en Style Dictionary.

Als je geautomatiseerd wilt uitwisselen moet je deze plugins zelf inregelen. LUX kan hier geen ondersteuning op bieden.

[Link naar Style Dictionary](https://docs.tokens.studio/transform-tokens/style-dictionary)
