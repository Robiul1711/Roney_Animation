import React from "react";
import Title from "../common/Title";
import { SmallBallIcon } from "../common/Icons";

const Section41 = ({ activeIndex }) => {
  console.log(activeIndex);
  return (
    <div className=" min-h-screen bg-custom flex justify-center items-center section-padding-x">
      <div className=" flex flex-col gap-20">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <SmallBallIcon className={"size-25 md:size-30 xl:size-auto"} key={index} />
          ))}
        </div>

        <div className=" flex flex-col justify-center items-center text-center gap-6">
          <Title level="title48" className={`text-white`}>
            Build
          </Title>
          <Title level="title24" className={`text-white font-medium `}>
            Together, we turn ideas into tools that save time and make money.
          </Title>
        </div>
      </div>
    </div>
  );
};

export default Section41;
