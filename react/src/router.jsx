import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./assets/components/DefaultLayout";
import GuestLayout from "./assets/components/GuestLayout";
import NotFound from "./assets/views/errorhandeler/NotFound";
import Login from "./assets/views/Login";
import Singup from "./assets/views/Singup";
import User from "./assets/views/User";

const router = createBrowserRouter([
    {
         path:'/',
         element: <DefaultLayout />,
         children: [
            {
                path:'/',
                element: <Navigate to="/users" />
            },
            {
                path:'/users',
                element: <User />
            },

         ]
    },
    {
        path:'/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element:<Singup />
            },
        ]
   },


    {
        path:'*',
        element: <NotFound />
    }

])

export default router;

