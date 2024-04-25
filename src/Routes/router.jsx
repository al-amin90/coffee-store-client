import {
    createBrowserRouter,
} from "react-router-dom";

import AddCoffee from '../components/AddCoffee';
import Home from '../pages/Home';
import UpdateCoffee from '../pages/UpdateCoffee';
import CoffeeDetails from '../pages/CoffeeDetails';
import SingUp from '../pages/SingUp';
import SingIn from '../pages/SingIn';
import Root from "../mainlayout/Root";
import Users from "../pages/Users";
import { baseURL } from "../utilits/url";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader: () => fetch(`${baseURL}/coffee`)
            },
            {
                path: "/addCoffee",
                element: <AddCoffee></AddCoffee>
            },
            {
                path: "/updateCoffee/:id",
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({ params }) => fetch(`${baseURL}/coffee/${params.id}`)
            },
            {
                path: "/coffeeDetails/:id",
                element: <CoffeeDetails></CoffeeDetails>,
                loader: ({ params }) => fetch(`${baseURL}/coffee/${params.id}`)
            },
            {
                path: "/singUp",
                element: <SingUp></SingUp>
            },
            {
                path: "/login",
                element: <SingIn></SingIn>
            },
            {
                path: "/users",
                element: <Users></Users>,
                loader: () => fetch(`${baseURL}/user`)
            }
        ]
    },
]);

export default router;