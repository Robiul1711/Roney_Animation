import React, { useEffect, useState } from "react";
import AnimationIntro from "@/components/common/AnimationIntro";
import Footer from "@/shared/footer/Footer";
import Navbar from "@/shared/navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [showOutlet, setShowOutlet] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOutlet(true);
    }, 4000); // 4 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimationIntro />

      {/* Show the rest of the layout after 4 seconds */}
      {showOutlet && (
        <>
          {/* <Navbar /> */}
          <Outlet />
          {/* <Footer /> */}
        </>
      )}
    </>
  );
};

export default Layout;
