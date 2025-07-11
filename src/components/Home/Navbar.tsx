"use client"
import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { navLinks } from "@/app/constant/constant"
import { HiBars3BottomRight } from "react-icons/hi2"
import { useState, useEffect } from "react"
import { Zap } from "lucide-react"

interface props {
  openNav: () => void
}

const Navbar: React.FC<props> = ({ openNav }) => {
  const [navBg, setNavBg] = useState(false)

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true)
      }
      if (window.scrollY < 90) {
        setNavBg(false)
      }
    }
    window.addEventListener("scroll", handler)

    return () => {
      window.removeEventListener("scroll", handler)
    }
  }, [])

  return (
    <div
      className={`fixed ${navBg ? "bg-white border-b-4 border-black shadow-[0_4px_0px_0px_rgba(0,0,0,1)]" : "bg-white"} h-[9vh] z-50 w-full transition-all duration-200`}
    >
      <div className="flex items-center h-full justify-between w-[92%] sm:w-[88%] xl:w-[80%] mx-auto">
        <div className="relative group">
          <div className="absolute inset-0 bg-black transform rotate-3 rounded-full opacity-20 group-hover:rotate-6 transition-transform duration-200"></div>
          <div className="relative bg-white border-4 border-black rounded-full p-2 transform group-hover:scale-110 transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Image
              src="/images/logo2.png"
              alt="logo"
              width={40}
              height={40}
              className="filter grayscale contrast-125"
            />
          </div>
          <Zap className="absolute -top-2 -right-2 w-4 h-4 text-black" />
        </div>

        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link, index) => (
              <Link href={link.url} key={link.id}>
                <div className="group relative">
                  <div className="absolute inset-0 bg-black transform scale-0 group-hover:scale-100 transition-transform duration-200 origin-center"></div>
                  <p className="relative px-6 py-3 text-black font-black text-sm tracking-wider uppercase border-2 border-transparent group-hover:border-black group-hover:text-white transition-all duration-200 transform group-hover:scale-105">
                    {link.label}
                    {index === 0 && <span className="absolute -top-1 -right-1 w-2 h-2 bg-black rounded-full"></span>}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="lg:hidden relative group">
              <div className="absolute inset-0 bg-black transform rotate-3 group-hover:rotate-6 transition-transform duration-200"></div>
              <button
                title="Open Navigation"
                onClick={openNav}
                className="relative bg-white border-4 border-black p-3 transform group-hover:scale-110 transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <HiBars3BottomRight className="w-6 h-6 text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
