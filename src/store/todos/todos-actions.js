import {
  ADD_TODO,
  REMOVE_TODO,
  REORDER_TODO,
  TOGGLE_TODO,
} from '../const/todos-const.js'

export const addTodo = (title) => ({
  type: ADD_TODO,
  title,
})
export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id,
})
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
})
export const reorderTodo = () => ({
  type: REORDER_TODO,
})
