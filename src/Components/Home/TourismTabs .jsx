import React, { useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Default styles for tabs
import axios from "axios";
import HOST from "../../constant/HOST";
// const HOST from "../../constant/HOST.jsx";
const TourismTabs = () => {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    const fetchData = axios.get(`${HOST}/api/samples`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <div className="tabs-container">
      <Tabs>
        {data.length}
        {/* Tab Headers */}
        <TabList>
          <Tab>Our Packages</Tab>
          <Tab>Meet Our Tour Guides</Tab>
        </TabList>

        {/* Tab Content */}
        <TabPanel>
          {/* Content for "Our Packages" */}
          <div className="packages">
            <h2>Our Packages</h2>
            <div className="card">
              <img src="https://via.placeholder.com/150" alt="Tour Package" />
              <h3>Sundarbans Adventure</h3>
              <p>Type: Nature</p>
              <p>Price: $150</p>
              <button>View Details</button>
            </div>
            {/* Add more package cards as needed */}
          </div>
        </TabPanel>

        <TabPanel>
          {/* Content for "Meet Our Tour Guides" */}
          <div className="tour-guides">
            <h2>Meet Our Tour Guides</h2>
            <div className="card">
              <img src="https://via.placeholder.com/150" alt="Tour Guide" />
              <h3>Alice Smith</h3>
              <p>Experienced in Nature Tours</p>
              <button>View Profile</button>
            </div>
            {/* Add more guide cards as needed */}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TourismTabs;
