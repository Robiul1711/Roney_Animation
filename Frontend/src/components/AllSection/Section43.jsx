import React from "react";
import { SmallBallIcon } from "../common/Icons";
import Title from "../common/Title";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Section43 = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  // Responsive ball positions
  const ballOffsets = () => {
    // Adjust offsets based on screen size
    if (window.innerWidth < 768) {
      return [-120, -85, -50, -15, 15, 50, 85, 120];
    }
    if (window.innerWidth < 1024) {
      return [-160, -115, -70, -25, 25, 70, 115, 160];
    }
    return [-210, -150, -90, -30, 30, 90, 150, 210];
  };

  return (
    <div
      ref={ref}
      className="min-h-screen flex justify-center items-center section-padding-x text-center py-16"
    >
      <div className="flex flex-col gap-8 md:gap-16 w-full max-w-6xl mx-auto">
        {/* Animated Balls */}
        <div className="flex flex-wrap items-center justify-center relative w-full">
          {Array.from({ length: 8 }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ x: 0, opacity: 0, scale: 0.5 }}
              animate={
                inView
                  ? {
                      x: ballOffsets()[index],
                      opacity: 1,
                      scale: 1,
                      y: [0, -10, 0],
                    }
                  : { x: 0, opacity: 0, scale: 0.5 }
              }
              transition={{
                x: { 
                  duration: 0.8, 
                  delay: index * 0.05, 
                  type: "spring", 
                  stiffness: 100,
                  damping: 10
                },
                opacity: { duration: 0.6, delay: index * 0.05 },
                scale: { duration: 0.6, delay: index * 0.05 },
                y: { 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: index * 0.1
                },
              }}
              className="absolute left-[50%] transform -translate-x-1/2"

            >
              <SmallBallIcon className="size-20 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:size-36" />
            </motion.div>
          ))}
        </div>

        {/* Titles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col justify-center items-center gap-4 md:gap-6 mt-32 md:mt-40"
        >
          <Title level="title48" className="text-white">
            Together
          </Title>
          <Title level="title24" className="text-white font-medium max-w-2xl mx-auto px-4">
            Businesses evolve. Markets shift. We stay by your side adapting,
            growing, and pushing forward with you.
          </Title>
        </motion.div>
      </div>
    </div>
  );
};

export default Section43;