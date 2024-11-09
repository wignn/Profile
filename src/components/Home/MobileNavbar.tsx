import React from "react";
import { navLinks } from "@/app/constant/constant";
import Link from "next/link";
import {CgClose} from "react-icons/cg";

interface props  {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNavbar: React.FC<props> = ({showNav, closeNav})=> {
    const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      <div className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full  h-screen `}>
        <div className={`${navOpen} transform transition-all duration-500 delay-300 text-white fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715] space-y-6 z-[10000]`}>
          {navLinks.map((link) => (
            <Link href={link.url} key={link.id}>
              <p className="nav_link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]">{link.label}</p>
            </Link>
          ))}
          {/* close btn */}
          <CgClose onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 w-6 h-6 text-white"/>
        </div>
      </div>
    </div>
  );
}

export default MobileNavbar;
