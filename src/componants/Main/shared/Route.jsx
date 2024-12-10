import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Home/shared/Footer";
import Navbar from "../../Home/shared/Navbar";

const Route = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="xl:px-48">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Route;
