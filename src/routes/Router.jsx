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

const router = createBrowserRouter([
   {
      path: '/',
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: '/',
            element: <Home />
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
            element: <AllToys />,
            loader: () => fetch('http://localhost:5000/dolls')
         },
         {
            path: 'viewDetails/:id',
            element: <PrivateRoute><ViewDetails /></PrivateRoute>,
            loader: ({ params }) => fetch(`http://localhost:5000/dolls/${params.id}`)
         },
         {
            path: 'mytoys',
            element: <MyToys />
         }

      ]
   }
]);

export default router;