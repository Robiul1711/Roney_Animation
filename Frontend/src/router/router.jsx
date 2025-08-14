import Dashboard from "@/components/admin/Dashboard";
import AnimationIntro from "@/components/common/AnimationIntro";
import ScrollAnimationPage from "@/components/common/ScrollAnimationPage";
import AdminLayout from "@/layout/AdminLayout";
import Layout from "@/layout/Layout";
import GetInTouch from "@/pages/GetInTouch_Page/GetInTouch";
import Home from "@/pages/home/Home";


import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <ScrollAnimationPage />,
      },
      {
        path: "/getintouch",
        element: <GetInTouch />,
      },

    ],
  },
  // Admin routes
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />, // ✅ Fixed typo
      },
    ],
  },
]);

export default router;
