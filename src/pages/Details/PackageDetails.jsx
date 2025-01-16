import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import CoverflowSlider from "../../Components/Home/CoverflowSlider";
import HOST from "../../constant/HOST";
import axios from "axios";
import TimeLine from "../../Components/Packages/TimeLine";
import AllTourGuides from "../../Components/Packages/AllTourGuides";
// import { set } from "react-hook-form";

const PackageDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [packageDetails, setPackageDetails] = React.useState({});
  const [tourGuides, setTourGuides] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${HOST}/packages/${id}`);
      console.log(res.data);
      setPackageDetails(res.data);
    };

    const fetchTourGuides = async () => {
      const res = await axios
        .get(`${HOST}/api/tg`)
        .then((res) => setTourGuides(res.data));
    };

    fetchData();
    fetchTourGuides();
  }, []);

  if (!packageDetails.images) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <Helmet>
        <title>Package Details</title>
      </Helmet>
      <h1>Package Details</h1>
      <CoverflowSlider images={packageDetails.images} />
      <div className="flex justify-center items-center card shadow-xl flex-col md:flex-row ">
        <div className="w-1/2 p-4  ">
          <h1>{packageDetails.title}</h1>
          <p>{packageDetails.details}</p>
          <p>Price: {packageDetails.price}</p>
        </div>
        <div className="w-1/2 ">
          <TimeLine timeline={packageDetails.tourPlan} />
        </div>
      </div>

      {/* A section with a list of all tour guids  */}
      <section>
        <h1 className="text-2xl font-bold text-center mt-8">Tour Guides</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tourGuides.map((tourGuide, index) => {
            return <AllTourGuides key={index} tourGuide={tourGuide} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default PackageDetails;
