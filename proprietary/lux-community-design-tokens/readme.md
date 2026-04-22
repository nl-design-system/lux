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

## Installatie

### NPM

`npm install @lux-design-system/lux-community-design-tokens --save-dev`

### Yarn

`yarn add @lux-design-system/lux-community-design-tokens --dev`

### PNPM

`pnpm add @lux-design-system/lux-community-design-tokens --save-dev`

## Gebruik

In de map `/dist/` staan de CSS-variabelen, die kun je zo importeren en in je project gebruiken. Om de design tokens als CSS-variabelen te gebruiken zijn er verschillende methoden.

### Via Webpack

Als je de tokens installeert (en de afhankelijkheid beheert) via een [package manager](#installatie).
Root CSS-variabelen inladen:

```javascript
import "@lux-design-system/lux-community-design-tokens/dist/voorbeeld/variables.css";
```

Of thema-specifieke CSS-variabelen inladen:

```javascript
import "@lux-design-system/lux-community-design-tokens/dist/voorbeeld/voorbeeld-thema-niet-gebruiken/variables.css";
```

Vervang in bovenstaande voorbeelden `.css` door `.scss` als je Sass wilt gebruiken.

### Via Unpkg (unsupported & niet aangeraden voor productie)

In de `<head>` sectie van je HTML-pagina.
Root CSS-variabelen inladen:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@lux-design-system/lux-community-design-tokens/dist/voorbeeld/variables.css"
/>
```

Thema-specifieke CSS-variabelen inladen:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@lux-design-system/lux-community-design-tokens/dist/voorbeeld/voorbeeld-thema-niet-gebruiken/variables.css"
/>
```

Thema instellen:

```html
<div class="lux-theme--logius-dark">...</div>
```

## Zelf token sets en thema's maken

Er is een script, `merge-token-sets.mjs` waarmee de RHC design tokens (uit de package `@rijkshuisstijl-community/design-tokens`) worden
samengevoegd met de overwrites uit jouw project. Zo kunnen designers en developers samenwerken met Figma (en Tokens
Studio) en code. Na samenvoeging wordt de transformatie van token file naar exports gerund en zo komen de hierboven genoemde exports (.css en .scss) beschikbaar.

Als voorbeeld hiervoor kun je kijken naar `src/voorbeeld.figma.tokens.json`: daar staat namelijk maar één overwrite in
en maar 1 thema. Je kunt zien dat de font-size-md variable inderdaad in `dist/voorbeeld/variables.scss` (en ook in de
thema-subdir `/voorbeeld-thema-niet-gebruiken`) op `53.1px` wordt gezet, zoals in de json wordt gevraagd. Uiteraard is
dit puur als voorbeeld, zodat je makkelijk overal "53.1px" kunt terugvinden.
