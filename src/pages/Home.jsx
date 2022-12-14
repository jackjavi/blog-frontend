import React from "react";
import NavBar from "../components/Navbar";
import Header from "../components/Header";
import Posts from "../components/Posts";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../action";
import Entertainment from "../components/Entertainment";
import Health from "../components/Health";
import Technology from "../components/Technology";
import Masculinity from "../components/Masculinity";
import Sports from "../components/Sports";
import Politics from "../components/Politics";

const Home = () => {
  const loading = useSelector((state) => state.loading); // get loading state from store
  const myreduxposts = useSelector((state) => state.posts);

  // filter posts by category
  const entertainmentPosts = myreduxposts.filter(
    (post) => post.categories === "entertainment"
  );
  const healthPosts = myreduxposts.filter(
    (post) => post.categories === "health"
  );
  const technologyPosts = myreduxposts.filter(
    (post) => post.categories === "technology"
  );
  const masculinityPosts = myreduxposts.filter(
    (post) => post.categories === "masculinity"
  );
  const sportsPosts = myreduxposts.filter(
    (post) => post.categories === "sports"
  );
  const politicsPosts = myreduxposts.filter(
    (post) => post.categories === "politics"
  );

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

      <div className="flex flex-col w-[90vw] m-auto gap-4 pt-8 pb-8">
        <Posts posts={myreduxposts} />
        <Sports posts={sportsPosts} />
        <Entertainment posts={entertainmentPosts} />
        <Health posts={healthPosts} />
        <Technology posts={technologyPosts} />
        <Masculinity posts={masculinityPosts} />
        <Politics posts={politicsPosts} />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
