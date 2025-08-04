import { LogoIcon } from "@/components/common/Icons";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
const Navbar = () => {
  return (
    <header className=" fixed flex items-center justify-between w-full section-padding-x py-4 z-10">
      <LogoIcon />
      <button className="bg-custom-primary text-white rounded-full py-2 px-4 flex items-center gap-2">
        Get In Touch
        <MdOutlineArrowOutward />
      </button>
    </header>
  );
};

export default Navbar;
