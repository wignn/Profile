"use client"
import { BaseInfo } from "@/app/Data/data"
import Image from "next/image"
import { Sparkles, Star, Zap } from "lucide-react"

const Hero = () => {
  return (
    <div className="w-full pt-[8vh] md:pt-[12vh] min-h-screen bg-white overflow-hidden relative" id="Home">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-16 sm:w-32 h-0.5 sm:h-1 bg-black transform rotate-12 opacity-20"></div>
        <div className="absolute top-16 sm:top-32 left-8 sm:left-20 w-12 sm:w-24 h-0.5 sm:h-1 bg-black transform rotate-12 opacity-15"></div>
        <div className="absolute top-24 sm:top-44 left-2 sm:left-5 w-20 sm:w-40 h-0.5 sm:h-1 bg-black transform rotate-12 opacity-10"></div>

        <div className="absolute top-20 sm:top-40 right-8 sm:right-20 w-4 sm:w-8 h-4 sm:h-8 border-2 sm:border-4 border-black transform rotate-45"></div>
        <div className="absolute bottom-20 sm:bottom-40 left-16 sm:left-32 w-3 sm:w-6 h-3 sm:h-6 bg-black transform rotate-45"></div>
        <div className="absolute top-32 sm:top-60 right-20 sm:right-40 w-2 sm:w-4 h-2 sm:h-4 bg-black rounded-full"></div>
      </div>

      <div className="flex justify-center flex-col w-[90%] sm:w-4/5 h-full mx-auto relative z-10 py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
          <div className="relative order-2 lg:order-1">

            <div className="absolute -top-8 sm:-top-16 -left-4 sm:-left-8 bg-black text-white px-2 sm:px-4 py-1 sm:py-2 rounded-xl sm:rounded-2xl rounded-bl-none text-xs sm:text-sm font-bold transform -rotate-3 shadow-lg">
              Hello World!
              <div className="absolute -bottom-1 sm:-bottom-2 left-2 sm:left-4 w-0 h-0 border-l-4 sm:border-l-8 border-r-4 sm:border-r-8 border-t-4 sm:border-t-8 border-l-transparent border-r-transparent border-t-black"></div>
            </div>

            <div className="relative bg-white border-2 sm:border-4 border-black p-4 sm:p-8 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 sm:mb-5 text-black font-black tracking-tight">
                I am{" "}
                <span className="relative inline-block">
                  {BaseInfo.name}
                  <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 sm:h-2 bg-black opacity-20 transform skew-x-12"></div>
                </span>
              </h1>

              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 text-black font-black leading-tight tracking-tighter">
                <span className="relative inline-block">
                  {BaseInfo.position.split(" ").map((word, index) => (
                    <span key={index} className="inline-block mr-2 sm:mr-4 mb-1 sm:mb-2 relative">
                      {word}
                      {index === 0 && (
                        <Zap className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 w-3 sm:w-6 h-3 sm:h-6 text-black" />
                      )}
                    </span>
                  ))}
                </span>
              </h1>

              <div className="relative bg-black text-white p-3 sm:p-4 mb-6 sm:mb-8 transform rotate-1">
                <p className="text-white text-sm sm:text-base md:text-lg font-bold leading-relaxed">
                  {BaseInfo.description}
                </p>
                <Star className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-4 sm:w-6 h-4 sm:h-6 text-black bg-white rounded-full p-0.5 sm:p-1" />
              </div>

              <button className="group relative bg-black text-white font-black text-sm sm:text-lg px-4 sm:px-8 py-2 sm:py-4 transform hover:scale-105 transition-all duration-200 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] sm:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] border-2 sm:border-4 border-black">
                <span className="relative z-10 flex items-center space-x-1 sm:space-x-2">
                  <span>GET STARTED</span>
                  <Sparkles className="w-3 sm:w-5 h-3 sm:h-5" />
                </span>
                <div className="absolute inset-0 bg-white transform scale-0 group-hover:scale-100 transition-transform duration-200 origin-center"></div>
                <span className="absolute inset-0 flex items-center justify-center text-black font-black opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm sm:text-lg">
                  LET'S GO!
                </span>
              </button>
            </div>
          </div>

          <div className="mx-auto order-1 lg:order-2 w-full max-w-sm sm:max-w-md lg:max-w-lg">

            <div className="relative bg-white border-4 sm:border-8 border-black transform rotate-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <div className="relative overflow-hidden">
                <Image
                  src={BaseInfo.profilePic || "/placeholder.svg?height=400&width=400"}
                  alt={BaseInfo.name}
                  width={400}
                  height={400}
                  className="w-full h-auto filter grayscale contrast-125 brightness-110"
                />

                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-10"></div>

                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-4 sm:w-8 h-4 sm:h-8 border-l-2 sm:border-l-4 border-t-2 sm:border-t-4 border-black"></div>
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-4 sm:w-8 h-4 sm:h-8 border-r-2 sm:border-r-4 border-t-2 sm:border-t-4 border-black"></div>
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-4 sm:w-8 h-4 sm:h-8 border-l-2 sm:border-l-4 border-b-2 sm:border-b-4 border-black"></div>
                <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-4 sm:w-8 h-4 sm:h-8 border-r-2 sm:border-r-4 border-b-2 sm:border-b-4 border-black"></div>
              </div>
            </div>

            <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 bg-black text-white px-2 sm:px-3 py-1 font-black text-xs sm:text-sm transform rotate-12">
              HERO
            </div>
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-6 sm:w-12 h-6 sm:h-12 bg-black transform rotate-45"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
