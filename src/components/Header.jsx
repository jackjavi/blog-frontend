import React from "react";
import Hero from "../Assets/hero.jpg";

const Header = () => {
  return (
    <div className=" pt-24 md:pt-32 flex flex-col items-center justify-center h-full">
      <p className="font-signature text-[#bcbe0c] md:absolute top-[24%] text-[12px] md:text-[20px]">
        Trending Trends
      </p>
      <p className="font-lora text-[#9e1b1b] md:absolute top-[25%] text-[45px] md:text-[100px]">
        TRENDS
      </p>
      <img
        className="w-full h-[450px] object-cover mt-24 hidden md:block"
        src={Hero}
        alt="hero"
      />
    </div>
  );
};

export default Header;
