import Main from "../Layout/Main";

import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import AdminLayout from "../Layout/AdminLayout/AdminLayout";
import UserProfile from "../pages/UserProfile/UserProfile";
import AddCategory from "../pages/Admin/AddCategory/AddCategory";
import DashboardHome from "../pages/Admin/DashboardHome/DashboardHome";
import AddProduct from "../pages/Admin/AddProduct/AddProduct";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import PrivateRoute from "./PrivateRoute";
import Orders from "../pages/Admin/Orders/Orders";
import Payment from "../pages/Admin/Payment/Payment";
import Product from "../pages/Product/Product";
import MyOrder from "../pages/Admin/MyOrder/MyOrder";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/products',
          element:<Product></Product>
        },
        {
          path:'/products/:id',
          element:<ProductDetail/>,
          loader: ({params}) =>fetch(`https://kidszone-server.vercel.app/products/${params.id}`)
        },
        {
          path:'/cart',
          element:<PrivateRoute><ShoppingCart/></PrivateRoute>
          
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'register',
          element:<Register/>
        },
        {
          path:'profile',
          element:<UserProfile/>
        },
      ]
    },
    {
      path: 'dashboard',
      element: <AdminLayout />,
      children: [
        {
          path: '',
          element: <Orders />
        },
        {
          path: 'payment',
          element: <Payment />,
        },
        {
          path: 'addCategory',
          element: <AddCategory />,
        },
        {
          path: 'addProduct',
          element: <AddProduct />,
        },
        {
          path: 'orders',
          element: <Orders />,
        },
        {
          path: 'myOrder',
          element: <MyOrder />,
        },
      ],
    },
  ]);

  export default router;