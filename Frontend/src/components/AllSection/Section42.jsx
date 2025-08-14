import React from "react";
import { motion } from "framer-motion";
import { SmallBallIcon } from "../common/Icons";
import Title from "../common/Title";

const Section42 = () => {
  // Animation variants for the balls
  const ballVariants = {
    animate: (index) => ({
      y: [0, -20, 0], // Bounce up and down
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay: index * 0.2, // Staggered animation for each ball
      },
    }),
  };

  return (
    <div className="min-h-screen flex justify-center items-center section-padding-x text-center">
      <div className="flex flex-col gap-20">
        <div className="flex flex-wrap items-center justify-center max-w-[800px] mx-auto gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <motion.div
              key={index}
              variants={ballVariants}
              custom={index}
              animate="animate"
            >
             <SmallBallIcon className="size-20 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:size-36" />
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <Title level="title48" className="text-white">
            Deliver
          </Title>
          <Title level="title24" className="text-white font-medium">
            We make sure it works and that you know how to use it.
          </Title>
        </div>
      </div>
    </div>
  );
};

export default Section42;