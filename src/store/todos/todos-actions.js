import {
  ADD_TODO,
  REMOVE_TODO,
  REORDER_TODO,
  TOGGLE_TODO,
} from '../const/todos-const.js'
import { createAction, nanoid } from '@reduxjs/toolkit'
// export const addTodo = (title) => ({
//   type: ADD_TODO,
//   title,
// })
export const addTodo = createAction('ADD_TODO', (title) => ({
  payload: {
    title,
    id: nanoid(),
    completed: false,
  },
}))
export const removeTodo = createAction('REMOVE_TODO')
export const toggleTodo = createAction('TOGGLE_TODO')
// export const removeTodo = (id) => ({
//   type: REMOVE_TODO,
//   id,
// })
// export const toggleTodo = (id) => ({
//   type: TOGGLE_TODO,
//   id,
// })
// export const reorderTodo = () => ({
//   type: REORDER_TODO,
// })
