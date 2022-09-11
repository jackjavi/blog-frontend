import React from "react";
import NavBar from "../components/Navbar";
import SinglePost from "../components/SinglePost";
import Footer from "../components/Footer";

const Single = () => {
  return (
    <>
      <div className="h-screen w-full">
        <NavBar />
        <div className="pt-24 flex w-[90vw] m-auto gap-4">
          <SinglePost />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Single;
