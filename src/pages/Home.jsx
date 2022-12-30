import React from "react";
import NavBar from "../components/Navbar";
import Header from "../components/Header";
import Posts from "../components/Posts";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../action";
import Entertainment from "../components/Entertainment";
import Health from "../components/Health";
import Technology from "../components/Technology";
import Masculinity from "../components/Masculinity";
import Sports from "../components/Sports";

const Home = () => {
  const [posts, setPosts] = React.useState([]);
  const { search } = useLocation();
  const loading = useSelector((state) => state.loading); // get loading state from store
  const myreduxposts = useSelector((state) => state.posts);

  // filter posts by category
  const entertainmentPosts = myreduxposts.filter(
    (post) => post.cat === "entertainment"
  );
  const healthPosts = myreduxposts.filter((post) => post.cat === "health");
  const technologyPosts = myreduxposts.filter(
    (post) => post.cat === "technology"
  );
  const masculinityPosts = myreduxposts.filter(
    (post) => post.cat === "masculinity"
  );
  const sportsPosts = myreduxposts.filter((post) => post.cat === "sports");

  const dispatch = useDispatch();
  //const myposts =

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  console.log(sportsPosts);
  return (
    <div className="w-full bg-gray-200">
      <div className="">
        <NavBar />
        <Header />
      </div>

      <div className="flex w-[90vw] m-auto gap-4 mt-6">
        <Posts posts={myreduxposts} />
      </div>

      <Entertainment posts={entertainmentPosts} />
      <Health posts={healthPosts} />
      <Technology posts={technologyPosts} />
      <Masculinity posts={masculinityPosts} />
      <Sports posts={sportsPosts} />
      <Footer />
    </div>
  );
};

export default Home;
