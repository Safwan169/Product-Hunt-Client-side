import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Route from "./componants/Route";
import Error from "./componants/Error";
import Home from "./componants/Home";
import Products from "./componants/Products";
import Login from "./Login";
import Register from "./componants/Register";
import Authentication from "./componants/Authentication/Authentication";
import Myprofile from "./componants/Dashboard/Myprofile";
import Myproducts from "./componants/Dashboard/Myproducts";
import Addproducts from "./componants/Dashboard/Addproducts";
import Dashboard from "./componants/Dashboard/Dashboard";
import PrivateRoute from "./componants/PrivateRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Update from "./Update";
import Details from "./componants/Details";
import DataLoad from "./DataLoad";
import ALLproducts from "./componants/ALLproducts";
import Reported from "./Reported";
import Review from "./componants/Review";
import Statistics from "./componants/Dashboard/Statistics";
import ManageUser from "./componants/Dashboard/ManageUser";
import Coupons from "./componants/Dashboard/Coupons";
import Admin from "./componants/Admin";
import Moderator from "./componants/Moderator";
import AddCoupons from "./componants/AddCoupons";
import UpdateCoupons from "./componants/Dashboard/UpdateCoupons";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    errorElement: <Error></Error>,

    children: [
      {
        path: '/',
         
        // loader:()=>fetch('https://b9a12-server-side-safwan169.vercel.app//alldata'),

        element: <Home></Home>
      },
      {
        path: '/products',

        element: <DataLoad><ALLproducts></ALLproducts></DataLoad>
      },
      {
        path: '/login',

        element: <Login></Login>
      },

      {
        path: '/register',

        element: <Register></Register>
      },
      {
        path:'/details/:id',
        // loader:({params})=>fetch(`https://b9a12-server-side-safwan169.vercel.app//alldata/${params.id}`),

        element:<PrivateRoute><DataLoad><Details></Details></DataLoad></PrivateRoute>
      },
    ]

  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    errorElement: <Error></Error>,

    children: [
      {
        path: "/dashboard/myprofile",
        element: <PrivateRoute><Myprofile></Myprofile></PrivateRoute>
      },

      {
        path: "/dashboard/myproducts",
        element:<PrivateRoute> <Myproducts></Myproducts></PrivateRoute>
      },
      {
        path: "/dashboard/update/:id",
        element: <><Update></Update></>
      },

      {
        path: "addproducts",
        element: <PrivateRoute><Addproducts></Addproducts></PrivateRoute>
      },
      {
        path: "/dashboard/reported",
        element: <Moderator><Reported></Reported></Moderator>
      },
         {
        path: "/dashboard/review",
        element: <Moderator><Review></Review></Moderator>
      },
         {
        path: "/dashboard/statistics",
        element: <PrivateRoute><Admin><Statistics></Statistics></Admin></PrivateRoute>
      },
         {
        path: "/dashboard/manageUser",
        element: <Admin><ManageUser></ManageUser></Admin>
      },
         {
        path: "/dashboard/coupons",
        element: <Admin><Coupons></Coupons></Admin>
      },
         {
        path: "/dashboard/addCoupons",
        element: <Admin><AddCoupons></AddCoupons></Admin>
      },
         {
        path: "/dashboard/updateCoupons/:id",
        element: <><UpdateCoupons></UpdateCoupons></>
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