import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "../index.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [cats, setCats] = React.useState([]);
  const [posts, setPosts] = React.useState(null);
  //const [singlePost, setSinglePost] = React.useState(null);

  React.useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(
        "https://trending-trends.onrender.com/api/v1/categories"
      );
      setCats(res.data);
    };
    getPosts();
  }, []);

  React.useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(
        "https://trending-trends.onrender.com/api/v1/posts"
      );
      setPosts(res.data);
    };
    getPosts();
  }, []);

  const handleLink = (id) => {
    const getPost = async () => {
      const res = await axios.get(
        `https://trending-trends.onrender.com/api/v1/posts/${id}`
      );
      localStorage.setItem("post", JSON.stringify(res.data));
      console.log(res.data);
    };

    getPost();
    setTimeout(() => {
      window.location.replace(`/post/${id}`);
    }, 1000);
  };

  let post;

  if (posts) {
    post = posts.map((post) => {
      //setSinglePost(post);
      return (
        <li
          key={post._id}
          className="flex hover:text-[lightcoral] pl-2 cursor-pointer"
        >
          <ArrowForwardIosIcon
            className="flex-[1]  mt-1"
            fontSize="15px"
            sx={{ color: "red" }}
          />
          <p
            onClick={() => {
              handleLink(post._id);
            }}
            className="flex-[11] pl-2 cursor-pointer linksEllipsis"
          >
            {post.title}
          </p>
        </li>
      );
    });
  }

  return (
    <div className="flex bg-gray-200 w-full flex-col justify-around md:flex-row md:justify-around md:items-center ">
      <div className=" border max-h-[65vh] shadow p-4 mt-4 text-[12px] font-lora font-medium">
        <h3 className="font-semibold text-[12px] mx-auto leading-5 text-[#222] font-valera border-t border-b text-center border-[#a7a4a4] p-1 w-[80%] ">
          TRENDING NEWS
        </h3>
        <ul className="mt-3">{post}</ul>
        {/*<button className="bg-[#0033a0] text-[10px] mt-4 py-2 w-full text-white">
          MORE NEWS
  </button>*/}
      </div>
      <div className="py-4 flex flex-col items-center justify-center ">
        <h4 className="border-t border-b text-center w-[80%] p-1 border-[#a7a4a4] font-valera text-[12px] text-[#222] font-semibold leading-5">
          CATEGORIES
        </h4>
        <ul className="pt-2 grid grid-cols-2 gap-4 w-full text-[12px] font-lora font-medium">
          {cats.map((c) => {
            return (
              <Link key={c.name} to={`/?cat=${c.name}`}>
                <li
                  key={c.name}
                  className="ml-[25%] hover:text-[lightcoral] cursor-pointer"
                >
                  {c.name}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="px-8 py-4 border shadow mt-4">
        <h3 className="font-semibold leading-5 text-[12px] text-[#222] ">
          FOLLOW CURRENT NEWS
        </h3>
        <div className="flex justify-between mt-1">
          <span>
            <FacebookOutlinedIcon />
          </span>
          <span>
            <InstagramIcon />
          </span>
          <span>
            <TwitterIcon />
          </span>
          <span>
            <YouTubeIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
