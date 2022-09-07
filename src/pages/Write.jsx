import React from "react";
import AddIcon from "@mui/icons-material/Add";
import NavBar from "../components/Navbar";
import axios from "axios";

const Write = () => {
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [file, setFile] = React.useState(null);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, [user]);

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
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/posts",
        newPost
      );
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };
  return (
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
  );
};

export default Write;
