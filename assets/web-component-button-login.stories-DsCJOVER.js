import{j as U}from"./jsx-runtime-DRTy3Uxn.js";import{R as O,r as H}from"./index-BBkUAzwr.js";const I=`# Button Login

De Button Login is een knop die specifiek bedoeld is voor de Inlogstraat.
`,P=e=>e.toLowerCase().split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""),M=e=>e.replace(/([A-Z])/g,t=>`-${t[0].toLowerCase()}`),Z=(e,t,o={})=>{if(e instanceof Element){const n=$(e.classList,t,o);n!==""&&(e.className=n),Object.keys(t).forEach(s=>{if(!(s==="children"||s==="style"||s==="ref"||s==="class"||s==="className"||s==="forwardedRef"))if(s.indexOf("on")===0&&s[2]===s[2].toUpperCase()){const a=s.substring(2),r=a[0].toLowerCase()+a.substring(1);A(r)||z(e,r,t[s])}else e[s]=t[s],typeof t[s]==="string"&&e.setAttribute(M(s),t[s])})}},$=(e,t,o)=>{const n=t.className||t.class,s=o.className||o.class,a=E(e),r=E(n?n.split(" "):[]),p=E(s?s.split(" "):[]),l=[];return a.forEach(c=>{r.has(c)?(l.push(c),r.delete(c)):p.has(c)||l.push(c)}),r.forEach(c=>l.push(c)),l.join(" ")},q=e=>{switch(e){case"doubleclick":return"dblclick"}return e};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const A=e=>{if(typeof document>"u")return!0;{const t="on"+q(e);let o=t in document;if(!o){const n=document.createElement("div");n.setAttribute(t,"return;"),o=typeof n[t]=="function"}return o}},z=(e,t,o)=>{const n=e.__events||(e.__events={}),s=n[t];s&&e.removeEventListener(t,s),e.addEventListener(t,n[t]=function(r){o&&o.call(this,r)})},E=e=>{const t=new Map;return e.forEach(o=>t.set(o,o)),t},F=(e,t)=>{typeof e=="function"?e(t):e!=null&&(e.current=t)},G=(...e)=>t=>{e.forEach(o=>{F(o,t)})},J=(e,t)=>{const o=(n,s)=>O.createElement(e,Object.assign({},n,{forwardedRef:s}));return o.displayName=t,O.forwardRef(o)};var K=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(o[n[s]]=e[n[s]]);return o};const Q=(e,t,o,n)=>{n!==void 0&&n();const s=P(e),a=class extends O.Component{constructor(r){super(r),this.setComponentElRef=p=>{this.componentEl=p}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(r){Z(this.componentEl,this.props,r)}render(){const r=this.props,{children:p,forwardedRef:l,style:c,className:X,ref:Y}=r,R=K(r,["children","forwardedRef","style","className","ref"]);let h=Object.keys(R).reduce((b,i)=>{const y=R[i];if(i.indexOf("on")===0&&i[2]===i[2].toUpperCase()){const d=i.substring(2).toLowerCase();typeof document<"u"&&A(d)&&(b[i]=y)}else{const d=typeof y;(d==="string"||d==="boolean"||d==="number")&&(b[M(i)]=y)}return b},{});o&&(h=o(this.props,h));const B=Object.assign(Object.assign({},h),{ref:G(l,this.setComponentElRef),style:c});return H.createElement(e,B,p)}static get displayName(){return s}};return t&&(a.contextType=t),J(a,s)},V=Q("lux-button-login"),W=e=>U.jsx(V,{...e}),se={title:"Components/Button Login",id:"web-component-button-login",component:W,argTypes:{label:{type:"string"},agent:{options:["digid","digid-machtigen","eherkenning","eidas"],control:{type:"select"}}},tags:["autodocs"],parameters:{docs:{description:{component:I}}}},f={name:"Digid",args:{label:"",agent:"digid"}},g={name:"Digid Machtigen",args:{label:"",agent:"digid-machtigen"}},u={name:"eHerkenning",args:{label:"",agent:"eherkenning"}},m={name:"eIDAS",args:{label:"",agent:"eidas"}};var C,D,v;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Digid',
  args: {
    label: '',
    agent: 'digid'
  }
}`,...(v=(D=f.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var j,L,k;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Digid Machtigen',
  args: {
    label: '',
    agent: 'digid-machtigen'
  }
}`,...(k=(L=g.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var w,x,N;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'eHerkenning',
  args: {
    label: '',
    agent: 'eherkenning'
  }
}`,...(N=(x=u.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var _,S,T;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'eIDAS',
  args: {
    label: '',
    agent: 'eidas'
  }
}`,...(T=(S=m.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const ne=["Digid","DigidMachtigen","EHerkenning","Eidas"];export{f as Digid,g as DigidMachtigen,u as EHerkenning,m as Eidas,ne as __namedExportsOrder,se as default};
