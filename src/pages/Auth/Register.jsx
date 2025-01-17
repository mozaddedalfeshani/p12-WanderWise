import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import HOST from "../../constant/HOST";

const Register = () => {
  const { user, LoginWithGoogle, loading, createAccount } =
    useContext(AuthContext);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    return regex.test(password);
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setIsPasswordValid(validatePassword(password));
  };

  const handleGoogleLogin = async () => {
    await LoginWithGoogle();
    console.log("Google login", user);
  };

  const imageHostingKey = "79dae6d8e77e9a9a901c03b0dfa39f1d";
  const imageBB = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

  const handleRegister = async (e) => {
    e.preventDefault();

    const email = e.target[2].value;
    const password = e.target[3].value;
    const name = e.target[0].value;
    const imageFile = e.target[1].files[0];

    try {
      console.log(email, password, name, imageFile);

      // Create FormData for the image upload
      const formData = new FormData();
      formData.append("image", imageFile);

      // Upload the image to ImgBB
      const imageResponse = await axios.post(imageBB, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(imageResponse.data);

      // Get the image URL from ImgBB response
      const imageUrl = imageResponse.data.data.url;

      // Prepare data for backend
      const data = {
        email: email,
        name: name,
        password: password,
        iconUrl: imageUrl, // Use the image URL returned from ImgBB
      };
      console.log(data);

      // Send registration data to backend (you should replace this with your backend API)
      await axios.post(`${HOST}/client/register`, data);

      toast.success("Registration successful", {
        pauseOnHover: false,
      });
    } catch (error) {
      toast.error(
        "Registration failed: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <div className="container mx-auto card p-4 flex flex-col justify-center items-center min-h-screen">
      <Helmet>
        <title>WanderWise | Register</title>
      </Helmet>
      {loading ? (
        <span className="loading loading-ring loading-lg"></span>
      ) : (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input type="file" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                onChange={handlePasswordChange}
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary" disabled={!isPasswordValid}>
                Register Now
              </button>
            </div>

            <div className="form-control">
              <button onClick={handleGoogleLogin} className="btn btn-secondary">
                <FaGoogle /> Register with Google
              </button>
            </div>
            <div className="divider">OR</div>
            <div className="form-control mt-6">
              <label className="label">
                <span className="label-text">Already Have Account ?</span>
              </label>
              <Link to="/login" className="btn btn-outline">
                Login
              </Link>
            </div>
          </form>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Register;
