import React from "react";
import NavBar from "../components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";
import Footer from "../components/Footer";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/v1/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        console.log(res.data);
        res.data && window.location.replace("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="h-screen">
        <NavBar />
        <div
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/768473/pexels-photo-768473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")`,
          }}
          className="pt-24  h-full flex flex-col justify-center items-center bg-no-repeat bg-cover"
        >
          <p className="text-[50px] font-lora">Login</p>
          <form onSubmit={handleSubmit}>
            <div className="mt-[20px] flex flex-col">
              <label> Username</label>
              <input
                type="text"
                placeholder="username"
                ref={userRef}
                className="p-[10px] rounded-md outline-none"
              />
            </div>
            <div className="flex flex-col mt-[10px]">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                ref={passwordRef}
                className="p-[10px] rounded-md outline-none"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-[lightcoral] p-1 cursor-pointer mt-2 rounded-md  text-white disabled:cursor-not-allowed disabled:bg-[#d37f60] "
              >
                Login
              </button>
            </div>
          </form>

          <div className="absolute right-[5vw] top-24">
            <Link to="/register">
              <button className="bg-teal-700 p-2 font-lora text-white rounded-md border-0">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
