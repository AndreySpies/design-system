import{j as e}from"./jsx-runtime-DQ32znRX.js";import{S as f}from"./index-yJLHI2M_.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-oJaljHnC.js";import"./index-D9uilScg.js";const w={title:"Form/Select",component:f,parameters:{docs:{description:{component:"The Select component allows users to choose one option from a dropdown list. It supports both children-based rendering (via `<option>` tags) and prop-based rendering (via the `options` array)."}}},args:{error:"",hint:"",required:!1,disabled:!1},argTypes:{label:{control:{type:"text"}},size:{options:["default","small"],control:{type:"inline-radio"}},disabled:{control:{type:"boolean"}},options:{description:"An array of objects specifying label, value, and optionally disabled state for each option.",control:{type:"object"}},labelProps:{description:"Accepts the same props as the Text component"},errorProps:{description:"Accepts the same props as the Text component"},hintProps:{description:"Accepts the same props as the Text component"},requiredAsteriskProps:{description:"Accepts the same props as the Text component"}},decorators:[y=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:y()})]},o={args:{label:"Option",hint:"Choose an option",children:e.jsxs(e.Fragment,{children:[e.jsx("option",{value:"",disabled:!0,selected:!0,children:"Select an option"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"}),e.jsx("option",{value:"3",children:"Option 3"})]})}},n={args:{label:"Option",disabled:!0,children:e.jsxs(e.Fragment,{children:[e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"}),e.jsx("option",{value:"3",children:"Option 3"})]})}},t={args:{label:"Option",error:"This is a required field",children:e.jsx(e.Fragment,{children:e.jsx("option",{value:"1",children:"Option 1"})})}},r={args:{label:"Option",size:"small",children:e.jsx(e.Fragment,{children:e.jsx("option",{value:"1",children:"Option 1"})})}},i={args:{label:"Option",hint:"Choose an option",options:[{label:"Select an option",value:"",disabled:!0},{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}]},parameters:{docs:{description:{story:"You can provide an `options` array with `{ label, value, disabled? }` objects instead of passing `<option>` elements as children."}}}};var a,s,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    label: 'Option',
    hint: 'Choose an option',
    children: <>
        <option value="" disabled selected>Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </>
  }
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var p,c,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Option',
    disabled: true,
    children: <>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </>
  }
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,m,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Option',
    error: 'This is a required field',
    children: <>
        <option value="1">Option 1</option>
      </>
  }
}`,...(h=(m=t.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var b,O,v;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Option',
    size: 'small',
    children: <>
        <option value="1">Option 1</option>
      </>
  }
}`,...(v=(O=r.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};var g,x,j;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Option',
    hint: 'Choose an option',
    options: [{
      label: 'Select an option',
      value: '',
      disabled: true
    }, {
      label: 'Option 1',
      value: '1'
    }, {
      label: 'Option 2',
      value: '2'
    }, {
      label: 'Option 3',
      value: '3'
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'You can provide an \`options\` array with \`{ label, value, disabled? }\` objects instead of passing \`<option>\` elements as children.'
      }
    }
  }
}`,...(j=(x=i.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const C=["Primary","Disabled","Errored","Small","WithOptions"];export{n as Disabled,t as Errored,o as Primary,r as Small,i as WithOptions,C as __namedExportsOrder,w as default};
