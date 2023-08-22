import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Users from './components/Users.jsx';
import Uapdate from './components/Uapdate.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: 'users',
    element: <Users />,
    loader: () => fetch('http://localhost:5000/users')
  },

  {
    path: 'update/:id',
    element: <Uapdate />,
    loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />

)
