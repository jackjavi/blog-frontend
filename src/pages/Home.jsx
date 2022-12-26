import React from "react";
import NavBar from "../components/Navbar";
import Header from "../components/Header";
import Posts from "../components/Posts";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  const [posts, setPosts] = React.useState([]);

  const { search } = useLocation();

  React.useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "https://trending-trends.onrender.com/api/v1/posts/" + search
      );
      setPosts(res.data.reverse());
    };
    fetchPosts();
  }, [search]);
  return (
    <div className="w-full ">
      <div className="">
        <NavBar />
        <Header />
      </div>

      <div className="flex w-[90vw] m-auto gap-4 mt-6">
        <Posts posts={posts} />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
