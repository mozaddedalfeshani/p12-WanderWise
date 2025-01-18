import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import HOST from "../../../constant/HOST";
import { set } from "react-hook-form";

const AssignedTour = () => {
  const { user } = useContext(AuthContext);
  const [clientinfo, setClientInfo] = useState(null);
  const [booking, setBooking] = useState(null);

  if (!user) {
    return <div>User not logged in</div>;
  }
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`${HOST}/clientinfo/${user.email}`).then((res) => {
        setClientInfo(res.data);
        setBooking(res.data.booking);
        console.log(res.data);
        console.log(res.data.booking);
      });
    };
    fetchData();
  }, []);

  const handleCancel = (id) => {
    // Implement edit functionality here
    toast.info(`Cancel button clicked${id}`);
  };
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="font-roboto text-xl my-4">My Booking Tours</h1>
      <div className="overflow-x-auto">
        <table className="table min-w-full">
          <thead>
            <tr>
              <th>
                <label className="text-center ">Package Name</label>
              </th>
              <th>
                <label className="text-center ">Tour-guide Name</label>
              </th>
              <th>
                <label className="text-center ">Tour Date</label>
              </th>
              <th>
                <label className="text-center ">price</label>
              </th>
              <th>
                <label className="text-center ">Action</label>
              </th>
              <th>
                <label className="text-center ">Action</label>
              </th>
            </tr>
          </thead>
          <tbody>
            {booking &&
              booking.map((book, index) => {
                return (
                  <tr key={index}>
                    <td>{book.packageName}</td>
                    <td>{book.tourGuideName}</td>
                    <td>{book.tourDate}</td>
                    <td>{book.price}</td>
                    <td>
                      <button
                        className={`${
                          book.status === "Pending" ? "disabled" : "" // If status is pending, disable the button
                        } badge badge-warning py-4`}
                        onClick={() => handleCancel(index)}
                        disabled={book.status === "Pending"}>
                        cancel
                      </button>
                    </td>
                    <td>
                      <button>Pay</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssignedTour;
