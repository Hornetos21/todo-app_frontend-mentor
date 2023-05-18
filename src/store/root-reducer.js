import { combineReducers } from 'redux'

import { themeReducer } from './theme/theme-reducer'
import { todosReducer } from './todos/todos-reducer'
// import {theme} from './theme/theme-reducer';

export const rootReducer = combineReducers({
  todos: todosReducer,
  theme: themeReducer,
  // theme,
})
