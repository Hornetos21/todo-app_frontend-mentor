import { combineReducers } from 'redux'

import { themeReducer } from './theme/theme-reducer'
import { todosReducer } from './todos/todos-reducer'
// import {filters} from './filters/filters-reducer';

export const rootReducer = combineReducers({
  todos: todosReducer,
  theme: themeReducer,
  // filters,
})
