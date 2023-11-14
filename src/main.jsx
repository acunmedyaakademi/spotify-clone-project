import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Content } from './components/Content';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Content />
      },
      {
        path: '/login',
        element:<Login/>
      }
      
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
