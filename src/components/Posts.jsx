import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <div className="flex justify-around pb-20 flex-wrap gap-4 flex-1">
      {posts.map((p) => {
        return <Post post={p} />;
      })}
    </div>
  );
};

export default Posts;
