import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from '../features/todos/todo-slice.js'
import { themeReducer } from '../features/theme/theme-slice.js'

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    theme: themeReducer,
  },
  devTools: true,
})
