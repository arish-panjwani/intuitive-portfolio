"use client"

import { motion } from "framer-motion"
import { TechSection } from "./tech-section"

interface TechStackSectionProps {
  techStack: {
    sections: Array<{
      type: string
      icon: string
      color: string
      list: Array<{
        name: string
        icon: string
        proficiency: string
      }>
    }>
  }
  isOptimized: boolean
}

export function TechStackSection({ techStack, isOptimized }: TechStackSectionProps) {
  // Calculate summary stats
  const totalTechnologies = techStack.sections.reduce((total, section) => total + section.list.length, 0)
  const expertCount = techStack.sections.reduce(
    (count, section) => count + section.list.filter((tech) => tech.proficiency === "Expert").length,
    0,
  )
  const categoriesCount = techStack.sections.length

  return (
    <section id="tech" className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Tech Stack & Tools
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400">
            Technologies I love working with, organized by expertise
          </p>
          {isOptimized && (
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mt-2">
              Scroll horizontally through each category
            </p>
          )}
        </motion.div>

        {/* Tech Categories */}
        <div className="space-y-8 sm:space-y-12">
          {techStack.sections.map((section, index) => (
            <TechSection key={section.type} section={section} index={index} isOptimized={isOptimized} />
          ))}
        </div>

        {/* Tech Stack Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">
                {totalTechnologies}+
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400">{expertCount}</div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Expert Level</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400">
                {categoriesCount}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Categories</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
