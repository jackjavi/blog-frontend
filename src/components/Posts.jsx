import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
  //const reduxposts = useSelector((state) => state.posts);
  //console.log(reduxposts);
  //if (!reduxposts) {
  //return <div>Loading...</div>;
  //}

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posts.map((p) => {
        return <Post key={p._id} post={p} />;
      })}
    </div>
  );
};

export default Posts;
