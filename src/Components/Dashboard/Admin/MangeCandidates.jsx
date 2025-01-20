import React, { useState, useEffect } from "react";
import axios from "axios";
import HOST from "../../../constant/HOST";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";

const MangeCandidates = () => {
  // console log only functions
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axios.get(`${HOST}/admin/tgApplications`).then((res) => {
      setApplications(res.data);
    });
  }, []);

  const handleAccept = (app) => {
    console.log(app._id);
    axios.post(`${HOST}/admin/tgAAccept/${app._id}`).then((res) => {
      console.log("Res Data : ", res.data);
    });
    console.log("Accepted");
  };
  const handleReject = (app) => {
    axios
      .delete(`${HOST}/admin/tgApplicationsReject/${app._id}`)
      .then((res) => {
        console.log(res.data);
        setApplications(applications.filter((app) => app._id !== app._id));
      });
    toast.success("Application Rejected");
  };

  const handleShowReason = (app) => {
    Swal.fire(` ${app.reason}`);
  };

  return (
    <div className="font-roboto container mx-auto">
      <h1 className="text-center font-roboto font-bold">Manage Candidates</h1>
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          textAlign: "center",
        }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black" }}>Name</th>
            <th style={{ border: "1px solid black" }}>Email</th>
            <th style={{ border: "1px solid black" }}>Role</th>
            <th style={{ border: "1px solid black" }}>CV Link</th>
            <th style={{ border: "1px solid black" }}>Reason</th>
            <th style={{ border: "1px solid black" }}>Type</th>
            <th style={{ border: "1px solid black" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app._id}>
              <td style={{ border: "1px solid black" }}>{app.username}</td>
              <td style={{ border: "1px solid black" }}>{app.email}</td>
              <td style={{ border: "1px solid black" }}>{app.type}</td>
              <td style={{ border: "1px solid black" }}>
                <a href={app.cvLink} className="badge badge-primary">
                  CV Link
                </a>
              </td>
              <td style={{ border: "1px solid black" }}>
                <button
                  className="badge badge-primary"
                  onClick={() => handleShowReason(app)}>
                  Reason
                </button>
              </td>
              <td style={{ border: "1px solid black" }}>{app.type}</td>
              <td style={{ border: "1px solid black" }}>
                <button
                  className="badge m-1 py-3 badge-primary"
                  onClick={() => handleAccept(app)}>
                  Accept
                </button>
                <button
                  className="badge m-1 py-3 badge-warning"
                  onClick={() => handleReject(app)}>
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default MangeCandidates;
