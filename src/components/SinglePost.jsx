import React from "react";
import { Link, useLocation } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import "../index.css";
import Loading from "./Loading";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = React.useState({});
  const [user, setUser] = React.useState(null);
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [updateMode, setUpdateMode] = React.useState(false);
  const [postId, setPostId] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);

  React.useEffect(() => {
    const postId = JSON.parse(localStorage.getItem("post"))._id;
    setPostId(postId);
  }, [postId]);

  React.useEffect(() => {
    const getPost = async () => {
      try {
        if (postId) {
          const res = await axios.get(
            `https://trending-trends.onrender.com/api/v1/posts/${postId}`
          );
          setPost(res.data);
          setTitle(res.data.title);
          setDesc(res.data.desc);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getPost();
  }, [postId]);

  if (loading) {
    return <Loading />;
  }

  //const PF = "http://localhost:5000/api/v1/images/";

  const handleClick = async () => {
    try {
      if (post._id) {
        await axios.delete(
          `https://trending-trends.onrender.com/api/v1/posts/${path}`,
          {
            data: { username: user.username },
          }
        );
        window.location.replace("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    try {
      if (post._id) {
        await axios.put(
          `https://trending-trends.onrender.com/api/v1/posts/${post._id}`,
          {
            // username: user.username,
            title,
            desc,
          }
        );
      }

      //window.location.reload();
      setUpdateMode(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="scrollbar scrollbar-hide flex-[12] flex justify-center pt-4 h-screen overflow-auto">
      <div className="flex flex-col items-center">
        {post.photo && (
          <img
            className="rounded-md h-[300px] w-full object-cover"
            src={post.photo}
            alt=""
          />
        )}

        {updateMode ? (
          <input
            type="text"
            value={title}
            className="mt-[10px] font-Lora text-[28px] text-center border-0 text-[gray] border-b-[lightgray] outline-none"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <div className="flex w-[100%] mt-2">
            <h4 className=" flex-[9] text-center font-lora text-[20px] font-bold cursor-pointer ">
              {post.title}
            </h4>

            {!loading && post.username === user?.username && (
              <p className="float-right mr-1">
                <span className="mr-2">
                  <EditIcon
                    onClick={() => setUpdateMode(true)}
                    sx={{ color: "teal" }}
                    fontSize="20px"
                    className="cursor-pointer"
                  />
                </span>
                <span>
                  <DeleteIcon
                    onClick={handleClick}
                    sx={{ color: "tomato" }}
                    fontSize="20px"
                    className="cursor-pointer"
                  />
                </span>
              </p>
            )}
          </div>
        )}

        <p className="flex py-4 items-center text-[16px] font-valera justify-between text-[#b39656]">
          <Link to={`/?user=${post.username}`}>
            <span>
              Author: <b>{post.username}</b>
            </span>
          </Link>

          <span className="  ">{new Date(post.createdAt).toDateString()}</span>
        </p>
        {updateMode ? (
          <div className="">
            <textarea
              className="border-0 text-[#666] text-[8px] leading-[25px] w-full"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <button
              onClick={handleUpdate}
              className="w-[100px] border-0 bg-[teal] p-1 text-white rounded-md cursor-pointer mt-[20px] ml-[calc(100%-100px)]"
            >
              Update
            </button>
          </div>
        ) : (
          <p className=" font-lora text-[16px] w-[90%] md:w-[60%] leading-8 text-[#666] first-letter:text-[30px] first-letter:ml-[20px] first-letter:font-semibold">
            {post.desc}
          </p>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
