"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "./project-card"

interface ProjectsSectionProps {
  projects: Array<{
    title: string
    description: string
    tech: string[]
    icon: string
    color: string
    github: string
    demo: string
    featured: boolean
  }>
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400">
            A showcase of my journey from full-stack development to AI & ML
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
