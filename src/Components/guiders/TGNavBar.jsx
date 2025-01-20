import React from "react";
import { Link } from "react-router-dom";

const TGNavBar = () => {
  return (
    <div>
      <div className="btm-nav">
        <Link to="manageProfile" className="bg-pink-200 text-pink-600">
          <span className="btm-nav-label">Mange Profile</span>
        </Link>
        <Link
          to="myassignedTour"
          className="active border-blue-600 bg-blue-200 text-blue-600">
          <span className="btm-nav-label">My Assigned Tours</span>
        </Link>
        <Link to="addStories" className="bg-teal-200 text-teal-600">
          <span className="btm-nav-label">My Stories</span>
        </Link>
      </div>
    </div>
  );
};

export default TGNavBar;
