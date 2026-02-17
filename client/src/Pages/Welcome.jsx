import { Link } from "react-router-dom";
import Logo from "../components/Logo";

function Welcome() {
  return (
    <section className="w-full mt-4">
   

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight">
           Welcome to <span className="text-green-800">E-Mart</span>
          </h1>

          <p className="mt-6 text-[#475569] text-base md:text-lg max-w-xl leading-relaxed">
            Discover premium products, seamless shopping experience, and
            exclusive deals — all in one modern ecommerce platform built for
            performance and simplicity.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              to="/products"
              className="bg-black text-white px-7 py-3 rounded-xl font-medium 
                         hover:bg-[#3730A3] transition
                         shadow-md"
            >
              Explore Products
            </button>

            <button
              to="/cart"
              className="bg-white border border-gray-300 px-7 py-3 rounded-xl font-medium 
                         text-[#0F172A] hover:border-gray-400 hover:text-black transition"
            >
              View Cart
            </button>
          </div>
        </div>

        {/* Right Card */}
            <div
              className="bg-gradient-to-br from-black to-[#1F2937] 
                     rounded-3xl p-10
                     border border-[#374151]
                     shadow-md"
            >
              <ul className="space-y-6 text-white text-base">
                <li className="flex gap-4">
                  <span className="text-white text-xl">✔</span>
                  Premium quality products curated for you
                </li>
                <li className="flex gap-4">
                  <span className="text-white text-xl">✔</span>
                  Secure payments with fast checkout experience
                </li>
                <li className="flex gap-4">
                  <span className="text-white text-xl">✔</span>
                  Clean, modern & fully responsive UI
                </li>
                <li className="flex gap-4">
                  <span className="text-white text-xl">✔</span>
                  Built using React & modern web technologies
                </li>
              </ul>
            </div>

              </div>

              {/* Stats Section */}
      <div className="bg-[#F8FAFC] border-t border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          <div>
            <h3 className="text-3xl font-bold text-[#0F172A] tracking-tight">
              10K+
            </h3>
            <p className="text-sm text-[#475569] mt-2">
              Happy Customers
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#0F172A] tracking-tight">
              500+
            </h3>
            <p className="text-sm text-[#475569] mt-2">
              Premium Products
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#0F172A] tracking-tight">
              24/7
            </h3>
            <p className="text-sm text-[#475569] mt-2">
              Customer Support
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#0F172A] tracking-tight">
              100%
            </h3>
            <p className="text-sm text-[#475569] mt-2">
              Secure Payments
            </p>
          </div>

        </div>
      </div>

    

    </section>
  );
}

export default Welcome;
