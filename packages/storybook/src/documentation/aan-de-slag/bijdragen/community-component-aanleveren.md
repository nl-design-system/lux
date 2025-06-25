# Community Component Aanleveren

[github-button]: https://github.com/nl-design-system/lux/tree/main/packages/storybook/src/web-components/button/button.mdx#L13
[lux-button]: /docs/web-components-button--docs
[mdn-slots]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot
[nlds-components]: https://www.nldesignsystem.nl/componenten/
[nlds-estafettemodel]: https://www.nldesignsystem.nl/handboek/estafettemodel
[nlds-utrecht-testing]: https://nl-design-system.github.io/utrecht/storybook-react/index.html?path=/docs/react-testing--docs
[stencil]: https://stenciljs.com/docs/introduction
[stencil-slots-doc]: https://stenciljs.com/docs/docs-json#slots
[tsdoc]: https://tsdoc.org/
[kwaliteit-componenten]: /docs/lux-kwaliteitseisen-componenten--docs

Als gebruiker van LUX mag je ook componenten aandragen. Mocht het component al beschikbaar zijn in de [NL Design System community][nlds-components] is deze geschikt om bij LUX te betrekken. Dat kunnen wij voor je doen maar dat kan je zelf ook. Dan hoef je niet op ons te wachten. Handig toch?!

Natuurlijk willen wij wel dat alle componenten op de zelfde wijze gebouwd worden zodat wij het allemaal makkelijker kunnen onderhouden. Om consistentie te waarborgen vertellen wij hier hoe je zelf een NLDS community component kunt aandragen als LUX component. Hier zijn de stappen.

Voordat we componenten aan LUX toevoegen moeten een aantal checks, zoals beschreven op [Kwaliteitseisen Componenten][kwaliteit-componenten], uitgevoerd zijn.
We helpen je graag met het uitvoeren van deze checks, maar je kan gerust ook zelf al proberen om de Onderzoeksfase te doorlopen en de resultaten met ons bespreken.

Als de Onderzoeksfase is afgerond en het component geschikt is voor LUX zullen grofweg de volgende stappen doorlopen worden om het component in LUX te ontwikkelen:

- Samen vaststellen op welke manier het component ontworpen en gebouwd zal worden.
- Samen verdelen we de taken. In meeste gevallen bouw jij zelf het component in de LUX repository op in het framework dat je zelf wilt gebruiken.
- Review van het component door LUX en eventueel andere LUX gebruikers.
- Release van het component in de lux NPM packages.

<!-- > **Waarom een wrapper?**
>
> Waarom gebruiken we niet direct het component vanuit de community? Is een LUX component nog wel nodig om het NLDS community component te gebruiken? Kan ik het niet gewoon zelf maken? -->

## Contact Opnemen

Als allereerste is het belangrijk om contact met ons op te nemen. Dan weten wij waar iedereen mee bezig is en voorkomen we samen dat verschillende teams het zelfde werk gaan uitvoeren.

Wij kijken samen naar onze backlog en maken een story aan als deze nog niet bestaat voor het benodigde component. Daarna helpen wij je met opstarten zodat jij je kan bezighouden met wat voor jou belangrijk is; het component zo snel en zo goed mogelijk aanbieden zodat jij het in gebruik kan nemen.

## Community Component Uitzoeken

Op het [componentenoverzicht van NLDS][nlds-components] staan verschillende componenten. Sommigen zullen anders genaamd zijn dan jij zal verwachten. Neem de lijst dus goed door. Zorg er in ieder geval voor dat je alleen componenten kiest met de status `Community`, `Candidate`, of `Hall of Fame`. Deze statussen komen uit het [NLDS Estafettemodel][nlds-estafettemodel].

### Installeren

De componenten van de volgende partijen uit de NLDS community zijn al beschikbaar in LUX componenten:

- Gemeente Utrecht

#### Nieuwe Community Provider Aansluiten

Kies altijd een web component. Bij gelijke geschiktheid kies je een component van een provider die al is aangeloten. In het geval je component kiest dat niet door een van bovenstaande providers wordt aangeboden moet je deze aansluiten. Bekijk het component op Storybook van de provider en zoek uit hoe je deze kan installeren. Daarna voer je stappen uit:

1. In `/packages/web-components-stencil` voer je het `pnpm add -D xxx` commando uit, waar `xxx` de naam van de package is. Bijvoorbeeld voor Gemeente Utrecht is het `pnpm add -D @utrecht/web-components-library-stencil`;
1. Voeg de provider toe aan de bovenstaande lijst;
1. In `packages/web-components-stencil/src/global/app.ts` voeg je de volgende regels toe:

```js
import { defineCustomElements as defineXXXCustomElements } from "xxx"; // <--

export default function () {
  //...
  defineXXXCustomElements(); // <--
}
```

## LUX Wrapper Bouwen

Hier begint het echte werk. Met behulp van [StencilJS][stencil] ga je een web component maken die het NLDS community component omsluit en de LUX design tokens erop toepast.

### Scaffolding

Ga naar `packages/web-components-stencil` en voer het commando `pnpm run generate` uit. Gebruik de volgende instellingen:

- Tag name (dash-case): `lux-[component-naam]`
- Sass format: `*.scss Format`
- Additional files:
  - `Stylesheet (.scss)`
  - `Spec test (.spec.tsx)`

Er worden een aantal bestanden voor je gegenereerd in `/components/components`. Verplaats deze bestanden naar `/packages/web-components-stencil/src/components`. Verwijder overal de `lux` prefix, behalve waar het de naam van het HTML element beschrijft.

> **Let op:**
>
> Kijk hierbij ook naar referenties en relatieve paden tussen de verschillende bestanden.

In het gegenereerde SCSS bestand voeg je de volgende styling rules toe:

```css
:host {
  display: contents; /* of block|inline|etc. als dat passend is */
  /* Zoek op MDN een passende appearance of sluit uit */
  appearance:;
}

:host([hidden]) {
  display: none !important;
}
```

Deze zijn belangrijk. `display: contents` neemt het `display` type over van het eerste kind-element van het web component. `appearance` vertelt de browser hoe het component gezien moet worden.

### API Bepalen

Zoek de broncode van het component op en bekijk de API. Kijk hierbij naar de `Prop`s, `Method`s, `Event`s, en `<slot>`s en naar wat wij kunnen overnemen. We kunnen samen beslissen of de naamgeving past bij LUX of dat we het iets moeten aanpassen.

#### Props en Methods

Neem alle props en methods van het component over, maak geef deze ook door aan het nieuwe LUX component.

```tsx
class MyComponent {
  private providerMyComponentElement!: HTMLProviderMyComponentElement;

  @Prop() public readonly value: string;

  @Method()
  public clear(): void {
    this.providerMyComponentElement.clear();
  }

  render() {
    const { value } = this;

    return (
      <provider-my-component
        ref={(elm) => (this.providerMyComponentElement = elm)}
        value={value}
      ></provider-my-component>
    );
  }
}
```

#### Slots

[Slots][mdn-slots], native voor web components mét ShadowDOM, bieden een plek om HTML content in het component toe te passen. Ze zijn vergelijkbaar met Angular's `ngTransclude`, render functions in React, of `slot`s in VueJS. Als het provider's component slots heeft kun je deze ook doorgeven met LUX component slots.

```tsx
render() {
  return (
    <provider-my-component>
      {/* Default slot */}
      <slot />
      {/* Named slot */}
      <slot name="named-slot" slot="named-slot" />
    </provider-my-component>
  )
}
```

#### Custom Event Propagation

Sommige community componenten maken gebruik van custom DOM events om aan te geven dat er iets is gebeurd binnen het component. Deze custom events kun je herkennen aan de `@Event` decorator in de bron code. Vang al deze events op binnen de wrapper met de `@Listen` decorator en gooi het LUX equivalent van dit event uit. Zorg er ook voor dat je eventuele event details mee geeft als dat van toepassing is.

##### Voorbeeld

Je maakt een wrapper voor het `provider-duck` component om het `lux-duck` component te bouwen. Het `provider-duck` component heeft een event genaamd `provider-quack` dat moet worden uitgezonden als het `lux-quack` event. Onderstaand voorbeeld laat zien hoe dat werkt.

```tsx
import { h, Component, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'lux-duck',
})
class MyComponent {
  ...
  /**
   * Laat de gebruiker weten dat de eend heeft gekwaakt
   */
  @Event() luxQuack: EventEmitter;

  @Listen('providerQuack')
  onProviderQuack(evt: CustomEvent): void {
    evt.stopImmediatePropagation();

    if (!evt.defaultPrevented) {
      const { detail } = evt;
      this.luxQuack.emit(detail);
    }
  }

  render() {
    return <provider-duck></provider-duck>
  }
}
```

## Testen

Hoewel we een werkend en doorgetest component vaan een provider overnemen moeten we wel testen of de LUX wrapper geen mogelijkheden per ongeluk afschermt. Het is dus van belang om de wrapper die je schrijft te testen. Gemeente Utrecht heeft daar een goed voorbeel van gedocumenteerd. Volg de beschreven stappen op de [Storybook van Gemeente Utrecht (Engels)][nlds-utrecht-testing].

## Documenteren

Documentatie is het belangrijkste product dat een design system heeft. Zonder goede documentatie is het product niet goed bruikbaar, komen er veel onnodige vragen en worden er onterecht bugs gerapporteerd. Een goede duimregel is "begrijp ik dit zelf over 3 maanden ook nog?". Vooralsnog documenteren wij alleen in de codebase met [TSDoc][tsdoc] en hier op Storybook.

### TSDoc

Schrijf [TSDoc][tsdoc] voor elk stukje van de API. Als het beschikbaar is bij het component van de provider kun je dat overnemen. Let er op dat je alle publieke API van het component documenteert. Dat zijn de `Prop`s, `Method`s, `Event`s, en `slot`s. Omdat `slot`s niet expliciet onderdeel zijn van een Stencil component's API worden die beschreven op de [TSDoc van de component `class`][stencil-slots-doc].

### Storybook

Storybook is de voornaamste vorm van LUX documentatie. Begin met het aanmaken van het beginpunt voor je component. Dit bestand heet `/packages/storybook/src/web-components/[component-naam].stories.tsx` en heeft onderstaande content. Voer het `pnpm run storybook` commando uit in de project root om de documentatie van je huidige branch te zien en volgen.

```tsx
import { LuxComponentNaam as ComponentNaam } from "@lux-design-system/web-components-react";
import type { Meta, StoryObj } from "@storybook/react";

const LuxComponentNaam = (props: PropsWithoutRef<JSX.LuxComponentNaam>) => <ComponentNaam {...props} />;

const meta = {
  title: "Web Components/Login Link",
  id: "web-components-login-link",
  component: LuxComponentNaam,
} satisfies Meta<typeof LuxComponentNaam>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  args: {
    // ...
  },
  parameters: {
    docs: {
      sourceState: "shown",
    },
  },
};
```

#### Provider's Content

Het doel van NL Design System is delen wat je hebt met de rest van de community. Dat zijn niet alleen je componenten en design tokens, maar ook bijvoorbeeld je vakkennis, onderzoeken en resultaten, documentatie, en toolset. Sommige providers van de NLDS community bieden ook hun documentatie aan om te hergebruiken. Kijk altijd eerst of dit voor jouw component ook het geval is. Als het beschikbaar en toereikend is kun je dit 1 op 1 overnemen.

[Een goed voorbeeld][github-button] is het [button component][lux-button], welke zijn documentatie ook van de provider Gemeente Utrecht heeft overgenomen.

#### Playground

De playground is misschien wel de belangrijkste story van een component. Het laat de default state zien en biedt de mogelijkheid om deze aan te passen.

```ts
const Playground: Story = {
  name: 'Playground',
  args: {
    ..., // component props and their default values
  },
  parameters: {
    docs: {
      sourceState: 'shown',
    },
  },
}
```

#### Visual Regression Testing

Niet per se documentatie maar wel onderdeel van Storybook. Visuele regressietesten geven de zekerheid dat visuele wijzigingen in een component alleen worden gemaakt als dat de bedoeling is. LUX maakt gebruik van Chromatic om deze tests uit te voeren.

> **Let op!**
>
> Door gebruik te maken van `createVisualRegressionStory` maak je een story die niet in het menu voorkomt. Echter kan je er nog steeds naartoe navigeren door in de URL `--docs` te vervangen voor `--visual`.

```tsx
import { createVisualRegressionStory, VisualRegressionWrapper } from '../../utils/';

export const Visual = createVisualRegressionStory(() => (
  <VisualRegressionWrapper className={`lux-theme--logius-light`}>
    {...}
  </VisualRegressionWrapper>
));
```

#### Design Tokens

De design tokens zijn de kracht van elk LUX component. Alle visuele aspecten van het component wordt bepaald door de design tokens en zorgen ervoor dat het component in meerdere contexten is in te zetten. Bijvoorbeeld in die van Logius, Digid, MijnOverheid, KOOP of zelfs door deelnemers van de NLDS community.

Maak een bestand genaamd `/packages/storybook/web-components/[component-naam]/tokens.json` en reflecteer de juiste structuur in JSON formaat. Gebruik hiervoor `/proprietary/design-tokens/src/imported/components/[component-naam].json` en verander het naar het formaat in bvb. `/packages/storybook/web-components/login-link/tokens.json`. Wij kunnen je hierbij helpen. Dit bestand importeer je in je `.stories.tsx` bestand.

```ts
import tokens from '@lux-design-system/design-tokens/dist/index.json';
import tokensDefinition from './tokens.json';
import { createDesignTokensStory, createVisualRegressionStory, VisualRegressionWrapper } from '../../utils/';

const meta = {
  ...,
  parameters: {
    tokens,
    tokensDefinition,
    tokensPrefix: 'lux-[component-naam]',
  },
  ...,
};

export const DesignTokens = createDesignTokensStory(meta);
```
