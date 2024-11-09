import React from "react";
import { FaInstagram, FaMap } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div>
      <div className="flex items-center space-x-8 mt-5">
        <div
          className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900
        flex items-center justify-center flex-col
        "
        >
          <FaInstagram className="text-white w-4 h-4 md:w-7 md:h-7 " />
        </div>
        <div>
          <h1 className="text-lg md:text-xl text-gray-300">Instagram</h1>
          <p className="text-sm md:text-base text-gray-500">@tigfir</p>
        </div>
      </div>
      <div className="flex items-center space-x-8 mt-5">
        <div
          className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900
        flex items-center justify-center flex-col
        "
        >
          <FaMap className="text-white w-4 h-4 md:w-7 md:h-7 " />
        </div>
        <div>
          <h1 className="text-lg md:text-xl text-gray-300">Location</h1>
          <p className="text-sm md:text-base text-gray-500">Indonesia</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
