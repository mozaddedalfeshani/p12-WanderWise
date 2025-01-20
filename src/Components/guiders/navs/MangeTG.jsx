import React, { useContext, useState } from "react";
import Modal from "react-modal";
import { AuthContext } from "../../../provider/AuthProvider";
import "daisyui/dist/full.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MangeTG = () => {
  const { user, updateProfile } = useContext(AuthContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pictureURL, setPictureURL] = useState(user.photoURL);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSave = async () => {
    try {
      await updateProfile(pictureURL);
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile.");
    }
    closeModal();
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="card-title">Welcome, {user.name}</h1>
          <img
            src={user.photoURL}
            alt="User"
            className="rounded-full w-24 h-24 mx-auto"
          />
          <p>Role: {user.role}</p>
          <p>Email: {user.email}</p>

          <h2 className="mt-4">Manage Stories</h2>
          <button className="btn btn-primary" onClick={openModal}>
            Edit
          </button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal modal-open">
        <div className="modal-box">
          <h2 className="font-bold text-lg">Edit User Information</h2>
          <form>
            <label className="label">
              <span className="label-text">Picture URL:</span>
              <input
                type="text"
                value={pictureURL}
                onChange={(e) => setPictureURL(e.target.value)}
                className="input input-bordered w-full"
              />
            </label>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleSave}>
                Save
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={closeModal}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default MangeTG;
