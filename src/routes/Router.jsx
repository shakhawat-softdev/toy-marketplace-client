import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Blog from "../pages/Blog/Blog";
import AddToy from "../pages/AddToy/AddToy";
import AllToys from "../pages/AllToys/AllToys";
import ViewDetails from "../pages/AllToys/ViewDetails/ViewDetails";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../pages/MyToys/MyToys";
import UpdateAdoll from "../pages/UpdateAdoll/UpdateAdoll";

const router = createBrowserRouter([
   {
      path: '/',
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: '/',
            element: <Home />,
            loader: () => fetch('https://toy-marketplace-server-side-gray.vercel.app/dolls')
         },
         {
            path: 'login',
            element: <Login />
         },
         {
            path: 'register',
            element: <Register />
         },

         {
            path: 'blog',
            element: <Blog />

         },
         {
            path: 'addToy',
            element: <AddToy />
         },
         {
            path: 'allToys',
            element: <PrivateRoute><AllToys /></PrivateRoute>,
            loader: () => fetch('https://toy-marketplace-server-side-gray.vercel.app/dolls')
         },
         {
            path: 'viewDetails/:id',
            element: <PrivateRoute><ViewDetails /></PrivateRoute>,
            loader: ({ params }) => fetch(`https://toy-marketplace-server-side-gray.vercel.app/dolls/${params.id}`)
         },
         {
            path: 'mytoys',
            element: <MyToys />
         },
         {
            path: 'updateADoll/:id',
            element: <UpdateAdoll />,
            loader: ({ params }) => fetch(`https://toy-marketplace-server-side-gray.vercel.app/dolls/${params.id}`)
         }

      ]
   }
]);

export default router;