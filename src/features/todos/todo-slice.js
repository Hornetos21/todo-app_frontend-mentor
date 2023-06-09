import { createSlice, nanoid } from '@reduxjs/toolkit'
import defaultTodos from '../../mock/defaultTodos.js'

const todoSlice = createSlice({
  name: 'todos',
  initialState: defaultTodos,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        const newTodo = action.payload
        state.push(newTodo)
      },
      prepare: (title) => ({
        payload: {
          title,
          id: nanoid(),
          completed: false,
        },
      }),
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload)
    },
    toggleTodo: (state, action) => {
      const id = action.payload
      const todo = state.find((todo) => todo.id === id)
      todo.completed = !todo.completed
    },
    clearCompletedTodos: (state, action) => {
      return state.filter((todo) => !todo.completed)
    },
    reorderTodos: (state, action) => {
      if (!action.payload?.destination) return

      const [reorderedTodo] = state.splice(action.payload.source.index, 1)
      state.splice(action.payload.destination.index, 0, reorderedTodo)
    },
  },
})
export const {
  addTodo,
  removeTodo,
  toggleTodo,
  clearCompletedTodos,
  reorderTodos,
} = todoSlice.actions
export const todoReducer = todoSlice.reducer

export const selectVisibleTodos = (state, filter) => {
  switch (filter) {
    case 'all': {
      return state.todos
    }
    case 'active': {
      return state.todos.filter((todo) => !todo.completed)
    }
    case 'completed': {
      return state.todos.filter((todo) => todo.completed)
    }
    default: {
      return state.todos
    }
  }
}
