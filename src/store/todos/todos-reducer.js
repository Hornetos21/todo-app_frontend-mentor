import {
  TOGGLE_TODO,
  ADD_TODO,
  REMOVE_TODO,
  REORDER_TODO,
} from '../const/todos-const.js'
import defaultTodos from '../../mock/defaultTodos.js'
import { addTodo, removeTodo, toggleTodo } from './todos-actions.js'
import { createReducer } from '@reduxjs/toolkit'

export const todosReducer = createReducer(defaultTodos, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      const newTodo = action.payload
      state.push(newTodo)
    })
    .addCase(removeTodo, (state, action) => {
      return state.filter((todo) => todo.id !== action.payload)
    })
    .addCase(toggleTodo, (state, action) => {
      const id = action.payload
      const todo = state.find((todo) => todo.id === id)
      todo.completed = !todo.completed
    })
})

// export const todosReducer = (state = defaultTodos, action) => {
//   switch (action.type) {
//     case addTodo.toString():
//       return [
//         ...state,
//         {
//           ...action.payload,
//         },
//       ]

//     case removeTodo.toString():
//       return state.filter((todo) => todo.id !== action.payload)

//     case toggleTodo.toString():
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       )

//     case REORDER_TODO:
//       return state
//     default: {
//       return state
//     }
//   }
// }
