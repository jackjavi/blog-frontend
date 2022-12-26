import React from "react";
import axios from "axios";
import NavBar from "../components/Navbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Footer from "../components/Footer";

const Settings = () => {
  const [file, setFile] = React.useState(null);
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);

      try {
        const res = await axios.post(
          "http://localhost:5000/api/v1/upload",
          data
        );
        updatedUser.profilePic = res.data;
        //localStorage.setItem("cloudProfImg", JSON.stringify(res.data));
      } catch (err) {
        console.log(err.data);
      }
    }
    try {
      const res = await axios.put(
        "http://localhost:5000/api/v1/users/" + user._id,
        updatedUser
      );
      localStorage.setItem("user", JSON.stringify(res.data));
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen">
      <div className="h-screen mb-40">
        <NavBar />
        <div className="flex pt-24 gap-4 w-[80vw] m-auto">
          <form onSubmit={handleSubmit} className="flex-[9]">
            <p className="flex items-center justify-between">
              <span className="text-[30px] mb-[20px] text-[lightcoral] cursor-pointer">
                Update Your Account
              </span>
              <span className="text-[red] text-[12px] cursor-pointer">
                Delete Your Account
              </span>
            </p>
            <div className="flex items-center my-[10px]">
              <img
                src={file && URL.createObjectURL(file)}
                alt=""
                className="object-cover rounded-md h-[70px] w-[70px]"
              />
              <div className="w-[25px] h-[25px] text-[lightcoral] ml-[10px]">
                <label htmlFor="profile">
                  <AccountCircleIcon />
                </label>
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  id="profile"
                  className="hidden"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="mt-[20px]">username</label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                className="outline-none mt-[10px]"
              />
              <label className="mt-[20px]">email</label>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                className="outline-none mt-[10px]"
              />
              <label className="mt-[20px]">password</label>
              <input
                type="password "
                onChange={(e) => setPassword(e.target.value)}
                className="outline-none mt-[10px]"
              />
              <button
                type="submit"
                className="w-[150px] self-center rounded-md p-1 mt-8 text-white bg-[teal]"
              >
                update
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Settings;
