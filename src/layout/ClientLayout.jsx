import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar";

const ClientLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default ClientLayout;
