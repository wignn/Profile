"use client"

import type React from "react"
import { navLinks } from "@/app/constant/constant"
import Link from "next/link"
import { CgClose } from "react-icons/cg"
import { Star, Zap } from "lucide-react"

interface props {
  showNav: boolean
  closeNav: () => void
}

const MobileNavbar: React.FC<props> = ({ showNav, closeNav }) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]"

  return (
    <div>
      <div
        className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black bg-opacity-80 w-full h-screen`}
      >
        <div
          className={`${navOpen} transform transition-all duration-500 delay-300 fixed flex flex-col justify-center h-full w-[85%] sm:w-[70%] bg-white border-r-8 border-black z-[10000] shadow-[8px_0px_0px_0px_rgba(0,0,0,1)]`}
        >
          <div className="absolute top-8 left-8 right-16">
            <div className="bg-black text-white px-4 py-2 font-black text-lg tracking-wider transform -rotate-2">
              NAVIGATION
            </div>
            <Star className="absolute -top-2 -right-2 w-6 h-6 text-black" />
          </div>

          {/* Navigation Links */}
          <div className="space-y-4 px-8">
            {navLinks.map((link, index) => (
              <Link href={link.url} key={link.id} onClick={closeNav}>
                <div className="group relative">
                  <div className="absolute inset-0 bg-black transform scale-0 group-hover:scale-100 transition-transform duration-200 origin-left"></div>
                  <div className="relative bg-white border-4 border-black p-4 transform group-hover:translate-x-2 transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)]">
                    <p className="text-black group-hover:text-white font-black text-xl sm:text-2xl tracking-wider uppercase transition-colors duration-200">
                      {link.label}
                    </p>
                    {index === 0 && (
                      <Zap className="absolute -top-2 -right-2 w-5 h-5 text-black group-hover:text-white transition-colors duration-200" />
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="absolute bottom-8 left-8 w-16 h-16 border-4 border-black transform rotate-45 opacity-20"></div>
          <div className="absolute top-32 right-8 w-8 h-8 bg-black transform rotate-45"></div>

          <button title="x" onClick={closeNav} className="absolute top-6 right-6 group">
            <div className="absolute inset-0 bg-black transform rotate-3 group-hover:rotate-6 transition-transform duration-200"></div>
            <div className="relative bg-white border-4 border-black p-2 transform group-hover:scale-110 transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <CgClose className="w-6 h-6 text-black" />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MobileNavbar
