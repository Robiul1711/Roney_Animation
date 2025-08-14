import React from "react";
import Title from "../common/Title";
import { SmallBallIcon } from "../common/Icons";
import { motion } from "framer-motion";

const Section41 = ({ activeIndex }) => {
  const ballAnimation = {
    animate: {
      y: [0, -15, 0], // up and down motion
      scale: [1, 1.1, 1], // slight pulsing
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="min-h-screen flex justify-center items-center section-padding-x">
      <div className="flex flex-col gap-20">
        
        {/* Balls with animation */}
        <div className="flex flex-wrap items-center justify-center gap-6 mx-auto">
          {Array.from({ length: 5 }).map((_, index) => (
            <motion.div
              key={index}
              {...ballAnimation}
              transition={{
                ...ballAnimation.transition,
                delay: index * 0.2, // stagger effect
              }}
            >
               <SmallBallIcon className="size-20 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:size-36" />
            </motion.div>
          ))}
        </div>

        {/* Titles */}
        <div className="flex flex-col justify-center items-center text-center gap-6">
          <Title level="title48" className="text-white">
            Build
          </Title>
          <Title level="title24" className="text-white font-medium">
            Together, we turn ideas into tools that save time and make money.
          </Title>
        </div>
      </div>
    </div>
  );
};

export default Section41;
