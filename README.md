<!-- @license CC0-1.0 -->

# LUX Design System

> Hét Logius Design System

LUX staat voor "Logius UX", ofwel "Logius User eXperience" en is het design system dat Logius-breed ingezet wordt.

Dit design system is gebaseerd op het NL Design System architectuur.
Voor meer informatie over het NL Design System ga naar [nldesignsystem.nl](https://www.nldesignsystem.nl/), [Github](https://github.com/nl-design-system) en `#nl-design-system` op Slack via [praatmee.codefor.nl](https://praatmee.codefor.nl)!

Voor meer informatie en contact met het team kom naar onze Slack `LUX` workspace via [logius-ux.slack.com](https://logius-ux.slack.com/)!

## Getting started with LUX Design System

### Requirements

You need to have the following tools installed to run Storybook locally:
De volgende onderdelen moeten geinstalleerd zijn om Storybook lokaal te kunnen draaien:
Tip: Installeer Node.js via [Volta](https://volta.sh/) of [NVM](https://github.com/nvm-sh/nvm/blob/master/README.md).

- Git
- [Node.js and npm](https://nodejs.org/en/)
- `pnpm`, `npm install -g pnpm`

### Run storybook

- Install dependencies: `pnpm install`
- Run storybook: `npm run storybook`

## Documentatie

### Mappenstructuur

Algemene documentatie komt in de map `packages/storybook/src/documentation`
Documentatie over componenten komt in de map `packages/storybook/src/web-components` en elk component krijgt zijn eigen map.

### Design tokens

De design tokens staan in map `packages/proprietary/design-tokens`. De tokens zelf worden in Figma gedefinieerd en daaruit geexporteerd als json-bestanden en vanuit `./src` gebuild naar `./dist` als css-bestanden.

## Versioning

Lees meer [over onze versioninering](SEMVER.md).

## Code of Conduct

We beloven om te handelen en te communiceren op een manier die bijdraagt aan een open, gastvrije, diverse, inclusieve en gezonde community. Lees [onze Code of Conduct](CODE_OF_CONDUCT.nl.md).

## License

This project is free and open-source software licensed under the [European Union Public License (EUPL) v1.2](LICENSE.md). Documentation is licensed as [Creative Commons Zero 1.0 Universal (`CC0-1.0`)](https://creativecommons.org/publicdomain/zero/1.0/legalcode)

For information about proprietary assets in this repository, please carefully read the [NOTICE file](NOTICE.md).
