"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowIcon } from "./CustomIcon";

const AnimationIntro = () => {
  const [show, setShow] = useState(true);
  const [moveToNavbar, setMoveToNavbar] = useState(false);
  const [position, setPosition] = useState({ x: "-36vw", y: "-45vh" });

  useEffect(() => {
    // Decide position based on screen width
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 600) {
        setPosition({ x: "-17vh", y: "-44vh" });
      } else if (window.innerWidth <= 1460) {
        setPosition({ x: "-42vw", y: "-44vh" });
      } else {
        setPosition({ x: "-36vw", y: "-45vh" }); // Default values
      }
    }

    const timer1 = setTimeout(() => setMoveToNavbar(true), 2500);
    const timer2 = setTimeout(() => setShow(false), 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <div className="w-full h-screen bg-custom flex justify-center items-center z-50">
          <motion.div
            animate={
              moveToNavbar
                ? {
                    x: position.x,
                    y: position.y,
                    scale: 0.8,
                    transition: { duration: 1.2, ease: "easeInOut" },
                  }
                : {}
            }
            exit={{
              opacity: 0,
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
            className="flex items-center"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <ArrowIcon />
            </motion.span>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-[#023588] text-2xl font-bold ml-2"
            >
              BrightShift
            </motion.p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AnimationIntro;
