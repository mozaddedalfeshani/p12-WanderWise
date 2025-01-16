import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import CoverflowSlider from "../../Components/Home/CoverflowSlider";
import HOST from "../../constant/HOST";
import axios from "axios";

const PackageDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [packageDetails, setPackageDetails] = React.useState({});
  React.useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${HOST}/packages/${id}`);
      console.log(res.data);
      setPackageDetails(res.data);
    };
    fetchData();
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

      <p>Package ID: {id}</p>
    </div>
  );
};

export default PackageDetails;
