import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AddCoffee from './Components/AddCoffee/AddCoffee.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UpdateCoffee from './Components/UpdateCoffee/UpdateCoffee.jsx'
import SignUp from './Components/SignUp/SignUp.jsx'
import SignIn from './Components/SignUp/SiginIn/SignIn.jsx'
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx'
import Users from './Components/Users/Users.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    loader: ()=>fetch('https://coffee-store-server-iq8ivk8kb-rebekas-projects-68bf097b.vercel.app/coffees')
  },
  {
    path:"/addCoffee",
    element:<AddCoffee></AddCoffee>
  },
  {
    path:"/updateCoffee/:id",
    element:<UpdateCoffee></UpdateCoffee>,
    loader:({params})=>fetch(`https://coffee-store-server-iq8ivk8kb-rebekas-projects-68bf097b.vercel.app/coffees/${params.id}`)
  },
  {
    path:"/signUp",
    element:<SignUp></SignUp>
  },
  {
    path: '/signIn',
    element:<SignIn></SignIn>
  },
  {
    path: '/users',
    element:<Users></Users>,
    loader: ()=>fetch('https://coffee-store-server-iq8ivk8kb-rebekas-projects-68bf097b.vercel.app/users')
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
