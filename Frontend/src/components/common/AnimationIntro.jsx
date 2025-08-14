"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowIcon } from "./CustomIcon";
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";

const AnimationIntro = ({ onAnimationComplete }) => {
  const [moveToNavbar, setMoveToNavbar] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const logoRef = useRef(null);

  useEffect(() => {
    const calculatePosition = () => {
      if (typeof window !== "undefined" && logoRef.current) {
        const header = document.querySelector("header");
        if (!header) return;

        const headerLogo = header.querySelector("div");
        if (!headerLogo) return;

        const headerRect = headerLogo.getBoundingClientRect();
        const logoRect = logoRef.current.getBoundingClientRect();

        const x = headerRect.left - logoRect.left;
        const y = headerRect.top - logoRect.top;

        setPosition({ x, y });
      }
    };

    // Calculate position after short delay, and on resize
    const timer = setTimeout(() => {
      calculatePosition();
      window.addEventListener("resize", calculatePosition);
    }, 100);

    // Trigger the move animation after 2 seconds
    const timer1 = setTimeout(() => setMoveToNavbar(true), 2000);

    // After animation finishes, call completion callback
    const timer2 = setTimeout(() => {
      onAnimationComplete();
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener("resize", calculatePosition);
    };
  }, [onAnimationComplete]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen  flex justify-center items-center z-[9999] pointer-events-none"
    >
      <motion.div
        ref={logoRef}
        className="flex items-center absolute"
        initial={{ scale: 1, x: 0, y: 0 }}
        animate={
          moveToNavbar
            ? {
                x: position.x,
                y: position.y,
                scale: 1,
                transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] },
              }
            : {}
        }
        exit={{
          x: position.x,
          y: position.y,
          scale: 1,
          opacity: 0,
          transition: { duration: 0.5 },
        }}
      >
           <ArrowIcon className="sm:w-8 sm:h-8 size-6" />
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-[#023588] text-xl sm:text-3xl font-bold ml-2"
        >
          BrightShift
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

const Header = ({ visible }) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: 0 }}
      animate={{ 
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 0
      }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      className="fixed flex items-center bg-transparent  justify-between w-full section-padding-x py-4 z-[1111] pointer-events-auto"
    >
      <Link to="/" className="flex items-center">
        <ArrowIcon className="sm:w-8 sm:h-8 size-6" />
        <p className="text-[#023588] text-xl sm:text-3xl font-bold ml-2">BrightShift</p>
      </Link>
      <Link
        to="/getintouch"
        className="bg-custom-primary text-white rounded-full py-2 px-4 flex items-center gap-2"
      >
        Get In Touch
        <MdOutlineArrowOutward className="hidden sm:block" />
      </Link>
    </motion.header>
  );
};

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [headerVisible, setHeaderVisible] = useState(false);

  const handleAnimationComplete = () => {
    // Show header after animation finishes
    setHeaderVisible(true);
    // Hide intro
    setShowIntro(false);
  };

  return (
    <>
      <AnimatePresence>
        {showIntro && <AnimationIntro onAnimationComplete={handleAnimationComplete} />}
      </AnimatePresence>

      {/* Always render Header, control visibility by opacity */}
      <Header visible={headerVisible} />

      <main className="pt-[72px]">{/* Your main content here */}</main>
    </>
  );
}
