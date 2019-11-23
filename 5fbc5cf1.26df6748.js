(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));n(51),n(24),n(19),n(20),n(52),n(0);var a=n(146);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={id:"api",title:"API",sidebar_label:"API"},c=[{value:"createContainer",id:"createcontainer",children:[{value:"Provider",id:"provider",children:[]},{value:"useTracked",id:"usetracked",children:[]},{value:"useUpdate",id:"useupdate",children:[]},{value:"useTrackedState",id:"usetrackedstate",children:[]},{value:"useSelector",id:"useselector",children:[]}]},{value:"trackMemo",id:"trackmemo",children:[]},{value:"getUntrackedObject",id:"getuntrackedobject",children:[]}],i={rightToc:c},s="wrapper";function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(s,r({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"createContainer")," is a main function exported from the library,\nwhich creates a provider and other hooks."),Object(a.b)("h2",{id:"createcontainer"},"createContainer"),Object(a.b)("p",null,"It takes one argument ",Object(a.b)("inlineCode",{parentName:"p"},"useValue"),",\nwhich is a hook that returns a tuple ",Object(a.b)("inlineCode",{parentName:"p"},"[state, update]"),".\nTypically, it's with useReducer and useState,\nbut it can be any custom hooks based on them."),Object(a.b)("p",null,"Note: you can create multiple containers in one app."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import { createContainer } from 'react-tracked';\n\nconst useValue = (props) => useReducer(...);\n\nconst {\n  Provider,\n  useTracked,\n  useUpdate,\n  useTrackedState,\n  useSelector,\n} = createContainer(useValue);\n")),Object(a.b)("h3",{id:"provider"},"Provider"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Provider")," returned by createContainer has to be put\nin the parent component.\nTypically, it's close to the root component,\nbut it can be (sometimes desirably) lower in the component tree."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const App = (props) => (\n  <Provider {...props}>\n    ...\n  </Provider>\n);\n")),Object(a.b)("h3",{id:"usetracked"},"useTracked"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"useTracked")," hook returned by createContainer is the recommended hook.\nIt simply returns the ",Object(a.b)("inlineCode",{parentName:"p"},"[state, update]")," tuple that ",Object(a.b)("inlineCode",{parentName:"p"},"useValue")," returns.\nThe ",Object(a.b)("inlineCode",{parentName:"p"},"state")," is wrapped by Proxy for usage tracking."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const Component = () => {\n  const [state, dispatch] = useTracked();\n  // ...\n};\n")),Object(a.b)("h3",{id:"useupdate"},"useUpdate"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"useUpdate")," hook returned by createContainer is for ",Object(a.b)("inlineCode",{parentName:"p"},"update")," from ",Object(a.b)("inlineCode",{parentName:"p"},"useValue"),';\nIt\'s named "update" ambiguously, but typically\nit would be renamed to "dispatch" for useReducer,\n"setState" for useState, or "actions" for any actions.'),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const Component = () => {\n  const dispatch = useUpdate();\n  // ...\n};\n")),Object(a.b)("h3",{id:"usetrackedstate"},"useTrackedState"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"useTrackedState")," hook returned by createContainer is for ",Object(a.b)("inlineCode",{parentName:"p"},"state")," from ",Object(a.b)("inlineCode",{parentName:"p"},"useValue"),";\nThis is wrapped by Proxy as same as ",Object(a.b)("inlineCode",{parentName:"p"},"useTracked"),".\nUse this hook if you don't need ",Object(a.b)("inlineCode",{parentName:"p"},"update"),".\nThis hook is compatible with ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/dai-shi/reactive-react-redux"}),"reactive-react-redux"),"."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const Component = () => {\n  const state = useTrackedState();\n  // ...\n};\n")),Object(a.b)("h3",{id:"useselector"},"useSelector"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"useSelector")," hook returned by createContainer is an optional hook.\nUse this hook if state usage tracking doesn't work or fit well.\nThis hook is compatible with ",Object(a.b)("a",r({parentName:"p"},{href:"https://react-redux.js.org/api/hooks"}),"react-redux"),".\nIt would ease transition from/to react-redux apps."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const Component = () => {\n  const selected = useSelector(selector);\n  // ...\n};\n")),Object(a.b)("h2",{id:"trackmemo"},"trackMemo"),Object(a.b)("p",null,"There is a tiny function exported from the library."),Object(a.b)("p",null,"This is used to explicitly mark a prop object as used\nin a memoized component. Otherwise, usage tracking may not\nwork correctly because a memoized component doesn't always render\nwhen a parent component renders."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import { trackMemo } from 'react-tracked';\n\nconst ChildComponent = React.memo(({ num1, str1, obj1, obj2 }) => {\n  trackMemo(obj1);\n  trackMemo(obj2);\n  // ...\n});\n")),Object(a.b)("h2",{id:"getuntrackedobject"},"getUntrackedObject"),Object(a.b)("p",null,"There are some cases when we need to get an original object\ninstead of a tracked object.\nAlthough it's not a recommended pattern,\nthe library exports a function as an escape hatch."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import { getUntrackedObject } from 'react-tracked';\n\nconst Component = () => {\n  const state = useTrackedState();\n  const dispatch = useUpdate();\n  const onClick = () => {\n    // this leaks a proxy outside of render\n    dispatch({ type: 'FOO', value: state.foo });\n\n    // this works as expected\n    dispatch({ type: 'FOO', value: getUntrackedObject(state.foo) });\n  };\n  // ...\n};\n")))}p.isMDXComponent=!0},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));var a=n(0),r=n.n(a),o=r.a.createContext({}),c=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=c(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),u=c(n),l=a,d=u[i+"."+l]||u[l]||p[l]||o;return n?r.a.createElement(d,Object.assign({},{ref:t},s,{components:n})):r.a.createElement(d,Object.assign({},{ref:t},s))}));function l(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);