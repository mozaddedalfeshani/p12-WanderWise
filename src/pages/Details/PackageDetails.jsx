import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import CoverflowSlider from "../../Components/Home/CoverflowSlider";
import HOST from "../../constant/HOST";
import axios from "axios";
import TimeLine from "../../Components/Packages/TimeLine";
import AllTourGuides from "../../Components/Packages/AllTourGuides";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../provider/AuthProvider"; // Correct import of AuthContext
import { toast, ToastContainer } from "react-toastify";

const PackageDetails = () => {
  const { id } = useParams();

  const [packageDetails, setPackageDetails] = React.useState({});
  const [tourGuides, setTourGuides] = React.useState([]);
  const { user } = useContext(AuthContext); // Use useContext to access user state
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [tourDate, setTourDate] = useState(new Date());
  const [selectedGuide, setSelectedGuide] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const getBookingInfo = () => ({
    packageName: packageDetails.title,
    touristName: user?.displayName || "",
    touristEmail: user?.email || "",
    touristImage: user?.photoURL || "",
    price: packageDetails.price,
    tourDate,
    tourGuideName: selectedGuide,
    status: "In Review",
    tourGuideEmail: tourGuides.find((guide) => guide.name === selectedGuide)
      ?.email,
  });
  const from = { pathname: `/package/${id}` };
  const openModal = () => {
    if (user) {
      setModalIsOpen(true);
    } else {
      navigate("/login", {
        state: { from },
      }); // Navigate to login if user is not logged in
    }
  };
  const closeModal = () => setModalIsOpen(false);

  const handleBooking = async (e) => {
    e.preventDefault();
    if (!user) {
      console.error("User is not logged in");
      return;
    }
    const bookingInfo = getBookingInfo();
    console.log("booking info", bookingInfo);
    // Send booking info to the server
    await axios.post(`${HOST}/booking`, bookingInfo).then((res) => {
      if (res.data.modifiedCount > 0 || res.data.matchedCount > 0) {
        toast.success("Booking successful");
      }
    });
    closeModal();
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${HOST}/packages/${id}`);
      // console.log(res.data);
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

  React.useEffect(() => {
    if (modalIsOpen) {
      const modalInfo = getBookingInfo();
    }
  }, [modalIsOpen, packageDetails, user, tourDate, selectedGuide]);

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
          {tourGuides &&
            tourGuides.map((tourGuide, index) => {
              return <AllTourGuides key={index} tourGuide={tourGuide} />;
            })}
        </div>
      </section>

      {/* A section to display comments */}
      <section>
        <h1 className="text-2xl font-bold text-center mt-8">Comments</h1>
        <div className="space-y-4">
          {packageDetails.comments?.map((comment, index) => (
            <div key={index} className="p-4 border rounded shadow">
              <p className="font-bold">{comment.author}</p>
              <p>{comment.content}</p>
              <p className="text-sm text-gray-500">{comment.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* A section to display likes and shares */}
      <section className="mt-8">
        <h1 className="text-2xl font-bold text-center">Engagement</h1>
        <div className="flex justify-around mt-4">
          <div>
            <h2 className="text-xl font-bold">Likes</h2>
            <p>{packageDetails.likes?.length || 0}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Shares</h2>
            <p>{packageDetails.shares?.length || 0}</p>
          </div>
        </div>
      </section>

      <button
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg"
        onClick={openModal}>
        Book Now
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Booking Form"
        className="modal modal-open"
        overlayClassName="modal-overlay"
        appElement={document.getElementById("root")} // Set appElement directly
      >
        <div className="modal-box">
          <h2 className="text-2xl mb-4">Book Now</h2>
          <form onSubmit={handleBooking}>
            <div className="mb-4">
              <label className="block text-gray-700">Package Name</label>
              <input
                type="text"
                value={packageDetails.title}
                readOnly
                className="input input-bordered w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Tourist Name</label>
              <input
                type="text"
                value={user?.displayName || ""}
                readOnly
                className="input input-bordered w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Tourist Email</label>
              <input
                type="email"
                value={user?.email || ""}
                readOnly
                className="input input-bordered w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Tourist Image</label>
              <input
                type="text"
                value={user?.photoURL || ""}
                readOnly
                className="input input-bordered w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Price</label>
              <input
                type="text"
                value={packageDetails.price}
                readOnly
                className="input input-bordered w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Tour Date</label>
              <DatePicker
                selected={tourDate}
                onChange={(date) => setTourDate(date)}
                className="input input-bordered w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Tour Guide Name</label>
              <select
                value={selectedGuide}
                onChange={(e) => setSelectedGuide(e.target.value)}
                className="select select-bordered w-full">
                <option value="">Select a guide</option>
                {tourGuides.map((guide) => (
                  <option key={guide._id} value={guide.name}>
                    {guide.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={!selectedGuide}>
              Book Now
            </button>
          </form>
          <div className="modal-action">
            <button className="btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default PackageDetails;
