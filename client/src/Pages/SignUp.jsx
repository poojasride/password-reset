import React from "react";
import logo from "../assets/logo.jpg";
import Footer from "../components/FooterContent";

function SignUp() {
  return (
    <div className="max-w-4xl mx-auto p-8 ">
      <img src={logo} alt="E-Mart Logo" className="mx-auto w-24 h-24" />
      <h1 className="text-3xl font-bold text-center font-serif">
       Create Your <span className="text-green-800">E-Mart</span> Account
      </h1>
      <p className="text-center mt-4 text-gray-600 text-lg font-semibold tracking-loose">
        SignUp to access comprehensive shopping experience with E-Mart!
      </p>
      <div className="mt-2 max-w-xl mx-auto bg-white p-4 ">
        <form action="">
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold text-gray-800">
              Name
            </label>
            <input
              className="text-gray-600 border border-gray-300 w-full p-2 rounded mt-1 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
              id="name"
              type="text"
              placeholder="Enter your name"
            />

            <label
              className="block font-semibold text-gray-800 mt-4"
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

             <label
              className="block font-semibold text-gray-800 mt-4"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="text-gray-600 border border-gray-300 w-full p-2 rounded mt-1 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
            />


            {/*  svg for eye icon*/}

         
            <button className="w-full bg-black text-white py-2 px-4 rounded mt-4 hover:bg-gray-800 font-semibold  cursor-pointer">
              Sign Up
            </button>

            <h1 className="text-center mt-4 text-gray-600 text-sm">
              Already have an account?{" "}
              <span className="text-gray-800 font-semibold hover:underline cursor-pointer">
                Sign In
              </span>
            </h1>

                <Footer />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
