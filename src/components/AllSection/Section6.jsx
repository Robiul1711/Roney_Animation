import React from "react";
import Title from "../common/Title";
import { LogoIcon } from "../common/Icons";
import { Link } from "react-router-dom";

const Section6 = () => {
  return (
    <div className=" min-h-screen bg-custom section-padding-x flex flex-col items-center justify-between py-16">
      <div className=" flex items-center justify-between w-full">
        <Title level="title32" className="text-white">
          We Deliver Transformation
        </Title>
        <div>
          <LogoIcon />
        </div>
      </div>
      <div className="flex items-center gap-10">
        <Link className="underline text-xl">Terms & Conditions</Link>
        <Link className="underline text-xl">Privacy Policy</Link>
      </div>
    </div>
  );
};

export default Section6;
