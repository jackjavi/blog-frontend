import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <div className="flex-[9] flex flex-wrap gap-4">
      {posts.map((p) => {
        return <Post post={p} />;
      })}
    </div>
  );
};

export default Posts;
