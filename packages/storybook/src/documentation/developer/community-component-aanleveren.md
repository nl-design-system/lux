# Community Component Aanleveren

[mdn-slots]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot
[nlds-components]: https://www.nldesignsystem.nl/componenten/
[nlds-estafettemodel]: https://www.nldesignsystem.nl/handboek/estafettemodel
[stencil]: https://stenciljs.com/docs/introduction

Als gebruiker van LUX mag je ook componenten aandragen. Mocht het component al beschikbaar zijn in de [NL Design System community][nlds-components] is deze geschikt om bij LUX te betrekken. Dat kunnen wij voor je doen maar dat kan je zelf ook. Dan hoef je niet op ons te wachten. Handig toch?!

Natuurlijk willen wij wel dat alle componenten op de zelfde wijze gebouwd worden zodat wij het allemaal makkelijker kunnen onderhouden. Om consistentie te waarborgen vertellen wij hie hoe je zelf een NLDS community component kunt aandragen als LUX component. Hier zijn de stappen.

> **Waarom een wrapper?**
>
> Waarom gebruiken we niet direct het component vanuit de community? Is een LUX component nog wel nodig om het NLDS community component te gebruiken? Kan ik het niet gewoon zelf maken?

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
import { defineCustomElements as defineXXXCustomElements } from "xxx";

// en
export default function () {
  //...
  defineXXXCustomElements();
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

Er worden een aantal bestanden voor je gegenereerd. Je mag overal de `lux` prefix verwijderen, behalve in StencilJS's `@Component` class decorator.

> **Let op:**
>
> Kijk hierbij ook naar referenties en relative paden tussen de verschillende bestanden.

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

...

## Documenteren

...

### TSDoc

...

### Storybook

...

#### Provider's Content

...

#### Playground

...

#### Visual Regression Testing

...

#### Design Tokens

...
