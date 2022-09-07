import React from "react";
import Hero from "../Assets/hero.jpg";

const Header = () => {
  return (
    <div className="pt-32 flex flex-col items-center justify-center">
      <p className="font-varela text-[#444] absolute top-[24%] text-[20px]">
        Sports News
      </p>
      <p className="font-lora text-[#444] absolute top-[25%] text-[100px]">
        Blog
      </p>
      <img
        className="w-full h-[450px] object-cover mt-24 "
        src={Hero}
        alt="hero"
      />
    </div>
  );
};

export default Header;
