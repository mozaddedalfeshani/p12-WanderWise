import React from "react";
import { Link } from "react-router-dom";

const TCard = ({ info }) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl overflow-hidden">
        <figure>
          <img src={info.images[0]} alt={info.title} className="w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {info.title}
            <div className="badge badge-secondary">{info.tourType}</div>
          </h2>
          <p>{info.details}</p>
          <div className="card-actions justify-end">
            <Link className="btn btn-outline" to={`/package/${info._id}`}>
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TCard;
