import React from "react";
import NavBar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SinglePost from "../components/SinglePost";

const Single = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-24 flex w-[90vw] m-auto gap-4">
        <SinglePost />
        <Sidebar />
      </div>
    </div>
  );
};

export default Single;
