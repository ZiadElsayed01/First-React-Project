import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Latout() {
  return (
    <>
      <Navbar />
      <div className="container-fluid pt-24 mx-auto flex items-center justify-center">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
