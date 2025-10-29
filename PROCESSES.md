# LUX Processen

- Doel 1: Inzicht bieden in de processen en werkzaamheden binnen team LUX.
- Doel 2: LUX gebruikers in staat stellen om te begrijpen hoe ze met LUX kunnen samenwerken

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

- _Het LUX team draagt zorg voor correcte deelname aan NLDS en RHC communities_
- _Via de LUX community is er kennisdeling, feedbackmoment en samenwerking door en met de LUX gebruikers_
- _Planbaar werk wordt via de backlog opgevoerd, gepriotiseerd, refined en opgepakt_

---

### 1: LUX Backlog

```mermaid
flowchart LR

A@{shape: circle, label: "LUX BACKLOG"}
B[Vullen backlog]
C[Prioriteren]
D@{shape: diam, label: "Is beheer?"}
E@{shape: fr-rect, label: "1A: REFINEMENT"}
F@{shape: fr-rect, label: "1B: ANALYSE"}
G@{shape: diam, label: "Op welk niveau?"}
H@{shape: fr-rect, label: "2: LUX CHANGE"}
I@{shape: fr-rect, label: "3: LUX BEHEER"}
J@{shape: fr-rect, label: "D: RHC backlog"}

A-->B
B-->C
C-->D
D-->|Nee|E
D-->|Ja|I
E-->F
F-->G
G-->|LUX niveau|H
G-->|RHC niveau|J
```

- _PO team LUX is eigenaar van dit proces en de backlog_
- _Het gehele proces wordt samen met meewerkende gebruikers doorlopen_
- _Soms is er werk alleen voor het LUX team. Dit werkt wordt eventueel op een aparte backlog volgens hetzelfde proces behandeld_

---

#### 1A: REFINEMENT

```mermaid
flowchart LR

A@{shape: circle, label: "Start"}
B[Github ticket op LUX project board]
C[Vastleggen component subcomponenten]
D[Vastleggen Wat we al weten]
Z@{shape: double-circle, label: "Stop"}

A-->B
B-->C
C-->D
D-->Z
```

- _Voorbeeld component opbouw: Page Header -> Navigatie -> Button_
- _Desnoods worden deze stappen meermaals doorlopen totdat het component voldoende refined is._
- _Wat we al weten is o.a.: lopende github discussies op NL, RHC of LUX niveau, bekend onderzoek, best practices_

---

#### 1B: ANALYSE

```mermaid
flowchart LR

A@{shape: circle, label: "start"}
A-->B[Gebruik binnen Logius teams beschrijven]
B-->C[Rationale vastleggen]
C-->D[Gedeelde functionaliteiten beschrijven]
D-->E[Gewenste varianten beschrijven]
E-->F@{shape: fr-rect, label: "1B: BEPALEN NIVEAU"}
F-->G[Goedkeuring LUX community]
G-->Z@{shape: double-circle, label: "stop"}
```

- Wensen en onderzoeksuitslagen als comment onder Github ticket plaatsen
- Discussie voeren op Slack in RHC channel, verwijzing naar NLDS github discussie - toevoegen hoe component per team/afdeling binnen Logius er uit ziet (designs aflopen om de varianten in kaart te brengen. Liefst alle plekken waar het component staat. Maar praktisch alleen binnen het component waar het nu om gaat (bv button in header, of alle buttons)).
- RHC stijldiscussie bekijken/aanvullen
- RHC discussie: Beargumenteren welke bron we gekozen hebben (utrecht of nlds etc)
- Teams verdiepen zich in het component, hoe het in hun designs/applicaties gebruikt wordt, wensen, problemen, toepassingen, github discussies nalezen, onderzoek doen

---

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
A-->B[LUX team refinement]
B-->C[Uitvoering]
C-->D[Documenteren wijzigingen]
D-->E[Communiceren wijzigingen]
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
