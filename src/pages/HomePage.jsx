import React from "react";
import Footer from "../Components/Home/Footer";
import CoverflowSlider from "../Components/Home/CoverflowSlider";
import OverviewSection from "../Components/Home/OverviewSection";
import TourismTabs from "../Components/Home/TourismTabs ";
import { Helmet } from "react-helmet-async";
import HomeStories from "../Components/Home/HomeStories";
const HomePage = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",

    "https://media.gettyimages.com/id/1317499240/video/young-woman-hiking-and-looking-at-camera.jpg?s=640x640&k=20&c=qOb_LWnt_dWME8SP81CvyiADWOT_z011xJBYkVUVo4U=",
    "https://media.gettyimages.com/id/1438592292/video/cheerful-family-of-trekkers-exploring-wildlife-in-nature.jpg?s=640x640&k=20&c=Z-gBneHJ7eOWNoDWbuijyFOV1nwJe0ZvEFkezYzKCy0=",
    "https://www.shutterstock.com/image-photo/beauty-saint-martin-island-coxs-600nw-2308207335.jpg",
    "https://c0.wallpaperflare.com/preview/717/600/1002/bangladesh-landscape-nature-tourism.jpg",
  ];

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="w-11/12 mx-auto">
        <CoverflowSlider images={images} />
        <OverviewSection />
        <TourismTabs />
        <HomeStories />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
