"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/mousewheel";

import Section1 from "@/components/AllSection/Section1";
import Section2 from "@/components/AllSection/Section2";
import Section3 from "@/components/AllSection/Section3";
import Section4 from "@/components/AllSection/Section4";
import Section5 from "@/components/AllSection/Section5";
import Section6 from "@/components/AllSection/Section6";
import Section41 from "@/components/AllSection/Section41";
import Section42 from "@/components/AllSection/Section42";
import Section43 from "@/components/AllSection/Section43";
import NavigationMenu from "@/components/AllSection/NavigationMenu";

const sections = [
  Section1, // 0
  Section2, // 1
  Section3, // 2
  Section4, // 3
  Section41, // 4
  Section42, // 5
  Section43, // 6
  Section5, // 7
  Section6, // 8
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="w-full h-screen">
        <Swiper
          direction="vertical"
          modules={[Mousewheel]}
          mousewheel={{ forceToAxis: true }}
          slidesPerView={1}
          speed={800}
          simulateTouch={false}
          allowTouchMove={false}
          className="h-screen bg-custom2"
          style={{ scrollbar: "none" }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          
        >
          {sections.map((Section, index) => (
            <SwiperSlide key={index}>
              {index === 3 ? (
                <Section activeIndex={activeIndex} />
              ) : (
                <Section activeIndex={activeIndex} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx global>{`
          ::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>

      {/* Pass activeIndex to NavigationMenu */}
      <NavigationMenu activeIndex={activeIndex} />
    </>
  );
};

export default Home;
