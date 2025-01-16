import axios from "axios";
import React from "react";
import HOST from "../../constant/HOST";
import TCard from "./TCard";

const TripsPage = () => {
  const [packages, setPackages] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${HOST}/packages`);
      console.log(res.data);
      setPackages(res.data);
    };
    fetchData();
  }, []);

  if (!packages) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center font-black my-4 ">Trips</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {packages.map((item, index) => {
          return <TCard key={index} info={item} />;
        })}
      </div>
    </div>
  );
};

export default TripsPage;
