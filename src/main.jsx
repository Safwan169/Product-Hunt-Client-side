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
import Dashboard from "./componants/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Route></Route>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
      
        element:<Home></Home>
      },
      {
        path:'/products',
      
        element:<Products></Products>
      },
      {
        path:'/login',
      
        element:<Home></Home>
      },
 
      {
        path:'/register',
      
        element:<Register></Register>
      },
      {
        path:'/dashboard',
      
        element:<Dashboard></Dashboard>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);