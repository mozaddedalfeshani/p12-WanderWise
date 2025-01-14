import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { IoChevronBackSharp } from "react-icons/io5";

import HOST from "../../constant/HOST";

const TourGuideInfo = () => {
  const { id } = useParams();
  const [tourGuide, setTourGuide] = useState(null);

  useEffect(() => {
    const fetchTourGuide = async () => {
      try {
        const res = await axios.get(`${HOST}/api/tg/${id}`);
        setTourGuide(res.data);
      } catch (error) {
        console.error("Error fetching tour guide info:", error);
      }
    };
    fetchTourGuide();
  }, [id]);

  if (!tourGuide) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <figure>
            <img src={tourGuide.image} alt={tourGuide.name} />
          </figure>
          <h2 className="card-title">{tourGuide.name}</h2>
          <p>{tourGuide.profile}</p>
          <div>
            {tourGuide.languages.map((lang, index) => (
              <span key={index} className="badge">
                {lang}
              </span>
            ))}
          </div>
          <div className="card-actions w-full">
            <Link to="/" className="btn w-full">
              <IoChevronBackSharp />
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourGuideInfo;
