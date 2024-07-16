# Design Tokens voor het LUX Design System

Deze package bevat de Design Tokens van het LUX Design System in verschillende formaten.  
In design tokens worden de design beslissingen vastgelegd voor het design system. De design tokens in deze package zijn de enige bron van waarheid voor de look en feel van de componenten.

## Installeren

### NPM

`npm install @lux-design-system/design-tokens --save-dev`

### Yarn

`yarn add @lux-design-system/design-tokens --dev`

### PNPM

`pnpm add -D @lux-design-system/design-tokens --save-dev`

Daarna zijn de volgende tokens beschikbaar:

## JSON

In de map `/lib/tokens/` staan de tokens die vanuit Tokens Studio en Figma gegenereerd worden.
Deze tokens kunnen gebruikt worden in combinatie met je eigen tokens of om je eigen variabelen te bouwen.  
_Let op_: Sommige mapnamen bevatten nog `(beta)`, deze suffix zal in de toekomst verdwijnen, dus het wordt aangeraden deze uit je output te filteren.  
In de [source code op Github](https://github.com/nl-design-system/lux) kan je onze build script(s) inzien, deze worden niet meegeleverd in de package aangezien ze specifiek voor het LUX-project zijn.

Meer informatie over de LUX design tokens en de lagen vind je op de pagina [Design Tokens](https://nl-design-system.github.io/lux/?path=/docs/design-tokens-design-tokens--docs) van onze Storybook.

## CSS

In de map `/lib/css/` staan de CSS-variabelen in bestanden per thema[^1], mode (light, dark) en viewport (xs, sm, md, lg, xl). Bijvoorbeeld `/lib/css/logius/dark/lg.css`.
Naast de variabelen in de `:root` is er ook een versie waarbij de variabelen in een thema-mode-classname staan. Bijvoorbeeld `/lib/css/logius/dark/lg-theme.css`, met de selector `.lux-theme--logius-dark`.
Voor beide versies zijn er index-bestanden gemaakt per thema. Bij de `:root`-versie worden de mode-versies aan de hand van in de browser ingestelde color-scheme geïmporteerd. Bij de "theme"-versie worden beide mode-versies ingeladen.
Binnenkort komen nog de viewports bij de index-bestanden.

### Fonts

Een aantal tokens referen naar het fonts van de Rijksshuisstijl. Daarvoor installeer je het [`@lux-design-system/font`-package](https://www.npmjs.com/package/@lux-design-system/font).

[^1]: NLdoc thema's staan in de map `nldoc`.
