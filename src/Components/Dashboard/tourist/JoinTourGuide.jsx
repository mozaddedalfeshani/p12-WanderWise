import React, { useContext, useRef, useState, useEffect } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import HOST from "../../../constant/HOST";

const JoinTourGuide = () => {
  const { user } = useContext(AuthContext);
  const reasonRef = useRef(null);
  const cvLinkRef = useRef(null);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const checkFormValidity = () => {
      if (
        reasonRef.current.value.trim() !== "" &&
        cvLinkRef.current.value.trim() !== ""
      ) {
        setIsFormValid(true);
      } else {
        setIsFormValid(false);
      }
    };

    reasonRef.current.addEventListener("input", checkFormValidity);
    cvLinkRef.current.addEventListener("input", checkFormValidity);

    return () => {
      if (reasonRef.current) {
        reasonRef.current.removeEventListener("input", checkFormValidity);
      }
      if (cvLinkRef.current) {
        cvLinkRef.current.removeEventListener("input", checkFormValidity);
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");

    const data = {
      email: user.email,
      username: user.displayName,
      reason: reasonRef.current.value,
      cvLink: cvLinkRef.current.value,
      type: "tourist",
    };

    await axios.post(`${HOST}/tgApplication`, data).then((res) => {
      console.log("----------------->", res);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your application has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  return (
    <div>
      <div className="p-4 gap-2 flex flex-col card border m-10">
        <h1 className="text-2xl font-bold mb-4">Application Form</h1>
        <h2 className="text-xl font-semibold mb-4">
          Why wants to be a Tour Guide
        </h2>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          {/* Input will be readOnly if user is logged in */}
          <input
            type="text"
            className="grow"
            placeholder={user.email || ""}
            value={user.email || ""}
            readOnly
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            value={user.displayName || ""}
            placeholder="Username"
            readOnly
          />
        </label>
        <label className="input input-bordered flex  items-center gap-2">
          <input
            type="Text"
            className="grow"
            placeholder="Why wants to be a tourGuide"
            ref={reasonRef}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path d="M4.5 3.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-1Z" />
            <path d="M3 5h10v1H3V5Zm0 2h10v1H3V7Zm0 2h10v1H3V9Zm0 2h10v1H3v-1Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="CV Link"
            ref={cvLinkRef}
          />
        </label>
        <button
          className="btn btn-primary"
          onClick={handleSubmit}
          disabled={!isFormValid}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default JoinTourGuide;
