"use client"

import { motion } from "framer-motion"
import { TechCard } from "./tech-card"

interface TechCarouselProps {
  technologies: Array<{
    name: string
    icon: string
    proficiency: string
  }>
  isOptimized: boolean
  duration: number
}

export function TechCarousel({ technologies, isOptimized, duration }: TechCarouselProps) {
  // Create infinite array for seamless looping
  const createInfiniteArray = (items: any[]) => {
    const repeats = Math.max(3, Math.ceil(20 / items.length)) // Ensure enough items for smooth loop
    return Array(repeats).fill(items).flat()
  }

  const infiniteTechs = createInfiniteArray(technologies)

  if (isOptimized) {
    return (
      <div
        className="overflow-x-auto pb-2"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitScrollbar: { display: "none" },
        }}
      >
        <div className="flex gap-4 sm:gap-6 min-w-max">
          {technologies.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} isOptimized={isOptimized} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-4 sm:gap-6"
        animate={{
          x: [0, -1600],
        }}
        transition={{
          duration,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        {infiniteTechs.map((tech, index) => (
          <TechCard key={`${tech.name}-${index}`} tech={tech} index={index} isOptimized={isOptimized} />
        ))}
      </motion.div>
    </div>
  )
}
