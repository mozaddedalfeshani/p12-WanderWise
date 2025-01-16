import React from "react";
import { useParams } from "react-router-dom";

const TgDetails = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="container mx-auto card my-5 flex flex-col md:flex-row justify-center items-center">
      <div className="card-body">
        <img
          src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg"
          alt="tour guide"
          className="rounded-lg"
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">Tour Guide Name</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          molestias, nemo quos, quas quidem, voluptates quae voluptatum magnam
          doloribus quibusdam.
        </p>
        <p>Experience: 5 years</p>
        <p>Rating: 4.5</p>
        <div className="card-actions justify-end">
          <div className="badge badge-primary">English</div>
          <div className="badge badge-primary">French</div>
          <div className="badge badge-primary">Spanish</div>
        </div>
      </div>
    </div>
  );
};

export default TgDetails;
