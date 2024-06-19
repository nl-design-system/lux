# Design Tokens voor het LUX Design System

Deze package bevat de Design Tokens van het LUX Design System in verschillende formaten.  
In design tokens worden de keuzes opgeslagen voor het design system. De design tokens in deze package zijn de enige bron van waarheid voor de look en feel van de componenten.

## Installeren

### NPM

`npm install @lux-design-system/design-tokens --save-dev`

### Yarn

`yarn add @lux-design-system/design-tokens --dev`

Daarna zijn de volgende tokens beschikbaar:

## JSON

In de map `/lib/tokens/` staan de tokens die vanuit Tokens Studio en Figma gegenereerd worden.
Deze tokens kunnen gebruikt worden in combinatie met je eigen tokens of om je eigen variabelen te bouwen.  
_Let op_: Sommige mapnamen bevatten nog `(beta)`, deze suffix zal in de toekomst verdwijnen, dus het wordt aangeraden deze uit je output te filteren.  
In de source code op Github kan je onze build script(s) inzien, deze worden niet meegeleverd in de package aangezien ze specifiek voor het LUX-project zijn.

Meer informatie over de LUX design tokens en de lagen vind je op de pagina [Lagen van Design Tokens](https://nl-design-system.github.io/lux/?path=TODO:include-link) van onze Storybook.

## CSS

In de map `/lib/css/` staan de CSS-variabelen in bestanden per thema, mode (light, dark) en viewport.
