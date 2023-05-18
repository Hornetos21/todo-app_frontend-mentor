import {
  ADD_TODO,
  CLEAR_COMPLETED,
  REMOVE_TODO,
  TOGGLE_TODO,
} from '../const/todos-const.js'
import defaultTodos from '../../Mock/defaultTodos.js'

export const todosReducer = (state = defaultTodos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: Date.now(),
          title: action.title,
          completed: false,
        },
      ]

    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id)

    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    case CLEAR_COMPLETED:
      return state.filter((todo) => !todo.completed)
    default: {
      return state
    }
  }
}
