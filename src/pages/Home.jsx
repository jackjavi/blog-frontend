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

const Home = () => {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const { search } = useLocation();

  const dispatch = useDispatch();
  //const myposts =
  useSelector((state) => state.posts);

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(
          "https://trending-trends.onrender.com/api/v1/posts/" + search
        );
        setPosts(res.data.reverse());
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [search]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full bg-gray-200">
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
