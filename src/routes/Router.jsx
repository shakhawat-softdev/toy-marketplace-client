import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Blog from "../pages/Blog/Blog";

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

         }
      ]
   }
]);

export default router;