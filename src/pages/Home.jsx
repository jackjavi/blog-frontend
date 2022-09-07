import React from "react";
import NavBar from "../components/Navbar";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Posts from "../components/Posts";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = React.useState([]);

  const { search } = useLocation();

  React.useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "http://localhost:5000/api/v1/posts/" + search
      );
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <div>
        <NavBar />
        <Header />
      </div>
      <div className="flex w-[90vw] m-auto gap-4 mt-6">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
