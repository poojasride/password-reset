import React from "react";
import email from "../assets/email.svg";
import Footer from "../components/Footer";

function CheckEmail() {
  return (
    <div className="max-w-2xl mx-auto p-8 min-h-screen">
      <img src={email} alt="" className="mx-auto w-24 h-24" />

      <h1 className="text-3xl font-bold text-center mt-4">Check Your Email</h1>
      <p className="text-center mt-4 text-gray-600">
        We've sent a password reset link to your email address.
      </p>
      <button className="w-full bg-black text-white py-2 px-4 rounded mt-4 hover:bg-gray-800 font-semibold  cursor-pointer">
        Back to Sign In
      </button>

      <h1 className="text-center mt-4 text-gray-600 text-sm">
        Don't receive the email?{" "}
        <span className="text-gray-800 font-semibold hover:underline cursor-pointer">
          Resend
        </span>
      </h1>

      <Footer/>
    </div>
  );
}

export default CheckEmail;
