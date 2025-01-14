import { createBrowserRouter } from "react-router-dom";
import ClientLayout from "../layout/ClientLayout";
import HomePage from "../pages/HomePage";
import Auth from "../pages/Auth/Auth";
import Register from "../pages/Auth/Register";
import Community from "../pages/community/Community";

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
        path: "/community",
        element: <div>Community</div>,
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
        path: "community",
        element: <Community />,
      },
    ],
  },
]);

export default router;
