import React from "react";
import Hero from "../Assets/hero.jpg";
import { useSpring, animated } from "react-spring";

const Header = () => {
  const styles = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: "#ffaaee" },
      { opacity: 0, color: "rgb(14,26,19)" },
    ],
    from: { opacity: 0, color: "red" },
  });

  return (
    <div className=" pt-24 md:pt-32 flex flex-col items-center justify-center h-full">
      <p className="font-signature text-[#bcbe0c] md:absolute top-[20%] text-[38px] md:text-[45px]">
        Trending Trends
      </p>
      <animated.p
        style={styles}
        className="font-lora tranform hover:scale-125 ease-in-out  transition-all delay-125 text-[#9e1b1b] md:absolute top-[25%] text-[85px] sm:text-[50px] md:text-[150px]"
      >
        TRENDS
      </animated.p>
      <img
        className="w-full h-[450px] object-cover mt-24 hidden md:block"
        src={Hero}
        alt="hero"
      />
    </div>
  );
};

export default Header;
