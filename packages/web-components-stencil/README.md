# Web Components

Deze package bevat de Web components van het LUX Design System. Het bevat elk web component, maar elk component wordt ingeladen als het gebruikt wordt.

## Installeren

Om Lux in je Stencil-project te gebruiken doe je het volgende:

### NPM

`npm install --save-dev --save-exact @lux-design-system/web-component-library-stencil`

### Yarn

`yarn add install --dev --exact @lux-design-system/web-component-library-stencil`

### PNPM

`pnpm add --save-dev --save-exact @lux-design-system/web-component-library-stencil`

In een/het `app.ts`-bestand voeg je het volgende toe:

```js
import { defineCustomElements as defineLuxCustomElements } from "@lux-design-system/web-component-library-stencil";

export default function () {
  defineLuxCustomElements();
}
```

Daarna zijn de LUX Webcomponenten direct te gebruiken, bijvoorbeeld:

```js
<lux-login-link agent="digid" />
```

Voor de correcte styling voeg je de CSS uit het [Design-tokens-package](https://www.npmjs.com/package/@lux-design-system/design-tokens) toe aan je project.
