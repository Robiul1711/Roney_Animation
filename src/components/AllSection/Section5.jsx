import React, { useEffect, useState } from "react";
import { animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Title from "../common/Title";
import bgShadow from "@/assets/images/bgShadow.png";

const data = [
  {
    id: 1,
    title: "125+",
    desc: "100s of Business owners guided from confusion to clarity with AI",
  },
  {
    id: 2,
    title: "150+",
    desc: "AI opportunities uncovered each tied to real business outcomes",
  },
  {
    id: 3,
    title: "Custom",
    desc: "Custom solutions built to drive efficiency, revenue, or scale",
  },
];

const Section5 = () => {
  const [counts, setCounts] = useState(data.map(() => 0));
  const [ref, inView] = useInView({
    triggerOnce: true,   // Animate only once on enter
    threshold: 0.3,      // Trigger when 30% visible
  });

  useEffect(() => {
    if (!inView) return;

    data.forEach((item, index) => {
      const num = parseInt(item.title, 10);
      if (!isNaN(num)) {
        const controls = animate(0, num, {
          duration: 3,
          onUpdate(value) {
            setCounts((prev) => {
              const copy = [...prev];
              copy[index] = Math.round(value);
              return copy;
            });
          },
        });
        return () => controls.stop();
      } else {
        setCounts((prev) => {
          const copy = [...prev];
          copy[index] = item.title;
          return copy;
        });
      }
    });
  }, [inView]);

  return (
    <div
      ref={ref}
      className="min-h-screen flex justify-center items-center flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(
          270deg,
          rgba(16, 154, 255, 0.3) 0%,
          rgba(16, 154, 255, 0.6) 54.33%,
          rgba(16, 154, 255, 0.3) 100%
        ), url(${bgShadow})`,
      }}
    >
      <Title level="title56" className="text-white">
        We Deliver Transformation
      </Title>

      <div className="md:mt-12 mt-5 grid grid-cols-2  md:grid-cols-3 gap-4 section-padding-x">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="p-4 md:p-6 border-2 border-white/30 bg-white/30 backdrop-blur-xl rounded-2xl flex flex-col gap-5 md:gap-10 items-center justify-center"
          >
            <Title
              level="title48"
              className="text-custom-primary border-b-2 border-white/30 w-full text-center  md:pb-4"
            >
              {typeof counts[index] === "number"
                ? counts[index] + (item.title.includes("+") ? "+" : "")
                : counts[index]}
            </Title>
            <Title level="title20" className="text-black font-semibold text-center">
              {item.desc}
            </Title>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section5;
