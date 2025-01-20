import axios from "axios";
import React, { useContext, useEffect } from "react";
import HOST from "../../../constant/HOST";
import { AuthContext } from "../../../provider/AuthProvider";

const AssignedTG = () => {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchAssignedTG = async () => {
      // Fetch assigned TG
      axios.get(`${HOST}/tgassigned/:${user.email}`).then((res) => {
        console.log(res.data);
      });
    };
  }, []);
  return <div>This is the AssignedTG page</div>;
};

export default AssignedTG;
