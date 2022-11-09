import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages&components/sharedComponents/Footer/Footer";
import Navbar from "../pages&components/sharedComponents/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
