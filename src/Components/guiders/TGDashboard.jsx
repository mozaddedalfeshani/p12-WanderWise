import React, { useEffect } from "react";
import TGNavBar from "./TGNavBar";
import { Outlet } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const TGDashboard = () => {
  useEffect(() => {
    toast.success("Welcome to the Tour Guide Dashboard");
  }, []);
  return (
    <div>
      <h1 className="text-center font-roboto text-xl">
        Welcome to the Tour Guide Dashboard
      </h1>
      <Outlet />
      <TGNavBar />
      <ToastContainer />
    </div>
  );
};

export default TGDashboard;
