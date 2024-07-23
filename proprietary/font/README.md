# Font assets voor het LUX Design System

Deze package bevat de referenties naar de lettertypes RijksoverheidSerif en RijksoverheidSans die het LUX Design System gebruikt.  
**Let op:** Deze fonts zijn auteurrechtelijk beschermd. Lees meer op [Gebruiksvoorwaarden typografie](https://www.rijkshuisstijl.nl/publiek/modules/product/DigitalStyleGuide/default/index.aspx?ItemId=10370) op Rijkshuisstijl.nl

## Installeren

### NPM

`npm install @lux-design-system/font --save-dev`

### Yarn

`yarn add @lux-design-system/font --dev`

### PNPM

`pnpm add -D @lux-design-system/font --save-dev`

Daarna zijn de volgende `@font-face` `font-family`s beschikbaar:

- RijksoverheidSansWebText, in regular, bold en italic
- RijksoverheidSerifWeb, in regular, bold en italic

_De fonts worden vanwege copyright niet mee gepubliceerd._

## Bestanden

### `dist/index.css`

Hierin staan de definities en font-family-namen die binnen LUX worden gebruikt.

Dit bestand kun je importeren of invoegen in je website of applicatie. De font-bestanden zal je zelf naar de folder moeten kopieren.

### `dist/ro-font-face-mixin.scss` en `index.scss`

De SCSS mixin waarin de definities opgebouwd worden, deze kan je in je eigen buildproces meenemen en daarmee je eigen folder opgeven waar de font-bestanden zijn gekopieerd.
Een voorbeeld staat in `index.scss`.

## Eigen (online) font gebruiken?

Dan heb je deze package niet nodig.
