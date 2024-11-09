import React from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/app/constant/constant";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useState, useEffect } from "react";

interface props {
  openNav: () => void;
};

const Navbar: React.FC<props> = ({ openNav }) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const hendler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }

      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", hendler);

    return () => {
      window.removeEventListener("scroll", hendler);
    };
  }, []);
  return (
    <div className={`fixed ${navBg ? 'bg-[#240b39]' : 'fixed'} h-[9vh]  z-10 bg-[#0f0715]  bg-opacity-90 w-full transition-all duration-200`}>
      <div className="flex items-center h-full justify-between w-[92%] sm:w-[88%] xl:w-[80%] mx-auto">
        <Image
          src="/images/logo2.png"
          alt="logo"
          width={50}
          height={50}
          className="transition-transform duration-300 transform hover:scale-105"
        />
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8 ">
            {navLinks.map((link) => (
              <Link href={link.url} key={link.id}>
                <p className="nav_link">{link.label}</p>
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            {/* <button className="md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
          contact 
            </button> */}
            <HiBars3BottomRight
              onClick={openNav}
              className="w-8 cursor-pointer text-white lg:hidden "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
