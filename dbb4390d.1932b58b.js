(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return p}));var r=n(1),o=(n(0),n(163));const i={title:"Code Splitting"},c={id:"guides/code-splitting",title:"Code Splitting",description:"You can write JSX and use React components within your Markdown thanks to [MDX](https://mdxjs.com/).",source:"@site/docs/guides/code-splitting.md",permalink:"/docs/guides/code-splitting",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/guides/code-splitting.md",sidebar:"someSidebar",previous:{title:"Writing Tests",permalink:"/docs/guides/writing-test"},next:{title:"<RecoilRoot />",permalink:"/docs/api-reference/core/RecoilRoot"}},a=[],u={rightToc:a};function p({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can write JSX and use React components within your Markdown thanks to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://mdxjs.com/"}),"MDX"),"."))}p.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},l=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(n),f=r,m=l["".concat(c,".").concat(f)]||l[f]||d[f]||i;return n?o.a.createElement(m,a({ref:t},p,{components:n})):o.a.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var p=2;p<i;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);