"use client"

import { motion } from "framer-motion"
import { TechCarousel } from "./tech-carousel"

interface TechSectionProps {
  section: {
    type: string
    icon: string
    color: string
    list: Array<{
      name: string
      icon: string
      proficiency: string
    }>
  }
  index: number
  isOptimized: boolean
}

export function TechSection({ section, index, isOptimized }: TechSectionProps) {
  // Different durations for variety
  const durations = [20, 23, 21, 18, 25]
  const duration = durations[index % durations.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="space-y-4"
    >
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
        <span className="text-2xl">{section.icon}</span>
        {section.type}
      </h3>
      <div className="relative">
        <TechCarousel technologies={section.list} isOptimized={isOptimized} duration={duration} />
      </div>
    </motion.div>
  )
}
