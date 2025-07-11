"use client"
import Link from "next/link"
import { FaGithub, FaInstagram, FaMap } from "react-icons/fa"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const ContactInfo = () => {
  const contactItems = [
    {
      icon: FaInstagram,
      title: "Instagram",
      value: "@tigfir",
      link: "https://www.instagram.com/tigfir",
      color: "bg-black",
    },
    {
      icon: FaMap,
      title: "Location",
      value: "Indonesia",
      link: null,
      color: "bg-black",
    },
    {
      icon: FaGithub,
      title: "Github",
      value: "wignn",
      link: "https://github.com/wignn",
      color: "bg-black",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative"
    >
      <div className="relative bg-white border-4 border-black p-8 transform hover:scale-105 transition-all duration-300 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">

        <div className="relative mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-black tracking-wider uppercase">Get In Touch</h2>
          <div className="absolute -bottom-2 left-0 w-full h-3 bg-black opacity-20 transform skew-x-12"></div>
        </div>

        <div className="space-y-6">
          {contactItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              className="group relative"
            >
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-black transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                  <div
                    className={`relative ${item.color} text-white w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border-4 border-black transform group-hover:scale-110 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
                  >
                    <item.icon className="text-white w-6 h-6 md:w-8 md:h-8" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-black text-black tracking-wider uppercase">{item.title}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <p className="text-base md:text-lg font-bold text-black">{item.value}</p>
                    {item.link && (
                      <Link href={item.link} target="_blank" className="group/link relative">
                        <div className="absolute inset-0 bg-black transform scale-0 group-hover/link:scale-100 transition-transform duration-200"></div>
                        <div className="relative bg-white border-2 border-black p-1 group-hover/link:text-white transition-colors duration-200">
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-3 left-20 right-0 h-1 bg-black opacity-20 transform skew-x-12"></div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <div className="bg-black text-white px-6 py-2 font-black text-sm tracking-wider transform -rotate-2">
            REACH OUT ANYTIME!
          </div>
        </div>

        <div className="absolute top-4 left-4 w-6 h-6 border-l-4 border-t-4 border-black opacity-50"></div>
        <div className="absolute top-4 right-4 w-6 h-6 border-r-4 border-t-4 border-black opacity-50"></div>
        <div className="absolute bottom-4 left-4 w-6 h-6 border-l-4 border-b-4 border-black opacity-50"></div>
        <div className="absolute bottom-4 right-4 w-6 h-6 border-r-4 border-b-4 border-black opacity-50"></div>
      </div>

      <div className="absolute -top-4 -left-4 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-black border-4 border-white">
        03
      </div>
      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-black transform rotate-45"></div>
    </motion.div>
  )
}

export default ContactInfo
