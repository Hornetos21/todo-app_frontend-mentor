import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import {Provider} from 'react-redux'
import './index.css'
import './media.css'
import router from './routes.jsx'
import {persistor, store} from './store.js'
import {PersistGate} from 'redux-persist/integration/react'

// Using for framer Reorder
/*const rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>,
  rootElement
)*/
// Reorder bugging

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
  // </React.StrictMode>
)
