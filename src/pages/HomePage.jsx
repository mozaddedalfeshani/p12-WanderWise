import React from "react";
import Footer from "../Components/Home/Footer";
import CoverflowSlider from "../Components/Home/CoverflowSlider";

const HomePage = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <CoverflowSlider />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
