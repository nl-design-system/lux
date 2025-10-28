# LUX Processen

Doel 1: Inzicht bieden in de processen en werkzaamheden binnen team LUX.
Doel 2: LUX gebruikers in staat stellen om te begrijpen hoe ze met LUX kunnen samenwerken

## Overzicht LUX

```mermaid
flowchart LR

A@{shape: circle, label: "LUX team"}
B[NLDS community]
C[Rijkshuisstijl Community]
D@{shape: fr-rect, label: "4: LUX COMMUNITY"}
E@{shape: fr-rect, label: "1: LUX BACKLOG"}
F@{shape: fr-rect, label: "2: LUX CHANGE"}
G@{shape: fr-rect, label: "3: LUX BEHEER"}
H@{shape: fr-rect, label: "D: RHC BACKLOG"}

A-->|neemt deel aan|B
A-->|neemt deel aan|C
A-->|faciliteert|D
A-->|voert uit|E

B-->|input voor|E
C-->|input voor|E
D-->|input voor|E

E-->|initieert|F
E-->|initieert|G
E-->|input voor|H
```

- Het LUX team is verantwoordelijk voor het meedoen in NLDS en RHC communities.
- Zelf faciliteren zij de LUX community binnen Logius, ter kennisdeling, transparantie en feedback momenten
- Vanuit de communities komt feedback, updates en ander werk dat op de LUX backlog terecht komt
- De LUX backlog is de plek en het proces waar al het werk voor design system binnen Logius wordt opgevoerd, geprioriteerd, samen met de LUX gebruikerteams
- In refinement en uitvoering voeren de meewerkende gebruikerteams en LUX teamleden dezelfde taken uit.
- Taken die alleen voor team LUX zijn worden indien nodig op een eigen backlog bijgehouden. Dit werk wordt alsnog via LUX Beheer en LUX Change uitgevoerd.
- Het kan zijn dat werk voor RHC en NLDS bedoeld is, via de backlog, of andere kanalen, wordt dit werk op de RHC en NLDS backlogs ondergebracht.

---

### 1: LUX Backlog

```mermaid
flowchart LR

A@{shape: circle, label: "LUX BACKLOG"}
B[Vullen backlog]
C[Prioriteren backlog]
D@{shape: fr-rect, label: "1A: REFINEMENT"}
E@{shape: fr-rect, label: "1B: ANALYSE"}
F@{shape: fr-rect, label: "Op welk niveau?"}
G@{shape: diam, label: "Is beheer?"}
H@{shape: fr-rect, label: "2: LUX CHANGE"}
I@{shape: fr-rect, label: "3: LUX BEHEER"}
J@{shape: fr-rect, label: "D: RHC backlog"}

A-->B
B-->C
C-->D
D-->E
E-->F
F-->|LUX niveau|G
G-->|Nee|H
G-->|Ja|I
F-->|RHC niveau|J
```

_Beheer betekend: doorlopend onderhoud of changes vanuit RHC bieb die doorgevoerd moeten worden in de LUX bieb om in sync te blijven enz._

#### 1A: REFINEMENT

- Component afpellen: welke onderliggende componenten zijn er nodig? Bv page header -> navigation -> button, link, enz
- Vastleggen in Github ticket
- Vragen vastleggen in ticket
- Welke varianten zijn er nodig?
- Info en bronnen die er tot nu zijn vastleggen
- Zijn er lopende discussies over het component?

```mermaid
flowchart LR

A@{shape: circle, label: "Start"}
B[Github ticket op LUX project board]
C[Vastleggen component en onderliggende elementen]
D[Wat we al weten vastleggen]
Z@{shape: double-circle, label: "Stop"}

A-->B
B-->C
C-->D
D-->Z
```

- _Onderliggende componenten voorbeeld: Page Header -> Navigatie -> Button_
- _Desnoods worden deze stappen meermaals doorlopen totdat het component voldoende refined is._

#### 1B: ANALYSE

- Wensen en onderzoeksuitslagen als comment onder Github ticket plaatsen
- Discussie voeren op Slack in RHC channel, verwijzing naar NLDS github discussie - toevoegen hoe component per team/afdeling binnen Logius er uit ziet (designs aflopen om de varianten in kaart te brengen. Liefst alle plekken waar het component staat. Maar praktisch alleen binnen het component waar het nu om gaat (bv button in header, of alle buttons)).
- RHC stijldiscussie bekijken/aanvullen
- RHC discussie: Beargumenteren welke bron we gekozen hebben (utrecht of nlds etc)
- Teams verdiepen zich in het component, hoe het in hun designs/applicaties gebruikt wordt, wensen, problemen, toepassingen, github discussies nalezen, onderzoek doen

```mermaid
flowchart LR

A@{shape: circle, label: "start"}
A-->B[Wens goed beschrijven]
B-->C2[Onderzoek bestaande componenten]
C2-->D2@{shape: fr-rect, label: "1B: BEPALEN NIVEAU"}
B-->C[Benodigde patroon onderzoeken]
C-->D[Vastleggen rationele, functionaliteiten, varianten]
D-->E[Vastleggen visueel ontwerp]
E-->F[Goedkeuring LUX community]
```

#### 1C: BEPALEN NIVEAU

```mermaid
flowchart LR

A@{shape: circle, label: "start"}
Z@{shape: double-circle, label: "stop"}

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

F-->Z
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

---

### 2: LUX CHANGE

- Changes documenteren
- Wijzigingen communiceren (trigger LUX COMMUNITY)

---

### 3: LUX BEHEER

```mermaid
flowchart LR
A@{shape: circle, label: "Start"}
Z@{shape: double-circle, label: "Stop"}
A-->B
B-->C
C-->D
D-->E
E-->Z
```

- Updates aan RHC bieb, tokens en componenten doorvoeren in LUX bieb, tokens en componenten
- Changes documenteren
- Wijzigingen communiceren (trigger LUX COMMUNITY)

### 4: LUX community

Zichtbaarheid, feedback loop en duidelijke communicatie naar gebruikers van LUX

- Delen updates LUX
- Kennissessies
- Workshops & hackathons

```mermaid
flowchart LR
A@{shape: circle, label: "Start"}
Z@{shape: double-circle, label: "Stop"}
```

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

### A: RHC BACKLOG

- ???

### B: RHC CHANGE

- Nieuwe en aanpassingen aan componenten doorvoeren binnen RHC bieb, tokens en repo
- Documenteren changes
- Wijzigingen communiceren (trigger: RHC community)

### C: RHC BEHEER

- Updates vanuit NLDS verwerken in RHC bieb, RHC tokens en RHC repo
- Documenteren changes
- Wijzigingen communiceren (trigger: RHC community)

### D: RHC COMMUNITY

- Communiceren over wijzigingen
