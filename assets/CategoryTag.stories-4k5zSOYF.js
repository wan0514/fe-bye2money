import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{t as m}from"./theme-DeMrbo-H.js";import{n as y}from"./emotion-styled.browser.esm-VIVQR77T.js";import"./emotion-element-f0de968e.browser.esm-D9GHp9Q7.js";import"./index-D4lIrffr.js";const x=y.span`
  display: inline-block;
  width: 92px;
  flex: 0 0 auto;
  padding: 16px 23px;
  text-align: center;
  white-space: nowrap;
  background-color: ${({theme:e,children:a})=>{const l=e.categoryColors[a];return e.colors[l]}};

  ${({theme:e})=>e.typography.light12};
`;function s({children:e}){return t.jsx(x,{children:e})}s.__docgenInfo={description:"",methods:[],displayName:"CategoryTag"};const _={title:"Shared/CategoryTag",component:s,argTypes:{children:{control:"text",description:"카테고리 이름 (예: 식비, 교통, 문화/여가 등)"}}},u=e=>t.jsx(s,{...e}),r=u.bind({});r.args={children:"식비"};const o=()=>{const e=Object.keys(m.categoryColors);return t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"12px"},children:e.map(a=>t.jsx(s,{children:a},a))})};o.__docgenInfo={description:"",methods:[],displayName:"전체카테고리"};var n,c,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"args => <CategoryTag {...args} />",...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var i,g,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const categories = Object.keys(theme.categoryColors);
  return <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px'
  }}>
      {categories.map(name => <CategoryTag key={name}>{name}</CategoryTag>)}
    </div>;
}`,...(d=(g=o.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const w=["Test","전체카테고리"];export{r as Test,w as __namedExportsOrder,_ as default,o as 전체카테고리};
