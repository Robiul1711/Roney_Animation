import React, { useEffect, useState } from "react";
import { LogoIcon } from "../common/Icons";
import { MdOutlineArrowOutward } from "react-icons/md";
import Title from "../common/Title";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    title: "72% of business owners are burnt out, 84% work 40+ hours/week.",
  },
  { id: 2, title: "39% say paperwork is the #1 time killer." },
  { id: 3, title: "37% of small businesses struggle with tech know-how" },
  { id: 4, title: "64% know they should delegate, but don’t know how." },
  { id: 5, title: "91% say automation boosts revenue" },
  { id: 6, title: "82% see lower costs or higher revenue in the first year." },
  {
    id: 7,
    title:
      "55% of small businesses increased their usage by 41% just this year.",
  },
  { id: 8, title: "70% want a simple, clear path." },
];

const TYPING_SPEED = 30;
const PAUSE_AFTER_TYPING = 2000;

const Section1 = () => {
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [titleIndex, setTitleIndex] = useState(0);

  const currentTitle = data[titleIndex].title;

  useEffect(() => {
    let timeout;

    if (charIndex < currentTitle.length) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentTitle.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, TYPING_SPEED);
    } else {
      // After full title typed, wait, then go to next
      timeout = setTimeout(() => {
        const nextIndex = (titleIndex + 1) % data.length;
        setDisplayText("");
        setCharIndex(0);
        setTitleIndex(nextIndex);
      }, PAUSE_AFTER_TYPING);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, titleIndex, currentTitle]);

  return (
    <div className="min-h-screen bg-custom">
      <header className="fixed flex items-center  justify-between w-full section-padding-x py-4 z-10">
        <LogoIcon />
        <Link to="/getintouch" className="bg-custom-primary text-white rounded-full py-2 px-4 flex items-center gap-2">
          Get In Touch
          <MdOutlineArrowOutward className="hidden sm:block" />
        </Link>
      </header>

      <div className="w-full flex-col h-screen flex items-center justify-center text-center px-4">
        <Title level="title56" className="text-white">
          The World is moving fast. Your business isn’t.
        </Title>

        <motion.div
          className="mt-6 text-black h-[40px] py-10 max-w-[1100px] flex items-center justify-center"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Title
            level="title48"
            className="font-DmMono transition-opacity duration-300 ease-in-out"
          >
            {displayText}
          </Title>
        </motion.div>

        <Title level="title24" className="text-custom-primary mt-12">
          We help you shift into a brighter future..
        </Title>
      </div>
    </div>
  );
};

export default Section1;
