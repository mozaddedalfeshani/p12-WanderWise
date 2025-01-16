import React from "react";
import { Link } from "react-router-dom";

const PackageCard = ({ info }) => {
  console.log(info);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl overflow-hidden h-auto md:h-[410px]">
        <figure className="w-full h-64 md:h-80 bg-gray-200 flex items-center justify-center">
          {info.images[0] ? (
            <img
              src={info.images[0]}
              alt="Shoes"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-gray-500">No Image Available</div>
          )}
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {info.title}
            <div className="badge badge-secondary">{info.tourType}</div>
          </h2>
          <p>{info.details}</p>
          <div className="card-actions justify-end">
            {/* {info.tourGuides.map((guide, index) => {
              return (
                <div key={index} className="badge badge-outline">
                  {guide}
                </div>
              );
            })} */}
          </div>
        </div>
        <div className="card-actions justify-center">
          <Link className="btn btn-ghost w-full rounded-none">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
