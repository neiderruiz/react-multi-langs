import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeLayout from './layouts/home.layout.tsx'
import './locales/i18n'
import CounterPage from './pages/counter.page.tsx'
const routes: RouteObject[] = [
  {
    path: '/',
    Component: HomeLayout,
    children: [
      {
        path: '/',
        Component: CounterPage,
      },
      {
        path: '/counter',
        Component: CounterPage
      }
    ],

  },
]

const BrowserRouter = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter} />
  </React.StrictMode>,
)
