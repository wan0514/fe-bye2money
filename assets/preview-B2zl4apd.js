import{j as w}from"./jsx-runtime-D_zvdyIk.js";import{w as N,s as C,T as q,a as E,i as z,h as D,E as J,c as L,b as X,t as W}from"./emotion-element-f0de968e.browser.esm-DZahaHMF.js";import{r as P}from"./index-D4lIrffr.js";var R={exports:{}},r={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O;function H(){if(O)return r;O=1;var t=typeof Symbol=="function"&&Symbol.for,o=t?Symbol.for("react.element"):60103,a=t?Symbol.for("react.portal"):60106,i=t?Symbol.for("react.fragment"):60107,f=t?Symbol.for("react.strict_mode"):60108,s=t?Symbol.for("react.profiler"):60114,n=t?Symbol.for("react.provider"):60109,l=t?Symbol.for("react.context"):60110,y=t?Symbol.for("react.async_mode"):60111,m=t?Symbol.for("react.concurrent_mode"):60111,g=t?Symbol.for("react.forward_ref"):60112,v=t?Symbol.for("react.suspense"):60113,j=t?Symbol.for("react.suspense_list"):60120,b=t?Symbol.for("react.memo"):60115,c=t?Symbol.for("react.lazy"):60116,d=t?Symbol.for("react.block"):60121,h=t?Symbol.for("react.fundamental"):60117,x=t?Symbol.for("react.responder"):60118,S=t?Symbol.for("react.scope"):60119;function u(e){if(typeof e=="object"&&e!==null){var p=e.$$typeof;switch(p){case o:switch(e=e.type,e){case y:case m:case i:case s:case f:case v:return e;default:switch(e=e&&e.$$typeof,e){case l:case g:case c:case b:case n:return e;default:return p}}case a:return p}}}function $(e){return u(e)===m}return r.AsyncMode=y,r.ConcurrentMode=m,r.ContextConsumer=l,r.ContextProvider=n,r.Element=o,r.ForwardRef=g,r.Fragment=i,r.Lazy=c,r.Memo=b,r.Portal=a,r.Profiler=s,r.StrictMode=f,r.Suspense=v,r.isAsyncMode=function(e){return $(e)||u(e)===y},r.isConcurrentMode=$,r.isContextConsumer=function(e){return u(e)===l},r.isContextProvider=function(e){return u(e)===n},r.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===o},r.isForwardRef=function(e){return u(e)===g},r.isFragment=function(e){return u(e)===i},r.isLazy=function(e){return u(e)===c},r.isMemo=function(e){return u(e)===b},r.isPortal=function(e){return u(e)===a},r.isProfiler=function(e){return u(e)===s},r.isStrictMode=function(e){return u(e)===f},r.isSuspense=function(e){return u(e)===v},r.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===i||e===m||e===s||e===f||e===v||e===j||typeof e=="object"&&e!==null&&(e.$$typeof===c||e.$$typeof===b||e.$$typeof===n||e.$$typeof===l||e.$$typeof===g||e.$$typeof===h||e.$$typeof===x||e.$$typeof===S||e.$$typeof===d)},r.typeOf=u,r}var _;function G(){return _||(_=1,R.exports=H()),R.exports}var T,A;function K(){if(A)return T;A=1;var t=G(),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},f={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[t.ForwardRef]=i,s[t.Memo]=f;function n(c){return t.isMemo(c)?f:s[c.$$typeof]||o}var l=Object.defineProperty,y=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,g=Object.getOwnPropertyDescriptor,v=Object.getPrototypeOf,j=Object.prototype;function b(c,d,h){if(typeof d!="string"){if(j){var x=v(d);x&&x!==j&&b(c,x,h)}var S=y(d);m&&(S=S.concat(m(d)));for(var u=n(c),$=n(d),e=0;e<S.length;++e){var p=S[e];if(!a[p]&&!(h&&h[p])&&!($&&$[p])&&!(u&&u[p])){var F=g(d,p);try{l(c,p,F)}catch{}}}}return c}return T=b,T}K();var I=function(o,a){var i=arguments;if(a==null||!D.call(a,"css"))return P.createElement.apply(void 0,i);var f=i.length,s=new Array(f);s[0]=J,s[1]=L(o,a);for(var n=2;n<f;n++)s[n]=i[n];return P.createElement.apply(null,s)};(function(t){var o;o||(o=t.JSX||(t.JSX={}))})(I||(I={}));var V=N(function(t,o){var a=t.styles,i=C([a],void 0,P.useContext(q)),f=P.useRef();return E(function(){var s=o.key+"-global",n=new o.sheet.constructor({key:s,nonce:o.sheet.nonce,container:o.sheet.container,speedy:o.sheet.isSpeedy}),l=!1,y=document.querySelector('style[data-emotion="'+s+" "+i.name+'"]');return o.sheet.tags.length&&(n.before=o.sheet.tags[0]),y!==null&&(l=!0,y.setAttribute("data-emotion",s),n.hydrate([y])),f.current=[n,l],function(){n.flush()}},[o]),E(function(){var s=f.current,n=s[0],l=s[1];if(l){s[1]=!1;return}if(i.next!==void 0&&z(o,i.next,!0),n.tags.length){var y=n.tags[n.tags.length-1].nextElementSibling;n.before=y,n.flush()}o.insert("",i,n,!1)},[o,i.name]),null});function M(){for(var t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return C(o)}const Y=M`
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
`,B=t=>M`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css');

  @font-face {
    font-family: 'Chosunilbo_myungjo';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Chosunilbo_myungjo.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  ${Y};

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
    background-color: ${t.colors.grayscale50};

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
`,ee={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}},decorators:[t=>w.jsx(w.Fragment,{children:w.jsxs(X,{theme:W,children:[w.jsx(V,{styles:B}),w.jsx(t,{})]})})]};export{ee as default};
