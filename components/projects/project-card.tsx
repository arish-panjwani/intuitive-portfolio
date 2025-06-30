"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Globe, Brain, Database, Code, Zap, Rocket, Heart, Smartphone } from "lucide-react"
import type { JSX } from "react" // Import JSX to fix the undeclared variable error

interface ProjectCardProps {
  project: {
    title: string
    description: string
    tech: string[]
    icon: string
    color: string
    github: string
    demo: string
    featured: boolean
  }
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const getProjectIcon = (iconName: string): JSX.Element => {
    const iconMap: { [key: string]: JSX.Element } = {
      Globe: <Globe className="h-5 w-5" />,
      Brain: <Brain className="h-5 w-5" />,
      Database: <Database className="h-5 w-5" />,
      Code: <Code className="h-5 w-5" />,
      Zap: <Zap className="h-5 w-5" />,
      Rocket: <Rocket className="h-5 w-5" />,
      Heart: <Heart className="h-5 w-5" />,
      Smartphone: <Smartphone className="h-5 w-5" />,
    }
    return iconMap[iconName] || <Code className="h-5 w-5" />
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group"
    >
      <Card className="h-full hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800 border-0 shadow-lg overflow-hidden">
        <div className={`h-2 bg-gradient-to-r ${project.color}`} />
        <CardHeader className="pb-3 sm:pb-4 p-4 sm:p-6">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <motion.div
              className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${project.color} text-white`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {getProjectIcon(project.icon)}
            </motion.div>
            <div>
              <CardTitle className="text-sm sm:text-lg md:text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </CardTitle>
            </div>
          </div>
          <CardDescription className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0">
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {project.tech.map((tech) => (
              <motion.div key={tech} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Badge
                  variant="secondary"
                  className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors text-xs px-2 py-0.5"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <Button
              variant="outline"
              size="sm"
              className="w-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-800/30 dark:hover:to-purple-800/30 text-xs sm:text-sm py-1.5 sm:py-2"
              asChild
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                View Project
              </a>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
