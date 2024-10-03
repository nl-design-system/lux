# Design Tokens voor het LUX Design System

Deze package bevat de Design Tokens van het LUX Design System in verschillende formaten.  
In design tokens worden de design beslissingen vastgelegd voor het design system. De design tokens in deze package zijn de enige bron van waarheid voor de look en feel van de componenten.

## Installeren

### NPM

`npm install @lux-design-system/design-tokens --save-dev`

### Yarn

`yarn add @lux-design-system/design-tokens --dev`

### PNPM

`pnpm add @lux-design-system/design-tokens --save-dev`

Daarna zijn de volgende tokens beschikbaar:

## JSON

In de map `/lib/tokens/` staan de tokens die vanuit Tokens Studio en Figma gegenereerd worden.
Deze tokens kunnen gebruikt worden in combinatie met je eigen tokens of om je eigen variabelen te bouwen.  
_Let op_: Sommige mapnamen bevatten nog `(beta)`, deze suffix zal in de toekomst verdwijnen, dus het wordt aangeraden deze uit je output te filteren.  
In de [source code op Github](https://github.com/nl-design-system/lux) kan je onze build script(s) inzien, deze worden niet meegeleverd in de package aangezien ze specifiek voor het LUX-project zijn.

Meer informatie over de LUX design tokens en de lagen vind je op de pagina [Design Tokens](https://nl-design-system.github.io/lux/?path=/docs/design-tokens-design-tokens--docs) van onze Storybook.

## CSS

In de map `/dist/` staan de CSS-variabelen in bestanden per thema[^1], mode (light, dark) en viewport (xs, sm, md, lg, xl). Bijvoorbeeld `/dist/logius/dark/lg.css`.
Naast de variabelen in de `:root` is er ook een versie waarbij de variabelen in een thema-mode-classname staan. Bijvoorbeeld `/dist/logius/dark/lg-theme.css`, met de selector `.lux-theme--logius-dark`.
Voor beide versies zijn er index-bestanden gemaakt per thema. Bij de `:root`-versie worden de mode-versies aan de hand van in de browser ingestelde color-scheme geïmporteerd. Bij de "theme"-versie worden beide mode-versies ingeladen.
Binnenkort komen nog de viewports bij de index-bestanden.

### Gebruik

Om de design tokens als CSS-variabelen te gebruiken zijn er verschillende methoden. Een aantal voorbeelden.

In de `<head>` sectie van je HTML-pagina, vanaf de Unpkg CDN:

```html
<!-- :root-versie -->
<link rel="stylesheet" href="https://unpkg.com/@lux-design-system/design-tokens/dist/logius/index.css" />
```

```html
<!-- theme-versie -->
<link rel="stylesheet" href="https://unpkg.com/@lux-design-system/design-tokens/dist/logius/index-theme.css" />
```

```html
<!-- theme -->
<div class="lux-theme--logius-dark">...</div>
```

Via Webpack in Create React App en geïnstalleerd via een [package manager](#installeren):

```javascript
import "@lux-design-system/design-tokens/dist/logius/index.css";
```

### Fonts

Een aantal tokens referen naar het fonts van de Rijksshuisstijl. Daarvoor installeer je het [`@lux-design-system/font`-package](https://www.npmjs.com/package/@lux-design-system/font).

Gebruik je een ander font? Voeg de volgende aanpassingen toe in je website of applicatie, bijvoorbeeld:

```css
:root {
  --lux-font-family-primary: "Cormorant Infant", "Times New Roman", serif;
}
```

[^1]: NLdoc thema's staan in de map `nldoc`.
