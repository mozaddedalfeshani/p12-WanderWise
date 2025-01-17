import React, { useContext, useEffect } from "react";
import Sidebar from "./Sidebar";
import { Outlet, useParams } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const ClientDashboard = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // show toast message
    if (user) {
      toast.success(`Welcome ${user.displayName} `);
    }
  }, [user]);

  if (!user) {
    return <div>User not logged in</div>;
  }

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
