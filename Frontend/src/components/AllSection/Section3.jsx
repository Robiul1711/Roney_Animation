import React from "react";
import Title from "../common/Title";
import { FullBigBallIcon, SmallBallIcon } from "../common/Icons";

const Section3 = () => {
  return (
    // section 1
    <div className=" h-screen overflow-hidden relative section-padding-x text-center flex-col  flex  ">
      <div className="mt-40">
        <Title level="title56" className="text-white">
          You don’t need to figure it out alone. We guide, build, and deliver{" "}
          <span className="text-custom-primary">together.</span>
        </Title>
      </div>
      {/* <div className="-bottom-40 left-1/2 transform -translate-x-1/2 absolute">
        <div className="relative  flex items-center justify-center">
          
          <FullBigBallIcon className={"size-10"}/>

        
          <div className="absolute inset-0 flex items-center justify-center">
            <SmallBallIcon />
          </div>
        </div>
      </div> */}

      {/* section 2 */}
    </div>
  );
};

export default Section3;
