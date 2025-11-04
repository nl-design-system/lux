# LUX Processen

- Doel 1: Inzicht bieden in de processen en werkzaamheden binnen team LUX.
- Doel 2: LUX gebruikers in staat stellen om te begrijpen hoe ze met LUX kunnen samenwerken

## 00. Overzicht LUX

```mermaid
flowchart LR

A@{shape: circle, label: "LUX"}
B[NLDS community]
C[Rijkshuisstijl Community]
D@{shape: fr-rect, label: "01. LOGIUS COMMUNITY"}
E@{shape: fr-rect, label: "02. LOGIUS COMMUNITY BACKLOG"}
F@{shape: fr-rect, label: "03. LOGIUS COMMUNITY REFINEMENT"}
G@{shape: fr-rect, label: "04. LOGIUS COMMUNITY UITVOERING"}

A-->|neemt deel aan|B
A-->|neemt deel aan|C
A-->|faciliteert|D
A-->|voert uit|E

B-->|input voor|E
C-->|input voor|E
D-->|input voor|E

E-->|input voor|F
F-->|Input voor|G
G-->|herhaal|A
```

- Het LUX team faciliteert deelname in de NL Design System communities en overziet correcte toepassing van de NL Design System architectuur binnen Logius
- Logius teams doen mee via de Logius Community
- Teams kunnen zelf beslissen of ze actief willen meewerken. Dit wordt via de Product Owners afgestemd
- Backlog, refinement en uitvoering worden gezamenlijk opgepakt en uitgevoerd

## 01. LOGIUS COMMUNITY

Proces voor het samenwerken van de Logius community. In de community wordt kennis en informatie gedeeld over LUX en NL Design System. LUX faciliteert verschillende mogelijkheden voor Logius teams om samen te werken met LUX. Deze samenwerking zie je in alle vervolgprocessen terug komen.

TODO: Beantwoorden: Is dit een proces of zijn dit alleen de contactmomenten die als input dienen voor de backlog?

## 02. LOGIUS COMMUNITY BACKLOG

Dit proces is er voor bedoeld om wensen en prioriteiten in kaart te brengen en alle informatie te verzamelen en structureren die nodig is om een component te kunnen ontwikkelen.

```mermaid
flowchart LR

A@{shape: circle, label: "Start"}
B[A. Vullen backlog]
C[B. Prioriteren]
D@{shape: fr-rect, label: "03. LOGIUS COMMUNITY REFINEMENT"}

A-->B
B-->C
C-->D
```

### A. Vullen backlog

- Product owner LUX stelt samen met product owners Logius teams de backlog op het Logius Community Github bord
- Soms is er werk dat alleen voor het LUX team is. Dit handelt het LUX team zelfstandig af, eventueel op een aparte backlog
- Backlog item bevat: Duidelijke titel, beschrijving van de wens, wie de wens heeft

### B. Prioriteren

- Product owner LUX zal samen met Product owners Logius teams de backlog prioriteren
- Prioriteit wordt gegeven op basis van de behoefte van de Logius teams

## 03. LOGUS COMMUNITY REFINEMENT

Het doel van de refinement is om als Logius organisatie eens te worden over de componenten die we nodig hebben in een design system, welke functionaliteiten en varianten ze nodig hebben.

- Component wordt in Logius Community Refinement behandeld (wie bereid voor?)
- Beschikbare informatie, zoals Github discussies worden toegevoegd (welke informatie?)
- Teams leveren voorbeelden aan hoe zij het component nu/willen gebruiken
- De varianten en anatomie van het component wordt vastgelegd bij het backlog item
- Eventuele ontwerpkeuzes worden al vastgelegd (waar?)
- Openstaande vragen worden genoteerd bij het backlog item
- Community bepaald samen met LUX welke vragen tenminste beantwoord moeten zijn voor het component opgepakt kan worden. Zo nodig wordt refinement enkele keren herhaald

Controles:

- Is het component door meerdere teams gewenst / er is geen bezwaar tegen het gerefinede component?
- Er is voldaan aan de DoR?

## 04. LOGIUS COMMUNITY UITVOERING

In dit proces worden backlog items uitgevoerd aan de hand van de gerefinede backlog items. Dit houd in: onderzoek, design, bouw, testen en gebruiken van nieuwe maar ook bestaande componenten.

- 1 ontwerp maken in Figma die alle functionaliteiten en varianten bevat, in de stijl die Logius nodig heeft. Rijkshuisstijl wordt zoveel mogelijk aangehouden (dit pakt 1 iemand meestal op?)
- Ontwerp met Logius community afstemmen
- RHC/NLDS/LUX component onderzoek: wat is er al dat bruikbaar is
- Geschikte componenten selecteren, ontbrekende functionaliteiten/varianten noteren
- Eventuele discussies in NLDS/RHC communities starten (welke, en waanneer en waarom?)
- Met Logius community afstemmen welke bron gebruikt wordt, of dat een eigen component gemaakt wordt
- Tokens instellen
- Component bouwen/aanpassen/laten aanpassen
- Updates aan Figma bieb, tokens, repo en/of NPM packages documenteren en delen met Logius community
- Check?: moeten we RHC en/of NLDS community component stappen doorlopen?
- Na dit proces?: Logius community het nieuwe component laten gebruiken

### 03.1 BEPALEN NIVEAU

TODO: splitsen in zoeken naar geschikte bron en uitvoering.

```mermaid
flowchart LR

A@{shape: circle, label: "start"}
Z

A-->B[Component bestaat op RHC niveau?]

B-->|Ja|C[Aanpassingen nodig?]
B-->|Nee|D[Bestaat het component op LUX niveau?]

C-->|Ja|E@{shape: fr-rect, label: "B: RHC CHANGE"}
C-->|Nee|F[RHC component gebruiken]

D-->|Ja|G[Aanpassingen nodig?]
D-->|Nee|H[Is het component gewenst op RHC niveau?]

G-->|Ja|I@{shape: fr-rect, label: "2: LUX CHANGE"}
G-->|Nee|J[LUX component gebruiken]

H-->|Ja|E
H-->|Nee|I

F-->Z@{shape: double-circle, label: "stop"}
J-->Z
```

Het doel van team LUX is op RHC of op LUX niveau componenten aan te dragen en te beheren.
Checks:

- Component is beschikbaar binnen RHC>LUX?
- Nee: is component binnen NLDS beschikbaar? (HoF>Candidate>Community)
- Ja: Beschikbare component voldoet aan wensen?
- wensen bestaand component op backlog opvoeren waar het component leeft
- Nieuw component opvoeren RHC backlog
- Als dit component niet gewenst is, dan op lager niveau oplossen RHC>LUX>team

DD[Kijken of component al ergens beschikbaar is?]
DDD[Beschikbare component heeft aanpassing nodig?]
DDD[]

- PO LUX is initiator en eigenaar van de LUX backlog, maar vult en prioriteert deze samen met de PO's van gebruikerteams
- PO's maken afspraken over de werkvorm tussen de verschillende teams
- In prio, refine en uitvoering wordt samen- en meegewerkt met en door gebruikerteams
- Changes documenteren
- Wijzigingen communiceren (trigger LUX COMMUNITY)

## Overview RHC

```mermaid
flowchart LR

A@{shape: circle, label: "RHC maintainer"}
B[NLDS community]
C@{shape: fr-rect, label: "D: RHC COMMUNITY"}
D[DPC]
E@{shape: fr-rect, label: "A: RHC BACKLOG"}
F@{shape: fr-rect, label: "B: RHC CHANGE"}
G@{shape: fr-rect, label: "C: RHC BEHEER"}
H[NLDS backlog]
Z@{shape: double-circle, label: "stop"}

A-->|neemt deel aan|B
A-->|faciliteert|C
A-->|stemt af met|D
A-->|voert uit|E

B-->|input voor|E
C-->|input voor|E
D-->|Input voor|E

E-->|initieert|F
E-->|initieert|G
E-->|input voor|H

F-->Z
G-->Z
H-->Z
```
