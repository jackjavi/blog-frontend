import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [user, setUser] = React.useState(null);
  const [nav, setNav] = React.useState(false);

  React.useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const handleLogout = () => {
    localStorage.setItem("user", JSON.stringify(null));
  };

  //const PF = "https://trending-trends.herokuapp.com/images/";

  return (
    <div className="z-10 flex items-center w-full h-20 drop-shadow md:drop-shadow-none  px-4 text-[#444] font-[900] bg-white fixed">
      <div className="flex-[3] flex items-center justify-center gap-3 text-[#444] ">
        <FacebookOutlinedIcon
          sx={{ color: "#1877f2" }}
          fontSize="20px"
          className="cursor-pointer"
        />
        <InstagramIcon
          color="secondary"
          fontSize="20px"
          className="cursor-pointer"
        />
        <TwitterIcon
          sx={{ color: "#1da1f2" }}
          fontSize="20px"
          className="cursor-pointer"
        />
      </div>
      <div className=" flex-[6] hidden md:flex items-center justify-center">
        <ul className="flex items-center gap-4 text-[18px] text-[#9e1b1b] font-light ">
          <Link to="/">
            <li className="cursor-pointer">HOME</li>
          </Link>

          <Link to="/write">
            <li className="cursor-pointer">WRITE</li>
          </Link>
          <Link to="/login">
            <li onClick={handleLogout} className="cursor-pointer">
              {user && "LOGOUT"}
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex-[3] flex justify-center items-center gap-4">
        {user ? (
          <Link to="/settings">
            {user.profilePic ? (
              <img
                className=" w-[40px] h-[40px] cursor-pointer object-contain rounded-full bg-white"
                src={user.profilePic}
                alt=""
              />
            ) : (
              <AccountCircleIcon sx={{ color: "#bcbe0c" }} />
            )}
          </Link>
        ) : (
          <ul className="flex items-center gap-4 cursor-pointer text-[18px] font-light">
            <Link to="/login">
              <li>LOGIN</li>
            </Link>
            <Link to="/register">
              <li>REGISTER</li>
            </Link>
          </ul>
        )}
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          <Link
            onClick={() => {
              setNav(false);
            }}
            to="/"
          >
            <li className="cursor-pointer">HOME</li>
          </Link>

          <Link to="/write">
            <li className="cursor-pointer">WRITE</li>
          </Link>
          <Link to="/settings">
            <li className="cursor-pointer">SETTINGS</li>
          </Link>
          <Link to="/login">
            <li onClick={handleLogout} className="cursor-pointer">
              {user && "LOGOUT"}
            </li>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
