# Community Design Tokens voor het LUX Design System

Deze package bevat de Community Design Tokens van het LUX Design System in verschillende formaten.  
Hier kunnen alle Logius-projecten op een NLDS manier werken aan hun look en feel.
Intern worden door het script merge-token-sets de RHC-tokens samengevoegd met de lokale tokens tot één bestand. Het is
dan ook belangrijk dat de token sets niet in elkaars vaarwater zitten: stop in `koop.figma.tokens.json` dan ook geen
token sets (dat zijn de top level keys van het JSON-object) die al in `figma.tokens.json` in de
`rijkshuisstijl-community` repo voorkomen. Om dit te bewaken is in het merge-token-sets script een voorwaarde opgenomen,
zodat de github action eigenlijk al niet accepteert zodra er dingen van RHC worden overschreven.
In plaats hiervan wordt geadviseerd om eigen token sets te maken, bijvoorbeeld met naam `overrides/*`, en die dan voor
jouw thema aan te zetten.

## Installeren

### NPM

`npm install @lux-design-system/lux-community-design-tokens --save-dev`

### Yarn

`yarn add @lux-design-system/lux-community-design-tokens --dev`

### PNPM

`pnpm add @lux-design-system/lux-community-design-tokens --save-dev`

## Genereren

Er komt een script waarmee de RHC design tokens (uit een andere package `@lux-design-system/design-tokens` in deze zelfde repository) lokaal worden
samengevoegd met de overwrites uit de projecten. Zo kunnen designers en developers samenwerken met Figma (en Tokens
Studio) en code.
Dan zijn de volgende producten beschikbaar:

### JSON

Tokens die vanuit Tokens Studio en Figma gegenereerd worden.
Meer informatie over de LUX design tokens en de lagen vind je op de pagina [Design Tokens](https://nl-design-system.github.io/lux/?path=/docs/design-tokens-design-tokens--docs) van onze Storybook.

### CSS

In de map `/dist/` staan de CSS-variabelen, die kun je zo importeren en in je project gebruiken.

#### Gebruik

Om de design tokens als CSS-variabelen te gebruiken zijn er verschillende methoden. Een aantal voorbeelden.

In de `<head>` sectie van je HTML-pagina, vanaf de Unpkg CDN:

```html
<!-- :root-versie -->
<link rel="stylesheet" href="https://unpkg.com/@lux-design-system/lux-community-design-tokens/dist/logius/index.css" />
```

```html
<!-- theme-versie -->
<link
  rel="stylesheet"
  href="https://unpkg.com/@lux-design-system/lux-community-design-tokens/dist/logius/index-theme.css"
/>
```

```html
<!-- theme -->
<div class="lux-theme--logius-dark">...</div>
```

Via Webpack als je installeert via een [package manager](#installeren):

```javascript
import "@lux-design-system/lux-community-design-tokens/dist/logius/index.css";
```
