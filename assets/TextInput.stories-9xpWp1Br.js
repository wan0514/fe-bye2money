import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-D4lIrffr.js";import{h as A,E as k,c as B}from"./emotion-element-f0de968e.browser.esm-D9GHp9Q7.js";import{c as x}from"./emotion-react.browser.esm-Q1dQD7Mz.js";import{n as D}from"./emotion-styled.browser.esm-VIVQR77T.js";var g=function(r,e,l){return A.call(e,"css")?t.jsx(k,B(r,e),l):t.jsx(r,e,l)};function s({type:a="default",disabled:r=!1,error:e=!1,value:l,placeholderText:p="placeholder",onChange:P}){const[m,v]=f.useState(!1);return g(F,{type:a,visualState:r?"disabled":e?"error":m?"active":"enabled",children:g(M,{value:l,onChange:q=>P(q.target.value),placeholder:p,disabled:r,onFocus:()=>v(!0),onBlur:()=>v(!1)})})}const F=D.div`
  ${({type:a,visualState:r,theme:e})=>{if(a==="textAreaOnly")return x``;const l={enabled:e==null?void 0:e.colors.neutralSurfacePoint,disabled:e==null?void 0:e.colors.neutralSurfaceWeak,active:e==null?void 0:e.colors.neutralSurfaceDefault,error:e==null?void 0:e.colors.neutralSurfaceDefault},p={active:e==null?void 0:e.colors.neutralBorderDefault,error:e==null?void 0:e.colors.dangerBorderDefault};return x`
      width: 100%;
      background-color: ${l[r]};
      box-shadow: ${["active","error"].includes(r)?`0 0 0 1px ${p[r]}`:"none"};
      padding: 8px 16px;
      border-radius: 8px;
      box-sizing: border-box;
    `}}
`,M=D.input`
  width: 100%;
  min-width: 288px;
  padding: 4px 0;

  ${({theme:a})=>x`
    ${a==null?void 0:a.typography.semibold12};
    color: ${a==null?void 0:a.colors.neutralTextDefault};

    &::placeholder {
      color: ${a==null?void 0:a.colors.neutralTextWeak};
    }

    &:focus {
      outline: none;
    }
  `}
`;s.__docgenInfo={description:`TextInput 컴포넌트

  type?: 'default' | 'textAreaOnly';         // UI 패턴
  value: string;                             // 입력값 (controlled)
  placeholderText?: string;                  // 플레이스홀더
  onChange: (value: string) => void;         // 변경 핸들러
  disabled?: boolean;                        // 입력 비활성화 여부 (외부 제어)
  error?: boolean;                           // 오류 상태 여부 (외부 validation 결과)
};`,methods:[],displayName:"TextInput",props:{type:{defaultValue:{value:"'default'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},error:{defaultValue:{value:"false",computed:!1},required:!1},placeholderText:{defaultValue:{value:"'placeholder'",computed:!1},required:!1}}};const J={title:"Components/TextInput",component:s,argTypes:{disabled:{control:"boolean"},error:{control:"boolean"},type:{control:{type:"radio"},options:["default","textAreaOnly"]}}},i=a=>{const[r,e]=f.useState("");return t.jsx(s,{...a,value:r,onChange:l=>e(l)})},o=i.bind({});o.args={type:"default",disabled:!1,error:!1,placeholderText:"결제수단을 입력해주세요"};const n=i.bind({});n.args={type:"default",disabled:!0,error:!1,placeholderText:"입력 비활성화됨"};const d=i.bind({});d.args={type:"default",disabled:!1,error:!0,placeholderText:"에러 발생 시"};const u=i.bind({});u.args={type:"textAreaOnly",disabled:!1,error:!1,placeholderText:"라벨 없는 에어리어"};const c=()=>{const[a,r]=f.useState("");return t.jsxs("div",{style:{display:"grid",gap:"24px"},children:[t.jsxs("div",{style:{width:"100%"},children:[t.jsx("label",{children:"100% 너비: 부모의 크기에 맞춰집니다"}),t.jsx(s,{type:"default",value:a,onChange:e=>r(e),placeholderText:"부모 width: 100%"})]}),t.jsxs("div",{style:{width:"400px"},children:[t.jsx("label",{children:"400px 고정 너비"}),t.jsx(s,{type:"default",value:a,onChange:e=>r(e),placeholderText:"부모 width: 400px"})]}),t.jsxs("div",{style:{width:"fit-content",border:"1px dashed gray",padding:"4px"},children:[t.jsx("label",{children:"fit-content"}),t.jsx(s,{type:"default",value:a,onChange:e=>r(e),placeholderText:"부모 width: fit-content"})]})]})};c.__docgenInfo={description:"",methods:[],displayName:"ParentWidthVariants"};var b,y,T;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  return <TextInput {...args} value={value} onChange={v => setValue(v)} />;
}`,...(T=(y=o.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var V,h,S;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  return <TextInput {...args} value={value} onChange={v => setValue(v)} />;
}`,...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var w,j,I;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  return <TextInput {...args} value={value} onChange={v => setValue(v)} />;
}`,...(I=(j=d.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var C,_,$;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  return <TextInput {...args} value={value} onChange={v => setValue(v)} />;
}`,...($=(_=u.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var E,O,W;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  return <div style={{
    display: 'grid',
    gap: '24px'
  }}>
      <div style={{
      width: '100%'
    }}>
        <label>100% 너비: 부모의 크기에 맞춰집니다</label>
        <TextInput type="default" value={value} onChange={v => setValue(v)} placeholderText="부모 width: 100%" />
      </div>

      <div style={{
      width: '400px'
    }}>
        <label>400px 고정 너비</label>
        <TextInput type="default" value={value} onChange={v => setValue(v)} placeholderText="부모 width: 400px" />
      </div>

      <div style={{
      width: 'fit-content',
      border: '1px dashed gray',
      padding: '4px'
    }}>
        <label>fit-content</label>
        <TextInput type="default" value={value} onChange={v => setValue(v)} placeholderText="부모 width: fit-content" />
      </div>
    </div>;
}`,...(W=(O=c.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};const K=["기본_입력창","비활성화","에러상태","텍스트에어리어전용","ParentWidthVariants"];export{c as ParentWidthVariants,K as __namedExportsOrder,J as default,o as 기본_입력창,n as 비활성화,d as 에러상태,u as 텍스트에어리어전용};
