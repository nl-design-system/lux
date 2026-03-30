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

Er is een script, `merge-token-sets.mjs` waarmee de RHC design tokens (uit de package `@rijkshuisstijl-community/design-tokens`) lokaal worden
samengevoegd met de overwrites uit de projecten. Zo kunnen designers en developers samenwerken met Figma (en Tokens
Studio) en code. Daardoor zijn de volgende exports beschikbaar:

### CSS

In de map `/dist/` staan de CSS-variabelen, die kun je zo importeren en in je project gebruiken.

#### Gebruik

Om de design tokens als CSS-variabelen te gebruiken zijn er verschillende methoden. Een aantal voorbeelden.
Vervang in deze voorbeelden `.css` door `.scss` als je Sass wilt gebruiken.

##### Via Webpack

Als je de tokens installeert (en de afhankelijkheid beheert) via een [package manager](#installeren).
Root CSS-variabelen inladen:

```javascript
import "@lux-design-system/lux-community-design-tokens/dist/index.css";
```

Of thema-specifieke CSS-variabelen inladen:

```javascript
import "@lux-design-system/lux-community-design-tokens/dist/bwbapp/index.css";
```

##### Via Unpkg (unsupported)

In de `<head>` sectie van je HTML-pagina.
Root CSS-variabelen inladen:

```html
<link rel="stylesheet" href="https://unpkg.com/@lux-design-system/lux-community-design-tokens/dist/variables.css" />
```

Thema-specifieke CSS-variabelen inladen:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@lux-design-system/lux-community-design-tokens/dist/bwbapp/variables.css"
/>
```

Thema instellen:

```html
<div class="lux-theme--logius-dark">...</div>
```
