"use client"
import SectionHeading from "../Helper/SectionHeading"
import { servicesData } from "@/app/Data/data"
import ServiceCard from "./ServiceCard"
import { Sparkles, Zap } from "lucide-react"

const Service = () => {
  return (
    <div className="pt-16 pb-16 bg-black relative overflow-hidden" id="Services">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="dots" patternUnits="userSpaceOnUse" width="10" height="10">
                <circle cx="5" cy="5" r="2" fill="white" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#dots)" />
          </svg>
        </div>

        <div className="absolute top-32 left-0 w-full h-1 bg-white transform -rotate-12 opacity-10"></div>
        <div className="absolute bottom-32 left-0 w-full h-1 bg-white transform rotate-12 opacity-10"></div>

        <div className="absolute top-20 right-20 w-16 h-16 border-4 border-white transform rotate-45 opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-white transform rotate-45 opacity-20"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center">
          <SectionHeading>Services</SectionHeading>

          {/* Anime-style subtitle */}
          <div className="flex justify-center mt-8 mb-12">
            <div className="relative bg-white text-black px-6 py-3 font-black text-lg tracking-wider transform rotate-1 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]">
              WHAT I OFFER
              <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-white bg-black rounded-full p-1" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[80%] max-w-6xl mx-auto mt-20">
          {servicesData.map((data, index) => (
            <div key={data.id} className="relative">
              <ServiceCard service={data} index={index} />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-1 bg-white"></div>
            <Zap className="w-8 h-8 text-white" />
            <div className="w-16 h-1 bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
