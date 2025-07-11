"use client"
import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Star, Zap, Heart } from "lucide-react"

const Footer = () => {
  const footerLinks = [
    { href: "#Home", label: "Home" },
    { href: "#About", label: "About" },
    { href: "#Projects", label: "Projects" },
    { href: "#Services", label: "Services" },
    { href: "#Contacts", label: "Contact" },
  ]

  return (
    <div className="pt-16 pb-16 bg-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-0 w-full h-1 bg-white transform rotate-3 opacity-5"></div>
        <div className="absolute bottom-20 left-0 w-full h-1 bg-white transform -rotate-3 opacity-5"></div>

        <div className="absolute top-32 right-32 w-16 h-16 border-4 border-white transform rotate-45 opacity-10"></div>
        <div className="absolute bottom-32 left-32 w-12 h-12 bg-white transform rotate-45 opacity-10"></div>

        <div className="absolute inset-0 opacity-3">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="footer-dots" patternUnits="userSpaceOnUse" width="20" height="20">
                <circle cx="10" cy="10" r="3" fill="white" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#footer-dots)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10">
        {/* Logo section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-white transform rotate-3 rounded-full opacity-20 group-hover:rotate-6 transition-transform duration-300"></div>
            <div className="relative bg-white border-8 border-white rounded-full p-8 transform group-hover:scale-110 transition-all duration-300 shadow-[12px_12px_0px_0px_rgba(255,255,255,0.3)]">
              <Image
                src="/images/logo2.png?height=120&width=120"
                alt="logo"
                width={120}
                height={120}
                className="filter grayscale contrast-125"
              />
            </div>
            <Star className="absolute -top-4 -right-4 w-8 h-8 text-white" />
            <Zap className="absolute -bottom-4 -left-4 w-6 h-6 text-white" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="relative bg-white border-4 border-white p-6 transform hover:scale-105 transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)]">
            <div className="flex flex-wrap justify-center items-center space-x-2 sm:space-x-8 text-black font-black text-sm md:text-lg tracking-wider uppercase">
              {footerLinks.map((link, index) => (
                <React.Fragment key={link.href}>
                  <a href={link.href} className="group relative hover:scale-110 transition-all duration-200 py-2">
                    <span className="relative z-10">{link.label}</span>
                    <div className="absolute inset-0 bg-black transform scale-0 group-hover:scale-100 transition-transform duration-200"></div>
                    <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {link.label}
                    </span>
                  </a>
                  {index < footerLinks.length - 1 && (
                    <div className="w-2 h-2 bg-black transform rotate-45 hidden sm:block"></div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-black opacity-50"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-black opacity-50"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-black opacity-50"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-black opacity-50"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="relative inline-block bg-white text-black px-8 py-4 font-black text-lg tracking-wider transform -rotate-1 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)]">
            <div className="flex items-center justify-center space-x-2">
              <span>© 2024 ALL RIGHTS RESERVED</span>
              <Heart className="w-5 h-5 text-red-500" />
            </div>
            <div className="absolute -bottom-2 left-0 w-full h-2 bg-white opacity-50 transform skew-x-12"></div>
          </div>
        </motion.div>

        {/* Bottom decorative elements */}
        <div className="flex justify-center mt-12 space-x-8">
          <div className="w-4 h-4 bg-white transform rotate-45 opacity-50"></div>
          <div className="w-6 h-6 bg-white transform rotate-45 opacity-70"></div>
          <div className="w-4 h-4 bg-white transform rotate-45 opacity-50"></div>
        </div>
      </div>
    </div>
  )
}

export default Footer
