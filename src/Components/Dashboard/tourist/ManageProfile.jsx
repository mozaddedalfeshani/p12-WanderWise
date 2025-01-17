import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import HOST from "../../../constant/HOST";

const ManageProfile = () => {
  const { user } = useContext(AuthContext);
  const [clientInfo, setClientInfo] = useState(null);
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

  return (
    <div>
      <Helmet>
        <title>Manage Profile</title>
      </Helmet>
      <div className="flex flex-row items-center w-full max-w-max mx-auto md:mx-5 mt-10">
        <img
          src={clientInfo?.icon}
          alt="User profile"
          className="w-32 h-32 rounded-full"
        />
        <div className="flex flex-col justify-center items-center mx-4">
          <p className="text-lg font-semibold mt-4">{clientInfo?.name}</p>
          <p className="text-gray-600">{clientInfo?.email}</p>
        </div>

        <button
          onClick={handleEdit}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Edit
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ManageProfile;
