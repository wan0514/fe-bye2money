import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{c as t,G as r}from"./emotion-react.browser.esm-Q1dQD7Mz.js";import{t as n}from"./theme-DeMrbo-H.js";import{T as s}from"./emotion-element-f0de968e.browser.esm-D9GHp9Q7.js";import"./index-D4lIrffr.js";const a=t`
  /* Reset CSS */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: inherit;
    vertical-align: baseline;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ol,
  ul {
    list-style: none;
  }

  table {
    border-collapse: collapse;
  }

  button,
  input,
  select,
  textarea {
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    font: inherit;
    color: inherit;
  }
`,i=e=>t`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css');

  @font-face {
    font-family: 'Chosunilbo_myungjo';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Chosunilbo_myungjo.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  ${a};

  button {
    cursor: pointer;
  }

  body {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    font-family: 'Pretendard', sans-serif;
    background-color: ${e.colors.grayscale50};

    overflow: hidden;

    transition:
      background-color 0.2s ease,
      color 0.2s ease;
  }

  html,
  body,
  #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }
`,h={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}},decorators:[e=>o.jsx(o.Fragment,{children:o.jsxs(s,{theme:n,children:[o.jsx(r,{styles:i}),o.jsx(e,{})]})})]};export{h as default};
