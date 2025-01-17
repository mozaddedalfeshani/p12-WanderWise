import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { toast, ToastContainer } from "react-toastify";

const ManageProfile = () => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <div>User not logged in</div>;
  }
  useEffect(() => {
    // show toast message
    toast.success(`Welcome ${user.displayName} `);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Manage Profile</title>
      </Helmet>
      {toast.success("Welcome to your profile")}
      This {user.email}
      <ToastContainer />
    </div>
  );
};

export default ManageProfile;
