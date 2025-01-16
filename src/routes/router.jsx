import { createBrowserRouter } from "react-router-dom";
import ClientLayout from "../layout/ClientLayout";
import HomePage from "../pages/HomePage";
import Auth from "../pages/Auth/Auth";
import Register from "../pages/Auth/Register";
import Community from "../pages/community/Community";
import TourGuideInfo from "../Components/Home/TourGuideInfo";
import TripsPages from "../pages/Trips/TripsPage";
import PackageDetails from "../pages/Details/PackageDetails";
import TgDetails from "../Components/guiders/TgDetails";
import ClientDashboard from "../pages/dashboard/Client/ClientDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/trips",
        element: <TripsPages />,
      },
      {
        path: "/contact",
        element: <div>Contact</div>,
      },
      {
        path: "/login",
        element: <Auth />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "about",
        element: <div>About</div>,
      },
      {
        path: "/tgInfo/:id",
        element: <TourGuideInfo />,
      },
      {
        path: "/package/:id",
        element: <PackageDetails />,
      },
      {
        path: "/tgProfile/:id",
        element: <TgDetails />,
      },
      {
        path: "/dashboard",
        element: <ClientDashboard />,
        children: [
          {
            path: "manageProfile",
            element: <h1>Manage Profile</h1>,
          },
          {
            path: "myBooking",
            element: <h2>My Booking</h2>,
          },
          {
            path: "manageStories",
            element: <h2>Manage Stories</h2>,
          },
          {
            path: "addStories",
            element: <h2>Add Stories</h2>,
          },
          {
            path: "joinAsTourGuide",
            element: <h2>Join As Tour Guide</h2>,
          },
        ],
      },
    ],
  },
]);

export default router;
