"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, Award, Clock } from "lucide-react"

interface CourseCardProps {
  course: {
    name: string
    issuing_organization: string
    issue_date: {
      month: string
      year: string
    }
    expiration_date: {
      month: string | null
      year: string | null
    }
    credential_id: string | null
    credential_url: string | null
    skills: string[]
  }
  index: number
  isOptimized: boolean
}

export function CourseCard({ course, index, isOptimized }: CourseCardProps) {
  const getOrganizationColor = (org: string) => {
    const orgLower = org.toLowerCase()
    if (orgLower.includes("coursera")) return "from-blue-500 to-blue-600"
    if (orgLower.includes("aws") || orgLower.includes("amazon")) return "from-orange-500 to-orange-600"
    if (orgLower.includes("linkedin")) return "from-blue-600 to-blue-700"
    if (orgLower.includes("udemy")) return "from-purple-500 to-purple-600"
    if (orgLower.includes("google")) return "from-red-500 to-yellow-500"
    if (orgLower.includes("pluralsight")) return "from-pink-500 to-pink-600"
    if (orgLower.includes("edx")) return "from-blue-500 to-purple-500"
    if (orgLower.includes("ibm")) return "from-blue-600 to-blue-800"
    return "from-gray-500 to-gray-600"
  }

  const isExpired = () => {
    if (!course.expiration_date.month || !course.expiration_date.year) return false
    const expDate = new Date(`${course.expiration_date.month} 1, ${course.expiration_date.year}`)
    return expDate < new Date()
  }

  const formatDate = (month: string, year: string) => {
    return `${month} ${year}`
  }

  const fullCard = () => {
  return(
      <motion.div
      className="flex-shrink-0 w-80 sm:w-96 h-80 my-4"
      whileHover={!isOptimized ? { scale: 1.02, y: -5 } : {}}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="h-full bg-white dark:bg-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* Organization Header */}
        <div className={`h-2 bg-gradient-to-r ${getOrganizationColor(course.issuing_organization)}`} />

        <CardHeader className="pb-3 p-4 sm:p-6">
          <div className="flex items-start justify-between gap-3 mb-3">
            <motion.div
              className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${getOrganizationColor(course.issuing_organization)} text-white flex-shrink-0`}
              whileHover={!isOptimized ? { rotate: 5 } : {}}
              transition={{ duration: 0.3 }}
            >
              <Award className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.div>

            <div className="flex-1 min-w-0">
              <CardTitle className="text-sm sm:text-base md:text-lg font-bold text-gray-800 dark:text-gray-200 leading-tight mb-1">
                {course.name}
              </CardTitle>
              <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-semibold">
                {course.issuing_organization}
              </p>
            </div>
          </div>

          {/* Date Information */}
          <div className="space-y-2 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>Issued: {formatDate(course.issue_date.month, course.issue_date.year)}</span>
            </div>

            {course.expiration_date.month && course.expiration_date.year && (
              <div className="flex items-center gap-2">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className={isExpired() ? "text-red-500" : "text-gray-600 dark:text-gray-400"}>
                  {isExpired() ? "Expired: " : "Expires: "}
                  {formatDate(course.expiration_date.month, course.expiration_date.year)}
                </span>
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent className="p-4 sm:p-6 pt-0 space-y-4">
          {/* Skills */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Skills Gained:</h4>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {course.skills.slice(0, 4).map((skill) => (
                <motion.div key={skill} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Badge
                    variant="secondary"
                    className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors text-xs px-2 py-0.5"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
              {course.skills.length > 4 && (
                <Badge
                  variant="secondary"
                  className="bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400 text-xs px-2 py-0.5"
                >
                  +{course.skills.length - 4} more
                </Badge>
              )}
            </div>
          </div>

          {/* Credential Info */}
          {course.credential_id && (
            <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              <span className="font-medium">ID:</span> {course.credential_id}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>)
  }

  return (
  <a
  href={course.credential_url ?? "#"}
  target={course.credential_url ? "_blank" : undefined}
  rel={course.credential_url ? "noopener noreferrer" : undefined}
  className={course.credential_url ? "hover:cursor-pointer" : "pointer-events-none"}
>
  {fullCard()}
</a>)
}
