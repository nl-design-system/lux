import{j as e}from"./jsx-runtime-BlAj40OV.js";import{L as s,t as N,c as D}from"./components-D2KmMgj0.js";import{c as _,V as g}from"./createVisualRegressionStory-DkGMbcjT.js";const T={"button-login":{active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},icon:{size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},"margin-inline":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"min-block-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"min-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}},R={lux:T},o=()=>e.jsxs(e.Fragment,{children:[e.jsx("h5",{className:"lux-heading-4",children:"Agents"}),e.jsx(s,{agent:"digid"}),e.jsx(s,{agent:"digid-machtigen"}),e.jsx(s,{agent:"eherkenning"}),e.jsx(s,{agent:"eidas"})]});o.__docgenInfo={description:"",methods:[],displayName:"VisualAgents"};const l=()=>e.jsxs(e.Fragment,{children:[e.jsx("h5",{className:"lux-heading-4",children:"States"}),e.jsx(s,{agent:"digid",label:"Hover",class:"force-state--hover"}),e.jsx(s,{agent:"digid",label:"Active",class:"force-state--active"}),e.jsx(s,{agent:"digid",label:"Focus",class:"force-state--focus"})]});l.__docgenInfo={description:"",methods:[],displayName:"VisualStates"};const O=v=>e.jsx(s,{...v}),L={title:"Web Components/Button login",id:"web-components-button-login",component:O,parameters:{tokens:N,tokensPrefix:"lux-button-login",tokensDefinition:R},argTypes:{label:{type:"string"},agent:{options:["digid","digid-machtigen","eherkenning","eidas"],control:{type:"select"}}}},t={name:"Playground",args:{label:"",agent:"digid"},parameters:{docs:{sourceState:"shown"}}},r={name:"Light version",args:{label:"",agent:"digid"},parameters:{themes:{themeOverride:"Logius light"},backgrounds:{default:"light"}}},a={name:"Dark version",args:{label:"",agent:"digid"},parameters:{themes:{themeOverride:"Logius dark"},backgrounds:{default:"dark"}}},i=D(L),n=_(()=>e.jsxs(e.Fragment,{children:[e.jsx("h4",{className:"lux-heading-3",children:"Light"}),e.jsxs(g,{className:"lux-theme--logius-light",children:[e.jsx(o,{}),e.jsx(l,{})]}),e.jsx("h4",{className:"lux-heading-3",children:"Dark"}),e.jsxs(g,{className:"lux-theme--logius-dark",children:[e.jsx(o,{}),e.jsx(l,{})]})]}));n.__docgenInfo={description:"",methods:[],displayName:"Visual"};var c,d,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,p,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var x,y,b;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var k,j,$;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:"createDesignTokensStory(meta)",...($=(j=i.parameters)==null?void 0:j.docs)==null?void 0:$.source}}};var f,S,V;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`createVisualRegressionStory(() => <>
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
  </>)`,...(V=(S=n.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};const P=["Playground","LightTheme","DarkTheme","DesignTokens","Visual"],w=Object.freeze(Object.defineProperty({__proto__:null,DarkTheme:a,DesignTokens:i,LightTheme:r,Playground:t,Visual:n,__namedExportsOrder:P,default:L},Symbol.toStringTag,{value:"Module"}));export{w as B,a as D,r as L,t as P};
