import React from "react";
import Footer from "../Components/Home/Footer";
import CoverflowSlider from "../Components/Home/CoverflowSlider";
import OverviewSection from "../Components/Home/OverviewSection";
import TourismTabs from "../Components/Home/TourismTabs ";
import { Helmet } from "react-helmet-async";
import HomeStories from "../Components/Home/HomeStories";
const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="w-11/12 mx-auto">
        <CoverflowSlider />
        <OverviewSection />
        <TourismTabs />

        <HomeStories />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
