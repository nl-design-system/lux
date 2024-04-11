Biedt de mogelijkheid om naar de beschikbare inlogmiddelen te navigeren.

[Figma](https://www.figma.com/file/515tboh6xpSNziwQu6WyAy/LUX---UI-kit?type=design&node-id=1125-2&mode=design)

Als LUX bieden wij dit component aan, zodat een organisatie eenvoudig aan de stijlhandleiding aansluiten toegang van Logius kan voldoen. Het is een uniek component, hiermee zijn updates aan de copy, logo’s of opmaak gemakkelijk gemaakt.

Dit component is onderdeel van het patroon: [inlogstraat](https://www.logius.nl/domeinen/toegang/stijlhandleiding-aansluiten-toegang).

## Gebruik

Met de `Button Login` kunnen gebruikers inloggen met het gekozen inlogmiddel.

## Opmaak (voor buiten Logius)

Een gedeelte van de opmaak kan aangepast worden om te voldoen aan de huisstijl van uw dienstverlening. Houd er rekening mee dat de volgorde van de elementen, de teksten van de labels en de positie van het icoon niet veranderd kunnen worden.

### Aanpasbare opmaak

Gebruik voor de volgende design tokens waardes uit uw huisstijl.

#### Font

| Token                                 | Waarde                 |
| :------------------------------------ | :--------------------- |
| `--lux-button-login-font-family`      | `Rijksoverheid, Arial` |
| `--lux-button-login-font-size`        | `18px`                 |
| `--lux-button-login-font-line-height` | `24px`                 |

#### Focus outline

| Token                                     | Waarde    |
| :---------------------------------------- | :-------- |
| `--lux-button-login-focus-outline-color`  | `#282828` |
| `--lux-button-login-focus-outline-offset` | `2px`     |
| `--lux-button-login-focus-outline-style`  | `solid`   |
| `--lux-button-login-focus-outline-width`  | `2px`     |

### Optionele aanpasbare opmaak

Gebruik voor de volgende design tokens de aangeboden waardes, of waardes uit uw huisstijl die vergelijkbaar zijn. Dit zorgt ervoor dat de inlogervaring zo herkenbaar mogelijk is bij de verschillende publieke dienstverleningen.

#### Border

| Token                              | Waarde |
| :--------------------------------- | :----- |
| `--lux-button-login-border-width`  | `1px`  |
| `--lux-button-login-border-radius` | `4px`  |

#### Color

Denk aan de contrastvereisten van de WCAG.

| Token                                        | Waarde    |
| :------------------------------------------- | :-------- |
| `--lux-button-login-background-color`        | `#282828` |
| `--lux-button-login-border-color`            | `#696969` |
| `--lux-button-login-color`                   | `#282828` |
| `--lux-button-login-active-background-color` | `#a7a7a7` |
| `--lux-button-login-active-border-color`     | `#282828` |
| `--lux-button-login-active-color`            | `#282828` |
| `--lux-button-login-hover-background-color`  | `#e6e6e6` |
| `--lux-button-login-hover-border-color`      | `#696969` |
| `--lux-button-login-hover-color`             | `#282828` |

#### Size

Schaal het icoon mee met de hoogte van de knop. Houd de knop minimaal 48px hoog in verband met de toegankelijke target size.

| Token                                | Waarde  |
| :----------------------------------- | :------ |
| `--lux-button-login-min-inline-size` | `118px` |
| `--lux-button-login-icon-size`       | `40px`  |

## State

<ul class="section">
  <li>
    <lux-button-login agent="digid"></lux-button-login>
    <span>Default</span>
  </li>
  <li>
    <lux-button-login class="sb-state--hover" agent="digid"></lux-button-login>
    <span>Hover</span>
  </li>
  <li>
    <lux-button-login class="sb-state--active" agent="digid"></lux-button-login>
    <span>Active</span>
  </li>
  <li>
    <lux-button-login class="sb-state--focus" agent="digid"></lux-button-login>
    <span>Focus</span>
  </li>
</ul>

## Agent

<ul class="section">
  <li>
    <lux-button-login agent="digid"></lux-button-login>
    <span>Digid</span>
  </li>
  <li>
    <lux-button-login agent="digid-machtigen"></lux-button-login>
    <span>Digid Machtigen</span>
  </li>
  <li>
    <lux-button-login agent="eherkenning"></lux-button-login>
    <span>eHerkenning</span>
  </li>
  <li>
    <lux-button-login agent="eidas"></lux-button-login>
    <span>eIDAS</span>
  </li>
</ul>

## Language: en

Gebruik de onderstaande Engelse vertalingen door het `label` attribuut toe te wijzen.

```html
<lux-button-login agent="digid" label="Log in"></lux-button-login>
```

<ul class="section">
  <li>
    <lux-button-login agent="digid" label="Log in"></lux-button-login>
    <span>Digid</span>
  </li>
  <li>
    <lux-button-login agent="digid-machtigen" label="Log in as representative"></lux-button-login>
    <span>Digid Machtigen</span>
  </li>
  <li>
    <lux-button-login agent="eherkenning" label="Login as a company or organisation"></lux-button-login>
    <span>eHerkenning</span>
  </li>
  <li>
    <lux-button-login agent="eidas"></lux-button-login>
    <span>eIDAS</span>
  </li>
</ul>

## Toegankelijkheid

Biedt jouw organisatie meer dan één inlogmiddel aan? Plaats de inlogknoppen in een lijst, zodat een blinde of slechtziende gebruiker van de voorleessoftware te horen krijgt dat er meerdere opties volgen.

Aangezien het inlogmiddel alleen visueel wordt weergegeven, wordt deze tekst aan het label toegevoegd maar verborgen, zodat dit wordt voorgelezen door de voorleessoftware.

### Verwante WCAG regels

- [WCAG eis 2.1.3](https://www.w3.org/TR/WCAG21/#keyboard-no-exception): je kan de button activeren met Enter of Space, en het is mogelijk met Tab de button te focussen. Space gebruiken heeft dan niet het effect dat de pagina scrollt.
- [WCAG eis 2.5.5](https://www.w3.org/TR/WCAG21/#target-size): de button moet groot genoeg zijn om aan te klikken.

## Playground
