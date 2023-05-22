import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './features/todos/todo-slice.js'
import { themeReducer } from './features/theme/theme-slice.js'

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
  todos: todoReducer,
  theme: themeReducer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, PERSIST, PAUSE, PURGE, REHYDRATE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
