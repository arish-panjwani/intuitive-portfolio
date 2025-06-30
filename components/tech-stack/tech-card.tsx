"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

interface TechCardProps {
  tech: {
    name: string
    icon: string
    proficiency: string
  }
  index: number
  isOptimized: boolean
}

export function TechCard({ tech, index, isOptimized }: TechCardProps) {
  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case "Expert":
        return "bg-green-500"
      case "Advanced":
        return "bg-blue-500"
      case "Intermediate":
        return "bg-yellow-500"
      case "Beginner":
        return "bg-gray-500"
      default:
        return "bg-gray-300"
    }
  }

  const getProficiencyProgress = (proficiency: string) => {
    switch (proficiency) {
      case "Expert":
        return 100
      case "Advanced":
        return 75
      case "Intermediate":
        return 50
      case "Beginner":
        return 25
      default:
        return 0
    }
  }

  return (
    <motion.div
      className="flex-shrink-0 w-32 sm:w-36"
      whileHover={!isOptimized ? { scale: 1.05, y: -5 } : {}}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="p-3 sm:p-4 bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="text-center space-y-2 sm:space-y-3">
          <div className="text-2xl sm:text-3xl">{tech.icon}</div>
          <h4 className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 truncate">{tech.name}</h4>
          <div className="space-y-1">
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5">
              {!isOptimized ? (
                <motion.div
                  className={`h-1.5 rounded-full ${getProficiencyColor(tech.proficiency)}`}
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${getProficiencyProgress(tech.proficiency)}%`,
                  }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              ) : (
                <div
                  className={`h-1.5 rounded-full ${getProficiencyColor(tech.proficiency)}`}
                  style={{
                    width: `${getProficiencyProgress(tech.proficiency)}%`,
                  }}
                />
              )}
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">{tech.proficiency}</span>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
