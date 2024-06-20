import{j as r}from"./jsx-runtime-X2b_N9AH.js";import{R,r as M}from"./index-uCp2LrAq.js";const $=e=>e.toLowerCase().split("-").map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(""),B=e=>e.replace(/([A-Z])/g,s=>`-${s[0].toLowerCase()}`),H=(e,s,a={})=>{if(e instanceof Element){const n=q(e.classList,s,a);n!==""&&(e.className=n),Object.keys(s).forEach(t=>{if(!(t==="children"||t==="style"||t==="ref"||t==="class"||t==="className"||t==="forwardedRef"))if(t.indexOf("on")===0&&t[2]===t[2].toUpperCase()){const c=t.substring(2),o=c[0].toLowerCase()+c.substring(1);F(o)||Z(e,o,s[t])}else e[t]=s[t],typeof s[t]==="string"&&e.setAttribute(B(t),s[t])})}},q=(e,s,a)=>{const n=s.className||s.class,t=a.className||a.class,c=j(e),o=j(n?n.split(" "):[]),g=j(t?t.split(" "):[]),u=[];return c.forEach(i=>{o.has(i)?(u.push(i),o.delete(i)):g.has(i)||u.push(i)}),o.forEach(i=>u.push(i)),u.join(" ")},z=e=>{switch(e){case"doubleclick":return"dblclick"}return e};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const F=e=>{if(typeof document>"u")return!0;{const s="on"+z(e);let a=s in document;if(!a){const n=document.createElement("div");n.setAttribute(s,"return;"),a=typeof n[s]=="function"}return a}},Z=(e,s,a)=>{const n=e.__events||(e.__events={}),t=n[s];t&&e.removeEventListener(s,t),e.addEventListener(s,n[s]=function(o){a&&a.call(this,o)})},j=e=>{const s=new Map;return e.forEach(a=>s.set(a,a)),s},G=(e,s)=>{typeof e=="function"?e(s):e!=null&&(e.current=s)},J=(...e)=>s=>{e.forEach(a=>{G(a,s)})},K=(e,s)=>{const a=(n,t)=>R.createElement(e,Object.assign({},n,{forwardedRef:t}));return a.displayName=s,R.forwardRef(a)};var Q=function(e,s){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&s.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)s.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a};const X=(e,s,a,n)=>{const t=$(e),c=class extends R.Component{constructor(o){super(o),this.setComponentElRef=g=>{this.componentEl=g}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(o){H(this.componentEl,this.props,o)}render(){const o=this.props,{children:g,forwardedRef:u,style:i,className:ne,ref:re}=o,L=Q(o,["children","forwardedRef","style","className","ref"]);let U=Object.keys(L).reduce((b,d)=>{const x=L[d];if(d.indexOf("on")===0&&d[2]===d[2].toUpperCase()){const m=d.substring(2).toLowerCase();typeof document<"u"&&F(m)&&(b[d]=x)}else{const m=typeof x;(m==="string"||m==="boolean"||m==="number")&&(b[B(d)]=x)}return b},{});const I=Object.assign(Object.assign({},U),{ref:J(u,this.setComponentElRef),style:i});return M.createElement(e,I,g)}static get displayName(){return t}};return K(c,t)},l=X("lux-button-login"),v=()=>r.jsxs(r.Fragment,{children:[r.jsx("h5",{className:"lux-heading-4",children:"Agents"}),r.jsx(l,{agent:"digid"}),r.jsx(l,{agent:"digid-machtigen"}),r.jsx(l,{agent:"eherkenning"}),r.jsx(l,{agent:"eidas"})]});v.__docgenInfo={description:"",methods:[],displayName:"VisualAgents"};const N=()=>r.jsxs(r.Fragment,{children:[r.jsx("h5",{className:"lux-heading-4",children:"States"}),r.jsx(l,{agent:"digid",label:"Hover",class:"force-state--hover"}),r.jsx(l,{agent:"digid",label:"Active",class:"force-state--active"}),r.jsx(l,{agent:"digid",label:"Focus",class:"force-state--focus"})]});N.__docgenInfo={description:"",methods:[],displayName:"VisualStates"};const Y=e=>({parameters:{options:{showPanel:!1},a11y:{disable:!0},interactions:{disable:!0},actions:{disable:!0},controls:{disable:!0},backgrounds:{default:"transparent"},chromatic:{disable:!1,disableSnapshot:!1}},render:e}),k=({children:e,className:s})=>r.jsx("div",{className:`visual-regression-wrapper ${s}`,children:e});k.__docgenInfo={description:`Create an HTML flex container so every visual regression story has the same layout

Use together with #createVisualRegressionStory

@see {@link createVisualRegressionStory} on how to use it
@param props {@link React.PropsWithChildren}
@returns A {@link React.ReactElement}`,methods:[],displayName:"VisualRegressionWrapper",props:{className:{required:!0,tsType:{name:"string"},description:""}}};const ee=e=>r.jsx(l,{...e}),se={title:"Web Components/Button login",id:"web-components-button-login",component:ee,argTypes:{label:{type:"string"},agent:{options:["digid","digid-machtigen","eherkenning","eidas"],control:{type:"select"}}}},h={name:"Playground",args:{label:"",agent:"digid"},parameters:{docs:{sourceState:"shown"}}},f={name:"Light version",args:{label:"",agent:"digid"},parameters:{themes:{themeOverride:"Logius light"},backgrounds:{default:"light"}}},y={name:"Dark version",args:{label:"",agent:"digid"},parameters:{themes:{themeOverride:"Logius dark"},backgrounds:{default:"dark"}}},p=Y(()=>r.jsxs(r.Fragment,{children:[r.jsx("h4",{className:"lux-heading-3",children:"Light"}),r.jsxs(k,{className:"lux-theme--logius-light",children:[r.jsx(v,{}),r.jsx(N,{})]}),r.jsx("h4",{className:"lux-heading-3",children:"Dark"}),r.jsxs(k,{className:"lux-theme--logius-dark",children:[r.jsx(v,{}),r.jsx(N,{})]})]}));p.__docgenInfo={description:"",methods:[],displayName:"Visual"};var C,E,O;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    label: '',
    agent: 'digid'
  },
  parameters: {
    docs: {
      sourceState: 'shown'
    }
  }
}`,...(O=(E=h.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var _,S,V;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Light version',
  args: {
    label: '',
    agent: 'digid'
  },
  parameters: {
    themes: {
      themeOverride: 'Logius light'
    },
    backgrounds: {
      default: 'light'
    }
  }
}`,...(V=(S=f.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var w,P,T;y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Dark version',
  args: {
    label: '',
    agent: 'digid'
  },
  parameters: {
    themes: {
      themeOverride: 'Logius dark'
    },
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(T=(P=y.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var A,D,W;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`createVisualRegressionStory(() => <>
    <h4 className="lux-heading-3">Light</h4>
    <VisualRegressionWrapper className={\`lux-theme--logius-light\`}>
      <VisualAgents />
      <VisualStates />
    </VisualRegressionWrapper>
    <h4 className="lux-heading-3">Dark</h4>
    <VisualRegressionWrapper className={\`lux-theme--logius-dark\`}>
      <VisualAgents />
      <VisualStates />
    </VisualRegressionWrapper>
  </>)`,...(W=(D=p.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};const te=["Playground","LightTheme","DarkTheme","Visual"],ie=Object.freeze(Object.defineProperty({__proto__:null,DarkTheme:y,LightTheme:f,Playground:h,Visual:p,__namedExportsOrder:te,default:se},Symbol.toStringTag,{value:"Module"}));export{ie as B,y as D,f as L,h as P};
