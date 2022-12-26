import React from "react";
import NavBar from "../components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";

const Register = () => {
  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/register",
        formData
      );
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <>
      <div className="h-screen">
        <NavBar />
        <form
          onSubmit={handleSubmit}
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/768473/pexels-photo-768473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")`,
          }}
          className="pt-24 h-screen flex flex-col justify-center items-center"
        >
          <p className="text-[50px] font-lora">Register</p>
          <div className="mt-[20px] flex flex-col">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="p-[10px] rounded-md outline-none"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="mt-[20px] flex flex-col">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-[10px] rounded-md outline-none"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mt-[10px]">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="p-[10px] rounded-md outline-none"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <button
              type="submit"
              className="bg-teal-700 p-1 cursor-pointer mt-2 rounded-md  text-white"
            >
              Register
            </button>
          </div>
          <div className="absolute right-[5vw] top-24">
            <Link to="/login">
              <button className="bg-[lightcoral] p-2 font-lora text-white rounded-md border-0">
                Login
              </button>
            </Link>
          </div>
          {error && (
            <span className="text-[tomato] mt-2 text-sm">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Register;
