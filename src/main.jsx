import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter, Routes, Route, RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css'
import {cofigureStore} from "./store/index.js";
import router from "./routes.jsx";

const store = cofigureStore();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router}/>

    </Provider>
  </React.StrictMode>
)
