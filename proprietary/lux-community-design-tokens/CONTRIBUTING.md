# Contributing to lux community design tokens

Om eigen invulling aan de styles van RHC te geven, beheert elk team één token file: `merged/<teamnaam>.tokens.json`.
Daarin staan de RHC (base) token sets — die je niet aanpast — plus nieuwe token sets met namen die in RHC geen token set
zijn, net als nu in `bwb.tokens.json`. In die eigen sets kun je overrides zetten, alsmede nieuwe tokens voor je eigen
(community) componenten.

In diezelfde file beheer je ook de keys `$themes`, met één of meer thema's die dan gebruik maken van elk van deze token
sets, en `$metadata.tokenSetOrder`, waarin elke token set op de juiste plek in de resolutievolgorde moet staan. Na een
PR merge worden dan de thema .css en .scss files automatisch gegenereerd en gepubliceerd (zie het kopje Gebruik in
[README.md](README.md)).

Gebruik zoveel mogelijk de NLDS structuur en naming in je tokens.json. Dat wil onder andere zeggen dat een token die
altijd op `min-height` wordt gezet, ook altijd in naam eindigt op `min-height`. Er is ook vastgelegd hoe de tokens over
verschillende lagen met elkaar samenwerken. Lees meer over de standaard op [nldesignsystem.nl](https://nldesignsystem.nl/handboek/huisstijl/design-tokens/).

## Testen

Voordat je een PR maakt, kan het handig zijn om de validatie te draaien:

```shell
pnpm --filter @lux-design-system/lux-community-design-tokens validate-token-sets
```

Dit script faalt als base RHC token sets zijn overschreven of als token sets ontbreken in `$metadata.tokenSetOrder`,
verwijdert automatisch `tokenSetOrder`-entries zonder bijbehorende token set, en waarschuwt voor eigen (team) token sets
die in geen enkel thema worden gebruikt. CI draait dezelfde validatie met `validate-token-sets:check` (die niets aanpast maar
faalt) op elke PR.

Draai daarna een build:

```shell
pnpm --filter @lux-design-system/lux-community-design-tokens build
```

en controleer of je in de `dist/` map de .css en .scss krijgt die je verwacht.
