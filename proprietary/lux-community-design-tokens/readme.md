# Community Design Tokens voor het LUX Design System

Deze package bevat de Community Design Tokens van het LUX Design System in verschillende formaten.  
Hier kunnen alle Logius-projecten op een NLDS manier werken aan hun look en feel.
Per team (=app) wordt één token file beheerd: `merged/<app>.tokens.json`. Daarin staan de RHC token sets (uit de
package `@rijkshuisstijl-community/design-tokens`) samen met de eigen token sets, `$themes` en `$metadata`. De RHC
(base) token sets mogen lokaal niet worden aangepast: het script validate-token-sets controleert dat deze exact
overeenkomen met de package, en de github action accepteert het dan ook niet zodra er dingen van RHC worden
overschreven. In plaats hiervan wordt geadviseerd om eigen token sets te maken (dat zijn de top level keys van het
JSON-object), bijvoorbeeld met naam `overrides/*`, en die dan voor jouw thema aan te zetten.

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

Je beheert je token sets en thema's rechtstreeks in `merged/<app>.tokens.json`, bijvoorbeeld via Figma (en Tokens
Studio) of direct in code. Bij de build wordt de transformatie van token file naar exports gerund en zo komen de
hierboven genoemde exports (.css en .scss) beschikbaar.

Er is een script, `validate-token-sets.mts`, dat bewaakt dat de token file consistent blijft:

- de RHC (base) token sets moeten exact overeenkomen met `@rijkshuisstijl-community/design-tokens` (fout);
- token sets die ontbreken in `$metadata.tokenSetOrder` worden gemeld (fout, zelf toevoegen op de juiste plek omdat de
  volgorde de resolutie in Tokens Studio bepaalt);
- entries in `$metadata.tokenSetOrder` zonder bijbehorende token set worden automatisch verwijderd (met `--check` wordt
  dit een fout in plaats van een fix);
- eigen (team) token sets die in geen enkel thema worden gebruikt, worden als waarschuwing gemeld.

Voor het updaten van de RHC package is er het script `update-base-token-sets.mts`: dat installeert de nieuwe versie,
ververst de base token sets en bewaart de oude waarden van gewijzigde tokens in `overrides/deprecated changes/<oude versie>`,
zodat teams pas migreren wanneer ze er klaar voor zijn (zie [CONTRIBUTING.md](CONTRIBUTING.md)).

Als voorbeeld kun je kijken naar de token set `overrides/ridiculous-font-size` in `merged/voorbeeld.tokens.json`: daar
staat namelijk maar één overwrite in. Je kunt zien dat de font-size-md variable inderdaad in
`dist/voorbeeld/variables.scss` (en ook in de thema-subdir `/voorbeeld-thema-niet-gebruiken`) op `53.1px` wordt gezet,
zoals in de json wordt gevraagd. Uiteraard is dit puur als voorbeeld, zodat je makkelijk overal "53.1px" kunt
terugvinden.
