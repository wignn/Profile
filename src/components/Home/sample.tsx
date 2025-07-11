import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col min-h-screen md:flex-row items-center justify-between bg-[#1A1A2E] text-white py-16 px-8 md:px-16 lg:px-24">

      <div className="flex flex-col items-start space-y-4 md:w-1/2">
        <p className="text-lg">I am wignn</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-400 leading-tight">
          Full Stack <br /> Web Developer
        </h1>
        <p className="text-gray-300 text-lg max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro
          numquam ad, vero consequuntur aperiam cumque voluptatem pariatur
          veniam? Qui facilis est ipsum odio cum!
        </p>

      </div>

      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden border-4 border-purple-500">
          <Image
            src="/11233.png"
            alt="Sajal's Profile Picture"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
}
