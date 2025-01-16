import { createBrowserRouter } from "react-router-dom";
import ClientLayout from "../layout/ClientLayout";
import HomePage from "../pages/HomePage";
import Auth from "../pages/Auth/Auth";
import Register from "../pages/Auth/Register";
import Community from "../pages/community/Community";
import TourGuideInfo from "../Components/Home/TourGuideInfo";
import TripsPages from "../pages/Trips/TripsPage";
import PackageDetails from "../pages/Details/PackageDetails";

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
        element: <TourGuideInfo />, // Use the new component
      },
      {
        path: "/package/:id",
        element: <PackageDetails />,
      },
    ],
  },
]);

export default router;
