import React from "react";
import { Link } from "react-router-dom";

const TCard = ({ info }) => {
  return (
    <div>
      <h1>{info._id}</h1>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={info.images[0]} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {info.title}
            <div className="badge badge-secondary">{info.tourType}</div>
          </h2>
          <p>{info.details}</p>
          <div className="card-actions justify-end">
            <Link className="btn btn-outline" to={`/package/${info._id}`}>
              View Details{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TCard;
