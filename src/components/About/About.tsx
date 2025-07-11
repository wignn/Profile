"use client"
import SectionHeading from "../Helper/SectionHeading"
import { aboutInfo } from "@/app/Data/data"
import Image from "next/image"
import { motion } from "framer-motion"
import { Star, Zap, Trophy, Target } from "lucide-react"

const About = () => {
  const skills = [
    { title: "Frontend Development", icon: Target, color: "bg-black" },
    { title: "Backend Development", icon: Zap, color: "bg-black" },
    { title: "Full Stack Development", icon: Trophy, color: "bg-black" },
  ]

  return (
    <div className="pt-16 pb-16 bg-white relative overflow-hidden" id="About">
      {/* Anime background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Speed lines */}
        <div className="absolute top-32 left-10 w-40 h-1 bg-black transform rotate-12 opacity-10"></div>
        <div className="absolute bottom-32 right-20 w-32 h-1 bg-black transform -rotate-12 opacity-10"></div>
        <div className="absolute top-60 left-32 w-48 h-1 bg-black transform rotate-6 opacity-10"></div>

        {/* Geometric shapes */}
        <div className="absolute top-40 right-40 w-16 h-16 border-4 border-black transform rotate-45 opacity-20"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-black transform rotate-45 opacity-20"></div>
        <div className="absolute top-80 right-20 w-8 h-8 bg-black rounded-full opacity-20"></div>
      </div>

      <div className="relative z-10">
        <SectionHeading>About Me</SectionHeading>

        {/* Anime-style subtitle */}
        <div className="flex justify-center mt-8 mb-16">
          <div className="relative bg-black text-white px-8 py-4 font-black text-xl tracking-wider transform rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)]">
            MY STORY
            <Star className="absolute -top-3 -right-3 w-6 h-6 text-white bg-black rounded-full p-1 border-2 border-white" />
          </div>
        </div>

        <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main content card */}
            <div className="relative bg-white border-4 border-black p-8 transform hover:scale-105 transition-all duration-300 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-wider uppercase mb-6">
                {aboutInfo.title}
              </h1>

              <div className="relative bg-black text-white p-4 mb-8 transform -rotate-1">
                <p className="text-white font-bold leading-relaxed">{aboutInfo.description}</p>
              </div>

              {/* Skills list */}
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="group flex items-center space-x-4"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-black transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                      <div
                        className={`relative ${skill.color} text-white w-10 h-10 flex items-center justify-center border-4 border-black transform group-hover:scale-110 transition-all duration-300`}
                      >
                        <skill.icon className="w-5 h-5" />
                      </div>
                    </div>
                    <p className="text-lg md:text-xl font-black text-black tracking-wider uppercase">{skill.title}</p>
                  </motion.div>
                ))}
              </div>

              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-6 h-6 border-l-4 border-t-4 border-black opacity-50"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-r-4 border-t-4 border-black opacity-50"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-l-4 border-b-4 border-black opacity-50"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r-4 border-b-4 border-black opacity-50"></div>
            </div>

            {/* Floating speech bubble */}
            <div className="absolute -top-8 -right-8 bg-black text-white px-4 py-2 font-black text-sm transform rotate-12">
              ABOUT
              <div className="absolute -bottom-2 left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black"></div>
            </div>
          </motion.div>

          {/* Right side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-8 lg:mx-auto"
          >
            {/* Experience stat */}
            <div className="group relative">
              <div className="relative bg-white border-4 border-black p-6 text-center transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-black transform rotate-6 rounded-full opacity-20 group-hover:rotate-12 transition-transform duration-300"></div>
                  <div className="relative bg-white border-4 border-black rounded-full p-4 mx-auto w-20 h-20 flex items-center justify-center">
                    <Image
                      src="/images/experience.png"
                      alt="experience"
                      width={40}
                      height={40}
                      className="filter grayscale contrast-125"
                    />
                  </div>
                </div>
                <p className="text-3xl font-black text-black mb-2">{aboutInfo.experience}</p>
                <p className="text-sm font-bold text-black tracking-wider uppercase">Years Experience</p>

                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-black opacity-50"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-black opacity-50"></div>
              </div>

              {/* Floating number */}
              <div className="absolute -top-4 -right-4 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-black border-2 border-white">
                01
              </div>
            </div>

            <div className="group relative">
              <div className="relative bg-white border-4 border-black p-6 text-center transform group-hover:scale-110 group-hover:-rotate-2 transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-black transform -rotate-6 rounded-full opacity-20 group-hover:-rotate-12 transition-transform duration-300"></div>
                  <div className="relative bg-white border-4 border-black rounded-full p-4 mx-auto w-20 h-20 flex items-center justify-center">
                    <Image
                      src="/images/completed.png"
                      alt="projects"
                      width={40}
                      height={40}
                      className="filter grayscale contrast-125"
                    />
                  </div>
                </div>
                <p className="text-3xl font-black text-black mb-2">{aboutInfo.project}</p>
                <p className="text-sm font-bold text-black tracking-wider uppercase">Completed Projects</p>

                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-black opacity-50"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-black opacity-50"></div>
              </div>

              <div className="absolute -top-4 -left-4 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-black border-2 border-white">
                02
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center mt-16">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-1 bg-black"></div>
            <Zap className="w-8 h-8 text-black" />
            <div className="w-16 h-1 bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
