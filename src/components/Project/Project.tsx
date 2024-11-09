import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import { projectData } from "@/app/Data/data";
import Link from "next/link";
import Image from "next/image";

const Project = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]" id="Projects">
      <SectionHeading>Project</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
        {projectData.map((data) => (
          <div key={data.id} 
          className="bg-blue-950 p-6 rounded-lg hover:scale-105 w-80 h-72  transition-all duration-300"
          >
            <Link
              href={data.url}
              target="_blank"
         
            >
              <Image
                src={data.image}
                alt={data.url}
                width={500}
                height={500}
                className="w-full "
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
