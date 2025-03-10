import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/header/Footer";

const Layout = () => {
  return (
    <>
     <div className="container"></div>
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
    </>
  );
};

export default Layout;
