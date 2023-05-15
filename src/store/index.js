import { createStore } from 'redux'

import { rootReducer } from './root-reducer'
import { loadState, saveState } from './local-storage'
import throttle from 'lodash/throttle'

export const cofigureStore = () => {
  const persistedState = loadState()
  console.log(persistedState)
  const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  store.subscribe(
    throttle(() => {
      saveState({
        todos: store.getState().todos,
      })
    }, 1000)
  )

  return store
}
