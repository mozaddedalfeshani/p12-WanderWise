import React, { useContext, useEffect } from "react";
import Sidebar from "./Sidebar";
import { Outlet, useParams } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const ClientDashboard = () => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <div>User not logged in</div>;
  }
  useEffect(() => {
    // show toast message
    toast.success(`Welcome ${user.displayName} `);
  }, []);
  return (
    <div className="flex flex-row justify-start items-start">
      <div className="flex ">
        <Sidebar />
        <div className="">
          <Outlet />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ClientDashboard;
