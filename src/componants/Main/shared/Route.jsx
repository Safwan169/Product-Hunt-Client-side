import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Home/shared/Footer";
import Navbar from "../../Home/shared/Navbar";

const Route = () => {
  return (
    <>
      <div className="lg:px-48">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Route;
