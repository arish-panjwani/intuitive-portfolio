"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, ExternalLink } from "lucide-react"

interface ExperienceTimelineProps {
  experience: Array<{
    title: string
    company: string
    location: string
    period: string
    type: string
    website?: string
    achievements: string[]
  }>
  isOptimized: boolean
}

export function ExperienceTimeline({ experience, isOptimized }: ExperienceTimelineProps) {
  const getCompanyLogo = (company: string) => {
    if (company.includes("Easy Platform")) {
      return "/images/logos/zype.png"
    }
    if (company.includes("Tradebulls")) {
      return "/images/logos/tradebulls.png"
    }
    if (company.includes("Impact Kitchen")) {
      return "/images/logos/impact-kitchen.png"
    }
    if (company.includes("Elections Ontario")) {
      return "/images/logos/elections-ontario.png"
    }
    return null
  }

  const getTypeInfo = (type: string) => {
    switch (type) {
      case "full-time":
        return { label: "Full Time", color: "bg-green-500", textColor: "text-green-600" }
      case "part-time":
        return { label: "Part Time", color: "bg-yellow-500", textColor: "text-yellow-600" }
      case "seasonal":
        return { label: "Seasonal", color: "bg-purple-500", textColor: "text-purple-600" }
      default:
        return { label: "Contract", color: "bg-blue-500", textColor: "text-blue-600" }
    }
  }

  const handleCompanyClick = (website?: string) => {
    if (website) {
      window.open(website, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
      {experience.map((exp, index) => {
        const isLeft = index % 2 === 0
        const logo = getCompanyLogo(exp.company)
        const typeInfo = getTypeInfo(exp.type)

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
              <div className={`grid lg:grid-cols-12 gap-0 ${isLeft ? "" : "lg:grid-flow-col-dense"}`}>
                {/* Logo Side (30-35% width) */}
                <motion.div
                  className={`lg:col-span-4 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/30 p-6 sm:p-8 flex flex-col items-center justify-center text-center border-r border-gray-100 dark:border-gray-700 ${
                    isLeft ? "lg:order-1" : "lg:order-2"
                  } ${exp.website ? "cursor-pointer" : ""}`}
                  whileHover={!isOptimized ? { scale: 1.02 } : {}}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => handleCompanyClick(exp.website)}
                >
                  {/* Logo */}
                  <div className="mb-4 sm:mb-6">
                    {logo ? (
                      <motion.img
                        src={logo || "/placeholder.svg"}
                        alt={exp.company}
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain mx-auto bg-white rounded-full p-3 shadow-md"
                        whileHover={!isOptimized ? { scale: 1.15, rotate: -5 } : { scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    ) : (
                      <motion.div
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto shadow-md"
                        whileHover={!isOptimized ? { scale: 1.15, rotate: -5 } : { scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    )}
                  </div>

                  {/* Employment Type Tag */}
                  <Badge className={`${typeInfo.color} text-white px-3 py-1 text-sm font-medium mb-3 sm:mb-4`}>
                    {typeInfo.label}
                  </Badge>

                  {/* Company Info */}
                  <div className="space-y-2 text-sm sm:text-base">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 leading-tight flex items-center gap-2 justify-center">
                      {exp.company}
                      {exp.website && (
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400" />
                      )}
                    </h4>
                    <div className="flex items-center justify-center gap-1 text-gray-600 dark:text-gray-400">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="text-xs sm:text-sm">{exp.location}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-gray-600 dark:text-gray-400">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="text-xs sm:text-sm">{exp.period}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Content Side (65-70% width) */}
                <motion.div
                  className={`lg:col-span-8 p-6 sm:p-8 md:p-10 flex flex-col justify-center ${
                    isLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                  whileHover={!isOptimized ? { x: isLeft ? 5 : -5 } : {}}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <CardHeader className="p-0 mb-4 sm:mb-6">
                    {/* Job Title (Prominent) */}
                    <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-3 sm:mb-4">
                      {exp.title}
                    </CardTitle>

                    {/* Company Details */}
                    <CardDescription className="space-y-2 text-base sm:text-lg">
                      <div className={`font-semibold ${typeInfo.textColor} dark:text-green-400`}>{exp.company}</div>
                      <div className="text-gray-600 dark:text-gray-400 flex items-center gap-2 text-sm sm:text-base">
                        <span>{exp.location}</span>
                        <span>•</span>
                        <span>{exp.period}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0">
                    {/* Status Badge */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                      <Badge
                        className={`px-3 py-1 text-sm ${
                          exp.type === "full-time"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : exp.type === "part-time"
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                              : "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                        }`}
                      >
                        {exp.type === "full-time"
                          ? "Full-Time Position"
                          : exp.type === "part-time"
                            ? "Part-Time Position"
                            : "Seasonal Role"}
                      </Badge>
                    </div>

                    {/* Key Achievements & Impact */}
                    <div className="space-y-4 sm:space-y-5">
                      <h5 className="font-semibold text-gray-800 dark:text-gray-200 text-base sm:text-lg">
                        Key Achievements & Impact
                      </h5>
                      <ul className="space-y-3 text-sm sm:text-base">
                        {exp.achievements.slice(0, 5).map((achievement, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}
