"use client"
import type React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

interface Props {
  service: {
    id: number
    title: string
    description: string
    icon: string
  }
  index: number
}

const ServiceCard: React.FC<Props> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -10 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative mx-auto"
    >
      <div className="relative bg-white border-4 border-black p-6 text-center transform group-hover:scale-105 group-hover:-rotate-2 transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] w-64 h-56">

        <div className="relative mb-4">
          <div className="absolute inset-0 bg-black transform rotate-6 rounded-full opacity-20 group-hover:rotate-12 transition-transform duration-300"></div>
          <div className="relative bg-white border-4 border-black rounded-full p-3 mx-auto w-16 h-16 flex items-center justify-center group-hover:bg-black transition-colors duration-300">
            <Image
              src={service.icon || "/placeholder.svg"}
              alt={service.title}
              width={32}
              height={32}
              className="object-cover filter grayscale contrast-125 group-hover:invert transition-all duration-300"
            />
          </div>
        </div>

        <h1 className="text-lg font-black text-black tracking-wider uppercase mb-3 group-hover:text-black transition-colors duration-300">
          {service.title}
        </h1>

        <p className="text-sm text-black font-bold leading-tight">{service.description}</p>

        <div className="absolute top-2 left-2 w-6 h-6 border-l-4 border-t-4 border-black opacity-50"></div>
        <div className="absolute top-2 right-2 w-6 h-6 border-r-4 border-t-4 border-black opacity-50"></div>
        <div className="absolute bottom-2 left-2 w-6 h-6 border-l-4 border-b-4 border-black opacity-50"></div>
        <div className="absolute bottom-2 right-2 w-6 h-6 border-r-4 border-b-4 border-black opacity-50"></div>

        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      </div>

      <div className="absolute -top-4 -right-4 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-black border-4 border-white transform group-hover:rotate-180 transition-transform duration-500">
        <Star className="w-5 h-5" />
      </div>

      <div className="absolute -bottom-2 -left-2 bg-white text-black w-8 h-8 border-4 border-black flex items-center justify-center text-sm font-black transform group-hover:scale-125 transition-transform duration-300">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="absolute -top-8 left-4 bg-black text-white px-3 py-1 text-xs font-black transform -rotate-12 opacity-0 group-hover:opacity-100 transition-all duration-300">
        CLICK ME!
        <div className="absolute -bottom-1 left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black"></div>
      </div>
    </motion.div>
  )
}

export default ServiceCard
