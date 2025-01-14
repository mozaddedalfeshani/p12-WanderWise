import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HOST from "../constant/HOST";

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
    <div className="tour-guide-info">
      <h1>{tourGuide.name}</h1>
      <img src={tourGuide.image} alt={tourGuide.name} />
      <p>{tourGuide.profile}</p>
      <div>
        {tourGuide.languages.map((lang, index) => (
          <span key={index} className="badge">
            {lang}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TourGuideInfo;
