import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-D4lIrffr.js";import{h as A,E as k,c as B}from"./emotion-element-f0de968e.browser.esm-D9GHp9Q7.js";import{c as f}from"./emotion-react.browser.esm-Q1dQD7Mz.js";import{n as P}from"./emotion-styled.browser.esm-VIVQR77T.js";var b=function(r,e,l){return A.call(e,"css")?t.jsx(k,B(r,e),l):t.jsx(r,e,l)};function s({type:a="default",disabled:r=!1,error:e=!1,value:l,placeholderText:p="placeholder",onChange:x}){const[m,g]=v.useState(!1);return b(F,{type:a,visualState:r?"disabled":e?"error":m?"active":"enabled",children:b(M,{value:l,readOnly:!x,onChange:q=>{x&&x(q.target.value)},placeholder:p,disabled:r,onFocus:()=>g(!0),onBlur:()=>g(!1)})})}const F=P.div`
  ${({type:a,visualState:r,theme:e})=>{if(a==="textAreaOnly")return f``;const l={enabled:e==null?void 0:e.colors.neutralSurfacePoint,disabled:e==null?void 0:e.colors.neutralSurfaceWeak,active:e==null?void 0:e.colors.neutralSurfaceDefault,error:e==null?void 0:e.colors.neutralSurfaceDefault},p={active:e==null?void 0:e.colors.neutralBorderDefault,error:e==null?void 0:e.colors.dangerBorderDefault};return f`
      width: 100%;
      background-color: ${l[r]};
      box-shadow: ${["active","error"].includes(r)?`0 0 0 1px ${p[r]}`:"none"};
      padding: 8px 16px;
      border-radius: 8px;
      box-sizing: border-box;
    `}}
`,M=P.input`
  width: 100%;
  min-width: 288px;
  padding: 4px 0;

  ${({theme:a})=>f`
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
};`,methods:[],displayName:"TextInput",props:{type:{defaultValue:{value:"'default'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},error:{defaultValue:{value:"false",computed:!1},required:!1},placeholderText:{defaultValue:{value:"'placeholder'",computed:!1},required:!1}}};const K={title:"Components/TextInput",component:s,argTypes:{disabled:{control:"boolean"},error:{control:"boolean"},type:{control:{type:"radio"},options:["default","textAreaOnly"]}}},i=a=>{const[r,e]=v.useState("");return t.jsx(s,{...a,value:r,onChange:l=>e(l)})},o=i.bind({});o.args={type:"default",disabled:!1,error:!1,placeholderText:"결제수단을 입력해주세요"};const n=i.bind({});n.args={type:"default",disabled:!0,error:!1,placeholderText:"입력 비활성화됨"};const d=i.bind({});d.args={type:"default",disabled:!1,error:!0,placeholderText:"에러 발생 시"};const u=i.bind({});u.args={type:"textAreaOnly",disabled:!1,error:!1,placeholderText:"라벨 없는 에어리어"};const c=()=>{const[a,r]=v.useState("");return t.jsxs("div",{style:{display:"grid",gap:"24px"},children:[t.jsxs("div",{style:{width:"100%"},children:[t.jsx("label",{children:"100% 너비: 부모의 크기에 맞춰집니다"}),t.jsx(s,{type:"default",value:a,onChange:e=>r(e),placeholderText:"부모 width: 100%"})]}),t.jsxs("div",{style:{width:"400px"},children:[t.jsx("label",{children:"400px 고정 너비"}),t.jsx(s,{type:"default",value:a,onChange:e=>r(e),placeholderText:"부모 width: 400px"})]}),t.jsxs("div",{style:{width:"fit-content",border:"1px dashed gray",padding:"4px"},children:[t.jsx("label",{children:"fit-content"}),t.jsx(s,{type:"default",value:a,onChange:e=>r(e),placeholderText:"부모 width: fit-content"})]})]})};c.__docgenInfo={description:"",methods:[],displayName:"ParentWidthVariants"};var y,T,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  return <TextInput {...args} value={value} onChange={v => setValue(v)} />;
}`,...(h=(T=o.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var V,S,w;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  return <TextInput {...args} value={value} onChange={v => setValue(v)} />;
}`,...(w=(S=n.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var j,I,C;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  return <TextInput {...args} value={value} onChange={v => setValue(v)} />;
}`,...(C=(I=d.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var _,$,O;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  return <TextInput {...args} value={value} onChange={v => setValue(v)} />;
}`,...(O=($=u.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var E,W,D;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
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
}`,...(D=(W=c.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};const L=["기본_입력창","비활성화","에러상태","텍스트에어리어전용","ParentWidthVariants"];export{c as ParentWidthVariants,L as __namedExportsOrder,K as default,o as 기본_입력창,n as 비활성화,d as 에러상태,u as 텍스트에어리어전용};
