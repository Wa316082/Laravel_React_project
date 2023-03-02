import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./assets/components/DefaultLayout";
import GuestLayout from "./assets/components/GuestLayout";
import NotFound from "./assets/views/errorhandeler/NotFound";
import Login from "./assets/views/Login";
import { ProductsDetails } from "./assets/views/ProductsDetails";
import ProductView from "./assets/views/ProductView";
import Singup from "./assets/views/Singup";
import User from "./assets/views/User";


// const id=useLocation()
// console.log(id)

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/users" />
            },
            {
                path: '/users',
                element: <User />
            },

        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/productDetails/:id',
                element: <ProductsDetails />
            },
            {
                path: '/products',
                element: <ProductView />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Singup />
            },
        ]
    },


    {
        path: '*',
        element: <NotFound />
    }

])

export default router;

