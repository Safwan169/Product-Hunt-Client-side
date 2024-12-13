import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "../../Home/shared/Footer";
import Navbar from "../../Home/shared/Navbar";

const Route = () => {
  const pathName = useLocation();

  const [path, setPath] = useState();
  useEffect(() => {
    setPath(pathName?.pathname);
  });
  console.log(path, "this is the path name for each route ");
  return (
    <>
      <div
        className={`${(path === "/login"  || path=== "/register")? "hidden" : "block"}`}
      >
        <Navbar />
      </div>
      <div className="xl:px-48">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Route;
