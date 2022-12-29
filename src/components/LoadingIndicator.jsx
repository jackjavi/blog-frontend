import React from "react";
import NavBar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LoadingIndicator = () => {
  return (
    <div className="w-full ">
      <div className="">
        <NavBar />
        <Header />
      </div>

      <div className="bg-gray-200">
        <p>Loading...</p>
      </div>

      <Footer />
    </div>
  );
};

export default LoadingIndicator;
