"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import "swiper/css";

const sections = [
  { id: "guide", label: "Guide", balls: 1 },
  { id: "build", label: "Build", balls: 5 },
  { id: "deliver", label: "Deliver", balls: 9 },
  { id: "together", label: "Together", balls: 9 },
];

const Ball = ({ delay }) => (
  <motion.div
    className="w-16 h-16 bg-gradient-to-b from-blue-400 to-blue-700 rounded-full"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5, delay }}
  />
);

export default function ScrollAnimationPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative flex">
      {/* Sidebar */}
      <motion.div
        className="fixed top-1/2 left-4 -translate-y-1/2 flex flex-col gap-4 bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-lg z-50"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: activeIndex >= 0 ? 0 : -100, opacity: activeIndex >= 0 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {sections.map((sec, i) => (
          <motion.button
            key={sec.id}
            className={`text-lg font-semibold px-3 py-1 rounded cursor-pointer ${
              activeIndex === i ? "bg-blue-500 text-white" : "text-gray-700"
            }`}
            onClick={() => {
              // Scroll to the selected slide on sidebar button click
              document.querySelector(`.swiper`).swiper.slideTo(i);
            }}
          >
            {sec.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Swiper Sections */}
      <Swiper
        direction="vertical"
        slidesPerView={1}
        mousewheel={true}
        modules={[Mousewheel]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="h-screen w-full"
        style={{ scrollbarWidth: "none" }}
      >
        {sections.map((sec, i) => (
          <SwiperSlide key={sec.id}>
            <Section sec={sec} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function Section({ sec }) {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-blue-400">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-10"
      >
        {sec.label}
      </motion.h2>

      <motion.div
        className="flex flex-wrap gap-4 justify-center"
        initial="hidden"
        animate="animate"
        variants={{
          animate: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {Array.from({ length: sec.balls }).map((_, i) => (
          <Ball key={i} delay={i * 0.1} />
        ))}
      </motion.div>
    </section>
  );
}
