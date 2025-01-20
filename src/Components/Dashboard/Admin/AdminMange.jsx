import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import HOST from "../../../constant/HOST.jsx";
const AdminMange = () => {
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalTg, setTotalTg] = useState(0);
  const [totalPackages, setTotalPackages] = useState(0);
  const [totalClients, setTotalClients] = useState(0);
  const [totalStories, setTotalStories] = useState(0);
  useEffect(() => {
    toast.success("Welcome Admin");
    const fetchTotalPayment = async () => {
      try {
        const res = await axios.get(`${HOST}/total/totaltg`);
        console.log(res.data);
        setTotalTg(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Error fetching data");
      }
    };
    const fetchTotalPackages = async () => {
      try {
        const res = await axios.get(`${HOST}/total/totalpackages`);
        console.log(res.data);
        setTotalPackages(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Error fetching data");
      }
    };

    const fetchTotalClients = async () => {
      try {
        const res = await axios.get(`${HOST}/total/totalclients`);
        console.log(res.data);
        setTotalClients(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Error fetching data");
      }
    };

    fetchTotalPayment();
    fetchTotalPackages();
    fetchTotalClients();
  }, []);

  return (
    <div className="font-roboto text-center">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 container mx-auto">
        <div className="card border border-black p-2 h-[150px] w-[150px] shadow-lg bg-green-100 flex flex-col justify-center items-center ">
          <h1>Total Payment</h1>
          {
            // totalPayment
            totalPayment
          }
        </div>
        <div className="card border border-black p-2 h-[150px] w-[150px] shadow-lg bg-green-100 flex flex-col justify-center items-center ">
          <h1>Total Tg</h1>
          {totalTg}
        </div>
        <div className="card border border-black p-2 h-[150px] w-[150px] shadow-lg bg-green-100 flex flex-col justify-center items-center ">
          <h1>Total Packages</h1>
          {totalPackages}
        </div>
        <div className="card border border-black p-2 h-[150px] w-[150px] shadow-lg bg-green-100 flex flex-col justify-center items-center ">
          <h1>Total Clients</h1>
          {totalClients}
        </div>
        <div className="card border border-black p-2 h-[150px] w-[150px] shadow-lg bg-green-100 flex flex-col justify-center items-center ">
          <h1>Total Stories</h1>
          {totalStories}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminMange;
