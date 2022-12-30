import React from "react";
import NavBar from "../components/Navbar";
import SinglePost from "../components/SinglePost";
import Footer from "../components/Footer";

const Single = () => {
  return (
    <>
      <div className="h-full w-full  bg-gray-200">
        <NavBar />
        <div className="pt-24 flex flex-col w-[90vw] m-auto gap-4">
          <SinglePost />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Single;
