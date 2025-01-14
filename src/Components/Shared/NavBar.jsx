import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserIcon from "./UserIcon";
import { PiMountainsDuotone } from "react-icons/pi";
import { AuthContext } from "../../provider/AuthProvider";

const NavBar = () => {
  const [theme, setTheme] = useState("cupcake");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "cupcake" : "dark";
    setTheme(newTheme);
  };

  const { user, LogOut } = useContext(AuthContext);
  // console.log(user);
  const handleLogout = async () => {
    try {
      await LogOut();
    } catch (error) {
      // console.log(error);
    }
  };
  const items = [
    <li
      key="home"
      className={`font-roboto font-medium ${
        theme === "dark" ? "text-white" : "text-black"
      }`}>
      <Link to="/">Home</Link>
    </li>,
    <li
      key="community"
      className={`font-roboto font-medium ${
        theme === "dark" ? "text-white" : "text-black"
      }`}>
      <Link to="/community">Community</Link>
    </li>,
    <li
      key="about"
      className={`font-roboto font-medium ${
        theme === "dark" ? "text-white" : "text-black"
      }`}>
      <Link to="/about">About US</Link>
    </li>,
    <li
      key="trips"
      className={`font-roboto font-medium ${
        theme === "dark" ? "text-white" : "text-black"
      }`}>
      <Link to="/trips">Trips</Link>
    </li>,
    user && (
      <li
        key="dashboard"
        className={`font-roboto font-medium ${
          theme === "dark" ? "text-white" : "text-black"
        }`}>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    ),
  ];

  return (
    <div>
      <div className="navbar bg-base-100 shadow p-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[999] mt-3 w-52 p-2 shadow">
              {items}
              <li
                key="auth"
                className={`font-roboto font-medium ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}>
                <Link to="/login">Login/Register</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <PiMountainsDuotone /> WanderWise
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{items}</ul>
        </div>
        <div className="navbar-end">
          <button onClick={toggleTheme} className="btn btn-ghost rounded-full">
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          {user ? (
            <button className="btn " onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
