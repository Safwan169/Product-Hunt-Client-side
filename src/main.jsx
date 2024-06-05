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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
         
        loader:()=>fetch('http://localhost:5000/alldata'),

        element: <Home></Home>
      },
      {
        path: '/products',

        element: <Products></Products>
      },
      {
        path: '/login',

        element: <Login></Login>
      },

      {
        path: '/register',

        element: <Register></Register>
      },
      // {
      //   path:'/dashboard',

      //   element:<Dashboard></Dashboard>
      // },
    ]

  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard",
        element: <Myprofile></Myprofile>
      },

      {
        path: "/dashboard/myproducts",
        element: <Myproducts></Myproducts>
      },
      {
        path: "/dashboard/update/:id",
        element: <PrivateRoute><Update></Update></PrivateRoute>
      },

      {
        path: "addproducts",
        element: <PrivateRoute><Addproducts></Addproducts></PrivateRoute>
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