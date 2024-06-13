# Installatiehandleiding

LUX bestaat uit meerdere losse onderdelen. Je kan zelf kiezen welke onderdelen je gebruikt binnen je applicatie.


- Design Tokens
- CSS Styling utilities
- Web componenten

In alle onderstaande URI's kom je `[version]` tegen. Vervang dit met de gewenste versie. Gebruik `latest` om altijd bij te blijven. Of `1` om altijd de laatste versie binnen de major versie `1` te blijven. Dit is de veiligere optie.

## Design Tokens

Wat je keuze ook is, design tokens zijn altijd nodig. Voeg de volgende regel toe aan je `<head />` tag.

```html
<link rel="stylesheet" type="text/css" href="https://[some cdn host]/lux/[version]/tokens.css" />
```

### Dark Mode

Als je applicatie dark mode ondersteunt kun je de design tokens daarvoor ook gebruiken. Deze overschrijven de nodige tokens uit bovenstaande stylesheet.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://[some cdn host]/lux/[version]/tokens-dark.css"
  media="(prefers-color-scheme: dark)"
/>
```

## CSS Styling Utilities

> **Let op!** De CSS Styling Utilities zijn afhankelijk van de [design tokens](#design-tokens). Zorg er voor dat deze ook beschikbaar zijn.

```html
<link rel="stylesheet" type="text/css" href="https://[some cdn host]/lux/[version]/utilities.css" />
```

## Web Componenten

LUX maakt gebruikt van lazy loading. Dat wil zeggen dat de code van een component pas wordt gedownload als het component in de DOM staat. Daarmee voorkomen we dat je alle componenten moet inladen om er vervolgens maar een paar te gebruiken.

Er zijn verschillende manieren om de LUX web componenten te installeren in je applicatie. Via NPM of via CDN.

### NPM

```sh
npm install @lux/web-components-stencil
yarn add @lux/web-components-stencil
pnpm add @lux/web-components-stencil
```

Zoek het moment op dat je de custom elements wilt initialiseren en ga naar het bestand dat dit moment bedient.

```ts
import { defineCustomElements } from "@lux/web-components-stencil/loader/index.js";

// ...

defineCustomElements();
```

### CDN

```html
<script src="https://[some cdn host]/lux/[version]/web-components-stencil.js"></script>
<script>
  defineCustomElements();
</script>
```
