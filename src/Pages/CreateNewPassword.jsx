import React from "react";
import Logo from "../Components/Logo";
import Footer from "../components/Footer";

function CreateNewPassword() {
  return (
    <div className="max-w-4xl mx-auto p-8 min-h-screen">
      <Logo />
      <h1 className="text-3xl font-bold text-center ">Create New Password </h1>
      <p className="text-center mt-4 text-gray-600">
        Enter your email address below to complete the reset
        <br /> process. Ensure your new password is strong.
      </p>

      <div className="mt-2 max-w-xl mx-auto bg-white p-4 ">
        <form action="">
          <label
            className="block font-semibold text-gray-800 mt-4"
            htmlFor="password"
          >
            New Password
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
            Confirm New Password
          </label>

          <input
            className="text-gray-600 border border-gray-300 w-full p-2 rounded mt-1 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
          />
          
          <button
            className="w-full bg-black text-white py-2 px-4 rounded mt-4 hover:bg-gray-800 font-semibold  cursor-pointer"
            type="button"
          >
            Sign Up
          </button>
        </form>

        <Footer/>
      </div>
    </div>
  );
}

export default CreateNewPassword;
