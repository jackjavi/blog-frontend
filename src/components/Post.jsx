import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="mt-4 border shadow p-4 w-[385px] rounded">
      <div>
        {post.photo && (
          <img
            className="rounded-md h-[285px] object-cover w-[100%]"
            src={PF + post.photo}
            alt="postpoto"
          />
        )}

        <Link to={`/post/${post._id}`}>
          <h4 className="mt-2 font-josefin text-[24px] font-bold cursor-pointer ">
            {post.title}
          </h4>
        </Link>

        <div
          className="flex items-center justify-between
        "
        >
          {post.categories.map((c) => {
            return (
              <p className="mt-2 text-[#999] font-lora italic text-[14px]">
                {c.name}
              </p>
            );
          })}

          <p className="mt-2 text-[#999] font-lora italic text-[13px]">
            {new Date(post.createdAt).toDateString()}
          </p>
        </div>

        <p className="mt-2 font-valera text-[14px] leading-6 text-[#444]">
          {post.desc}
        </p>
      </div>
    </div>
  );
};

export default Post;
