// Sidebar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="md:hidden btn fixed bottom-4 right-4 rounded-full p-4 shadow-lg bg-blue-500 text-white"
        onClick={toggleSidebar}>
        {isOpen ? "Close" : "Open"} Menu
      </button>
      <div
        className={`bg-base-300 h-screen ${
          isOpen ? "block" : "hidden"
        } md:block`}>
        <h2 className="md:mx-10 md:py-5 font-roboto text-2xl">Wander Wise</h2>
        <nav>
          <ul className="flex flex-col">
            <li className="btn   mx-0 rounded-sm flex-none">
              <NavLink
                to="/dashboard/manageProfile"
                className={({ isActive }) => (isActive ? "active" : "")}>
                Manange Profile
              </NavLink>
            </li>
            <li className="btn   mx-0 rounded-sm flex-none">
              <NavLink
                to="/dashboard/myBooking"
                className={({ isActive }) => (isActive ? "active" : "")}>
                My Booking
              </NavLink>
            </li>
            <li className="btn   mx-0 rounded-sm flex-none">
              <NavLink
                to="/dashboard/manageStories"
                className={({ isActive }) => (isActive ? "active" : "")}>
                Manage Stories
              </NavLink>
            </li>
            <li className="btn   mx-0 rounded-sm flex-none">
              <NavLink
                to="/dashboard/addStories"
                className={({ isActive }) => (isActive ? "active" : "")}>
                Add Stories
              </NavLink>
            </li>
            <li className="btn   mx-0 rounded-sm flex-none">
              <NavLink
                to="/dashboard/joinAsTourGuide"
                className={({ isActive }) => (isActive ? "active" : "")}>
                Join as tour guide
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
