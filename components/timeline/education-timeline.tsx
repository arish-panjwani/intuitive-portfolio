"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, ExternalLink } from "lucide-react"
import { trackClick } from "@/utils/trackClick"

interface EducationTimelineProps {
  education: Array<{
    degree: string
    institution: string
    location: string
    period: string
    status: string
    website?: string

  }>
  isOptimized: boolean
}

export function EducationTimeline({ education, isOptimized }: EducationTimelineProps) {
  const getEducationLogo = (institution: string) => {
    if (institution.includes("Loyalist")) {
      return "/images/logos/loyalist-college.png"
    }
    if (institution.includes("Pune")  || institution.includes("D. Y. Patil")) {
      return "/images/logos/dypatil.png"
    }
    return null
  }

  const getStatusInfo = (status: string) => {
    return status === "current"
      ? { label: "Current", color: "bg-green-500", textColor: "text-green-600" }
      : { label: "Alumni", color: "bg-blue-500", textColor: "text-blue-600" }
  }

    const handleInstitutionClick = (website?: string) => {
    if (website) {
      window.open(website, "_blank", "noopener,noreferrer")
    }
  }

const renderFocusAreas = (focus_areas: string[]) => (
  <div className="space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
    <div className="space-y-2">
      <h5 className="font-semibold text-gray-800 dark:text-gray-200">Focus Areas:</h5>
      <ul className="space-y-1 ml-4">
        {focus_areas?.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
)
  

  return (
    <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
      {education.map((edu, index) => {
        const isLeft = index % 2 === 0
        const logo = getEducationLogo(edu.institution)
        const statusInfo = getStatusInfo(edu.status)

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
              <div className={`grid lg:grid-cols-12 gap-0 ${isLeft ? "" : "lg:grid-flow-col-dense"}`}>
                {/* Logo Side (30-35% width) */}
                <motion.div
                  className={`lg:col-span-4 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/30 p-6 sm:p-8 flex flex-col items-center justify-center text-center border-r border-gray-100 dark:border-gray-700 ${
                    isLeft ? "lg:order-1" : "lg:order-2"
                  } ${edu.website ? "cursor-pointer" : ""}`}
                  whileHover={!isOptimized ? { scale: 1.02 } : {}}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => {
                  handleInstitutionClick(edu.website);
                  trackClick(`Institution: ${edu.institution}`, `click_institution_${edu.institution.replace(/\\s+/g, "_").toLowerCase()}`, "Education");
                  }
                  }
                >
                  {/* Logo */}
                  <div className="mb-4 sm:mb-6">
                    {logo ? (
                      <motion.img
                        src={logo || "/placeholder.svg"}
                        alt={edu.institution}
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain mx-auto bg-white rounded-full p-3 shadow-md"
                        whileHover={!isOptimized ? { scale: 1.15, rotate: -5 } : { scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    ) : (
                      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto shadow-md"></div>
                    )}
                  </div>

                  {/* Status Tag */}
                  <Badge className={`${statusInfo.color} text-white px-3 py-1 text-sm font-medium mb-3 sm:mb-4`}>
                    {statusInfo.label}
                  </Badge>

                  {/* Institution Info */}
                  <div className="space-y-2 text-sm sm:text-base">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 leading-tight flex items-center gap-2 justify-center">{edu.institution}
                    {edu.website && (
                      <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400" />
                      )}</h4>
                    <div className="flex items-center justify-center gap-1 text-gray-600 dark:text-gray-400">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="text-xs sm:text-sm">{edu.location}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-gray-600 dark:text-gray-400">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="text-xs sm:text-sm">{edu.period}</span>
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
                    {/* Degree Name (Prominent) */}
                    <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-3 sm:mb-4">
                      {edu.degree}
                    </CardTitle>

                    {/* Organization Details */}
                    <CardDescription className="space-y-2 text-base sm:text-lg">
                      <div className={`font-semibold ${statusInfo.textColor} dark:text-blue-400`}>
                        {edu.institution}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 flex items-center gap-2 text-sm sm:text-base">
                        <span>{edu.location}</span>
                        <span>•</span>
                        <span>{edu.period}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0">
                    {/* Status Badges */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                      {edu.status === "current" ? (
                        <>
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-3 py-1 text-sm">
                            Currently Pursuing
                          </Badge>
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-3 py-1 text-sm">
                            In Progress
                          </Badge>
                        </>
                      ) : (
                        <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 text-sm">
                          Completed
                        </Badge>
                      )}
                    </div>

                    {/* Optional Education Details */}
                    {edu.status === "current" && renderFocusAreas(edu?.focus_areas)}

                    {edu.status === "completed" && renderFocusAreas(edu?.focus_areas)}
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
