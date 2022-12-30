import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Post = ({ posts }) => {
  const handleClick = () => {
    localStorage.setItem("post", JSON.stringify(posts));
  };

  return (
    <div>
      {posts.map((post) => {
        return (
          <div
            key={post._id}
            className="mt-4 border  shadow p-4 w-full  rounded"
          >
            <div>
              {post.photo && (
                <img
                  className="rounded-md h-[150px] md:h-[150px] object-cover w-[100%]"
                  src={post.photo}
                  alt="postpoto"
                />
              )}

              <Link to={`/post/${post._id}`}>
                <button onClick={handleClick}>
                  <h4 className="titleEllipsis mt-2 font-josefin text-[24px] font-bold cursor-pointer text-[#bcbe0c]">
                    {post.title}
                  </h4>
                </button>
              </Link>

              <Link to={`/?cat=${post.cat}`}>
                <div className="flex  items-center justify-between w-full">
                  <p className="mt-2 text-[#999] font-lora italic text-[14px] cursor-pointer">
                    {post.cat}
                  </p>

                  <p className="mt-2 text-[#999] font-lora italic text-[13px]">
                    {new Date(post.createdAt).toDateString()}
                  </p>
                </div>
              </Link>

              <p className="descEllipsis mt-2 overflow-hidden font-valera text-[14px] leading-6 text-[#444]">
                {post.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
