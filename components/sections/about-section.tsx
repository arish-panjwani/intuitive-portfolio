"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Coffee } from "lucide-react"
import portfolioData from "@/data/portfolio.json"
import { SECTION_ANIMATIONS } from "@/constants/animations"

interface AboutSectionProps {
  darkMode: boolean
  optimized: boolean
}

export function AboutSection({ darkMode, optimized }: AboutSectionProps) {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <motion.div {...SECTION_ANIMATIONS} className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-4 lg:gap-8 items-center">
            {/* Large Coding Illustration - Takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2 flex justify-center lg:justify-start"
            >
              <motion.div className="relative" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                {/* Light mode illustration */}
                <motion.img
                  src="/images/illustration-casual.png"
                  alt="Coding illustration"
                  className={`w-96 h-96 sm:w-[28rem] sm:h-[28rem] object-contain transition-opacity duration-300 ${
                    darkMode ? "opacity-0 absolute" : "opacity-100"
                  }`}
                  animate={!optimized ? { rotate: [0,4, -4, 0] } : {}}
                  transition={!optimized ? { duration: 6, repeat: Number.POSITIVE_INFINITY } : {}}
                />
                {/* Dark mode illustration */}
                <motion.img
                  src="/images/illustration-dark-mode.png"
                  alt="Professional coding illustration"
                  className={`w-96 h-96 sm:w-[28rem] sm:h-[28rem] object-contain transition-opacity duration-300 ${
                    darkMode ? "opacity-100" : "opacity-0 absolute"
                  }`}
                  animate={!optimized ? { rotate: [0, 4, -4, 0] } : {}}
                  transition={!optimized ? { duration: 6, repeat: Number.POSITIVE_INFINITY } : {}}
                />
              </motion.div>
            </motion.div>

            {/* About Content - Takes 3 columns */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <Card className="p-4 sm:p-6 md:p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 border-0 shadow-xl">
                <CardContent className="space-y-4 sm:space-y-6">
                  <motion.div
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Coffee className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200">
                        {portfolioData.about.greeting}
                      </h3>
                    </div>
                  </motion.div>

                  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    {portfolioData.about.description}
                  </p>

                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-sm sm:text-base md:text-lg">{portfolioData.personal.location}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 sm:pt-4">
                    {portfolioData.about.badges.map((badge) => (
                      <Badge
                        key={badge.text}
                        className={`px-2 sm:px-3 py-1 text-xs sm:text-sm ${
                          badge.color === "blue"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                            : badge.color === "purple"
                              ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                              :badge.color === "green"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                              :badge.color === "yellow"
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                              : "bg-grey-100 text-grey-800 dark:bg-grey-900 dark:text-grey-200"
                        }`}
                      >
                        {badge.text}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
