import React from "react";
import { Link } from "react-router-dom";

const PackageCard = ({ info }) => {
  console.log(info);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl overflow-hidden h-[410px]">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
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
