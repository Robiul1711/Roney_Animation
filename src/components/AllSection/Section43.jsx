import React from "react";
import { SmallBallIcon } from "../common/Icons";
import Title from "../common/Title";

const Section43 = () => {
  return (
    <div className=" min-h-screen bg-custom flex justify-center items-center section-padding-x text-center">
      <div className=" flex flex-col gap-10 md:gap-20">
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 max-w-[800px] mx-auto">
          {Array.from({ length: 8 }).map((_, index) => (
            <SmallBallIcon className={"size-25 md:size-30 xl:size-auto"}  key={index} />
          ))}
        </div>
        <div className=" flex flex-col justify-center items-center gap-3 md:gap-6">
          <Title level="title48" className={`text-white`}>
            Together
          </Title>
          <Title level="title24" className={`text-white font-medium`}>
            Businesses evolve. Markets shift. We stay by your side adapting,
            growing, and pushing forward with you.
          </Title>
        </div>
      </div>
    </div>
  );
};

export default Section43;
