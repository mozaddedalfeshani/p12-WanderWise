import React from "react";
import Sidebar from "./Sidebar";
import { Outlet, useParams } from "react-router-dom";

const ClientDashboard = () => {
  const user = useParams();
  console.log(user.userEmail);
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
