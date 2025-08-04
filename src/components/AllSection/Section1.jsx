import React, { useEffect, useState } from "react";
import { LogoIcon } from "../common/Icons";
import { MdOutlineArrowOutward } from "react-icons/md";
import Title from "../common/Title";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const data = [
  { id: 1, title: "72% of business owners are burnt out, 84% work 40+ hours/week." },
  { id: 2, title: "39% say paperwork is the #1 time killer." },
  { id: 3, title: "37% of small businesses struggle with tech know-how" },
  { id: 4, title: "64% know they should delegate, but don’t know how." },
  { id: 5, title: "91% say automation boosts revenue" },
  { id: 6, title: "82% see lower costs or higher revenue in the first year." },
  { id: 7, title: "55% of small businesses increased their usage by 41% just this year." },
  { id: 8, title: "70% want a simple, clear path." },
];

const SlideInText = ({ text }) => {
  return (
    <h2 className="text-white text-2xl md:text-3xl font-medium mt-8">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.03, ease: "easeOut" }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h2>
  );
};

const Section1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    let timeout1, timeout2;

    const title = data[currentIndex].title;
    const totalDelay = title.length * 30 + 2000; // animation time + pause

    timeout1 = setTimeout(() => {
      setShowText(false); // Hide text before showing the next
      timeout2 = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % data.length);
        setShowText(true);
      }, 300); // small pause before switching text
    }, totalDelay);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [currentIndex]);

  return (
    <div className="min-h-screen">
      <header className="fixed flex items-center justify-between w-full section-padding-x py-4 z-10">
        <LogoIcon />
        <Link
          to="/getintouch"
          className="bg-custom-primary text-white rounded-full py-2 px-4 flex items-center gap-2"
        >
          Get In Touch
          <MdOutlineArrowOutward className="hidden sm:block" />
        </Link>
      </header>

      <div className="w-full flex-col h-screen flex items-center justify-center text-center px-4">
        <Title level="title56" className="text-white">
          The World is moving fast. Your business isn’t.
        </Title>

        {/* Animated Changing Title */}
        <div className="flex flex-col items-center justify-center h-[40px]">
        {showText && <SlideInText text={data[currentIndex].title} />}

        </div>

        <Title level="title24" className="text-custom-primary mt-12">
          We help you shift into a brighter future..
        </Title>
      </div>
    </div>
  );
};

export default Section1;
