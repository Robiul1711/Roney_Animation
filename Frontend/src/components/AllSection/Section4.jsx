import React from "react";
import { motion } from "framer-motion";
import Title from "../common/Title";
import { FullBigBallIcon, SmallBallIcon } from "../common/Icons";

const Section4 = ({ activeIndex }) => {
  const isActive = activeIndex === 3;
  return (
    <div className="min-h-screen  flex justify-center items-center relative">
      {/* Animated Ball */}
<motion.div
  initial={{ opacity: 1, top: "5%", scale: 1.5 }}
  animate={
    isActive
      ? { top: "40%", scale: 1 }
      : { top: "0%", scale: 1.5 }
  }
  transition={{ duration: 1, ease: "easeOut" }}
  className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
>
  <div className="relative flex items-center justify-center">
    <FullBigBallIcon className={"size-50 md:size-auto"} />
    <div className="absolute inset-0 flex items-center justify-center">
      <SmallBallIcon className={"size-30 md:size-auto"} />
    </div>
  </div>
</motion.div>


      {/* Text Content */}
      <div className="absolute bottom-40 flex flex-col items-center gap-6">
        <Title level="title48" className="text-white">
          Guide
        </Title>
        <Title level="title24" className="text-white font-medium text-center">
          We help you understand what matters and what doesn’t.
        </Title>
      </div>
    </div>
  );
};

export default Section4;
