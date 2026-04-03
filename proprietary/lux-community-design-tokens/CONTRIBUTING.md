# Contributing to lux community design tokens

Om eigen invulling aan de styles van RHC te geven, kun je in `src/` voor je team een <teamnaam>.figma.tokens.json
plaatsen. Daarin zet je, net als nu in `bwb.figma.tokens.json`, nieuwe token sets met namen die in RHC geen token set
zijn. Daarin kun je dan overrides zetten, alsmede nieuwe tokens voor je eigen (community) componenten.

Vervolgens zet je in die file ook een key `$themes` met één of meer thema's die dan gebruik maken van elk van deze token
sets. Na een PR merge worden dan de thema .css en .scss files automatisch gegenereerd en gepubliceerd (zie het kopje
Gebruik in [README.md](README.md)).

Gebruik zoveel mogelijk de NLDS structuur en naming in je tokens.json. Dat wil onder andere zeggen dat een token die
altijd op `min-height` wordt gezet, ook altijd in naam eindigt op `min-height`. Er is ook vastgelegd hoe de tokens over
verschillende lagen met elkaar samenwerken. Lees meer over de standaard op [nldesignsystem.nl](https://nldesignsystem.nl/handboek/huisstijl/design-tokens/).

## Testen

Voordat je een PR maakt, kan het handig zijn om een merge te draaien:

```shell
pnpm --filter @lux-design-system/lux-community-design-tokens merge-token-sets
```

en te controleren of je in de `dist/` map de .css en .scss krijgt die je verwacht. Het script waarschuwt er ook voor als
je per ongeluk een token set van RHC dreigt te overschrijven.
