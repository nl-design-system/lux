import{j as E}from"./jsx-runtime-CKrituN3.js";import{R as h,r as L}from"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const R=n=>n.toLowerCase().split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""),y=n=>n.replace(/([A-Z])/g,e=>`-${e[0].toLowerCase()}`),O=(n,e,i={})=>{if(n instanceof Element){const o=z(n.classList,e,i);o!==""&&(n.className=o),Object.keys(e).forEach(t=>{if(!(t==="children"||t==="style"||t==="ref"||t==="class"||t==="className"||t==="forwardedRef"))if(t.indexOf("on")===0&&t[2]===t[2].toUpperCase()){const l=t.substring(2),a=l[0].toLowerCase()+l.substring(1);j(a)||T(n,a,e[t])}else n[t]=e[t],typeof e[t]==="string"&&n.setAttribute(y(t),e[t])})}},z=(n,e,i)=>{const o=e.className||e.class,t=i.className||i.class,l=m(n),a=m(o?o.split(" "):[]),d=m(t?t.split(" "):[]),u=[];return l.forEach(s=>{a.has(s)?(u.push(s),a.delete(s)):d.has(s)||u.push(s)}),a.forEach(s=>u.push(s)),u.join(" ")},A=n=>{switch(n){case"doubleclick":return"dblclick"}return n};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const j=n=>{if(typeof document>"u")return!0;{const e="on"+A(n);let i=e in document;if(!i){const o=document.createElement("div");o.setAttribute(e,"return;"),i=typeof o[e]=="function"}return i}},T=(n,e,i)=>{const o=n.__events||(n.__events={}),t=o[e];t&&n.removeEventListener(e,t),n.addEventListener(e,o[e]=function(a){i&&i.call(this,a)})},m=n=>{const e=new Map;return n.forEach(i=>e.set(i,i)),e},D=(n,e)=>{typeof n=="function"?n(e):n!=null&&(n.current=e)},N=(...n)=>e=>{n.forEach(i=>{D(i,e)})},W=(n,e)=>{const i=(o,t)=>h.createElement(n,Object.assign({},o,{forwardedRef:t}));return i.displayName=e,h.forwardRef(i)};var S=function(n,e){var i={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(i[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,o=Object.getOwnPropertySymbols(n);t<o.length;t++)e.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(n,o[t])&&(i[o[t]]=n[o[t]]);return i};const _=(n,e,i,o)=>{o!==void 0&&o();const t=R(n),l=class extends h.Component{constructor(a){super(a),this.setComponentElRef=d=>{this.componentEl=d}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(a){O(this.componentEl,this.props,a)}render(){const a=this.props,{children:d,forwardedRef:u,style:s,className:U,ref:H}=a,x=S(a,["children","forwardedRef","style","className","ref"]);let p=Object.keys(x).reduce((b,r)=>{const f=x[r];if(r.indexOf("on")===0&&r[2]===r[2].toUpperCase()){const g=r.substring(2).toLowerCase();typeof document<"u"&&j(g)&&(b[r]=f)}else{const g=typeof f;(g==="string"||g==="boolean"||g==="number")&&(b[y(r)]=f)}return b},{});i&&(p=i(this.props,p));const C=Object.assign(Object.assign({},p),{ref:N(u,this.setComponentElRef),style:s});return L.createElement(n,C,d)}static get displayName(){return t}};return e&&(l.contextType=e),W(l,t)},G=_("lux-button-login"),P=`Biedt de mogelijkheid om naar de beschikbare inlogmiddelen te navigeren.

[Figma](https://www.figma.com/file/515tboh6xpSNziwQu6WyAy/LUX---UI-kit?type=design&node-id=1125-2&mode=design)

Als LUX bieden wij dit component aan, zodat een organisatie eenvoudig aan de stijlhandleiding aansluiten toegang van Logius kan voldoen. Het is een uniek component, hiermee zijn updates aan de copy, logo’s of opmaak gemakkelijk gemaakt.

Dit component is onderdeel van het patroon: [inlogstraat](https://www.logius.nl/domeinen/toegang/stijlhandleiding-aansluiten-toegang).

## Gebruik

Met de \`Button Login\` kunnen gebruikers inloggen met het gekozen inlogmiddel.

## Opmaak (voor buiten Logius)

Een gedeelte van de opmaak kan aangepast worden om te voldoen aan de huisstijl van uw dienstverlening. Houd er rekening mee dat de volgorde van de elementen, de teksten van de labels en de positie van het icoon niet veranderd kunnen worden.

### Aanpasbare opmaak

Gebruik voor de volgende design tokens waardes uit uw huisstijl.

#### Font

| Token                                 | Waarde                 |
| :------------------------------------ | :--------------------- |
| \`--lux-button-login-font-family\`      | \`Rijksoverheid, Arial\` |
| \`--lux-button-login-font-size\`        | \`18px\`                 |
| \`--lux-button-login-font-line-height\` | \`24px\`                 |

#### Focus outline

| Token                                     | Waarde    |
| :---------------------------------------- | :-------- |
| \`--lux-button-login-focus-outline-color\`  | \`#282828\` |
| \`--lux-button-login-focus-outline-offset\` | \`2px\`     |
| \`--lux-button-login-focus-outline-style\`  | \`solid\`   |
| \`--lux-button-login-focus-outline-width\`  | \`2px\`     |

### Optionele aanpasbare opmaak

Gebruik voor de volgende design tokens de aangeboden waardes, of waardes uit uw huisstijl die vergelijkbaar zijn. Dit zorgt ervoor dat de inlogervaring zo herkenbaar mogelijk is bij de verschillende publieke dienstverleningen.

#### Border

| Token                              | Waarde |
| :--------------------------------- | :----- |
| \`--lux-button-login-border-width\`  | \`1px\`  |
| \`--lux-button-login-border-radius\` | \`4px\`  |

#### Color

Denk aan de contrastvereisten van de WCAG.

| Token                                        | Waarde    |
| :------------------------------------------- | :-------- |
| \`--lux-button-login-background-color\`        | \`#282828\` |
| \`--lux-button-login-border-color\`            | \`#696969\` |
| \`--lux-button-login-color\`                   | \`#282828\` |
| \`--lux-button-login-active-background-color\` | \`#a7a7a7\` |
| \`--lux-button-login-active-border-color\`     | \`#282828\` |
| \`--lux-button-login-active-color\`            | \`#282828\` |
| \`--lux-button-login-hover-background-color\`  | \`#e6e6e6\` |
| \`--lux-button-login-hover-border-color\`      | \`#696969\` |
| \`--lux-button-login-hover-color\`             | \`#282828\` |

#### Size

Schaal het icoon mee met de hoogte van de button. Houd de button minimaal 48px hoog in verband met de toegankelijke target size.

| Token                                | Waarde  |
| :----------------------------------- | :------ |
| \`--lux-button-login-min-inline-size\` | \`118px\` |
| \`--lux-button-login-icon-size\`       | \`40px\`  |

## State

<ul class="section">
  <li>
    <lux-button-login agent="digid"></lux-button-login>
    <span>Default</span>
  </li>
  <li>
    <lux-button-login class="force-state--hover" agent="digid"></lux-button-login>
    <span>Hover</span>
  </li>
  <li>
    <lux-button-login class="force-state--active" agent="digid"></lux-button-login>
    <span>Active</span>
  </li>
  <li>
    <lux-button-login class="force-state--focus" agent="digid"></lux-button-login>
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

Gebruik de onderstaande Engelse vertalingen door het \`label\` attribuut toe te wijzen.

\`\`\`html
<lux-button-login agent="digid" label="Log in"></lux-button-login>
\`\`\`

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

Biedt jouw organisatie meer dan één inlogmiddel aan? Plaats de buttons dan in een lijst, zodat screenreader gebruikers te horen krijgen dat er meerdere opties volgen.

### Inlogmiddel

Het inlogmiddel wordt alleen visueel weergegeven. Deze wordt verborgen toegevoegd aan het label zodat screenreadergebruikers weten om welk inlogmiddel het gaat.

### Verwante WCAG regels

- [WCAG eis 2.1.3](https://www.w3.org/TR/WCAG21/#keyboard-no-exception): je kan de button activeren met Enter of Space, en het is mogelijk met Tab de button te focussen. Space gebruiken heeft dan niet het effect dat de pagina scrollt.
- [WCAG eis 2.5.5](https://www.w3.org/TR/WCAG21/#target-size): de button moet groot genoeg zijn om aan te klikken.

## Playground
`,B=n=>E.jsx(G,{...n}),X={title:"Web Components/Button login",id:"web-components-button-login",component:B,argTypes:{label:{type:"string"},agent:{options:["digid","digid-machtigen","eherkenning","eidas"],control:{type:"select"}}},tags:["autodocs"],parameters:{docs:{description:{component:P}}}},c={name:"Playground",args:{label:"",agent:"digid"}};var k,v,w;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    label: '',
    agent: 'digid'
  }
}`,...(w=(v=c.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const $=["Playground"];export{c as Playground,$ as __namedExportsOrder,X as default};
