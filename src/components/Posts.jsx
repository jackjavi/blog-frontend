import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
  //const reduxposts = useSelector((state) => state.posts);
  //console.log(reduxposts);
  //if (!reduxposts) {
  //return <div>Loading...</div>;
  //}

  return (
    <div className="">
      <Post posts={posts} />;
    </div>
  );
};

export default Posts;
