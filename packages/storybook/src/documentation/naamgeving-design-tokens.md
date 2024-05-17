# Naamgeving Design Tokens

[esds-naamgeving]: https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676
[kleurenpallet]: https://www.rijkshuisstijl.nl/publiek/modules/product/DigitalStyleGuide/default/index.aspx?ItemId=6744
[nlds-naamgeving]: https://www.nldesignsystem.nl/handboek/design-tokens/#naamgeving

Om goed onderscheid te kunnen maken tussen tussen verschillende onderdelen van het design zijn de design tokens opgesplits in 3 verschillende lagen: `core`, `common`, en `component`. Elke laag heeft zijn eigen doel en toepassing.

## Core design tokens

De core design tokens zijn de harde waarden. Alle waarden die überhaupt mogelijk zijn om je thema te maken. Het pallet met beschikbare waarden. Dit is de diepste laag en heeft geen referenties naar andere lagen. Er wordt wellicht gerefereerd naar een andere core design token. Voorbeelden van design tokens in die in de `core` laag zijn gedefiniëerd bijvoorbeeld het [beschikbare kleurenpallet][kleurenpallet], de typografie van LUX, en de beschikbare witruimten.

**NB**: De code design tokens zijn statisch. Dat betekent dat ze nooit van waarde zullen veranderen als het thema wijzigt of men wisselt van `light` mode naar `dark`. Het nieuwe thema zal simpelweg verwijzen naar een andere core design token.

Om deze design tokens te benoemen gebruiken wij de zelfde naamgeving als die van het [Eight Shapes Design System][esds-naamgeving], of _ESDS_.

## Common design tokens

Common design tokens beschrijven de design beslissingen die zijn genomen om een bepaald thema te maken. Bijvoorbeeld welk lettertype er als standaard wordt gebruikt of wat de primaire kleur van het thema is. Common design tokens verwijzen voornamelijk naar core design tokens, maar ook naar andere design tokens in de common laag.

De common design tokens worden benoemd volgens de [ESDS design tokens][esds-naamgeving].

## Component design tokens

LUX componenten krijgen hun eigen component design tokens. Deze tokens beschrijven alles van het hoe component er uit ziet. Daarin zijn alle varianten en de mogelijke staat waarin hij verkeert meegenomen. Deze tokens zullen voornamelijk verwijzen naar common design tokens. Af en toe worden ook core design tokens direct gerefereerd.

De naamgeving van LUX component design tokens wijkt af van die van de core en common tokens. Deze tokens zijn genoemd volgens de [tokens van het NL Design System][nlds-naamgeving].

## Afwijking in naamgeving

De naamgeving van [ESDS design tokens][esds-naamgeving] biedt heel veel flexibiliteit en begrijpbaarheid. Het is duidelijk welk onderdeel van de token onder welk kopje valt en wat de volgordelijkheid is. Bij de naamgeving van de [NLDS design tokens][nlds-naamgeving] vinden wij dat niet altijd. Omdat wij onze componenten &mdash; en de bijbehorende tokens &mdash; aanbieden bij het NL Design System houden wij voor deze laag wel hun naamgeving aan. Daardoor wordt het makkelijker gebruikers uit de community LUX componenten te gebruiken en toch hun eigen designs toe te passen.
