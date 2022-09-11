import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const handleLogout = () => {
    localStorage.setItem("user", JSON.stringify(null));
  };

  //const PF = "https://trending-trends.herokuapp.com/images/";

  return (
    <div className="z-10 flex items-center w-full h-20  px-4 text-[#444] font-[900] bg-white fixed">
      <div className="flex-[3] flex items-center justify-center gap-3 text-[#444] ">
        <FacebookOutlinedIcon fontSize="20px" className="cursor-pointer" />
        <InstagramIcon fontSize="20px" className="cursor-pointer" />
        <TwitterIcon fontSize="20px" className="cursor-pointer" />
      </div>
      <div className="hidden flex-[6] md:flex items-center justify-center">
        <ul className="flex items-center gap-4 text-[18px] font-light ">
          <Link to="/">
            <li className="cursor-pointer">HOME</li>
          </Link>
          <Link to="/about">
            <li className="cursor-pointer">ABOUT</li>
          </Link>
          <Link to="/contact">
            <li className="cursor-pointer">CONTACT</li>
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
              <AccountCircleIcon />
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

        <SearchOutlinedIcon className="text-4 text-[#666] cursor-pointer" />
      </div>
    </div>
  );
};

export default NavBar;
