import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorPage from './templates/ErrorPage.jsx'
import Lab1 from './templates/labs/Lab1'
import Lab2 from './templates/labs/Lab2'
import Lab4 from './templates/labs/Lab4'
import Lab5 from './templates/labs/Lab5'
import store from './store.js'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "lab/1",
        element: <Lab1 />,
      },
      {
        path: "lab/2",
        element: <Lab2 />,
      },
      {
        path: "lab/4",
        element: <Lab4 />,
      },
      {
        path: "lab/5",
        element: <Lab5 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
