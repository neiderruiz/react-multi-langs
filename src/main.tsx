import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeLayout from './layouts/home.layout.tsx'
import ContactPage from './pages/contact.page.tsx'
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
        path: '/contact',
        Component: ContactPage
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
