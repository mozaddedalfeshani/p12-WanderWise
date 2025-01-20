import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import HOST from "../../../constant/HOST.jsx";
import { AuthContext } from "../../../provider/AuthProvider.jsx";
import Swal from "sweetalert2";
const AdminMange = () => {
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalTg, setTotalTg] = useState(0);
  const [totalPackages, setTotalPackages] = useState(0);
  const [totalClients, setTotalClients] = useState(0);
  const [totalStories, setTotalStories] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user.displayName || "Admin");
  const [email, setEmail] = useState(user.email);
  const [photoUrl, setPhotoUrl] = useState(user.photoURL || "");

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

    const fetchTotalStories = async () => {
      try {
        const res = await axios.get(`${HOST}/total/totalstories`);
        console.log(res.data);
        setTotalStories(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Error fetching data");
      }
    };

    fetchTotalPayment();
    fetchTotalPackages();
    fetchTotalClients();
    fetchTotalStories();
  }, []);
  console.log("User:", user.photoURL);
  const handleModal = () => {
    setShowModal(true);
  };

  const handleSubmit = async () => {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Photo URL:", photoUrl);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await updateUserProfile(photoUrl);
          toast.success("Profile updated successfully");
        } catch (error) {
          toast.error("Error updating profile");
        }
      }
    });

    setShowModal(false);
  };

  return (
    <div className="font-roboto text-center flex items-center justify-center flex-col mt-10">
      <div className="flex-wrap flex flex-grow items-center justify-center gap-3 container mx-auto">
        <div className="card border border-black p-2 h-[150px] w-[150px] shadow-lg bg-green-100 flex flex-col justify-center items-center ">
          <h1 className="font-bold">Total Payment</h1>
          {
            // totalPayment
            totalPayment
          }
        </div>
        <div className="card border border-black p-2 h-[150px] w-[150px] shadow-lg bg-green-100 flex flex-col justify-center items-center ">
          <h1 className="font-bold">Total Tg</h1>
          {totalTg}
        </div>
        <div className="card border border-black p-2 h-[150px] w-[150px] shadow-lg bg-green-100 flex flex-col justify-center items-center ">
          <h1 className="font-bold">Total Packages</h1>
          {totalPackages}
        </div>
        <div className="card border border-black p-2 h-[150px] w-[150px] shadow-lg bg-green-100 flex flex-col justify-center items-center ">
          <h1 className="font-bold">Total Clients</h1>
          {totalClients}
        </div>
        <div className="card border border-black p-2 h-[150px] w-[150px] shadow-lg bg-green-100 flex flex-col justify-center items-center ">
          <h1 className="font-bold">Total Stories</h1>
          {totalStories}
        </div>
      </div>
      <div>
        {/* show admin info picture & role  */}

        <div className="flex items-center justify-center gap-3 mt-5">
          <div className="card border border-black p-2 w-full shadow-lg bg-green-100 flex flex-col justify-center items-center ">
            <img className="h-20 w-20 rounded-full" src={user.photoURL} />

            <h1 className="font-bold">
              Name :{user.displayName ? user.displayName : "Admin"}
            </h1>
            <h1 className="font-bold">Role : Admin</h1>
            <h1 className="font-bold">Email : {user.email}</h1>
            {/* A edit button  */}
            <div className="flex items-center justify-center gap-3 mt-5 w-full ">
              <button className="btn btn-primary w-full" onClick={handleModal}>
                Edit Info
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`modal ${showModal ? "modal-open" : ""}`}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Info</h3>
          <div className="py-4">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full mb-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full mb-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered w-full mb-2"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </div>
          <div className="modal-action">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
            <button className="btn" onClick={() => setShowModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminMange;
