import React from "react";
import Logo from "../components/Logo";
import Footer from "../components/FooterContent";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <div className="max-w-4xl mx-auto p-8 ">
      <Logo/>
      <h1 className="text-3xl font-bold text-center font-serif">
        Welcome to <span className="text-green-800">E-Mart</span>
      </h1>
      <p className="text-center mt-4 text-gray-600 text-lg font-semibold tracking-loose">
        Please sign in to your account to continue shopping with Love!
      </p>
      <div className="mt-2 max-w-xl mx-auto bg-white p-4 ">
        <form action="">
          <div className="mb-4">
            <label
              className="block font-semibold text-gray-800"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="text-gray-600 border border-gray-300 w-full p-2 rounded mt-1 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
              id="email"
              type="email"
              placeholder="Enter your email address"
            />

            <label
              className="block font-semibold text-gray-800 mt-4"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="text-gray-600 border border-gray-300 w-full p-2 rounded mt-1 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
            {/*  svg for eye icon*/}

            <div className="flex mt-4 cursor-pointer">
              {/* Left side */}
              <label className="flex items-center text-gray-600">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-gray-600 ">Remember me</span>
              </label>

              {/* Right side */}
              <button to="/forgot-password" className="ml-auto text-sm text-gray-800 hover:underline font-semibold cursor-pointer">
                Forgot Password?
              </button>
            </div>

            <button className="w-full bg-black text-white py-2 px-4 rounded mt-4 hover:bg-gray-800 font-semibold  cursor-pointer">
              Sign In
            </button>

            <h1 className="text-center mt-4 text-gray-600 text-sm">
              Don't have an account?{" "}
              <span className="text-gray-800 font-semibold hover:underline cursor-pointer">
                Sign Up
              </span>
            </h1>

            <Footer />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
