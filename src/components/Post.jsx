import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const styles = {
    descEllipsis: {},
  };

  const PF = "https://trending-trends.herokuapp.com/images/";
  return (
    <div className="mt-4 border  shadow p-4 w-[100%] md:w-[385px] rounded">
      <div>
        {post.photo && (
          <img
            className="rounded-md h-[150px] md:h-[285px] object-cover w-[100%]"
            src={PF + post.photo}
            alt="postpoto"
          />
        )}

        <Link to={`/post/${post._id}`}>
          <h4 className="mt-2 font-josefin text-[24px] font-bold cursor-pointer ">
            {post.title}
          </h4>
        </Link>

        <div className="flex items-center justify-between w-full">
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

        <p
          style={styles.descEllipsis}
          className="descEllipsis mt-2 overflow-hidden font-valera text-[14px] leading-6 text-[#444]"
        >
          {post.desc}
        </p>
      </div>
    </div>
  );
};

export default Post;
