import React from "react";
import { Link } from "react-router-dom";

const AllTourGuides = ({ tourGuide }) => {
  if (!tourGuide) return <h1>Loading...</h1>;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={tourGuide.image}
          alt={tourGuide.name}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {tourGuide.name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{tourGuide.profile}</p>
        <p>Experience: {tourGuide.experience}</p>
        <p>Rating: {tourGuide.rating}</p>
        <div className="card-actions justify-end">
          {/* {(tourGuide.languages).map((item, index) => (
            <div key={index} className="badge badge-primary">
              {item}
            </div>
          ))} */}
        </div>
      </div>
      <div className="card-actions justify-center my-2 w-full">
        <Link to={`/tgProfile/${tourGuide._id}`} className="btn btn-primary">
          See Details
        </Link>
      </div>
    </div>
  );
};

export default AllTourGuides;
