import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TripsPage = () => {
  const [trips, setTrips] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [sortOption, setSortOption] = useState("priceAsc");

  useEffect(() => {
    // Fetch trips data from the server
    axios.get("http://localhost:5000/api/packages").then((response) => {
      setTrips(response.data);
    });
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleSort = (e) => {
    setSortOption(e.target.value);
  };

  const filteredTrips = trips
    .filter((trip) =>
      trip.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((trip) => (filter === "all" ? true : trip.tourType === filter))
    .sort((a, b) => {
      if (sortOption === "priceAsc") return a.price - b.price;
      if (sortOption === "priceDesc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="trips-page">
      <h1>Available Trips</h1>

      {/* Search and Filter Section */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search trips..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <select value={filter} onChange={handleFilter}>
          <option value="all">All Types</option>
          <option value="Nature">Nature</option>
          <option value="Adventure">Adventure</option>
          <option value="Beach">Beach</option>
          <option value="History">History</option>
        </select>
        <select value={sortOption} onChange={handleSort}>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
        </select>
      </div>

      {/* Trips Grid */}
      <div className="trips-grid">
        {filteredTrips.map((trip) => (
          <div className="trip-card" key={trip.title}>
            <img src={trip.images[0]} alt={trip.title} />
            <h2>{trip.title}</h2>
            <p>Type: {trip.tourType}</p>
            <p>Price: ${trip.price}</p>
            <Link
              to={`/trips/${trip.title.replace(/\s+/g, "-").toLowerCase()}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripsPage;
