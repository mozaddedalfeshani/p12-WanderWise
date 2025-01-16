import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const ClientDashboard = () => {
  return (
    <div className="flex flex-row justify-start items-start">
      <div className="flex ">
        <Sidebar />
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
