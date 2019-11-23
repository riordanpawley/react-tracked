/*! For license information please see b94ec4b0.cf130569.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));n(51),n(24),n(19),n(20),n(52),n(0);var r=n(146),a=n(150),o=n(151);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i={id:"tutorial-01",title:"Tutorial - ToDo App with useReducer",sidebar_label:"ToDo App (useReducer)"},c=[{value:"src/App.js",id:"srcappjs",children:[]},{value:"src/store.js",id:"srcstorejs",children:[]},{value:"src/TodoList.js",id:"srctodolistjs",children:[]},{value:"src/TodoItem.js",id:"srctodoitemjs",children:[]},{value:"src/NewTodo.js",id:"srcnewtodojs",children:[]},{value:"src/utils.js",id:"srcutilsjs",children:[]},{value:"CodeSandbox",id:"codesandbox",children:[]}],l={rightToc:c},u="wrapper";function d(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(u,s({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This tutorial shows example code with useReducer."),Object(r.b)("h2",{id:"srcappjs"},"src/App.js"),Object(r.b)(a.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(r.b)(o.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\n\nimport { Provider } from './store';\nimport TodoList from './TodoList';\n\nconst App = () => (\n  <Provider>\n    <TodoList />\n  </Provider>\n);\n\nexport default App;\n\n"))),Object(r.b)(o.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-typescript"}),"import React from 'react';\n\nimport { Provider } from './store';\nimport TodoList from './TodoList';\n\nconst App: React.FC = () => (\n  <Provider>\n    <TodoList />\n  </Provider>\n);\n\nexport default App;\n\n")))),Object(r.b)("p",null,"This is the root component.\nIt wraps TodoList with Provider."),Object(r.b)("h2",{id:"srcstorejs"},"src/store.js"),Object(r.b)(a.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(r.b)(o.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"import { useReducer } from 'react';\nimport { createContainer } from 'react-tracked';\n\nconst initialState = {\n  todos: [\n    { id: 1, title: 'Wash dishes' },\n    { id: 2, title: 'Study JS' },\n    { id: 3, title: 'Buy ticket' },\n  ],\n  query: '',\n};\n\nlet nextId = 4;\n\nconst reducer = (state, action) => {\n  switch (action.type) {\n    case 'ADD_TODO':\n      return {\n        ...state,\n        todos: [...state.todos, { id: nextId++, title: action.title }],\n      };\n    case 'DELETE_TODO':\n      return {\n        ...state,\n        todos: state.todos.filter(todo => todo.id !== action.id),\n      };\n    case 'TOGGLE_TODO':\n      return {\n        ...state,\n        todos: state.todos.map(todo =>\n          todo.id === action.id\n            ? { ...todo, completed: !todo.completed }\n            : todo,\n        ),\n      };\n    case 'SET_QUERY':\n      return {\n        ...state,\n        query: action.query,\n      };\n    default:\n      return state;\n  }\n};\n\nconst useValue = () => useReducer(reducer, initialState);\n\nexport const {\n  Provider,\n  useTrackedState,\n  useUpdate: useDispatch,\n} = createContainer(useValue);\n\n"))),Object(r.b)(o.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-typescript"}),"import { useReducer } from 'react';\nimport { createContainer } from 'react-tracked';\n\nexport type TodoType = {\n  id: number;\n  title: string;\n  completed?: boolean;\n};\n\ntype State = {\n  todos: TodoType[];\n  query: string;\n};\n\ntype Action =\n  | { type: 'ADD_TODO'; title: string }\n  | { type: 'DELETE_TODO'; id: number }\n  | { type: 'TOGGLE_TODO'; id: number }\n  | { type: 'SET_QUERY'; query: string };\n\nconst initialState: State = {\n  todos: [\n    { id: 1, title: 'Wash dishes' },\n    { id: 2, title: 'Study JS' },\n    { id: 3, title: 'Buy ticket' },\n  ],\n  query: '',\n};\n\nlet nextId = 4;\n\nconst reducer = (state: State, action: Action): State => {\n  switch (action.type) {\n    case 'ADD_TODO':\n      return {\n        ...state,\n        todos: [...state.todos, { id: nextId++, title: action.title }],\n      };\n    case 'DELETE_TODO':\n      return {\n        ...state,\n        todos: state.todos.filter(todo => todo.id !== action.id),\n      };\n    case 'TOGGLE_TODO':\n      return {\n        ...state,\n        todos: state.todos.map(todo =>\n          todo.id === action.id\n            ? { ...todo, completed: !todo.completed }\n            : todo,\n        ),\n      };\n    case 'SET_QUERY':\n      return {\n        ...state,\n        query: action.query,\n      };\n    default:\n      return state;\n  }\n};\n\nconst useValue = () => useReducer(reducer, initialState);\n\nexport const {\n  Provider,\n  useTrackedState,\n  useUpdate: useDispatch,\n} = createContainer(useValue);\n\n")))),Object(r.b)("p",null,"The store is created by useReducer.\nuseUpdate is renamed to useDispatch for exporting."),Object(r.b)("h2",{id:"srctodolistjs"},"src/TodoList.js"),Object(r.b)(a.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(r.b)(o.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\n\nimport { useDispatch, useTrackedState } from './store';\nimport TodoItem from './TodoItem';\nimport NewTodo from './NewTodo';\n\nconst TodoList = () => {\n  const dispatch = useDispatch();\n  const state = useTrackedState();\n  const setQuery = event => {\n    dispatch({ type: 'SET_QUERY', query: event.target.value });\n  };\n  return (\n    <div>\n      <ul>\n        {state.todos.map(({ id, title, completed }) => (\n          <TodoItem key={id} id={id} title={title} completed={completed} />\n        ))}\n        <NewTodo />\n      </ul>\n      <div>\n        Highlight Query for incomplete items:\n        <input value={state.query} onChange={setQuery} />\n      </div>\n    </div>\n  );\n};\n\nexport default TodoList;\n\n"))),Object(r.b)(o.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-typescript"}),"import React from 'react';\n\nimport { useDispatch, useTrackedState } from './store';\nimport TodoItem from './TodoItem';\nimport NewTodo from './NewTodo';\n\nconst TodoList: React.FC = () => {\n  const dispatch = useDispatch();\n  const state = useTrackedState();\n  const setQuery = (event: React.ChangeEvent<HTMLInputElement>) => {\n    dispatch({ type: 'SET_QUERY', query: event.target.value });\n  };\n  return (\n    <div>\n      <ul>\n        {state.todos.map(({ id, title, completed }) => (\n          <TodoItem key={id} id={id} title={title} completed={completed} />\n        ))}\n        <NewTodo />\n      </ul>\n      <div>\n        Highlight Query for incomplete items:\n        <input value={state.query} onChange={setQuery} />\n      </div>\n    </div>\n  );\n};\n\nexport default TodoList;\n\n")))),Object(r.b)("p",null,"This component is to show the list of ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItem"),"s,\n",Object(r.b)("inlineCode",{parentName:"p"},"NewTodo")," to create a new item, and\na text field for highlight query.\nThis query is only effective against incomplete items."),Object(r.b)("h2",{id:"srctodoitemjs"},"src/TodoItem.js"),Object(r.b)(a.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(r.b)(o.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\n\nimport { useDispatch, useTrackedState } from './store';\nimport { useFlasher } from './utils';\n\nconst renderHighlight = (title, query) => {\n  if (!query) return title;\n  const index = title.indexOf(query);\n  if (index === -1) return title;\n  return (\n    <>\n      {title.slice(0, index)}\n      <b>{query}</b>\n      {title.slice(index + query.length)}\n    </>\n  );\n};\n\nconst TodoItem = ({ id, title, completed }) => {\n  const dispatch = useDispatch();\n  const state = useTrackedState();\n  const delTodo = () => {\n    dispatch({ type: 'DELETE_TODO', id });\n  };\n  return (\n    <li ref={useFlasher()}>\n      <input\n        type=\"checkbox\"\n        checked={!!completed}\n        onChange={() => dispatch({ type: 'TOGGLE_TODO', id })}\n      />\n      <span\n        style={{\n          textDecoration: completed ? 'line-through' : 'none',\n        }}\n      >\n        {completed ? title : renderHighlight(title, state.query)}\n      </span>\n      <button onClick={delTodo}>Delete</button>\n    </li>\n  );\n};\n\nexport default React.memo(TodoItem);\n\n"))),Object(r.b)(o.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-typescript"}),"import React from 'react';\n\nimport { useDispatch, useTrackedState, TodoType } from './store';\nimport { useFlasher } from './utils';\n\nconst renderHighlight = (title: string, query: string) => {\n  if (!query) return title;\n  const index = title.indexOf(query);\n  if (index === -1) return title;\n  return (\n    <>\n      {title.slice(0, index)}\n      <b>{query}</b>\n      {title.slice(index + query.length)}\n    </>\n  );\n};\n\ntype Props = TodoType;\n\nconst TodoItem: React.FC<Props> = ({ id, title, completed }) => {\n  const dispatch = useDispatch();\n  const state = useTrackedState();\n  const delTodo = () => {\n    dispatch({ type: 'DELETE_TODO', id });\n  };\n  return (\n    <li ref={useFlasher()}>\n      <input\n        type=\"checkbox\"\n        checked={!!completed}\n        onChange={() => dispatch({ type: 'TOGGLE_TODO', id })}\n      />\n      <span\n        style={{\n          textDecoration: completed ? 'line-through' : 'none',\n        }}\n      >\n        {completed ? title : renderHighlight(title, state.query)}\n      </span>\n      <button onClick={delTodo}>Delete</button>\n    </li>\n  );\n};\n\nexport default React.memo(TodoItem);\n\n")))),Object(r.b)("p",null,"This is the TodoItem component.\nWe prefer primitive props for memoized components."),Object(r.b)("p",null,"If you want to use object props for memoized components,\nyou need to notify the objects by ",Object(r.b)("a",s({parentName:"p"},{href:"/docs/api#trackmemo"}),"trackMemo"),".\nSee ",Object(r.b)("a",s({parentName:"p"},{href:"https://github.com/dai-shi/react-tracked/tree/master/examples/09_reactmemo"}),"example/09")," for the usage."),Object(r.b)("h2",{id:"srcnewtodojs"},"src/NewTodo.js"),Object(r.b)(a.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(r.b)(o.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\nimport { useState } from 'react';\n\nimport { useDispatch } from './store';\nimport { useFlasher } from './utils';\n\nconst NewTodo = () => {\n  const dispatch = useDispatch();\n  const [text, setText] = useState('');\n  const addTodo = () => {\n    dispatch({ type: 'ADD_TODO', title: text });\n    setText('');\n  };\n  return (\n    <li ref={useFlasher()}>\n      <input\n        value={text}\n        placeholder=\"Enter title...\"\n        onChange={e => setText(e.target.value)}\n      />\n      <button onClick={addTodo}>Add</button>\n    </li>\n  );\n};\n\nexport default React.memo(NewTodo);\n\n"))),Object(r.b)(o.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-typescript"}),"import React from 'react';\nimport { useState } from 'react';\n\nimport { useDispatch } from './store';\nimport { useFlasher } from './utils';\n\nconst NewTodo: React.FC = () => {\n  const dispatch = useDispatch();\n  const [text, setText] = useState('');\n  const addTodo = () => {\n    dispatch({ type: 'ADD_TODO', title: text });\n    setText('');\n  };\n  return (\n    <li ref={useFlasher()}>\n      <input\n        value={text}\n        placeholder=\"Enter title...\"\n        onChange={e => setText(e.target.value)}\n      />\n      <button onClick={addTodo}>Add</button>\n    </li>\n  );\n};\n\nexport default React.memo(NewTodo);\n\n")))),Object(r.b)("p",null,"This is the NewTodo component to create a new item.\nIt uses a local state for the text field."),Object(r.b)("h2",{id:"srcutilsjs"},"src/utils.js"),Object(r.b)(a.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(r.b)(o.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"import { useRef, useEffect } from 'react';\n\nexport const useFlasher = () => {\n  const ref = useRef(null);\n  useEffect(() => {\n    if (!ref.current) return;\n    ref.current.setAttribute(\n      'style',\n      'box-shadow: 0 0 2px 1px red; transition: box-shadow 100ms ease-out;',\n    );\n    setTimeout(() => {\n      if (!ref.current) return;\n      ref.current.setAttribute('style', '');\n    }, 300);\n  });\n  return ref;\n};\n\n"))),Object(r.b)(o.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-typescript"}),"import { useRef, useEffect } from 'react';\n\nexport const useFlasher = () => {\n  const ref = useRef<HTMLLIElement>(null);\n  useEffect(() => {\n    if (!ref.current) return;\n    ref.current.setAttribute(\n      'style',\n      'box-shadow: 0 0 2px 1px red; transition: box-shadow 100ms ease-out;',\n    );\n    setTimeout(() => {\n      if (!ref.current) return;\n      ref.current.setAttribute('style', '');\n    }, 300);\n  });\n  return ref;\n};\n\n")))),Object(r.b)("p",null,"This is a utility function to show which components render."),Object(r.b)("h2",{id:"codesandbox"},"CodeSandbox"),Object(r.b)("p",null,"You can try ",Object(r.b)("a",s({parentName:"p"},{href:"https://codesandbox.io/s/reverent-tree-geptx"}),"working example"),"."))}d.isMDXComponent=!0},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r),o=a.a.createContext({}),s=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=s(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,p=u[i+"."+d]||u[d]||l[d]||o;return n?a.a.createElement(p,Object.assign({},{ref:t},c,{components:n})):a.a.createElement(p,Object.assign({},{ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},147:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var s=a.apply(null,r);s&&e.push(s)}else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},150:function(e,t,n){"use strict";n(24),n(19),n(20);var r=n(0),a=n.n(r),o=n(147),s=n.n(o);t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,i=e.values,c=Object(r.useState)(o),l=c[0],u=c[1];return a.a.createElement("div",null,a.a.createElement("ul",{className:s()("tabs",{"tabs--block":t})},i.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{className:s()("tab-item",{"tab-item--active":l===t}),key:t,onClick:function(){return u(t)}},n)}))),a.a.createElement("div",{className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===l}))[0]))}},151:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);