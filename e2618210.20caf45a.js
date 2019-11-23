/*! For license information please see e2618210.20caf45a.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));n(51),n(24),n(19),n(20),n(52),n(0);var o=n(146),r=n(150),s=n(151);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var l={id:"tutorial-02",title:"Tutorial - ToDo App with useState",sidebar_label:"ToDo App (useState)"},u=[{value:"src/components/App.js",id:"srccomponentsappjs",children:[]},{value:"src/store.js",id:"srcstorejs",children:[]},{value:"src/hooks/useTodoList.js",id:"srchooksusetodolistjs",children:[]},{value:"src/hooks/useAddTodo.js",id:"srchooksuseaddtodojs",children:[]},{value:"src/hooks/useDeleteTodo.js",id:"srchooksusedeletetodojs",children:[]},{value:"src/hooks/useToogleTodo.js",id:"srchooksusetoogletodojs",children:[]},{value:"src/hooks/useQuery.js",id:"srchooksusequeryjs",children:[]},{value:"src/components/TodoList.js",id:"srccomponentstodolistjs",children:[]},{value:"src/components/TodoItem.js",id:"srccomponentstodoitemjs",children:[]},{value:"src/components/NewTodo.js",id:"srccomponentsnewtodojs",children:[]},{value:"src/utils.js",id:"srcutilsjs",children:[]},{value:"CodeSandbox",id:"codesandbox",children:[]}],c={rightToc:u},i="wrapper";function d(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(o.b)(i,a({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This tutorial shows example code with useState, ",Object(o.b)("a",a({parentName:"p"},{href:"https://immerjs.github.io/immer/"}),"Immer")," and custom hooks."),Object(o.b)("h2",{id:"srccomponentsappjs"},"src/components/App.js"),Object(o.b)(r.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(o.b)(s.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\n\nimport { Provider } from './store';\nimport TodoList from './TodoList';\n\nconst App = () => (\n  <Provider>\n    <TodoList />\n  </Provider>\n);\n\nexport default App;\n\n"))),Object(o.b)(s.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-typescript"}),"import React from 'react';\n\nimport { Provider } from './store';\nimport TodoList from './TodoList';\n\nconst App: React.FC = () => (\n  <Provider>\n    <TodoList />\n  </Provider>\n);\n\nexport default App;\n\n")))),Object(o.b)("p",null,"This is the root component.\nIt wraps TodoList with Provider."),Object(o.b)("h2",{id:"srcstorejs"},"src/store.js"),Object(o.b)(r.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(o.b)(s.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"import { useState, useCallback } from 'react';\nimport { createContainer } from 'react-tracked';\nimport produce from 'immer';\n\nconst initialState = {\n  todos: [\n    { id: 1, title: 'Wash dishes' },\n    { id: 2, title: 'Study JS' },\n    { id: 3, title: 'Buy ticket' },\n  ],\n  query: '',\n};\n\nconst useValue = () => useState(initialState);\n\nconst { Provider, useTrackedState, useUpdate: useSetState } = createContainer(\n  useValue,\n);\n\nconst useSetDraft = () => {\n  const setState = useSetState();\n  return useCallback(\n    draftUpdater => {\n      setState(produce(draftUpdater));\n    },\n    [setState],\n  );\n};\n\nexport { Provider, useTrackedState, useSetDraft };\n\n"))),Object(o.b)(s.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-typescript"}),"import { useState, useCallback } from 'react';\nimport { createContainer } from 'react-tracked';\nimport produce, { Draft } from 'immer';\n\ntype TodoType = {\n  id: number;\n  title: string;\n  completed?: boolean;\n};\n\nexport type State = {\n  todos: TodoType[];\n  query: string;\n};\n\nconst initialState: State = {\n  todos: [\n    { id: 1, title: 'Wash dishes' },\n    { id: 2, title: 'Study JS' },\n    { id: 3, title: 'Buy ticket' },\n  ],\n  query: '',\n};\n\nconst useValue = () => useState(initialState);\n\nconst { Provider, useTrackedState, useUpdate: useSetState } = createContainer(\n  useValue,\n);\n\nconst useSetDraft = () => {\n  const setState = useSetState();\n  return useCallback(\n    (draftUpdater: (draft: Draft<State>) => void) => {\n      setState(produce(draftUpdater));\n    },\n    [setState],\n  );\n};\n\nexport { Provider, useTrackedState, useSetDraft };\n\n")))),Object(o.b)("p",null,"The store is created by useState.\nuseUpdate is renamed to useSetState,\nand based on it, useSetDraft with Immer is exported."),Object(o.b)("h2",{id:"srchooksusetodolistjs"},"src/hooks/useTodoList.js"),Object(o.b)(r.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(o.b)(s.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"import { useTrackedState } from '../store';\n\nexport const useTodoList = () => {\n  const state = useTrackedState();\n  return state.todos;\n};\n\n"))),Object(o.b)(s.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-typescript"}),"import { useTrackedState } from '../store';\n\nexport const useTodoList = () => {\n  const state = useTrackedState();\n  return state.todos;\n};\n\n")))),Object(o.b)("p",null,"This is a custom hook to simply return ",Object(o.b)("inlineCode",{parentName:"p"},"todos"),"."),Object(o.b)("h2",{id:"srchooksuseaddtodojs"},"src/hooks/useAddTodo.js"),Object(o.b)(r.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(o.b)(s.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"import { useCallback } from 'react';\n\nimport { useSetDraft } from '../store';\n\nlet nextId = 100;\n\nexport const useAddTodo = () => {\n  const setDraft = useSetDraft();\n  return useCallback(\n    title => {\n      setDraft(draft => {\n        draft.todos.push({ id: nextId++, title });\n      });\n    },\n    [setDraft],\n  );\n};\n\n"))),Object(o.b)(s.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-typescript"}),"import { useCallback } from 'react';\n\nimport { useSetDraft } from '../store';\n\nlet nextId = 100;\n\nexport const useAddTodo = () => {\n  const setDraft = useSetDraft();\n  return useCallback(\n    title => {\n      setDraft(draft => {\n        draft.todos.push({ id: nextId++, title });\n      });\n    },\n    [setDraft],\n  );\n};\n\n")))),Object(o.b)("p",null,"This is a custom hook to return ",Object(o.b)("inlineCode",{parentName:"p"},"addTodo")," function."),Object(o.b)("h2",{id:"srchooksusedeletetodojs"},"src/hooks/useDeleteTodo.js"),Object(o.b)(r.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(o.b)(s.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"import { useCallback } from 'react';\n\nimport { useSetDraft } from '../store';\n\nexport const useDeleteTodo = () => {\n  const setDraft = useSetDraft();\n  return useCallback(\n    id => {\n      setDraft(draft => {\n        const index = draft.todos.findIndex(todo => todo.id === id);\n        if (index >= 0) draft.todos.splice(index, 1);\n      });\n    },\n    [setDraft],\n  );\n};\n\n"))),Object(o.b)(s.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-typescript"}),"import { useCallback } from 'react';\n\nimport { useSetDraft } from '../store';\n\nexport const useDeleteTodo = () => {\n  const setDraft = useSetDraft();\n  return useCallback(\n    (id: number) => {\n      setDraft(draft => {\n        const index = draft.todos.findIndex(todo => todo.id === id);\n        if (index >= 0) draft.todos.splice(index, 1);\n      });\n    },\n    [setDraft],\n  );\n};\n\n")))),Object(o.b)("p",null,"This is a custom hook to return ",Object(o.b)("inlineCode",{parentName:"p"},"deleteTodo")," function."),Object(o.b)("h2",{id:"srchooksusetoogletodojs"},"src/hooks/useToogleTodo.js"),Object(o.b)(r.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(o.b)(s.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"import { useCallback } from 'react';\n\nimport { useSetDraft } from '../store';\n\nexport const useToggleTodo = () => {\n  const setDraft = useSetDraft();\n  return useCallback(\n    id => {\n      setDraft(draft => {\n        const todo = draft.todos.find(todo => todo.id === id);\n        if (todo) todo.completed = !todo.completed;\n      });\n    },\n    [setDraft],\n  );\n};\n\n"))),Object(o.b)(s.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-typescript"}),"import { useCallback } from 'react';\n\nimport { useSetDraft } from '../store';\n\nexport const useToggleTodo = () => {\n  const setDraft = useSetDraft();\n  return useCallback(\n    (id: number) => {\n      setDraft(draft => {\n        const todo = draft.todos.find(todo => todo.id === id);\n        if (todo) todo.completed = !todo.completed;\n      });\n    },\n    [setDraft],\n  );\n};\n\n")))),Object(o.b)("p",null,"This is a custom hook to return ",Object(o.b)("inlineCode",{parentName:"p"},"toggleTodo")," function."),Object(o.b)("h2",{id:"srchooksusequeryjs"},"src/hooks/useQuery.js"),Object(o.b)(r.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(o.b)(s.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"import { useCallback } from 'react';\n\nimport { useTrackedState, useSetDraft } from '../store';\n\nexport const useQuery = () => {\n  const state = useTrackedState();\n  const getQuery = () => state.query;\n  const setDraft = useSetDraft();\n  const setQuery = useCallback(\n    query => {\n      setDraft(draft => {\n        draft.query = query;\n      });\n    },\n    [setDraft],\n  );\n  return { getQuery, setQuery };\n};\n\n"))),Object(o.b)(s.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-typescript"}),"import { useCallback } from 'react';\n\nimport { useTrackedState, useSetDraft } from '../store';\n\nexport const useQuery = () => {\n  const state = useTrackedState();\n  const getQuery = () => state.query;\n  const setDraft = useSetDraft();\n  const setQuery = useCallback(\n    (query: string) => {\n      setDraft(draft => {\n        draft.query = query;\n      });\n    },\n    [setDraft],\n  );\n  return { getQuery, setQuery };\n};\n\n")))),Object(o.b)("p",null,"This is a custom hook to return getQuery and setQuery.\nIt doesn't return ",Object(o.b)("inlineCode",{parentName:"p"},"state.query")," directly, because\nit will be used conditionally."),Object(o.b)("h2",{id:"srccomponentstodolistjs"},"src/components/TodoList.js"),Object(o.b)(r.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(o.b)(s.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\n\nimport { useTodoList } from '../hooks/useTodoList';\nimport { useQuery } from '../hooks/useQuery';\nimport TodoItem from './TodoItem';\nimport NewTodo from './NewTodo';\n\nconst TodoList = () => {\n  const { getQuery, setQuery } = useQuery();\n  const todos = useTodoList();\n  return (\n    <div>\n      <ul>\n        {todos.map(({ id, title, completed }) => (\n          <TodoItem key={id} id={id} title={title} completed={completed} />\n        ))}\n        <NewTodo />\n      </ul>\n      <div>\n        Highlight Query for incomplete items:\n        <input value={getQuery()} onChange={e => setQuery(e.target.value)} />\n      </div>\n    </div>\n  );\n};\n\nexport default TodoList;\n\n"))),Object(o.b)(s.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-typescript"}),"import React from 'react';\n\nimport { useTodoList } from '../hooks/useTodoList';\nimport { useQuery } from '../hooks/useQuery';\nimport TodoItem from './TodoItem';\nimport NewTodo from './NewTodo';\n\nconst TodoList: React.FC = () => {\n  const { getQuery, setQuery } = useQuery();\n  const todos = useTodoList();\n  return (\n    <div>\n      <ul>\n        {todos.map(({ id, title, completed }) => (\n          <TodoItem key={id} id={id} title={title} completed={completed} />\n        ))}\n        <NewTodo />\n      </ul>\n      <div>\n        Highlight Query for incomplete items:\n        <input value={getQuery()} onChange={e => setQuery(e.target.value)} />\n      </div>\n    </div>\n  );\n};\n\nexport default TodoList;\n\n")))),Object(o.b)("p",null,"This component is to show the list of ",Object(o.b)("inlineCode",{parentName:"p"},"TodoItem"),"s,\n",Object(o.b)("inlineCode",{parentName:"p"},"NewTodo")," to create a new item, and\nClear button to reset notes in all items."),Object(o.b)("h2",{id:"srccomponentstodoitemjs"},"src/components/TodoItem.js"),Object(o.b)(r.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(o.b)(s.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\n\nimport { useQuery } from '../hooks/useQuery';\nimport { useDeleteTodo } from '../hooks/useDeleteTodo';\nimport { useToggleTodo } from '../hooks/useToggleTodo';\nimport { useFlasher } from '../utils';\n\nconst renderHighlight = (title, query) => {\n  if (!query) return title;\n  const index = title.indexOf(query);\n  if (index === -1) return title;\n  return (\n    <>\n      {title.slice(0, index)}\n      <b>{query}</b>\n      {title.slice(index + query.length)}\n    </>\n  );\n};\n\nconst TodoItem = ({ id, title, completed }) => {\n  const { getQuery } = useQuery();\n  const deleteTodo = useDeleteTodo();\n  const toggleTodo = useToggleTodo();\n  return (\n    <li ref={useFlasher()}>\n      <input\n        type=\"checkbox\"\n        checked={!!completed}\n        onChange={() => toggleTodo(id)}\n      />\n      <span\n        style={{\n          textDecoration: completed ? 'line-through' : 'none',\n        }}\n      >\n        {completed ? title : renderHighlight(title, getQuery())}\n      </span>\n      <button onClick={() => deleteTodo(id)}>Delete</button>\n    </li>\n  );\n};\n\nexport default React.memo(TodoItem);\n\n"))),Object(o.b)(s.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-typescript"}),"import React from 'react';\n\nimport { useQuery } from '../hooks/useQuery';\nimport { useDeleteTodo } from '../hooks/useDeleteTodo';\nimport { useToggleTodo } from '../hooks/useToggleTodo';\nimport { useFlasher } from '../utils';\n\nconst renderHighlight = (title, query) => {\n  if (!query) return title;\n  const index = title.indexOf(query);\n  if (index === -1) return title;\n  return (\n    <>\n      {title.slice(0, index)}\n      <b>{query}</b>\n      {title.slice(index + query.length)}\n    </>\n  );\n};\n\ntype Props = {\n  id: number;\n  title: string;\n  completed?: boolean;\n};\n\nconst TodoItem: React.FC<Props> = ({ id, title, completed }) => {\n  const { getQuery } = useQuery();\n  const deleteTodo = useDeleteTodo();\n  const toggleTodo = useToggleTodo();\n  return (\n    <li ref={useFlasher()}>\n      <input\n        type=\"checkbox\"\n        checked={!!completed}\n        onChange={() => toggleTodo(id)}\n      />\n      <span\n        style={{\n          textDecoration: completed ? 'line-through' : 'none',\n        }}\n      >\n        {completed ? title : renderHighlight(title, getQuery())}\n      </span>\n      <button onClick={() => deleteTodo(id)}>Delete</button>\n    </li>\n  );\n};\n\nexport default React.memo(TodoItem);\n\n")))),Object(o.b)("p",null,"This is the TodoItem component.\nWe prefer primitive props for memoized components."),Object(o.b)("p",null,"If you want to use object props for memoized components,\nyou need to notify the objects by ",Object(o.b)("a",a({parentName:"p"},{href:"/docs/api#trackmemo"}),"trackMemo"),".\nSee ",Object(o.b)("a",a({parentName:"p"},{href:"https://github.com/dai-shi/react-tracked/tree/master/examples/09_reactmemo"}),"example/09")," for the usage."),Object(o.b)("h2",{id:"srccomponentsnewtodojs"},"src/components/NewTodo.js"),Object(o.b)(r.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(o.b)(s.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\nimport { useState } from 'react';\n\nimport { useAddTodo } from '../hooks/useAddTodo';\nimport { useFlasher } from '../utils';\n\nconst NewTodo = () => {\n  const addTodo = useAddTodo();\n  const [text, setText] = useState('');\n  return (\n    <li ref={useFlasher()}>\n      <input\n        value={text}\n        placeholder=\"Enter title...\"\n        onChange={e => setText(e.target.value)}\n      />\n      <button\n        onClick={() => {\n          addTodo(text);\n          setText('');\n        }}\n      >\n        Add\n      </button>\n    </li>\n  );\n};\n\nexport default React.memo(NewTodo);\n\n"))),Object(o.b)(s.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-typescript"}),"import React from 'react';\nimport { useState } from 'react';\n\nimport { useAddTodo } from '../hooks/useAddTodo';\nimport { useFlasher } from '../utils';\n\nconst NewTodo: React.FC = () => {\n  const addTodo = useAddTodo();\n  const [text, setText] = useState('');\n  return (\n    <li ref={useFlasher()}>\n      <input\n        value={text}\n        placeholder=\"Enter title...\"\n        onChange={e => setText(e.target.value)}\n      />\n      <button\n        onClick={() => {\n          addTodo(text);\n          setText('');\n        }}\n      >\n        Add\n      </button>\n    </li>\n  );\n};\n\nexport default React.memo(NewTodo);\n\n")))),Object(o.b)("p",null,"This is the NewTodo component to create a new item.\nIt uses a local state for the text field."),Object(o.b)("h2",{id:"srcutilsjs"},"src/utils.js"),Object(o.b)(r.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(o.b)(s.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"import { useRef, useEffect } from 'react';\n\nexport const useFlasher = () => {\n  const ref = useRef(null);\n  useEffect(() => {\n    if (!ref.current) return;\n    ref.current.setAttribute(\n      'style',\n      'box-shadow: 0 0 2px 1px red; transition: box-shadow 100ms ease-out;',\n    );\n    setTimeout(() => {\n      if (!ref.current) return;\n      ref.current.setAttribute('style', '');\n    }, 300);\n  });\n  return ref;\n};\n\n"))),Object(o.b)(s.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-typescript"}),"import { useRef, useEffect } from 'react';\n\nexport const useFlasher = () => {\n  const ref = useRef<HTMLLIElement>(null);\n  useEffect(() => {\n    if (!ref.current) return;\n    ref.current.setAttribute(\n      'style',\n      'box-shadow: 0 0 2px 1px red; transition: box-shadow 100ms ease-out;',\n    );\n    setTimeout(() => {\n      if (!ref.current) return;\n      ref.current.setAttribute('style', '');\n    }, 300);\n  });\n  return ref;\n};\n\n")))),Object(o.b)("p",null,"This is a util function to show which components render."),Object(o.b)("h2",{id:"codesandbox"},"CodeSandbox"),Object(o.b)("p",null,"You can try ",Object(o.b)("a",a({parentName:"p"},{href:"https://codesandbox.io/s/infallible-firefly-yzwxc"}),"working example"),"."))}d.isMDXComponent=!0},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o),s=r.a.createContext({}),a=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=a(e.components);return r.a.createElement(s.Provider,{value:t},e.children)};var u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},i=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}(e,["components","mdxType","originalType","parentName"]),i=a(n),d=o,p=i[l+"."+d]||i[d]||c[d]||s;return n?r.a.createElement(p,Object.assign({},{ref:t},u,{components:n})):r.a.createElement(p,Object.assign({},{ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=i;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<s;d++)a[d]=n[d];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}i.displayName="MDXCreateElement"},147:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var s=typeof o;if("string"===s||"number"===s)e.push(o);else if(Array.isArray(o)&&o.length){var a=r.apply(null,o);a&&e.push(a)}else if("object"===s)for(var l in o)n.call(o,l)&&o[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},150:function(e,t,n){"use strict";n(24),n(19),n(20);var o=n(0),r=n.n(o),s=n(147),a=n.n(s);t.a=function(e){var t=e.block,n=e.children,s=e.defaultValue,l=e.values,u=Object(o.useState)(s),c=u[0],i=u[1];return r.a.createElement("div",null,r.a.createElement("ul",{className:a()("tabs",{"tabs--block":t})},l.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{className:a()("tab-item",{"tab-item--active":c===t}),key:t,onClick:function(){return i(t)}},n)}))),r.a.createElement("div",{className:"margin-vert--md"},o.Children.toArray(n).filter((function(e){return e.props.value===c}))[0]))}},151:function(e,t,n){"use strict";var o=n(0),r=n.n(o);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);