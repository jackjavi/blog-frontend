import React from "react";
import { Link } from "react-router-dom";

const Technology = ({ posts }) => {
  const handleClick = () => {
    localStorage.setItem("post", JSON.stringify(posts));
  };

  return (
    <div className="my-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Entertainment</h2>
      {posts.map((post) => {
        return (
          <div
            key={post._id}
            className="bg-white shadow rounded-lg overflow-hidden"
          >
            <div className="w-full h-64 relative overflow-hidden">
              {post.photo && (
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src={post.photo}
                  alt="postpoto"
                />
              )}
            </div>
            <Link to={`/post/${post._id}`}>
              <button
                onClick={handleClick}
                className="relative block w-full px-6 py-4 text-left font-semibold text-xl text-gray-800 leading-tight focus:outline-none focus:shadow-outline-purple"
              >
                {post.title}
              </button>
            </Link>
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                <Link to={`/?cat=${post.cat}`}>
                  <div className="text-sm font-semibold text-purple-600 uppercase tracking-wide">
                    {post.cat}
                  </div>
                </Link>
                <div className="text-sm text-gray-600">
                  {new Date(post.createdAt).toDateString()}
                </div>
              </div>
              <div className="mt-2 text-gray-800 leading-relaxed">
                {post.desc}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Technology;
