import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login/Login";
import SignUp from "../pages/Login/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secrate from "../pages/Shared/Secrate/Secrate";

const router = createBrowserRouter([

    {
      path: "/",
      element: <Main></Main>,
      children:[

        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'menu',
            element:<Menu></Menu>
        },
        
        {
            path:'order/:category',
            element:<Order></Order>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'signUp',
            element:<SignUp></SignUp>
        },
        {
            path:'secret',
            element:<PrivateRoute> <Secrate></Secrate> </PrivateRoute>
        },
      ]
    },

  ]);
  
  export default router;