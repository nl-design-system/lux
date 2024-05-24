# Community Componenten

[estafette-model]: https://www.nldesignsystem.nl/handboek/estafettemodel
[lux-naamgeving]: /docs/developer-naamgeving-design-tokens--docs
[lux-design-tokens]: /docs/design-tokens-design-tokens--docs
[nlds]: https://www.nldesignsystem.nl/
[nlds-components]: https://www.nldesignsystem.nl/componenten
[storybook-utrecht]: https://nl-design-system.github.io/utrecht/storybook/
[utrecht-badge-component]: https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-badge-tokens--docs

Momenteel biedt LUX slechts een paar componenten aan. Mettertijd zullen dit er meer en meer worden. In de tussentijd kun je gebruik maken van de componenten die in het [NL Design System][nlds] (NLDS) worden aangeboden. Bijvoorbeeld die van [gemeente Utrecht][storybook-utrecht]. Deze worden al veel in de NLDS community gebruikt. Deze componenten zijn wel volgens het design van [gemeente Utrecht][storybook-utrecht]. Dit moet nog aangepast worden naar de stijl van LUX.

Hierin moet je een aantal stappen nemen:

1. <b>Zoek het gewenste component bij [NLDS][nlds-components]</b>
1. <b>Installeer het component zoals staat beschreven bij de aanbieder</b>
   <br>**Let op:** Het heeft altijd de voorkeur om een NLDS [_Hall of Fame_][estafette-model] component te gebruiken als die beschikbaar is
1. <b>Als LUX voor het betreffende component nog geen design tokens aanbiedt</b> kun je 2 dingen doen:
   1. Handmatig de juiste design tokens toepassen. Volg het [onderstaande voorbeeld](#zelf-doen);
   1. Wachten tot LUX de design tokens aanbiedt.<br>Natuurlijk proberen wij deze z.s.m. aan te bieden.
1. <b>Neem contact op met LUX</b> en laat weten welk component je gebruikt

## Contact opnemen met LUX

<!-- TODO: (LUX-257): linken naar contact-pagina -->

Laat het LUX altijd weten welk component je gebruikt. _Ook als wij al weten dat het component wordt gebruikt_ door een ander team binnen Logius. Het is voor ons belangrijk om te weten wie welke [community componenten][nlds-components] gebruikt. Dat helpt ons met het bepalen van de prioriteiten. Dus: **geef het altijd en tijdig aan** als je [community componenten][nlds-components] gebruikt

## Zelf doen

De meeste aanbieders van [community componenten][nlds-components] laten op hun Storybook zien welke design tokens er beschikbaar zijn voor hun componenten. Pak de lijst met tokens van het component en vul de waarden met de common design tokens van LUX. Je UX designer kan je helpen bepalen welke je moet gebruiken.

### Voorbeeld

Als voorbeeld gebruiken wij de CSS variabelen van het [`utrecht-badge` component][utrecht-badge-component]. Zoals je ziet staat de CSS property waarop het design token wordt toegepast ook in de naam van het token. Om de juiste LUX design tokens toe te passen is het belangrijk om de [naamgeving van LUX design tokens][lux-naamgeving] te kennen.

> **Disclaimer:** Hoewel onderstaand voorbeeld de [LUX design tokens][lux-design-tokens] toekent aan die van het community component is het slechts een voorbeeld. Dit zijn niet per se de tokens die LUX zou toepassen.

```css
.your-theme {
  --utrecht-badge-background-color: var(--lux-color-brand-default);
  --utrecht-badge-border-radius: var(--lux-border-radius-default);
  --utrecht-badge-color: var(--lux-color-foreground-onEmphasis);
  --utrecht-badge-font-size: var(--lux-font-size-sm);
  --utrecht-badge-font-weight: var(--lux-font-weight-default);
  --utrecht-badge-line-height: var(--lux-font-line-height-s);
  --utrecht-badge-padding-block: var(--lux-space-05-x);
  --utrecht-badge-padding-inline: var(--lux-space-05-x);
  --utrecht-badge-text-transform: inherit;
}
```
