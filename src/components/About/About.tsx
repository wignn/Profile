import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import { aboutInfo } from "@/app/Data/data";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]" id="about">
      <SectionHeading>About Me</SectionHeading>
      <div
        className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 
        items-center mt-20">
        <div>
          <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-base text-gray-500">
            {aboutInfo.description}
          </p>
          <div className="mt-8">
            <div className=" flex items-center space-x-2 mb-6">
                <div className="w-7 h-7 bg-blue-800 flex flex-col items-center justify-center">
                    <FaCheck className="text-white"/>
                </div>
                <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">Frontend Develoment</p>
            </div>
            <div className=" flex items-center space-x-2 mb-6">
                <div className="w-7 h-7 bg-purple-500 flex flex-col items-center justify-center">
                    <FaCheck className="text-white"/>
                </div>
                <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">Backend Develoment</p>
            </div>
            <div className=" flex items-center space-x-2 mb-6">
                <div className="w-7 h-7 bg-green-500 flex flex-col items-center justify-center">
                    <FaCheck className="text-white"/>
                </div>
                <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">Full Stack Develoment</p>
            </div>
          </div>

        </div>
        <div className="grid grid-cols-2 gap-16 items-center lg:mx-auto">
            <div>
                <Image src='/images/experience.png'
                alt="experience"
                width={80}
                height={80}
                className="mx-auto"
                />
                 <p className="mt-3 font-bold text-xl text-white text-center">{aboutInfo.experience}</p>
                 <p className="text-base sm:text-lg text-gray-500 text-center">Years of Experience</p>
            </div>
            <div>
                <Image src='/images/completed.png'
                alt="experience"
                width={80}
                height={80}
                className="mx-auto"
                />
                 <p className="mt-3 font-bold text-xl text-white text-center">{aboutInfo.project}</p>
                 <p className="text-base sm:text-lg text-gray-500 text-center">Completed Project</p>
            </div>
          </div>
      </div>
      
    </div>
  );
};

export default About;
