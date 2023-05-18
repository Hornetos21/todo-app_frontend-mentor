import { createStore } from 'redux'

import { rootReducer } from './root-reducer'
import { loadState, saveState } from './local-storage'
import throttle from 'lodash/throttle'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { configureStore } from '@reduxjs/toolkit'
import { todosReducer } from './todos/todos-reducer.js'
import { todoReducer } from '../features/todos/todo-slice.js'
import { themeReducer } from '../features/theme/theme-slice.js'
// import { todosReducer } from './todos/todos-reducer.js'
// import { themeReducer } from './theme/theme-reducer.js'

// export const cofigureStore = () => {
//   const persistedState = loadState()
//
//   const store = createStore(rootReducer, persistedState, devToolsEnhancer())
//
//   store.subscribe(
//     throttle(() => {
//       saveState({
//         todos: store.getState().todos,
//         theme: store.getState().theme,
//       })
//     }, 1000)
//   )
//
//   return store
// }

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    theme: themeReducer,
  },
  devTools: true,
})
