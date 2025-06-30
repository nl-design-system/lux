# Design tokens toepassen op je eigen componenten

Je wilt wel LUX gebruiken maar kan nog niet de LUX componenten toepassen. Om het toch mogelijk te maken dat jouw eigen componenten in lijn liggen met de ontwerpen van jouw designer is het mogelijk om direct de design tokens toe te passen op je eigen componenten.

## Disclaimers

**Let op:** LUX is opgezet met het idee dat je LUX componenten gebruikt en zo zelf geen componenten hoeft te onderhouden. Er is daarom, naast deze handleiding, geen support vanuit LUX bij het direct zelf toepassen van design tokens. Houdt er rekening mee dat je zelf de tokens zult moeten bijwerken als er iets wijzigt in jouw thema.

## Hoe werkt het

- Je laadt jouw LUX thema in via een css import
- Je stelt je eigen component tokens op en verwijst deze naar common tokens uit jouw thema
- Je past alleen jouw eigen component tokens toe in je component

## Eigen component tokens opstellen

We raden je aan om in een apart bestand naast je component je eigen component tokens in te stellen:

```bash
/my-button-folder/
├── my-button.css
├── my-button-tokens.css
```

Zo moet je je tokens noemen: [NL Design System Handboek/Design Tokens/Naamgeving](https://nldesignsystem.nl/handboek/design-tokens/#naamgeving):

1. Prefix (verplicht)
2. Block (verplicht)
3. Element (optioneel)
4. Modifier (optioneel)
5. Property (verplicht)

Kijk in de UI kit in Figma voor tokens die LUX gebruikt worden in componenten die LUX beschikbaar heeft en gebruik deze:

```css
.my-button {
  --prefix-button-primary-action-background-color: var(--utrecht-button-primary-action-background-color);
}
```

## Tokens kiezen voor componenten die niet in de LUX UI kit staan

Voor alle componenten in de LUX UI kit heeft LUX al een mapping gemaakt van de common laag naar de component tokens. Als je componenten die niet in de UI kit staan wilt stijlen met design tokens zul je zelf de juiste common tokens moeten toepassen.

Jouw designer krijgt tijdens het inwerken op LUX uitleg over de opzet van design tokens en toepassing binnen jouw thema. Stem met jouw designer af welke tokens je in dit geval het beste kan gebruiken.
