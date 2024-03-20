import{j as A}from"./jsx-runtime-DRTy3Uxn.js";import{R as v,r as H}from"./index-BBkUAzwr.js";const P=`# Login Method Button

De Login Method Button is een knop die specifiek bedoeld is voor de Inlogstraat.
`,I=e=>e.toLowerCase().split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""),S=e=>e.replace(/([A-Z])/g,t=>`-${t[0].toLowerCase()}`),Z=(e,t,o={})=>{if(e instanceof Element){const n=$(e.classList,t,o);n!==""&&(e.className=n),Object.keys(t).forEach(s=>{if(!(s==="children"||s==="style"||s==="ref"||s==="class"||s==="className"||s==="forwardedRef"))if(s.indexOf("on")===0&&s[2]===s[2].toUpperCase()){const a=s.substring(2),r=a[0].toLowerCase()+a.substring(1);B(r)||z(e,r,t[s])}else e[s]=t[s],typeof t[s]==="string"&&e.setAttribute(S(s),t[s])})}},$=(e,t,o)=>{const n=t.className||t.class,s=o.className||o.class,a=E(e),r=E(n?n.split(" "):[]),l=E(s?s.split(" "):[]),d=[];return a.forEach(i=>{r.has(i)?(d.push(i),r.delete(i)):l.has(i)||d.push(i)}),r.forEach(i=>d.push(i)),d.join(" ")},q=e=>{switch(e){case"doubleclick":return"dblclick"}return e};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const B=e=>{if(typeof document>"u")return!0;{const t="on"+q(e);let o=t in document;if(!o){const n=document.createElement("div");n.setAttribute(t,"return;"),o=typeof n[t]=="function"}return o}},z=(e,t,o)=>{const n=e.__events||(e.__events={}),s=n[t];s&&e.removeEventListener(t,s),e.addEventListener(t,n[t]=function(r){o&&o.call(this,r)})},E=e=>{const t=new Map;return e.forEach(o=>t.set(o,o)),t},F=(e,t)=>{typeof e=="function"?e(t):e!=null&&(e.current=t)},G=(...e)=>t=>{e.forEach(o=>{F(o,t)})},J=(e,t)=>{const o=(n,s)=>v.createElement(e,Object.assign({},n,{forwardedRef:s}));return o.displayName=t,v.forwardRef(o)};var K=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(o[n[s]]=e[n[s]]);return o};const Q=(e,t,o,n)=>{n!==void 0&&n();const s=I(e),a=class extends v.Component{constructor(r){super(r),this.setComponentElRef=l=>{this.componentEl=l}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(r){Z(this.componentEl,this.props,r)}render(){const r=this.props,{children:l,forwardedRef:d,style:i,className:X,ref:Y}=r,O=K(r,["children","forwardedRef","style","className","ref"]);let h=Object.keys(O).reduce((b,c)=>{const y=O[c];if(c.indexOf("on")===0&&c[2]===c[2].toUpperCase()){const p=c.substring(2).toLowerCase();typeof document<"u"&&B(p)&&(b[c]=y)}else{const p=typeof y;(p==="string"||p==="boolean"||p==="number")&&(b[S(c)]=y)}return b},{});o&&(h=o(this.props,h));const U=Object.assign(Object.assign({},h),{ref:G(d,this.setComponentElRef),style:i});return H.createElement(e,U,l)}static get displayName(){return s}};return t&&(a.contextType=t),J(a,s)},V=Q("lux-login-method-button"),W=e=>A.jsx(V,{...e}),se={title:"Components/Login Method Button",id:"web-component-login-method",component:W,argTypes:{label:{type:"string"},variant:{options:["digid","digid-machtigen","e-herkenning","eidas"],control:{type:"select"}}},tags:["autodocs"],parameters:{docs:{description:{component:P}}}},f={name:"Digid",args:{label:"",variant:"digid"}},u={name:"Digid Machtigen",args:{label:"",variant:"digid-machtigen"}},g={name:"E-Herkenning",args:{label:"",variant:"e-herkenning"}},m={name:"Eidas",args:{label:"",variant:"eidas"}};var R,C,j;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Digid',
  args: {
    label: '',
    variant: 'digid'
  }
}`,...(j=(C=f.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var D,L,k;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Digid Machtigen',
  args: {
    label: '',
    variant: 'digid-machtigen'
  }
}`,...(k=(L=u.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var w,x,M;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'E-Herkenning',
  args: {
    label: '',
    variant: 'e-herkenning'
  }
}`,...(M=(x=g.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var N,_,T;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Eidas',
  args: {
    label: '',
    variant: 'eidas'
  }
}`,...(T=(_=m.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};const ne=["Digid","DigidMachtigen","EHerkenning","Eidas"];export{f as Digid,u as DigidMachtigen,g as EHerkenning,m as Eidas,ne as __namedExportsOrder,se as default};
