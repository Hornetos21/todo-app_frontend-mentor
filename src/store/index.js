import { createStore } from 'redux'

import { rootReducer } from './root-reducer'
import { loadState, saveState } from './local-storage'
import throttle from 'lodash/throttle'
import { devToolsEnhancer } from 'redux-devtools-extension'

export const cofigureStore = () => {
  const persistedState = loadState()

  const store = createStore(rootReducer, persistedState, devToolsEnhancer())

  store.subscribe(
    throttle(() => {
      saveState({
        todos: store.getState().todos,
        theme: store.getState().theme,
      })
    }, 1000)
  )

  return store
}
