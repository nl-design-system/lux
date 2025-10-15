```mermaid
%%{init: {'flowchart' : {'curve' : 'linear'}}}%%

graph TD
    classDef begin fill:#3df587,color:#2f394d,stroke:#333
    classDef besluit fill:#eee1b3,color:#2f394d,stroke:#333
    classDef stap fill:#56666b,color:#eee1b3,stroke:#333
    %%classDef einde fill:#f9564f,color:#2f394d,stroke:#777
    classDef einde fill:#87c38f,color:#2f394d,stroke:#777

    %% Elementen
    Start
    Controle[1. Controle bestaande bibliotheken]
    ControleVraag[A. Bestaat het onderdeel al?]
    Hergebruik[2. Hergebruik]
    Behoefte[3. Vraag interne community]
    BehoefteVraag[B. Is de behoefte breed binnen de organisatie?]
    Zelf[4. Zelf ontwikkelen]
    VolgProces[5. Volg generiek proces]
    Opname[6. Opnemen in bibliotheek]

    %% Structuur
    Start-->Controle
    Controle-->ControleVraag
    ControleVraag-->|Ja|Hergebruik
    ControleVraag-->|Nee|Behoefte
    Behoefte-->BehoefteVraag
    BehoefteVraag-->|Nee|Zelf
    BehoefteVraag-->|Ja|VolgProces
    VolgProces-->Opname

    %% Klassen: begin
    class Start begin
    %% Klassen: stappen
    class Controle,Behoefte,VolgProces stap
    %% Klassen: vragen
    class ControleVraag,BehoefteVraag besluit
    %% Klassen: eindes
    class Zelf,Hergebruik,Opname einde

    %% Vormen: begin
    Start@{ shape: circle }
    %% Vormen: vragen
    ControleVraag@{ shape: diamond }
    BehoefteVraag@{ shape: diamond }
    %% Vormen: eindes
    Zelf@{ shape: stadium }
    Hergebruik@{ shape: stadium }
    Opname@{ shape: stadium }

    %%Behoefte-->CB[Ontwerpers en ontwikkelaars. Toets of de behoefte breder speelt.]
    %%CB@{ shape: braces }
```

# Uitleg stappen

1. Controleren of het benodigde onderdeel al bestaat. Eerst in NLDS, dan in RHC, dan LUX.
2. Simpel: als het er al is, kan je het gebruiken. Met als enige voorbehoud dat er momenteel wat componenten in RHC zijn geïmplementeerd die niet aan de kwaliteitseisen voldoen - zie hiervoor de statustabel.
3. Opvragen in de community (ontwerpers én ontwikkelaars) of de behoefte breed is gedragen in de organisatie. Hierbij hoort ook een beoordeling van team LUX of het onderdeel wel in een Design System past.
4. Zo nee, kan het intern in het productteam worden ontwikkeld. Onderdelen kunnen altijd worden heroverwogen als ze toch een breed nut blijken te hebben.
5. Zo ja, kan het onderdeel op de gezamenlijke backlog op github worden gezet. Vanaf daar begint het werk van POs en dev teams, prioritering, planning, ontwikkeling, testen en opleveren.

## Wat is er nog meer nodig?

1. Checklist of componenten kunnen worden overwogen
   - herbruikbaarheid: onderdeel is in meerdere projecten in de organisatie nodig
   - toepassing: onderdeel kan generiek gebouwd worden en aan toegankelijkheidseisen voldoen
   - doel: één of meerdere user stories moeten worden vastgelegd om te bewijzen dat de behoefte bestaat
2. Checklist of de implementatie van een component aan generieke eisen voldoet
   - toegankelijkheid
   - documentatie
   - naamgeving
3. Lijst van alle reguliere en ad-hoc vergaderingen
4. Duidelijk stellen welk niveau dit is: Logius
