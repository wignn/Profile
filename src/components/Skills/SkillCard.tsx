"use client"
import type React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface SkillCardProps {
  skill: {
    id: number
    title: string
    image: string
    percent: string
  }
  index: number
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: -5 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative bg-white border-4 border-black p-6 text-center transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="relative mb-4">
          <div className="absolute inset-0 bg-black transform rotate-3 rounded-full opacity-20 group-hover:rotate-6 transition-transform duration-300"></div>
          <div className="relative bg-white border-4 border-black rounded-full p-4 mx-auto w-20 h-20 flex items-center justify-center">
            <Image
              src={skill.image || "/placeholder.svg"}
              alt={skill.title}
              width={40}
              height={40}
              className="object-cover filter grayscale contrast-125"
            />
          </div>
        </div>

        <h1 className="text-lg font-black text-black tracking-wider uppercase mb-2">{skill.title}</h1>

        <div className="relative">
          <div className="w-full h-3 bg-gray-200 border-2 border-black">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: skill.percent }}
              transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
              className="h-full bg-black relative"
            >
              <div className="absolute right-0 top-0 h-full w-2 bg-white border-l-2 border-black"></div>
            </motion.div>
          </div>
          <div className="absolute -top-8 right-0 bg-black text-white px-2 py-1 text-xs font-black transform rotate-12">
            {skill.percent}
          </div>
        </div>

        <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-black opacity-50"></div>
        <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-black opacity-50"></div>
        <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-black opacity-50"></div>
        <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-black opacity-50"></div>
      </div>

      <div className="absolute -top-4 -right-4 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-black border-2 border-white">
        {index + 1}
      </div>
    </motion.div>
  )
}

export default SkillCard
