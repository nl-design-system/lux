# Design Tokens

[estafette-model]: https://www.nldesignsystem.nl/handboek/estafettemodel
[lux-naamgeving]: /docs/developer-naamgeving-design-tokens--docs
[nlds]: https://www.nldesignsystem.nl/
[storybook-utrecht]: https://nl-design-system.github.io/utrecht/storybook/

De basis van elk design system is design tokens. Zo ook die van LUX. Design tokens bepalen hoe je applicatie of website er uit ziet. Ze vertalen de designkeuzes vast in code. Om gebruik te maken van de LUX design tokens moet je deze eerst installeren.

## Community Componenten

LUX biedt momenteel sleecht een paar componenten aan. Mettertijd zullen dit er meer en meer worden. In de tussentijd kun je gebruik maken van de componenten die in het [NL Design System][nlds] worden aangeboden. Bijvoorbeeld de de [gemeente Utrecht][storybook-utrecht] heeft heel veel componenten beschikbaar. Deze worden al veel in de NLDS community gebruikt, maar zijn wel volgens het design van [gemeente Utrecht][storybook-utrecht].

Hierin moet je een aantal stappen nemen:

1. **Installeer het component zoals staat beschreven bij de aanbieder;**<br>**Let op:** Het heeft altijd de voorkeur om een [_Hall of Fame_][estafette-model] component van NL Design System als die beschikbaar is.
1. **Laat LUX weten welk component je gebruikt**<br>
   _Ook als wij al weten dat het component wordt gebruikt_ door een ander team binnen Logius. Het is voor ons belangrijk om te weten wie welke community componenten gebruikt. Dat helpt ons met het bepalen van de prioriteiten;
1. Als LUX nog geen design tokens aanbiedt voor het betreffende component kun je 2 dingen doen:
   1. Handmatig de juiste design tokens toepassen<br>Zoals in [het voorbeeld verderop](#zelf-doen);
   1. Wachten tot LUX de design tokens aanbiedt.<br>Natuurlijk proberen wij deze z.s.m. aan te bieden. Dus: **geef het altijd en tijdig aan!**

## Zelf doen

De meeste aanbieders van community componenten laten zien welke design tokens er beschikbaar zijn voor hun componenten. Pak de lijst met tokens van het component en vul de waarden met de common design tokens van LUX. Je UX designer kan je helpen bepalen welke waar moet komen.

### Voorbeeld

Als voorbeeld gebruiken wij de CSS variabelen van het `utrecht-badge` component. Zoals je ziet staat de property waarop het design token wordt toegepast ook in de naam van het token. Om de juiste LUX desing tokens toe te passen is het belangrijk om de [naamgeving van LUX design tokens][lux-naamgeving] te kennen.

> **Disclaimer:** Hoewel LUX design tokens zijn toegekend aan die van het community component is onderstaand voorbeeld slechts een voorbeeld. Dit zijn niet per se de tokens die LUX zou toepassen.

```css
.your-theme {
  --utrecht-badge-background-color: var(--lux-color-brand-default);
  --utrecht-badge-border-radius: var(--lux-border-radius-default);
  --utrecht-badge-color: var(--lux-color-foreground-on-brand);
  --utrecht-badge-font-size: var(--lux-font-size-sm);
  --utrecht-badge-font-weight: var(--lux-font-weight-default);
  --utrecht-badge-line-height: var(--lux-font-line-height-s);
  --utrecht-badge-padding-block: var(--lux-space-05-x);
  --utrecht-badge-padding-inline: var(--lux-space-05-x);
  --utrecht-badge-text-transform: inherit;
}
```
