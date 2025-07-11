"use client"
import SectionHeading from "../Helper/SectionHeading"
import { skillsData } from "@/app/Data/data"
import SkillCard from "./SkillCard"
import { Zap, Star } from "lucide-react"

const Skills = () => {
  return (
    <div className="pt-16 pb-16 bg-white relative overflow-hidden" id="Skills">

      <div className="absolute inset-0 overflow-hidden">
        {/* Speed lines */}
        <div className="absolute top-20 left-10 w-40 h-1 bg-black transform rotate-12 opacity-10"></div>
        <div className="absolute top-40 right-20 w-32 h-1 bg-black transform -rotate-12 opacity-10"></div>
        <div className="absolute bottom-32 left-32 w-48 h-1 bg-black transform rotate-6 opacity-10"></div>

        <div className="absolute top-32 right-40 w-12 h-12 border-4 border-black transform rotate-45 opacity-20"></div>
        <div className="absolute bottom-40 right-20 w-8 h-8 bg-black transform rotate-45 opacity-20"></div>
        <div className="absolute top-60 left-20 w-6 h-6 bg-black rounded-full opacity-20"></div>
      </div>

      <div className="relative z-10">
        <SectionHeading>Skills</SectionHeading>

        <div className="flex justify-center mt-8 mb-12">
          <div className="relative bg-black text-white px-6 py-3 font-black text-lg tracking-wider transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
            MY ARSENAL
            <Star className="absolute -top-2 -right-2 w-5 h-5 text-black bg-white rounded-full p-1" />
          </div>
        </div>

        <div className="mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 items-center">
          {skillsData.map((data, index) => (
            <div key={data.id} className="relative">
              <SkillCard skill={data} index={index} />
            </div>
          ))}
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

export default Skills
