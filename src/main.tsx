import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import DesktopSuccess from './components/DesktopSuccess.tsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
 
const router=createBrowserRouter([
  {
    path:'/',
    element:<App />
  },
  {
    path:'success',
    element:<DesktopSuccess/>
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
