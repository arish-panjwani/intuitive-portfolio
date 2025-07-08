"use client"

import { motion } from "framer-motion"
import { CourseCarousel } from "./course-carousel"
import { SECTION_ANIMATIONS } from "@/constants/animations"

interface CoursesSectionProps {
  courses: Array<{
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
  }>
  isOptimized: boolean
}

export function CoursesSection({ courses, isOptimized }: CoursesSectionProps) {
  // Calculate summary stats
  const totalCourses = courses.length
  const activeCertifications = courses.filter((course) => {
    if (!course.expiration_date.month || !course.expiration_date.year) return true
    const expDate = new Date(`${course.expiration_date.month} 1, ${course.expiration_date.year}`)
    return expDate >= new Date()
  }).length

  const uniqueOrganizations = [...new Set(courses.map((course) => course.issuing_organization))].length
  const totalSkills = [...new Set(courses.flatMap((course) => course.skills))].length

  return (
    <section id="courses" className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto">
        <motion.div {...SECTION_ANIMATIONS} className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Courses & Certifications
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400">
            Continuous learning journey through professional development
          </p>
          {isOptimized && (
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mt-2">
              Scroll horizontally to explore all certifications
            </p>
          )}
        </motion.div>

        {/* Courses Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <CourseCarousel courses={courses} isOptimized={isOptimized} />
        </motion.div>

        {/* Courses Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">{totalCourses}</div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Total Courses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400">
                {activeCertifications}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Active Certs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400">
                {uniqueOrganizations}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Platforms</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-orange-600 dark:text-orange-400">{totalSkills}</div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Skills Gained</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
