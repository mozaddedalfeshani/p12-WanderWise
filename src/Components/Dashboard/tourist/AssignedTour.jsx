import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import HOST from "../../../constant/HOST";

const AssignedTour = () => {
  const { user } = useContext(AuthContext);
  const [clientinfo, setClientInfo] = useState(null);
  if (!user) {
    return <div>User not logged in</div>;
  }
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`${HOST}/clientinfo/${user.email}`).then((res) => {
        setClientInfo(res.data);
      });
    };
    fetchData();
  }, []);

  const handleEdit = () => {
    // Implement edit functionality here
    toast.info("Edit button clicked");
  };
  return <div>This is Assigned Tour</div>;
};

export default AssignedTour;
