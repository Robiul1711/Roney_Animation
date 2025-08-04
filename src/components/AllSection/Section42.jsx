import React from "react";
import { SmallBallIcon } from "../common/Icons";
import Title from "../common/Title";

const Section42 = () => {
  return  <div className=" min-h-screen bg-custom flex justify-center items-center section-padding-x text-center">
      <div className=" flex flex-col gap-20">
        <div className="flex flex-wrap items-center justify-center max-w-[800px] mx-auto  gap-6 ">
          {Array.from({ length: 6 }).map((_, index) => (
            <SmallBallIcon className={"size-25 md:size-30 xl:size-auto"}  key={index} />
          ))}
        </div>
        <div className=" flex flex-col justify-center items-center gap-6">
          <Title level="title48" className={`text-white`}>
            Deliver
          </Title>
          <Title level="title24" className={`text-white font-medium`}>
            We make sure it works and that you know how to use it. 
          </Title>
        </div>
      </div>
    </div>
};

export default Section42;
