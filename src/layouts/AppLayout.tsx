import React from "react";
import AppLayoutStyles from "../components/styled/AppLayoutStyles";
// import Navbar from "../components/Navbar";
import { Navbar } from "../components";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <AppLayoutStyles>
      <Navbar />
      <section>
        <Outlet />
      </section>
    </AppLayoutStyles>
  );
};

export default AppLayout;
