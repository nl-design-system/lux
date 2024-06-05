import{j as s}from"./jsx-runtime-X2b_N9AH.js";import{R as k,r as z}from"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";const V=e=>e.toLowerCase().split("-").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(""),A=e=>e.replace(/([A-Z])/g,n=>`-${n[0].toLowerCase()}`),T=(e,n,i={})=>{if(e instanceof Element){const o=D(e.classList,n,i);o!==""&&(e.className=o),Object.keys(n).forEach(t=>{if(!(t==="children"||t==="style"||t==="ref"||t==="class"||t==="className"||t==="forwardedRef"))if(t.indexOf("on")===0&&t[2]===t[2].toUpperCase()){const r=t.substring(2),a=r[0].toLowerCase()+r.substring(1);L(a)||G(e,a,n[t])}else e[t]=n[t],typeof n[t]==="string"&&e.setAttribute(A(t),n[t])})}},D=(e,n,i)=>{const o=n.className||n.class,t=i.className||i.class,r=x(e),a=x(o?o.split(" "):[]),c=x(t?t.split(" "):[]),g=[];return r.forEach(l=>{a.has(l)?(g.push(l),a.delete(l)):c.has(l)||g.push(l)}),a.forEach(l=>g.push(l)),g.join(" ")},P=e=>{switch(e){case"doubleclick":return"dblclick"}return e};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const L=e=>{if(typeof document>"u")return!0;{const n="on"+P(e);let i=n in document;if(!i){const o=document.createElement("div");o.setAttribute(n,"return;"),i=typeof o[n]=="function"}return i}},G=(e,n,i)=>{const o=e.__events||(e.__events={}),t=o[n];t&&e.removeEventListener(n,t),e.addEventListener(n,o[n]=function(a){i&&i.call(this,a)})},x=e=>{const n=new Map;return e.forEach(i=>n.set(i,i)),n},F=(e,n)=>{typeof e=="function"?e(n):e!=null&&(e.current=n)},H=(...e)=>n=>{e.forEach(i=>{F(i,n)})},I=(e,n)=>{const i=(o,t)=>k.createElement(e,Object.assign({},o,{forwardedRef:t}));return i.displayName=n,k.forwardRef(i)};var U=function(e,n){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(i[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,o=Object.getOwnPropertySymbols(e);t<o.length;t++)n.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(e,o[t])&&(i[o[t]]=e[o[t]]);return i};const B=(e,n,i,o)=>{const t=V(e),r=class extends k.Component{constructor(a){super(a),this.setComponentElRef=c=>{this.componentEl=c}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(a){T(this.componentEl,this.props,a)}render(){const a=this.props,{children:c,forwardedRef:g,style:l,className:Q,ref:Z}=a,v=U(a,["children","forwardedRef","style","className","ref"]);let W=Object.keys(v).reduce((f,u)=>{const h=v[u];if(u.indexOf("on")===0&&u[2]===u[2].toUpperCase()){const p=u.substring(2).toLowerCase();typeof document<"u"&&L(p)&&(f[u]=h)}else{const p=typeof h;(p==="string"||p==="boolean"||p==="number")&&(f[A(u)]=h)}return f},{});const _=Object.assign(Object.assign({},W),{ref:H(g,this.setComponentElRef),style:l});return z.createElement(e,_,c)}static get displayName(){return t}};return I(r,t)},d=B("lux-button-login"),M=`Biedt de mogelijkheid om naar de beschikbare inlogmiddelen te navigeren.

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
`,S=()=>s.jsxs(s.Fragment,{children:[s.jsx("h4",{className:"lux-heading-4",children:"Agents"}),s.jsx(d,{agent:"digid"}),s.jsx(d,{agent:"digid-machtigen"}),s.jsx(d,{agent:"eherkenning"}),s.jsx(d,{agent:"eidas"})]});S.__docgenInfo={description:"",methods:[],displayName:"VisualAgents"};const N=()=>s.jsxs(s.Fragment,{children:[s.jsx("h4",{className:"lux-heading-4",children:"States"}),s.jsx(d,{agent:"digid",label:"Hover",class:"force-state--hover"}),s.jsx(d,{agent:"digid",label:"Active",class:"force-state--active"}),s.jsx(d,{agent:"digid",label:"Focus",class:"force-state--focus"})]});N.__docgenInfo={description:"",methods:[],displayName:"VisualStates"};const X=e=>({parameters:{options:{showPanel:!1},a11y:{disable:!0},interactions:{disable:!0},actions:{disable:!0},controls:{disable:!0},backgrounds:{default:"transparent"},chromatic:{disable:!1,disableSnapshot:!1}},render:e}),O=({children:e})=>{const n={backgroundColor:"",display:"flex",flexDirection:"column",flexWrap:"wrap",gap:"16px 32px"};return s.jsx("div",{style:n,children:e})};O.__docgenInfo={description:`Create an HTML flex container so every visual regression story has the same layout

Use together with #createVisualRegressionStory

@see {@link createVisualRegressionStory} on how to use it
@param props {@link React.PropsWithChildren}
@returns A {@link React.ReactElement}`,methods:[],displayName:"VisualRegressionWrapper"};const $=e=>s.jsx(d,{...e}),Y={title:"Web Components/Button login",id:"web-components-button-login",component:$,argTypes:{label:{type:"string"},agent:{options:["digid","digid-machtigen","eherkenning","eidas"],control:{type:"select"}}},tags:["autodocs"],parameters:{docs:{description:{component:M}}}},m={name:"Playground",args:{label:"",agent:"digid"}},b=X(()=>s.jsxs(O,{children:[s.jsx(S,{}),s.jsx(N,{})]}));b.__docgenInfo={description:"",methods:[],displayName:"Visual"};var y,j,w;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    label: '',
    agent: 'digid'
  }
}`,...(w=(j=m.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var R,C,E;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`createVisualRegressionStory(() => <VisualRegressionWrapper>
    <VisualAgents />
    <VisualStates />
  </VisualRegressionWrapper>)`,...(E=(C=b.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const ee=["Playground","Visual"];export{m as Playground,b as Visual,ee as __namedExportsOrder,Y as default};
