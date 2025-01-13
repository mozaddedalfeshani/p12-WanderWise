import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module
import "swiper/swiper-bundle.css";

const images = [
  "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",

  "https://media.gettyimages.com/id/1317499240/video/young-woman-hiking-and-looking-at-camera.jpg?s=640x640&k=20&c=qOb_LWnt_dWME8SP81CvyiADWOT_z011xJBYkVUVo4U=",
  "https://media.gettyimages.com/id/1438592292/video/cheerful-family-of-trekkers-exploring-wildlife-in-nature.jpg?s=640x640&k=20&c=Z-gBneHJ7eOWNoDWbuijyFOV1nwJe0ZvEFkezYzKCy0=",
  "https://www.shutterstock.com/image-photo/beauty-saint-martin-island-coxs-600nw-2308207335.jpg",
  "https://c0.wallpaperflare.com/preview/717/600/1002/bangladesh-landscape-nature-tourism.jpg",
];

function CoverflowSlider() {
  return (
    <div className="w-full mx-auto my-8">
      {" "}
      {/* Set container to full width */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000, // Change slide every 3 seconds
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        pagination={{
          clickable: true, // Makes the pagination dots clickable
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]} // Add Autoplay module
        className="w-full rounded-lg shadow-lg">
        {" "}
        {/* Set Swiper to full width */}
        {images.map((src, index) => (
          <SwiperSlide key={index} className="w-full">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover rounded-lg" // Responsive height
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CoverflowSlider;
