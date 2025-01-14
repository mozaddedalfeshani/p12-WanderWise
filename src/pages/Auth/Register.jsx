import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

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

  const handleRegister = async (e) => {
    e.preventDefault();
    const email = e.target[2].value;
    const password = e.target[3].value;
    const name = e.target[0].value;
    const imageUrl = e.target[1].value;
    try {
      await createAccount(email, password, name, imageUrl);
      console.log("Email login", user);
      toast.success("Registration successful", {
        pauseOnHover: false,
      });
    } catch (error) {
      console.log(error);
      toast.error("Registration failed: " + error);
    }
  };

  return (
    <div className="container mx-auto card  p-4 flex flex-col justify-center items-center min-h-screen">
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
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                placeholder="image URL"
                className="input input-bordered"
                required
              />
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
