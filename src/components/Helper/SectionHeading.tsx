"use client"
import type React from "react"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

interface Props {
  children: React.ReactNode
}

const SectionHeading: React.FC<Props> = ({ children }) => {
  return (
    <div className="text-center relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative inline-block"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-wider uppercase relative z-10">
          {children}
        </h1>

        <div className="absolute -bottom-2 left-0 w-full h-4 bg-black opacity-20 transform skew-x-12"></div>

        <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-black transform rotate-45"></div>
        <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-black transform rotate-45"></div>

        <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-black animate-pulse" />
        <Sparkles
          className="absolute -bottom-4 -left-4 w-6 h-6 text-black animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </motion.div>
    </div>
  )
}

export default SectionHeading
