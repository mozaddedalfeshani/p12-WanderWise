import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
const Auth = () => {
  // import singInWithGoogle from AuthProvider
  const { user, LoginWithGoogle, loading, signInUser } =
    useContext(AuthContext);
  const handleGoogleLogin = async () => {
    await LoginWithGoogle();
    // console.log("Google login", user);
  };

  // login with email and password
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInUser(email, password).then((user) => {
        toast(`Welcome ${user.displayName}`, {
          type: "success",
          hideProgressBar: true,
        });
      });

      toast("Login successful", { type: "success" });
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <div className="container mx-auto card  p-4 flex flex-col justify-center items-center min-h-screen">
      <Helmet>
        <title>WanderWise | Login</title>
      </Helmet>
      {loading ? (
        <span className="loading loading-ring loading-lg"></span>
      ) : (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleLogin}>
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
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>

            <div className="form-control">
              <button onClick={handleGoogleLogin} className="btn btn-secondary">
                <FaGoogle /> Login with Google
              </button>
            </div>
            <div className="divider">OR</div>
            <div className="form-control mt-6">
              <label className="label">
                <span className="label-text">Don't have an account?</span>
              </label>
              <Link to="/register" className="btn btn-outline">
                Register
              </Link>
            </div>
          </form>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Auth;
