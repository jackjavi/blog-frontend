import React from "react";
import NavBar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Spinner } from "loading-animations-react";

const LoadingIndicator = () => {
  return (
    <div className="w-full ">
      <div className="">
        <NavBar />
        <Header />
      </div>

      <div className="bg-gray-200">
        <Spinner
          color1="green"
          color2="#ffaaee"
          textColor="rgba(0,111,221, 0.5)"
        />
      </div>

      <Footer />
    </div>
  );
};

export default LoadingIndicator;
