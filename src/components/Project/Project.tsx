"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { cn } from "@/lib/utils"
import { projectData } from "@/app/Data/data"
import SectionHeading from "../Helper/SectionHeading"

const Project = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#050709] to-[#0a0e14]" id="Projects">
      <div className="container mx-auto px-4">
        <SectionHeading>Projects</SectionHeading>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    image: string
    url: string
    github: string
    tags: string[]
  }
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col overflow-hidden rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={500}
          height={300}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
      </div>

      <div className="flex-1 p-6 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-400 text-sm mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 text-xs rounded-full bg-slate-800 text-slate-300">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <Link
            href={project.url}
            target="_blank"
            className={cn(
              "inline-flex items-center gap-1 text-sm font-medium",
              "text-slate-300 hover:text-primary transition-colors",
            )}
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </Link>

          <Link
            href={project.github}
            target="_blank"
            className={cn(
              "inline-flex items-center gap-1 text-sm font-medium",
              "text-slate-300 hover:text-primary transition-colors",
            )}
          >
            <Github size={16} />
            <span>Source</span>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Project

