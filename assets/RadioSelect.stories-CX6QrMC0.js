import{j as r}from"./jsx-runtime-DQ32znRX.js";import{R as i,b as n}from"./index-yJLHI2M_.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-oJaljHnC.js";import"./index-D9uilScg.js";const R={title:"Form/Radio Select",component:i,parameters:{docs:{description:{component:"The Radio Select component functions as a selectable group of buttons or tags, where only one choice can be active at a time. It uses standard hidden radio inputs for accessibility."}}},args:{size:"md"},decorators:[e=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:e()})],argTypes:{size:{options:["md","sm"],control:{type:"inline-radio"}}},render:({size:e,...a})=>r.jsxs(i,{...a,children:[r.jsx(n,{size:e,label:"Option 1",name:a.name||"radiogroup",value:"1",defaultChecked:!0}),r.jsx(n,{size:e,label:"Option 2",name:a.name||"radiogroup",value:"2",disabled:a.disabledOption}),r.jsx(n,{size:e,label:"Option 3",name:a.name||"radiogroup",value:"3"})]})},o={args:{name:"primary"}},s={args:{name:"disabled",disabledOption:!0}},t={args:{name:"small",size:"sm"}};var m,d,l;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    name: 'primary'
  }
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,p,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    name: 'disabled',
    disabledOption: true
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var b,g,x;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    name: 'small',
    size: 'sm'
  }
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const v=["Primary","Disabled","Small"];export{s as Disabled,o as Primary,t as Small,v as __namedExportsOrder,R as default};
