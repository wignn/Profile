import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <div>
        <Image
          src={"/images/logo2.png"}
          alt="logo"
          width={180}
          height={180}
          className="mx-auto"
        />
      </div>
      <div className="flex mt-4 md:text-xl text-sm items-center justify-center space-x-8 text-white font-bold">
      <a href="#home" className="hover:text-opacity-80 text-center">Home</a>
          <a href="#about" className="hover:text-opacity-80 text-center">About</a>
          <a href="#Project" className="hover:text-opacity-80 text-center">Projects</a>
          <a href="#services" className="hover:text-opacity-80 text-center">Services</a>
          <a href="#Contacts" className="hover:text-opacity-80 text-center">Contact</a>
</div>

        <div className="text-center text-white mt-10">
            <p className="text-opacity-60 text-white text-center">© 2021 All rights reserved</p></div>
    </div>
  );
};

export default Footer;
