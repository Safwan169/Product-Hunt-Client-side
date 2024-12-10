import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "../../index.css";

import Authentication from "../Authentication/Authentication";
import Myprofile from "../Dashboard/User/Myprofile";
import Myproducts from "../Dashboard/User/Myproducts";
import Addproducts from "../Dashboard/User/Add-Products/Addproducts";
import Dashboard from "../Dashboard/Main/Dashboard";
import PrivateRoute from "../Private-route/PrivateRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Update from "../Dashboard/User/Add-Products/Shared/Update";
import Details from "../Product-Detail/Details";
import DataLoad from "../Loading/DataLoad";
import ALLproducts from "../All-Product & Product-card/ALLproducts";
import Reported from "../Dashboard/Moderator/Reported";
import Review from "../Dashboard/Moderator/Review";
import Statistics from "../Dashboard/Admin/Shared/Statistics";
import ManageUser from "../Dashboard/Admin/Shared/ManageUser";
import Coupons from "../Dashboard/Admin/Shared/Coupons";
import Admin from "../Role-Check/Admin";
import Moderator from "../Role-Check/Moderator";
import AddCoupons from "../Dashboard/Admin/Shared/AddCoupons";
import UpdateCoupons from "../Dashboard/Admin/Shared/UpdateCoupons";
import Route from "./shared/Route";
import Error from "../Error/Error";
import Home from "../Home/Home";
import Login from "../Authentication/Login & Register/Login";
import Register from "../Authentication/Login & Register/Register";
import RoleBasedFirstPage from "../Dashboard/Main/shared/RoleBasedFirstPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route />,
    errorElement: <Error/>,

    children: [
      {
        path: '/',
         
        // loader:()=>fetch('https://b9a12-server-side-safwan169.vercel.app//alldata'),

        element: <Home/>
      },
      {
        path: '/products',

        element: <DataLoad><ALLproducts/></DataLoad>
      },
      {
        path: '/login',

        element: <Login></Login>
      },

      {
        path: '/register',

        element: <Register/>
      },
      {
        path:'/details/:id',

        element:<PrivateRoute><DataLoad><Details/></DataLoad></PrivateRoute>
      },
    ]

  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard/></PrivateRoute>,
    errorElement: <Error/>,

    children: [
      {
        path: "/dashboard",
        element: <PrivateRoute><RoleBasedFirstPage/></PrivateRoute>
      },
      {
        path: "/dashboard/myprofile",
        element: <PrivateRoute><Myprofile/></PrivateRoute>
      },

      {
        path: "/dashboard/myproducts",
        element:<PrivateRoute> <Myproducts/></PrivateRoute>
      },
      {
        path: "/dashboard/update/:id",
        element: <><Update></Update></>
      },

      {
        path: "addproducts",
        element: <PrivateRoute><Addproducts/></PrivateRoute>
      },
      {
        path: "/dashboard/reported",
        element: <Moderator><Reported/></Moderator>
      },
         {
        path: "/dashboard/review",
        element: <Moderator><Review/></Moderator>
      },
         {
        path: "/dashboard/statistics",
        element: <PrivateRoute><Admin><Statistics/></Admin></PrivateRoute>
      },
         {
        path: "/dashboard/manageUser",
        element: <Admin><ManageUser/></Admin>
      },
         {
        path: "/dashboard/coupons",
        element: <Admin><Coupons/></Admin>
      },
         {
        path: "/dashboard/addCoupons",
        element: <Admin><AddCoupons/></Admin>
      },
         {
        path: "/dashboard/updateCoupons/:id",
        element: <><UpdateCoupons/></>
      },

    ]
  }
]);

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <QueryClientProvider client={queryClient}>
      <Authentication>
        <RouterProvider router={router} />

      </Authentication>
    </QueryClientProvider>

  </React.StrictMode>
);