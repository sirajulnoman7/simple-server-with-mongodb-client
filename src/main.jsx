import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Users from './Components/Users.jsx'
import Update from './Components/Update.jsx'


const router=createBrowserRouter([
  {
    path:'/',
    element:<App></App>
  },
  {
    path:'/users',
    loader:()=>fetch('http://localhost:5000/users'),
    element:<Users></Users>
  },
  {
    path:'/update/:id',
    element:<Update></Update>,
    loader : ({params})=>fetch(`http://localhost:5000/users/${params.id}`)
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
