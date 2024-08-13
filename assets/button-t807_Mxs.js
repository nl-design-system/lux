import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as k}from"./index-BI1Biiay.js";import{ae as j,ah as f,af as t,ag as v,am as o}from"./index--ww1k6ER.js";import{B as x,P as a,a as r,S as d,T as s,A as l,H as u,F as b,b as p,c as m,W as c,d as g}from"./button.stories-CnNP8hHg.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BF1je2Vn.js";import"../sb-preview/runtime.js";import"./index-b2-t_3Kz.js";import"./index-D-8MO0q_.js";import"./index-nrpnv_Jx.js";import"./index-DrFu-skq.js";import"./components-C1XlW1jL.js";import"./createVisualRegressionStory-DkGMbcjT.js";import"./index-DZLKizrv.js";const w=`<!-- @license CC0-1.0 -->

# Button

De button component gebruik je zodat de gebruiker acties kan uit te voeren en de _user interface_ kan bedienen.

Vaak gebruik je een button in combinatie met de _button group_ component: plaats de button in een _button group_ als je ruimte tussen de button en andere componenten wilt.

## Toepassing

### Gebruik je een button of link?

Sommige ontwerpen hebben een button om naar een andere pagina te gaan. Sommige ontwerpen hebben link in een formulier om naar de vorige pagina te gaan, terwijl de gegevens wel tussentijds verstuurd en opgeslagen worden. Het is belangrijk dat je het goede HTML-element gebruikt dat past bij de actie, in plaats van het HTML-element kiest dat past bij het ontwerp.

Om deze patronen te gebruiken zijn er vier componenten nodig:

- link
- link die eruit ziet als button
- button
- button die eruit ziet als link

Gebruik alleen een \`<a>\` element wanneer er geen gevolgen zijn. Gebruik een \`<button>\` element als je niet de browser back button kan gebruiken om het effect ongedaan te maken.

Enkele voorbeelden waar je een link gebruikt:

- een _call to action_ om te registreren: een link.
- een knop om naar het loginformulier te gaan: een link
- dezelfde pagina in een andere taal bekijken: een link.

Enkele voorbeelden waar je een button gebruikt:

- "Volgende stap" of "vorige stap" in een formulier. Gebruik een submit button wanneer gegevens tussendoor opgeslagen worden of verstuurd worden.
- Uitloggen: button. Log niet uit met een link! Je navigatie moet het ondersteunen om zowel links als button dezelfde stijl te geven.
- de voorkeurstaal aanpassen en dezelfde pagina in een andere taal bekijken: een button.

## Anatomie

### Terminologie

- **button**: van het \`<button>\` HTML element, \`role="button"\` in ARIA.
- **appearance**: van de [CSS \`appearance\` property](https://developer.mozilla.org/en-US/docs/Web/CSS/appearance) (bijvoorbeeld: \`appearance: push-button\`).

### States

- \`normal\`
- \`active\`: de gebruiker activeert de button op dit moment. Bijvoorbeeld door er op te klikken. De \`active\` state duurt maar heel kort.
- \`pressed\`: een ingedrukte button, bijvoorbeeld de _bold button_ in een toolbar van een rich text editor, of de button van een date picker popup. Een button kan lange tijd \`pressed\` zijn, in tegenstelling tot \`active\`.
- \`hover\`: de gebruiker heeft de aanwijzer boven de button. Bijvoorbeeld door met de muiscursor er over te 'zweven'.
- \`focus\`
- \`focus\` en \`focus-visible\`: de link heeft de focus door de \`Tab\` knop van het keyboard.
- \`disabled\`
- \`disabled\` en \`focus-visible\`: als een button disabled is (zeker een _primary action button_), dan moet wel duidelijk zijn dat de button er is en wat je kunt doen om verder te komen. Screen reader gebruikers moeten daarom focus kunnen hebben op een disabled button, om de bijbehorende uitleg te horen.

## Design

Maak elke button 44×44px of groter ([WCAG 2.5.5](https://www.w3.org/TR/WCAG21/#target-size)).

## HTML

Gebruik het \`<button type="button">\` element in HTML om een button te maken.

Een alternatief op \`<button>\` is bijvoorbeeld \`<input type="button">\`, maar die heeft minder mogelijkheden voor de inhoud van de button. Je kunt er bijvoorbeeld geen SVG icon in plaatsen. Nog een alternatief is \`<div role="button" tabindex="0">\`, maar \`<button>\` heeft het voordeel dat die ook werkt zonder CSS en zonder JavaScript.

### Formulieren verzenden

Voor formulieren verzenden gebruik je \`<button type="submit">\`. Gebruik ook de \`submit\` event van een formulier en niet alleen de \`click\` event van de button, zodat je ook vanuit een formulierveld op \`Enter\` kan drukken om het formulier te verzenden.

## Hoe het niet moet

### Geen koppeling met uitleg over button

Niet:

\`\`\`html
<p>
  <label for="upload">Bijlage:</label>
  <input type="file" id="upload" />
</p>
<p>Je mag een JPG of een PDF uploaden.</p>
\`\`\`

Wel:

\`\`\`html
<p>
  <label for="upload">Bijlage:</label>
  <input type="file" id="upload" aria-describedby="upload-description" />
</p>
<p id="upload-description">Je mag een JPG of een PDF uploaden.</p>
\`\`\`

---

Niet:

\`\`\`html
<p>
  <button type="submit">Verzenden</button>
</p>
<p>Door het formulier te verzenden ga je akkoord met de algemene voorwaarden.</p>
\`\`\`

Wel:

\`\`\`html
<p>
  <button type="submit" aria-describedby="submit-description">Verzenden</button>
</p>
<p id="submit-description">Door het formulier te verzenden ga je akkoord met de algemene voorwaarden.</p>
\`\`\`

### Geen koppeling met foutmelding bij een button

Niet:

\`\`\`html
<p>
  <button type="submit">Opslaan</button>
</p>
<p class="error">Je bent uitgelogd. Log opnieuw in om je wijzigingen op te slaan.</p>
\`\`\`

Wel:

\`\`\`html
<p>
  <label for="upload">Bijlage:</label>
  <input type="file" id="upload" aria-describedby="upload-description" />
</p>
<p id="upload-description" class="error">Je mag een JPG of een PDF uploaden.</p>
\`\`\`

## Relevante WCAG regels

- [WCAG eis 2.1.3](https://www.w3.org/TR/WCAG21/#keyboard-no-exception): je kan de button activeren met \`Enter\` of \`Space\`, en het is mogelijk met \`Tab\` de button te focussen. \`Space\` gebruiken heeft dan niet het effect dat de pagina scrollt.
- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de label van de button moet duidelijk zijn
- [WCAG eis 2.5.2](https://www.w3.org/TR/WCAG21/#pointer-cancellation):
  - gebruik niet de \`mousedown\` event om de button te activeren, gebruik liever de \`click\` event
  - \`mousedown\` mag alleen gebruikt worden als \`mouseup\` het effect weer ongedaan maakt, bijvoorbeeld een "_fast foward_" button om audio of video door te spoelen.
- [WCAG eis 2.5.5](https://www.w3.org/TR/WCAG21/#target-size): de button moet groot genoeg zijn om aan te klikken, en kleine buttons moeten niet te dicht op een andere button staan.
`;function h(i){const n={h2:"h2",h3:"h3",p:"p",...k(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:x}),`
`,e.jsxs("cite",{className:"lsb-citation",children:[e.jsx(n.p,{children:"Documentatie afkomstig van"}),e.jsx("a",{href:"https://nl-design-system.github.io/utrecht/storybook-css/index.html?path=/docs/css-button--docs",children:e.jsx(n.p,{children:"Utrecht Button"})})]}),`
`,e.jsx(f,{children:w}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(t,{of:a}),`
`,e.jsx(v,{of:a}),`
`,e.jsx(n.h2,{id:"variants-appearance",children:"Variants (appearance)"}),`
`,e.jsx(n.p,{children:`Voor Lux zijn er drie varianten van de button. In de community komen ook andere varianten voor. Kies je een variant die
niet bestaat in onze tokens dan zal je een paarse styling zien, als visuele waarschuwing.`}),`
`,e.jsx(n.h3,{id:"primary--primary-action-button",children:"Primary / primary action Button"}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(t,{of:r}),`
`,e.jsx(n.h3,{id:"secondary--secondary-action-button",children:"Secondary / secondary action button"}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(t,{of:d}),`
`,e.jsx(n.h3,{id:"tertiary--subtle-button",children:"Tertiary / subtle button"}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(t,{of:s}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.h3,{id:"active",children:"Active"}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(t,{of:l,sourceState:"none"}),`
`,e.jsx(n.h3,{id:"hover",children:"Hover"}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(t,{of:u,sourceState:"none"}),`
`,e.jsx(n.h3,{id:"focus",children:"Focus"}),`
`,e.jsx(o,{of:b}),`
`,e.jsx(t,{of:b,sourceState:"none"}),`
`,e.jsx(n.h3,{id:"busy",children:"Busy"}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(t,{of:p,sourceState:"hidden"}),`
`,e.jsx(n.h3,{id:"toggle--pressed",children:"Toggle / Pressed"}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(t,{of:m,sourceState:"hidden"}),`
`,e.jsx(n.h2,{id:"icons",children:"Icons"}),`
`,e.jsx(n.h3,{id:"start-icon",children:"Start Icon"}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(t,{of:c,sourceState:"hidden"}),`
`,e.jsx(n.h3,{id:"end-icon",children:"End Icon"}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(t,{of:g,sourceState:"hidden"})]})}function E(i={}){const{wrapper:n}={...k(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(h,{...i})}):h(i)}export{E as default};
