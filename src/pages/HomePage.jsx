import React from "react";
import Footer from "../Components/Home/Footer";
import CoverflowSlider from "../Components/Home/CoverflowSlider";
import OverviewSection from "../Components/Home/OverviewSection";
import TourismTabs from "../Components/Home/TourismTabs ";

const HomePage = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <CoverflowSlider />
        <OverviewSection />
        <TourismTabs />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
