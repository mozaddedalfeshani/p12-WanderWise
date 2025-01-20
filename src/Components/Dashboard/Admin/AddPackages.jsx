import React, { useState } from "react";
import HOST from "../../../constant/HOST";
import axios from "axios";

const AddPackages = () => {
  const [packageDetails, setPackageDetails] = useState({
    title: "",
    tourType: "",
    price: "",
    images: "",
    details: "",
    tourPlan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPackageDetails({ ...packageDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let parsedTourPlan;
    try {
      parsedTourPlan = packageDetails.tourPlan
        ? JSON.parse(packageDetails.tourPlan)
        : [];
    } catch (error) {
      console.error("Invalid JSON format for tour plan:", error);
      alert("Invalid JSON format for Tour Plan. Please correct it.");
      return;
    }

    const packageData = {
      title: packageDetails.title,
      tourType: packageDetails.tourType,
      price: packageDetails.price,
      images: packageDetails.images.split(",").map((url) => url.trim()), // Split images into an array
      details: packageDetails.details,
      tourPlan: parsedTourPlan,
    };

    console.log("Submitting package data:", packageData);

    try {
      const response = await axios.post(
        `${HOST}/admin/addPackages`,
        packageData
      );
      console.log("Server Response:", response.data);
      alert("Package added successfully!");
    } catch (err) {
      console.error("Error submitting package:", err);
      alert("Failed to submit package. Please try again.");
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="card shadow-lg p-5 gap-3">
        <h1 className="font-bold text-2xl text-center">Add Packages</h1>
        <form onSubmit={handleSubmit} className="px-5">
          {/* Title Input */}
          <label className="mt-4 input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Title"
              name="title"
              value={packageDetails.title}
              onChange={handleChange}
            />
          </label>

          {/* Tour Type Input */}
          <label className="mt-4 input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Tour Type"
              name="tourType"
              value={packageDetails.tourType}
              onChange={handleChange}
            />
          </label>

          {/* Price Input */}
          <label className="mt-4 input input-bordered flex items-center gap-2">
            <input
              type="number"
              className="grow"
              placeholder="Price"
              name="price"
              value={packageDetails.price}
              onChange={handleChange}
            />
          </label>

          {/* Images Input */}
          <label className="mt-4 input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Images (comma-separated URLs)"
              name="images"
              value={packageDetails.images}
              onChange={handleChange}
            />
          </label>

          {/* Details Input */}
          <label className="mt-4 input input-bordered flex items-center gap-2">
            <input
              className="grow"
              placeholder="Details"
              name="details"
              value={packageDetails.details}
              onChange={handleChange}
            />
          </label>

          {/* Tour Plan Input */}
          <label className="mt-4 input input-bordered flex items-center gap-2 h-[100px]">
            <textarea
              className="grow textarea"
              placeholder={`Tour Plan (JSON format):\n[\n  { "day": 1, "description": "Arrival and briefing about the tour." },\n  { "day": 2, "description": "Boat ride through the mangroves and wildlife spotting." }\n]`}
              name="tourPlan"
              value={packageDetails.tourPlan}
              onChange={handleChange}></textarea>
          </label>

          {/* Submit Button */}
          <button className="btn w-full btn-outline mt-5" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPackages;
