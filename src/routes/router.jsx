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

import ManageProfile from "../Components/Dashboard/tourist/ManageProfile";
import AssignedTour from "../Components/Dashboard/tourist/AssignedTour";
import ManageStories from "../Components/Dashboard/tourist/ManageStories";
import AddStories from "../Components/Dashboard/tourist/AddStories";
import ClientDashboard from "../pages/dashboard/touristPage/ClientDashboard";
import Payment from "../Components/payments/Payment";
import JoinTourGuide from "../Components/Dashboard/tourist/JoinTourGuide";
import PrivateProvider from "../provider/PrivateProvider";
import AdminProvider from "../provider/AdminProvider";
import AdminDashboard from "../Components/Dashboard/Admin/AdminDashboard";
import AdminMange from "../Components/Dashboard/Admin/AdminMange";

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
        element: (
          <PrivateProvider>
            <ClientDashboard />
          </PrivateProvider>
        ),
        children: [
          {
            path: "manageProfile",
            element: <ManageProfile />,
          },
          {
            path: "myBooking",
            element: <AssignedTour />,
          },
          {
            path: "manageStories",
            element: <ManageStories />,
          },
          {
            path: "addStories",
            element: <AddStories />,
          },
          {
            path: "myBooking/payment/:price",
            element: <Payment />,
          },
          {
            path: "joinAsTourGuide",
            element: <JoinTourGuide />,
          },
        ],
      },
      // admin paths here

      {
        path: "*",
        element: <div>404</div>,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <AdminProvider>
        <AdminDashboard />
      </AdminProvider>
    ),
    children: [
      {
        path: "/admin",
        element: <AdminMange />,
      },
      {
        path: "manageTourGuide",
        element: <div>Manage Tour Guide</div>,
      },

      {
        path: "addPackage",
        element: <div>Add Package</div>,
      },
      {
        path: "manageUser",
        element: <div>Manage User</div>,
      },
      {
        path: "manageCandidates",
        element: <div>Manage Candidates</div>,
      },
    ],
  },
]);

export default router;
