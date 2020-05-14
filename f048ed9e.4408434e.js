(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(1),r=(n(0),n(163));const o={title:"Getting Started"},c={id:"introduction/getting-started",title:"Getting Started",description:"## Create React App",source:"@site/docs/introduction/getting-started.md",permalink:"/docs/introduction/getting-started",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/introduction/getting-started.md",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/docs/introduction/installation"},next:{title:"Intro",permalink:"/docs/basic-tutorial/intro"}},i=[{value:"Create React App",id:"create-react-app",children:[]},{value:"Installation",id:"installation",children:[]},{value:"RecoilRoot",id:"recoilroot",children:[]},{value:"Atom",id:"atom",children:[]},{value:"Selector",id:"selector",children:[]}],l={rightToc:i};function p({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"create-react-app"},"Create React App"),Object(r.b)("p",null,"Recoil is a state management library for React, so you need to have React installed and running to use Recoil. The easiest and recommended way for bootstrapping a React application is to use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app#creating-an-app"}),"Create React App"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"npx create-react-app my-app\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b"}),Object(r.b)("inlineCode",{parentName:"a"},"npx"))," is a package runner tool that comes with npm 5.2+ and higher, see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f"}),"instructions for older npm versions"),".")),Object(r.b)("p",null,"For more ways to install Create React App, see the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app#creating-an-app"}),"official documentation"),"."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"The Recoil package lives in ",Object(r.b)("a",{href:"https://www.npmjs.com/get-npm",target:"_blank"},"npm"),". To install the latest stable version, run the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"npm install recoil\n")),Object(r.b)("p",null,"Or if you're using ",Object(r.b)("a",{href:"https://classic.yarnpkg.com/en/docs/install/",target:"_blank"},"yarn"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"yarn add recoil\n")),Object(r.b)("h2",{id:"recoilroot"},"RecoilRoot"),Object(r.b)("p",null,"Components that use recoil state need ",Object(r.b)("inlineCode",{parentName:"p"},"RecoilRoot")," to appear somewhere in the parent tree. A good place to put this is in your root component:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import {\n  RecoilRoot,\n  atom,\n  selector,\n  useRecoilState,\n  useRecoilValue,\n} from 'recoil';\n\nfunction App() {\n  return (\n    <RecoilRoot>\n      <CharacterCounter />\n    </RecoilRoot>\n  );\n}\n")),Object(r.b)("p",null,"We'll implement the ",Object(r.b)("inlineCode",{parentName:"p"},"CharacterCounter")," component in the following section."),Object(r.b)("h2",{id:"atom"},"Atom"),Object(r.b)("p",null,"An ",Object(r.b)("strong",{parentName:"p"},"atom")," represents a piece of ",Object(r.b)("strong",{parentName:"p"},"state"),". Atoms can be read from and written to from any component. Components that read the value of an atom are implicitly ",Object(r.b)("strong",{parentName:"p"},"subscribed")," to that atom, so any atom updates will result in a re-render of all components subscribed to that atom:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const textState = atom({\n  key: 'textState', // unique ID (with respect to other atoms/selectors)\n  default: '', // default value (aka initial value)\n});\n")),Object(r.b)("p",null,"Components that need to read from ",Object(r.b)("em",{parentName:"p"},"and")," write to an atom should use ",Object(r.b)("inlineCode",{parentName:"p"},"useRecoilState()")," as shown below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'function CharacterCounter() {\n  return (\n    <>\n      <TextInput />\n      <CharacterCount />\n    </>\n  );\n}\n\nfunction TextInput() {\n  const [text, setText] = useRecoilState(textState);\n\n  return (\n    <>\n      <input type="text" value={text} onChange={setText} />\n      <br />\n      Echo: {text}\n    </>\n  );\n}\n')),Object(r.b)("h2",{id:"selector"},"Selector"),Object(r.b)("p",null,"A ",Object(r.b)("strong",{parentName:"p"},"selector")," represents a piece of ",Object(r.b)("strong",{parentName:"p"},"derived state"),". Derived state is a ",Object(r.b)("strong",{parentName:"p"},"transformation")," of state. You can think of derived state as the output of passing state to a pure function that modifies the given state in some way:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const charCountState = selector({\n  key: 'charCountState', // unique ID (with respect to other atoms/selectors)\n  get: ({get}) => {\n    const text = get(textState);\n\n    return text.length;\n  },\n});\n")),Object(r.b)("p",null,"We can use the ",Object(r.b)("inlineCode",{parentName:"p"},"useRecoilValue()")," hook to read the value of ",Object(r.b)("inlineCode",{parentName:"p"},"charCountState"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"function CharacterCount() {\n  const count = useRecoilValue(charCountState);\n\n  return <>Character Count: {count}</>;\n}\n")))}p.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(c,".").concat(m)]||u[m]||b[m]||o;return n?r.a.createElement(d,i({ref:t},p,{components:n})):r.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);