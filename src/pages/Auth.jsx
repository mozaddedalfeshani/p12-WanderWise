import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
const Auth = () => {
  return (
    <div className="container mx-auto card  p-4 flex flex-col justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body">
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
            <button className="btn btn-secondary">
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
    </div>
  );
};

export default Auth;
