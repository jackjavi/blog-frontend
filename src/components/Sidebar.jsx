import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import axios from "axios";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [cats, setCats] = React.useState([]);

  React.useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("http://localhost:5000/api/v1/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="flex-[3]">
      <div className="border shadow p-4 mt-4 text-[12px] font-lora font-medium">
        <h3 className="font-semibold text-[12px] leading-5 text-[#222] font-valera ">
          TRENDING NEWS
        </h3>
        <ul className="mt-3">
          <li className="flex hover:text-[lightcoral]">
            <ArrowForwardIosIcon
              className="flex-[1]  mt-1"
              fontSize="15px"
              sx={{ color: "red" }}
            />
            <p className="flex-[11] pl-2 cursor-pointer">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In natus
              sequi nostrum corrupti.
            </p>
          </li>
        </ul>
        <button className="bg-[#0033a0] text-[10px] mt-4 py-2 w-full text-white">
          MORE NEWS
        </button>
      </div>
      <div className="py-4 flex flex-col items-center justify-center ">
        <h4 className="border-t border-b text-center w-[80%] p-1 border-[#a7a4a4] font-valera text-[12px] text-[#222] font-semibold leading-5">
          CATEGORIES
        </h4>
        <ul className="pt-2 grid grid-cols-2 gap-4 w-full text-[12px] font-lora font-medium">
          {cats.map((c) => {
            return (
              <Link to={`/?cat=${c.name}`}>
                <li
                  key={c.name}
                  className="ml-[25%] hover:text-[lightcoral] cursor-pointer"
                >
                  {c.name}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="px-8 py-4 border shadow mt-4">
        <h3 className="font-semibold leading-5 text-[12px] text-[#222] ">
          FOLLOW SPORTING NEWS
        </h3>
        <div className="flex justify-between mt-1">
          <span>
            <FacebookOutlinedIcon />
          </span>
          <span>
            <InstagramIcon />
          </span>
          <span>
            <TwitterIcon />
          </span>
          <span>
            <YouTubeIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
