import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <div className="flex justify-center flex-wrap gap-4">
      {posts.map((p) => {
        return <Post post={p} />;
      })}
    </div>
  );
};

export default Posts;
