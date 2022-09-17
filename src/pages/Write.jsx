import React from "react";
import AddIcon from "@mui/icons-material/Add";
import NavBar from "../components/Navbar";
import axios from "axios";
import Footer from "../components/Footer";

const Write = () => {
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [file, setFile] = React.useState(null);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);

      // newPost.photo = filename;
      try {
        const res = await axios.post(
          "https://trending-trends.herokuapp.com/api/v1/upload",
          data
        );

        localStorage.setItem("cloudImg", JSON.stringify(res.data));
      } catch (err) {
        console.log("error");
      }
    }
    try {
      const res = await axios.post(
        "https://trending-trends.herokuapp.com/api/v1/posts",
        newPost
      );
      console.log(res.data);

      if (res.data) {
        const putPost = async () => {
          const cloud_photo = JSON.parse(localStorage.getItem("cloudImg"));

          try {
            if (res.data._id) {
              const resp = await axios.put(
                `https://trending-trends.herokuapp.com/api/v1/posts/${res.data._id}`,
                {
                  username: user.username,
                  title,
                  desc,
                  photo: cloud_photo,
                }
              );
              if (resp) {
                console.log("well");
              }
            }
          } catch (error) {
            if (error.response) {
              // Request made and server responded
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log("Error", error.message);
            }
          }
        };
        putPost();
        if (res.data) {
          alert("success");
          window.location.replace("/");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="h-screen w-full">
        <NavBar />
        <form onSubmit={handleSubmit} className="pt-24 w-[70vw] m-auto">
          {file && (
            <img
              src={URL.createObjectURL(file)}
              alt=""
              className="h-[250px] object-cover rounded-md w-full"
            />
          )}
          <div className="flex items-center">
            <label htmlFor="write-file">
              <AddIcon
                fontSize="medium"
                sx={{ color: "gray" }}
                className=" border-2 rounded-full cursor-pointer"
              />
            </label>
            <input
              type="file"
              name="photo"
              onChange={(e) => setFile(e.target.files[0])}
              id="write-file"
              className="hidden"
            />
            <input
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              autoFocus={true}
              className="outline-none text-[20px] border-0 p-[20px] w-[70vw]"
            />
          </div>
          <div>
            <textarea
              className="text-[20px] border-0 outline-none w-full h-[30vh] "
              type="text"
              name="desc"
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Write your story..."
            ></textarea>
            <button
              type="submit"
              className="bg-teal-700 cursor-pointer absolute right-[8vw] text-white text-[14px] font-josefin p-[6px] border-0 rounded-md"
            >
              Publish
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Write;
