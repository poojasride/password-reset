import React from "react";
import Logo from "../components/Logo";
import Footer from "../components/FooterContent";

function ForgotPassword() {
  return (
    <div className="max-w-4xl mx-auto p-8 min-h-screen">
      <Logo />
      <h1 className="text-3xl font-bold text-center ">Forgot Password </h1>
      <p className="text-center mt-4 text-gray-600">
        No worries! Enter your email address below and we'll
            <br />
             send you  a link to  reset your password.
       
      </p>

      <div className="mt-2 max-w-xl mx-auto bg-white p-4 ">
        <form action="">
          <label className="block font-semibold text-gray-800" htmlFor="email">
            Email
          </label>

          <input
            className="text-gray-600 border border-gray-300 w-full p-2 rounded mt-1 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
            id="email"
            type="email"
            placeholder="Enter your email address"
          />
        </form>

        <button className="w-full bg-black text-white py-2 px-4 rounded mt-4 hover:bg-gray-800 font-semibold  cursor-pointer">
          Submit
        </button>

        <Footer/>
      </div>
    </div>
  );
}

export default ForgotPassword;
