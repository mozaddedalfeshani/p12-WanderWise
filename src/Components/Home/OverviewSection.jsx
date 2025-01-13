import React from "react";

const OverviewSection = () => {
  return (
    <div
      className="p-6  flex flex-col md:flex-row
    items-center justify-around gap-6 rounded-lg shadow-lg">
      <div className="p-5 card rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Welcome to WanderWise</h2>
        <p className="mb-6">
          Discover the best tourist destinations with our comprehensive guides
          and videos.
        </p>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-4">Explore Our Videos</h3>
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/X5uxoBv-myU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"></iframe>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
