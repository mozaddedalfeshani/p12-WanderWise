import React, { useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Default styles for tabs
import axios from "axios";
import HOST from "../../constant/HOST";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import PackageCard from "../Shared/PackageCard";

const TourismTabs = () => {
  const [packages, setPackages] = React.useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const [tourGuides, setTourGuides] = React.useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await axios.get(`${HOST}/api/samples/`);
        // console.log("Packages:", res.data);
        setPackages(res.data);
      } catch (error) {
        // console.error("Error fetching packages:", error);
      }
    };
    const fetchTourGuides = async () => {
      try {
        const res = await axios.get(`${HOST}/api/tg/`);
        // console.log("Tour Guides:", res.data);
        setTourGuides(res.data);
      } catch (error) {
        // console.error("Error fetching tour guides:", error);
      }
    };
    fetchTourGuides();
    fetchPackages();
  }, []);

  const handleViewDetails = (packageId) => {
    navigate(`/package/${packageId}`);
  };

  return (
    <div className="tabs-container my-5">
      <Tabs>
        {/* Tab Headers */}
        <TabList>
          <Tab>Our Packages</Tab>
          <Tab>Meet Our Tour Guides</Tab>
        </TabList>

        {/* Tab Content */}
        <TabPanel>
          {/* Content for "Our Packages" */}
          <div className="packages">
            <h2 className="text-center font-bold my-10 text-3xl ">
              Our Packages
            </h2>
            <div className="grid grid-cols-1 gap-1  md:grid-cols-3 ">
              {packages.map((item, index) => {
                return <PackageCard key={index} info={item} />;
              })}
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          {/* Content for "Meet Our Tour Guides" */}
          <div className="tour-guides">
            <h2 className="text-center font-bold my-10 text-3xl ">
              Meet Our Tour Guides
            </h2>
            <div className="grid grid-cols-1 gap-1  md:grid-cols-3 ">
              {tourGuides.map((item, index) => {
                return (
                  <div key={index} className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="rounded-xl"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{item.name}</h2>
                      <p>{item.profile}</p>
                      <div className="card-actions justify-end">
                        {item.languages.map((lang, index) => {
                          return (
                            <span key={index} className="badge ">
                              {lang}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                    <div className="card-actions border-none rounded-none">
                      <Link
                        to={`/tgInfo/${item._id}`}
                        className="btn btn-primary w-full rounded-none">
                        See profile
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Add more guide cards as needed */}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TourismTabs;
