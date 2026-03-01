import{j as o}from"./jsx-runtime-DQ32znRX.js";import{D as l,B as d,a as x}from"./index-yJLHI2M_.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-oJaljHnC.js";import"./index-D9uilScg.js";const O={title:"Form/Dropdown",component:l,args:{}},m=[{text:"Settings",onSelect:()=>{console.log("Selected Option 1")}},{text:"My Account",onSelect:()=>{console.log("Selected Option 2")}},{text:"Logout",onSelect:()=>{console.log("Selected Option 2")},variant:"danger"}],r={args:{options:m,name:"Options"},decorators:[n=>o.jsx(d,{style:{marginLeft:"32px"},children:o.jsx(n,{})})]},t={args:{options:m,children:o.jsx(x,{radius:"full",variant:"primary",children:"Options"})},decorators:[n=>o.jsx(d,{style:{marginLeft:"32px",paddingTop:"75%"},children:o.jsx(n,{})})]};var e,s,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    options,
    name: 'Options'
  },
  decorators: [Story => <Box style={{
    marginLeft: '32px'
  }}>
        <Story />
      </Box>]
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var i,p,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    options,
    children: <Button radius="full" variant="primary">
        Options
      </Button>
  },
  decorators: [Story => <Box style={{
    marginLeft: '32px',
    paddingTop: '75%'
  }}>
        <Story />
      </Box>]
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const j=["Primary","Secondary"];export{r as Primary,t as Secondary,j as __namedExportsOrder,O as default};
