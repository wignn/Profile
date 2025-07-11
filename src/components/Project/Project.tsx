"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star, Zap } from "lucide-react";
import { projectData } from "@/app/Data/data";
import SectionHeading from "../Helper/SectionHeading";

const Project = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden" id="Projects">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-0 w-full h-1 bg-black transform rotate-6 opacity-5"></div>
        <div className="absolute bottom-40 left-0 w-full h-1 bg-black transform -rotate-6 opacity-5"></div>
        <div className="absolute top-32 right-32 w-20 h-20 border-4 border-black transform rotate-45 opacity-10"></div>
        <div className="absolute bottom-32 left-32 w-16 h-16 bg-black transform rotate-45 opacity-10"></div>
        <div className="absolute top-60 left-40 w-8 h-8 bg-black rounded-full opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading>Projects</SectionHeading>

        <div className="flex justify-center mt-8 mb-16">
          <div className="relative bg-black text-white px-8 py-4 font-black text-xl tracking-wider transform rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)]">
            MY CREATIONS
            <Zap className="absolute -top-3 -right-3 w-6 h-6 text-black bg-white rounded-full p-1" />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projectData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    url: string;
    github: string;
    tags: string[];
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -5 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative h-full flex flex-col"
    >
      <div className="relative bg-white border-4 border-black overflow-hidden transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col flex-grow">
        <div className="relative h-48 overflow-hidden border-b-4 border-black">
          <Image
            src={project.image || "/placeholder.svg?height=300&width=500"}
            alt={project.title}
            width={500}
            height={300}
            className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          <div className="absolute top-2 left-2 w-6 h-6 border-l-4 border-t-4 border-white opacity-70"></div>
          <div className="absolute top-2 right-2 w-6 h-6 border-r-4 border-t-4 border-white opacity-70"></div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-black text-black mb-3 tracking-wider uppercase">
            {project.title}
          </h3>
          <p className="text-black text-sm mb-4 font-bold leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-black bg-black text-white border-2 border-black transform hover:scale-110 transition-transform duration-200"
                style={{
                  transform: `rotate(${(tagIndex % 2 === 0 ? 1 : -1) * 2}deg)`,
                }}
              >
                {tag.toUpperCase()}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center mt-auto">
            <Link href={project.url} target="_blank" className="group/link relative">
              <div className="absolute inset-0 bg-black transform scale-0 group-hover/link:scale-100 transition-transform duration-200"></div>
              <div className="relative bg-white border-4 border-black px-4 py-2 font-black text-sm tracking-wider uppercase flex items-center gap-2 group-hover/link:text-white transition-colors duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
                <ExternalLink size={16} />
                <span>LIVE</span>
              </div>
            </Link>

            <Link href={project.github} target="_blank" className="group/link relative">
              <div className="absolute inset-0 bg-black transform scale-0 group-hover/link:scale-100 transition-transform duration-200"></div>
              <div className="relative bg-white border-4 border-black px-4 py-2 font-black text-sm tracking-wider uppercase flex items-center gap-2 group-hover/link:text-white transition-colors duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
                <Github size={16} />
                <span>CODE</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-black opacity-50"></div>
        <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-black opacity-50"></div>
      </div>

      <div className="absolute -top-4 -left-4 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-black border-4 border-white transform group-hover:rotate-180 transition-transform duration-500">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="absolute -top-2 -right-2 bg-white text-black w-8 h-8 border-4 border-black flex items-center justify-center transform group-hover:scale-125 group-hover:rotate-90 transition-all duration-300">
        <Star className="w-4 h-4" />
      </div>

      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 text-xs font-black opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
        CHECK IT OUT!
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-black"></div>
      </div>
    </motion.div>
  );
};

export default Project;
