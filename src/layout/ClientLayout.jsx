import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar";

const ClientLayout = () => {
  return (
    <div className="font-roboto">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default ClientLayout;
